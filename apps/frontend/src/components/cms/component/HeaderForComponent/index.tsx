import { type CmsComponent } from "@remkoj/optimizely-cms-react";
import { HeaderForComponentDataFragmentDoc, type HeaderForComponentDataFragment } from "@/gql/graphql";

/**
 * Header For Component
 * 
 */
export const HeaderForComponentComponent : CmsComponent<HeaderForComponentDataFragment> = ({ data, children }) => {

    return (
        <div>
            <h2 className="mt-0"> {data.HeaderForComponent}</h2>
        </div>
    );
}
HeaderForComponentComponent.displayName = "Header For Component (Component/HeaderForComponent)"
HeaderForComponentComponent.getDataFragment = () => ['HeaderForComponentData', HeaderForComponentDataFragmentDoc]

export default HeaderForComponentComponent