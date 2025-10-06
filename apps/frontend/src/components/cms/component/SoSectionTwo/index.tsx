import { type CmsComponent } from "@remkoj/optimizely-cms-react";
import { CmsContentArea } from "@remkoj/optimizely-cms-react/rsc";
import { SoSectionTwoDataFragmentDoc, type SoSectionTwoDataFragment } from "@/gql/graphql";
import clsx from "clsx";

/**
 * Section Two - Sports Orbit
 * 
 */
export const SoSectionTwoComponent : CmsComponent<SoSectionTwoDataFragment> = ({ data, ctx }) => {
  return (
    <div className={clsx('section', data.Modifiers)}>
      <div className="container">
        <CmsContentArea fieldName="Content" items={data.Content} className="w-100" ctx={ctx} />
      </div>
    </div>
  );
};
SoSectionTwoComponent.displayName = "Section Two - Sports Orbit (Component/SoSectionTwo)";
SoSectionTwoComponent.getDataFragment = () => ['SoSectionTwoData', SoSectionTwoDataFragmentDoc];

export default SoSectionTwoComponent;
