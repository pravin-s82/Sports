import { type CmsComponent } from "@remkoj/optimizely-cms-react";
import { RichText } from "@remkoj/optimizely-cms-react/rsc";
import { SoCardDataFragmentDoc, type SoCardDataFragment } from "@/gql/graphql";
import Image from "@/components/shared/cms_image";
import Link from "@/components/shared/cms_link";

/**
 * Card - Sports Orbit
 * A card for Sports Orbit
 */
export const SoCardComponent : CmsComponent<SoCardDataFragment> = ({ data, ctx }) => {
    return (
        <div className="card h-100 pos-rel">
          <Image
            className="card-img"
            width="600"
            height="250"
            src={ data.Image }
            alt=""
          />
        
          <div className="card-body d-block h-100 ">
            <h3 className="card-title">{ data.Heading }</h3>

            <div className="color-gray-dark text-left">
              <RichText text={ data.Teaser?.json } ctx={ctx} />
            </div>

            <Link href={{ url: data.Link, text: "Read More" }} className="mt-3 d-inline-block" />
          </div>
        </div>
    );
};

SoCardComponent.displayName = "Card - Sports Orbit (Component/SoCard)";
SoCardComponent.getDataFragment = () => ['SoCardData', SoCardDataFragmentDoc];

export default SoCardComponent;
