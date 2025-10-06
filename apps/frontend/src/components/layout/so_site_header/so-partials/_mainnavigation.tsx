import { type FunctionComponent, type ComponentProps } from "react";
import { CmsContentArea, type GenericContext } from "@remkoj/optimizely-cms-react/rsc";

export type SecondaryMenuProps = {
  utilityItems?: ComponentProps<typeof CmsContentArea>['items']
  className?: string
  ctx: GenericContext
}

export const MainNavigation : FunctionComponent<SecondaryMenuProps> = ({ utilityItems, className = "", ctx }) => {
  return (
    <ul className={`${className} lg:flex py-2 items-stretch justify-end relative gap-2 xl:gap-4`}>   
      <CmsContentArea items={ utilityItems } noWrapper itemWrapper={{ as: "li" }} ctx={ ctx } />  
      
    </ul>
  );
};

MainNavigation.displayName = "MainNavigation";

export default MainNavigation;