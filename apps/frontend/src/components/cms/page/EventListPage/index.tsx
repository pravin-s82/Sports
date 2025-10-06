import { type OptimizelyNextPage as CmsComponent } from "@remkoj/optimizely-cms-nextjs";
import { EventListPageDataFragmentDoc, type EventListPageDataFragment } from "@/gql/graphql";
import { getSdk } from "@/gql"
import { CmsContentArea } from "@remkoj/optimizely-cms-react/rsc";
/**
 * Event List Page
 * 
 */
export const EventListPagePage: CmsComponent<EventListPageDataFragment> = ({ data, ctx }) => {
    const {
        EventBody = { html: "" }
    } = data;

    return (<div>
            <div className="bg-secondary-gradient">
                <div className="container p-y-md">
                    <h1>{data.EventTitle}</h1>
                </div>
            </div>
            <div className="container p-y-md">
                {EventBody?.html && (
                    <span
                        dangerouslySetInnerHTML={{ __html: EventBody.html }}
                    ></span>
                )}                
            </div>
            <CmsContentArea
                    fieldName="MainContentArea"
                    items={data.EventMainContentArea}                    
                    ctx={ctx}
                />
        </div>
    );
};

EventListPagePage.displayName = "Event List Page (Page/EventListPage)"
EventListPagePage.getDataFragment = () => ['EventListPageData', EventListPageDataFragmentDoc]
EventListPagePage.getMetaData = async (contentLink, locale, client) => {
    const sdk = getSdk(client);
    // Add your metadata logic here
    return {}
}

export default EventListPagePage
