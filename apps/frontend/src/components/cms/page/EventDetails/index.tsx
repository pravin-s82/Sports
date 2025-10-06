import { type OptimizelyNextPage as CmsComponent } from "@remkoj/optimizely-cms-nextjs";
import { EventDetailsDataFragmentDoc, type EventDetailsDataFragment, type Locales } from "@/gql/graphql";
import { getSdk } from "@/gql";
import { localeToGraphLocale } from "@remkoj/optimizely-graph-client";
import { RichText } from "@remkoj/optimizely-cms-react/rsc";


export const EventDetailsPage: CmsComponent<EventDetailsDataFragment> = async ({ data, ctx }) => {
  const {
    Title,
    Description = { html: "" },
    StartDate,
    EndDate,
    PreviewText,
    PhoneNumber,
    SelectVenue: venueRef,
  } = data;
   
    let venueDetails;
    const venueRefItem = venueRef;
    if (venueRefItem?.key && ctx?.client) {
    const sdk = getSdk(ctx.client);

    const result = await sdk.GetVenueDetails({
        key: venueRefItem.key,
        locale: ctx.locale ? [localeToGraphLocale(ctx.locale) as Locales] : [],
    });

    venueDetails = result?.VenueDetails?.items?.[0];
    }

  return (
    <div>
      <div className="bg-secondary-gradient">
        <div className="container p-y-md">
          <h1>{Title}</h1>
        </div>
      </div>
      <div>
        <div className="container p-y-md">
          <p className="m-t-md">Start Date: <time dateTime={StartDate}>{new Date(StartDate).toLocaleString()}</time></p>
          <p className="m-t-md">End Date: <time dateTime={EndDate}>{new Date(EndDate).toLocaleString()}</time></p>
          <div> <p className="lead">{PreviewText}</p></div>
            <hr className="m-t-lg d-block"></hr>
            <p>
                    <span className="bold">Description: </span>
                    </p>
                    <div dangerouslySetInnerHTML={{ __html: Description?.html ?? "" }}></div> 
       
          <hr className="m-t-lg d-block"></hr>
                {venueDetails ? (
                <div>
                    <p><strong>Venue Name:</strong> {venueDetails.Name}</p>
                    <p><strong>Venue Address:</strong> {venueDetails.Address}</p>
                     <p><strong>Policy:</strong> <div  dangerouslySetInnerHTML={{ __html: removePolicyTitle(venueDetails.Policies?.html ?? "") }}></div></p>
                </div>
                ) : (
                <p>No venue selected</p>
                )}
          
          <p><strong>Call-in-number:</strong> {PhoneNumber}</p>
        </div>
      </div>
    </div>
  );
};
function removePolicyTitle(html: string): string {
  return html.replace(/<h2[^>]*>Policies:<\/h2>/i, '');
}
EventDetailsPage.displayName = "Event Details (Page/EventDetails)";
EventDetailsPage.getDataFragment = () => ['EventDetailsData', EventDetailsDataFragmentDoc];

export default EventDetailsPage
