import { type FunctionComponent, type ComponentProps } from "react";
import { CmsContentArea, type GenericContext } from "@remkoj/optimizely-cms-react/rsc";
import SiteSearch from "./_site-search";

export type SecondaryMenuProps = { 
  className?: string
  ctx: GenericContext
}

export const SecondaryMenu : FunctionComponent<SecondaryMenuProps> = ({ className = "", ctx }) => {
  return ( 
      <SiteSearch />    
  );
};

SecondaryMenu.displayName = "SecondaryMenu";

export default SecondaryMenu;