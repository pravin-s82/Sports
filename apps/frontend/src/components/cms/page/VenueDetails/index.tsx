import { type OptimizelyNextPage as CmsComponent } from "@remkoj/optimizely-cms-nextjs";
import {
  VenueDetailsDataFragmentDoc,
  type VenueDetailsDataFragment,
  type Locales
} from "@/gql/graphql";
import { getSdk } from "@/gql";
import { localeToGraphLocale } from "@remkoj/optimizely-graph-client";

export const VenueDetailsPage: CmsComponent<VenueDetailsDataFragment> = async ({ data, ctx }) => {
  const {
    Name,
    Address,    
    Policies = { html: "" },
    _metadata
  } = data;

  const venueKey = _metadata?.key;
  let events = [];

  if (venueKey && ctx?.client) {
    const sdk = getSdk(ctx.client);
    const result = await sdk.GetEventsForVenue({
      venueKey,
      locale: ctx.locale ? [localeToGraphLocale(ctx.locale) as Locales] : [],
    });

    events = result?.EventDetails?.items ?? [];
    console.log("Events for Venue:", events);
  }

  return (
    <div>
      {/* Header */}
      <div className="bg-secondary-gradient">
        <div className="container p-y-md">
          <h1>{Name}</h1>
        </div>
      </div>
      {/* Content */}
      <div className="container p-y-md">        {/* Venue Policies */}
        {Policies?.html && (
          <section className="venue-policies">
            <h2 className="mt-0">Policies</h2>
            <div dangerouslySetInnerHTML={{ __html: Policies.html }} />
          </section>
        )}

        {/* Events at this Venue */}
        {events.length > 0 && (
          <>
            <hr className="m-t-lg" />
            <section className="venue-events">
                 {/* Venue Address and Icon */}
                <div className="m-b-md">
                <span className="ca-gov-icon-road-pin" aria-hidden="true"></span>
                <p className="d-inline m-l-sm">{Address}</p>
                </div>
              <h2>Events at this Venue</h2>
              <ul className="list-unstyled">
                {events.map((event, idx) => (
                  <li key={idx} className="m-b-md">
                <h4 className="mt-0"><a href={`${event._metadata.url.default}`}> {event.Title}</a> </h4>  
                     <p>{event.PreviewText}</p>
                     <p> Start:  {new Date(event.StartDate).toLocaleDateString()} </p>
                     <p>End:  {new Date(event.EndDate).toLocaleDateString()} </p>
                  </li>
                ))}
              </ul>
            </section>
          </>
        )}
      </div>
    </div>
  );
};

VenueDetailsPage.displayName = "Venue Details (Page/VenueDetails)";
VenueDetailsPage.getDataFragment = () => ["VenueDetailsData", VenueDetailsDataFragmentDoc];
VenueDetailsPage.getMetaData = async (contentLink, locale, client) => {
  const sdk = getSdk(client);
  return {};
};

export default VenueDetailsPage;
