import { type CmsComponent } from "@remkoj/optimizely-cms-react";
import { BrandingDataFragmentDoc, type BrandingDataFragment } from "@/gql/graphql";
import Image from "@/components/shared/cms_image";
/**
 * Branding
 * 
 */
export const BrandingComponent : CmsComponent<BrandingDataFragment> = ({ data }) => {
   
    return <div className="logo-assets">    
    <a href="/" lang="en">
         <Image
                   className="logo-img"
                   width="600"
                   height="400"
                   src={data.SOLogo}
                   alt=""
                 />   
                 </a>    
      
    </div>
}
BrandingComponent.displayName = "Branding (Component/Branding)"
BrandingComponent.getDataFragment = () => ['BrandingData', BrandingDataFragmentDoc]

export default BrandingComponent