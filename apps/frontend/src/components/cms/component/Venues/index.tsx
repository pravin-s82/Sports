import { type CmsComponent } from "@remkoj/optimizely-cms-react";
import { VenuesDataFragmentDoc, type VenuesDataFragment, type Locales } from "@/gql/graphql";
import { getSdk } from "@/gql";
import { localeToGraphLocale } from "@remkoj/optimizely-graph-client";
/**
 * Venues
 * 
 */
export const VenuesComponent : CmsComponent<VenuesDataFragment> =  async ({ data, ctx }) => {
  const {
    VenueTitle,   
  } = data;

  if (!ctx?.client) {
  console.warn("GraphQL context not available.");
  return null; // or return fallback UI
}
 const sdk = getSdk(ctx.client);

  // Fetch all events (filtered later by StartDate)
  const result = await sdk.GetAllVenue({
    locale: ctx.locale ? [localeToGraphLocale(ctx.locale) as Locales] : [],
  });

  // Get current date and filter future events
  const now = new Date();
  const allVenues = (result?.VenueDetails?.items ?? []);

  return (
<div className="container p-y-md">
  <section className="events-list">
    <h2 className="mt-0">Featured Venues</h2>
    {allVenues.length > 0 ? (
      allVenues.map((venue, idx) => (
        <article key={idx}>
          <hr className="m-y-md" />
          <h3 className="lead font-weight-700">
            <a href={venue?._metadata?.url?.default ?? "#"} aria-disabled="true">
              {venue?.Name}
            </a>
          </h3>      
       <span className="ca-gov-icon-road-pin "></span>
       <span className="font-weight-500">{venue?.Address}</span>
       <br></br>
        </article>
      ))
    ) : (
      <p>No upcoming events available at this time.</p>
    )}
  </section>
</div>

  );
};
VenuesComponent.displayName = "Venues (Component/Venues)"
VenuesComponent.getDataFragment = () => ['VenuesData', VenuesDataFragmentDoc]

export default VenuesComponent