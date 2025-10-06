import { type CmsComponent } from "@remkoj/optimizely-cms-react";
import { CardWithIconDataFragmentDoc, type CardWithIconDataFragment } from "@/gql/graphql";
import clsx from "clsx";
/**
 * Card With Icon
 * 
 */
export const CardWithIconComponent : CmsComponent<CardWithIconDataFragment> = ({ data, children }) => {

    return <div className="no-underline d-block bg-gray-50 bg-grey-lightest-hover p-a-md pos-rel h-100">
    <div className="text-center p-b">
            <span className={clsx('color-p2 color-p2-hover text-huge d-block', data.Icon)}  aria-hidden="true"></span>
        <h3 className="mt-0">
            <a className="h4 m-t-0 m-b color-gray-dark link-before text-left no-underline d-block">
                {data.CardTitle}
            </a>
        </h3>
      <div
  className="color-gray-dark text-left"
  dangerouslySetInnerHTML={{ __html: data.Body?.html || "" }}
    ></div>
    </div>
</div>

}
CardWithIconComponent.displayName = "Card With Icon (Component/CardWithIcon)"
CardWithIconComponent.getDataFragment = () => ['CardWithIconData', CardWithIconDataFragmentDoc]

export default CardWithIconComponent
