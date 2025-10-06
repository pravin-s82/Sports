import { type CmsComponent } from "@remkoj/optimizely-cms-react";
import {
  UpcomingEventsDataFragmentDoc,
  type UpcomingEventsDataFragment,
  type Locales
} from "@/gql/graphql";
import { getSdk } from "@/gql";
import { localeToGraphLocale } from "@remkoj/optimizely-graph-client";

/**
 * Upcoming Events
 * Displays a list of future events with title, dates, preview, and links.
 */
export const UpcomingEventsComponent: CmsComponent<UpcomingEventsDataFragment> =  async ({ data, ctx }) => {
  const {
    UpcomingEventTitle
  } = data;

  if (!ctx?.client) {
  console.warn("GraphQL context not available.");
  return null; // or return fallback UI
}
 const sdk = getSdk(ctx.client);

  // Fetch all events (filtered later by StartDate)
  const result = await sdk.GetAllEvents({
    locale: ctx.locale ? [localeToGraphLocale(ctx.locale) as Locales] : [],
  });

  // Get current date and filter future events
  const now = new Date();
  const upcomingEvents = (result?.EventDetails?.items ?? []).filter(event =>
    new Date(event?.StartDate) > now
  );

  return (
<div className="container p-y-md">
  <section className="events-list">
    <h2 className="mt-0">{UpcomingEventTitle}</h2>

    {upcomingEvents.length > 0 ? (
      upcomingEvents.map((event, idx) => (
        <article key={idx}>
          <hr className="m-y-md" />

          <h3 className="lead font-weight-700">
            <a href={event?._metadata?.url?.default ?? "#"} aria-disabled="true">
              {event?.Title}
            </a>
          </h3>

          <div>
            <p>{event?.PreviewText}</p>
          </div>

          <p>
            Start:{" "}
            <time dateTime={event?.StartDate}>
              {new Date(event?.StartDate).toLocaleString(undefined, {
                weekday: "short",
                day: "numeric",
                month: "short",
                year: "numeric",
                hour: "numeric",
                minute: "2-digit",
              })}
            </time>
          </p>

          <p>
            End:{" "}
            <time dateTime={event?.EndDate}>
              {new Date(event?.EndDate).toLocaleString(undefined, {
                weekday: "short",
                day: "numeric",
                month: "short",
                year: "numeric",
                hour: "numeric",
                minute: "2-digit",
              })}
            </time>
          </p>

          {event?.SelectVenue?.url?.default && (
            <>
              <span className="ca-gov-icon-road-pin" />{" "}
              <a href={event?.SelectVenue.url.default} target="_blank" rel="noopener noreferrer">
                {formatVenueNameFromUrl(event.SelectVenue.url.default)}
              </a>
              <br />
            </>
          )}

          {event?.PhoneNumber && (
            <span>
              <strong>Call-in-number: </strong>
              {event?.PhoneNumber}
            </span>
          )}
        </article>
      ))
    ) : (
      <p>No upcoming events available at this time.</p>
    )}
  </section>
</div>

  );
};
function formatVenueNameFromUrl(url: string): string {
  const slug = url.replace(/^\/venues\/|\/$/g, ""); // remove leading and trailing path
  return slug
    .split("-")
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}
UpcomingEventsComponent.displayName = "Upcoming Events (Component/UpcomingEvents)";
UpcomingEventsComponent.getDataFragment = () => ["UpcomingEventsData", UpcomingEventsDataFragmentDoc];

export default UpcomingEventsComponent;
