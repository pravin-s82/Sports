import { type OptimizelyNextPage as CmsComponent } from "@remkoj/optimizely-cms-nextjs";
import { VenueListDataFragmentDoc, type VenueListDataFragment } from "@/gql/graphql";
import { getSdk } from "@/gql"
import { CmsContentArea } from "@remkoj/optimizely-cms-react/rsc";

/**
 * Venue List Page
 * 
 */
export const VenueListPage : CmsComponent<VenueListDataFragment> = ({ data, ctx }) => {
  const {
       VenueBody  = { html: "" }
    } = data;

    return (<div>
                <div className="bg-secondary-gradient">
                    <div className="container p-y-md">
                        <h1>{data.VenueTitle}</h1>
                    </div>
                </div>
                <div className="container p-y-md">
                    {VenueBody?.html && (
                        <span
                            dangerouslySetInnerHTML={{ __html: VenueBody.html }}
                        ></span>
                    )}                
                </div>
                <CmsContentArea
                        fieldName="MainContentArea"
                        items={data.VenueMainContentArea}                    
                        ctx={ctx}
                    />
            </div>
        );
}
VenueListPage.displayName = "Venue List Page (Page/VenueList)"
VenueListPage.getDataFragment = () => ['VenueListData', VenueListDataFragmentDoc]
VenueListPage.getMetaData = async (contentLink, locale, client) => {
    const sdk = getSdk(client);
    // Add your metadata logic here
    return {}
}

export default VenueListPage