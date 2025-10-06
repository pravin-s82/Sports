import { type CmsComponent } from "@remkoj/optimizely-cms-react";
import { HeaderMainNavigationDataFragmentDoc, type HeaderMainNavigationDataFragment,  LinkItemDataFragmentDoc, LinkDataFragmentDoc } from "@/gql/graphql";
import { CmsEditable } from "@remkoj/optimizely-cms-react/rsc";
import { getFragmentData } from "@gql";
import Link from "./_link";
/**
 * Header Main Navigation-Sports Orbit
 * 
 */
export const HeaderMainNavigationComponent : CmsComponent<HeaderMainNavigationDataFragment> = ({  data: {  MenuLink: links }, ctx}) => {    
    return <nav id="navigation" className="main-navigation dropdown nav" data-multiselectable="false" data-nav-id="36o3n8nobb">
      <CmsEditable as="ul" className="top-level-nav" cmsFieldName="MenuLink" ctx={ctx}>
                { (links || []).map(link => {
                    const linkData = getFragmentData(LinkItemDataFragmentDoc, link)
                    const linkUrl = getFragmentData(LinkDataFragmentDoc, linkData?.url)
                    if (!(linkData && linkUrl)) return null
                    const linkKey = (linkData.text ?? '')+'::'+(linkUrl.default)
                    return <li key={ linkKey } className="nav-item">
                        <Link className="first-level-link" href={ linkUrl } title={ linkData.title ?? undefined } target={ linkData.target ?? undefined}>{ linkData.text ?? linkData.title ?? 'Unnamed link'}</Link>
                    </li>
                  
                }) }
            </CmsEditable>
</nav>
}
HeaderMainNavigationComponent.displayName = "Header Main Navigation-Sports Orbit (Component/HeaderMainNavigation)"
HeaderMainNavigationComponent.getDataFragment = () => ['HeaderMainNavigationData', HeaderMainNavigationDataFragmentDoc]

export default HeaderMainNavigationComponent