import { type CmsComponent } from "@remkoj/optimizely-cms-react";
import { SoRowDataFragmentDoc, type SoRowDataFragment } from "@/gql/graphql";
import SoColumn from "@cms/component/SoColumn";
import clsx from "clsx";

/**
 * Row - Sports Orbit
 * 
 */
export const SoRowComponent : CmsComponent<SoRowDataFragment> = ({ data, ctx }) => {
  return (
    <div className={clsx('row', data.Modifiers)}>
      {data.Column?.map((content, contentIdx) => (
        <SoColumn key={ contentIdx } data={ content } ctx={ctx} />
      ))}
    </div>
  );
};
SoRowComponent.displayName = "Row - Sports Orbit (Component/SoRow)";
SoRowComponent.getDataFragment = () => ['SoRowData', SoRowDataFragmentDoc];

export default SoRowComponent;
