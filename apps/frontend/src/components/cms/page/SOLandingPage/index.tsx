import { type OptimizelyNextPage as CmsComponent } from "@remkoj/optimizely-cms-nextjs";
import {type Locales, SOLandingPageDataFragmentDoc, type SOLandingPageDataFragment } from "@/gql/graphql";
import { getSdk } from "@/gql"
import { CmsContentArea } from "@remkoj/optimizely-cms-react/rsc";
import { localeToGraphLocale } from "@remkoj/optimizely-graph-client";
import { type Metadata } from "next";

/**
 * SOLandingPage
 * 
 */
export const SOLandingPagePage : CmsComponent<SOLandingPageDataFragment> = ({ data, ctx }) => {
    
    const {    
    LandingPageTitle = "",
   
    LandingDescription = { html: "" }
  } = data;
    return <div>

      <div className="landing-page">
         <div className="bg-secondary-gradient">
        <div className="container p-y-md">
            <nav aria-label="Breadcrumb" className="breadcrumbs">
    <ol>
        <li><a href="/" title="Home page">Home</a></li>
                        <li>
                    <a href="/venues/" title="">Venues</a>
                </li>
                <li className="active">Field of Champions</li>

    </ol>
</nav>         
<h1>{LandingPageTitle}</h1>
        </div>        
        </div>
        <div className="container p-y-md">
         {LandingDescription && LandingDescription.html && (
          <span
            
            dangerouslySetInnerHTML={{ __html: LandingDescription.html }}
          ></span>
        )}
         <CmsContentArea fieldName="MainContentArea" items={data.MainContentArea} className="w-full" ctx={ctx} />
         </div>
         </div>         
       
        </div>
  
}
SOLandingPagePage.displayName = "SOLandingPage (Page/SOLandingPage)"
SOLandingPagePage.getDataFragment = () => ['SOLandingPageData', SOLandingPageDataFragmentDoc]
SOLandingPagePage.getMetaData = async (contentLink, locale, client) => {
    const sdk = getSdk(client);
      const result = await sdk.getLandingPageMetaData({ ...contentLink, locale: locale ? localeToGraphLocale(locale) as Locales : null })
      const matchingPosts = (result.LandingPage?.pages || []).filter(isNotNullOrUndefined)
      if (matchingPosts.length != 1)
    return {}
 const cmsManagedData = matchingPosts[0]
  const meta : WithPropertySet<Metadata, 'openGraph'> = {
    title: cmsManagedData.SeoSettings?.MetaTitle ?? cmsManagedData._metadata?.displayName,
    description: cmsManagedData.SeoSettings?.MetaDescription,
    metadataBase: tryToUrl(cmsManagedData?._metadata?.url?.base),
    openGraph: {
      title: cmsManagedData.SeoSettings?.MetaTitle ?? cmsManagedData._metadata?.displayName ?? undefined,
      description: cmsManagedData.SeoSettings?.MetaDescription ?? undefined,
    },
    other: {
      "idio:content-type": "Landing Page"
    }
  }
   
    return {}
}
type WithPropertySet<T, K extends keyof T> = Omit<T, K> & { [P in K] -?: NonNullable<Required<T>[P]> }

function isNotNullOrUndefined<T>(toTest?: T | null | undefined): toTest is T
{
  return toTest ? true : false
}
function tryToUrl(toConvert: string | null | undefined)
{
    if (!toConvert)
        return undefined
    try {
        return new URL(toConvert)
    } catch {
        return undefined
    }
}

export default SOLandingPagePage