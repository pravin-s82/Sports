import { type CmsComponent } from "@remkoj/optimizely-cms-react";
import { SoSectionDataFragmentDoc, type SoSectionDataFragment } from "@/gql/graphql";
import clsx from "clsx";
import { CmsContentArea } from "@remkoj/optimizely-cms-react/rsc";
/**
 * Section - Sports Orbit
 *
 */
export const SoSectionComponent : CmsComponent<SoSectionDataFragment> = ({ data, ctx }) => {
  return (
    <div className={clsx('section', data.Modifiers)}>
      <div className="container">
        {data.Row?.map((row, rowIdx) => (
          <div key={ rowIdx } className={ clsx('row', row?.Modifiers) }>
            {row.Column?.map((column, colIdx) => (
              <div key={ colIdx } className={ clsx('col', column?.ColumnClasses) }>
                <CmsContentArea fieldName="ColumnContent" items={column.ColumnContent} className="d-flex h-100" ctx={ctx} />
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
};

SoSectionComponent.displayName = "Section - Sports Orbit (Component/SoSection)";
SoSectionComponent.getDataFragment = () => ['SoSectionData', SoSectionDataFragmentDoc];

export default SoSectionComponent;
