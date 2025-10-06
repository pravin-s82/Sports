import { type CmsComponent } from "@remkoj/optimizely-cms-react";
import { SoHeroDataFragmentDoc, type SoHeroDataFragment } from "@/gql/graphql";
import Link from "@shared/cms_link";

/**
 * Hero - Sports Orbit
 * 
 */
export const SoHeroComponent : CmsComponent<SoHeroDataFragment> = ({ data, children, ctx }) => {
    const componentName = 'Hero - Sports Orbit';
    const componentInfo = '';
    return (
      <div className="herobanner">
        <div className="header-primary-banner hidden-print hero-image-top"
             style={{ backgroundImage: `url('${ data.BackgroundImage.url.default }');` }}>
          <div className="container">
            <div className="row">
              <div className="col-lg-9">
                <h1 className="color-white font-weight-800 m-0">
                  { data.Heading }
                </h1>
                <div className="color-white pb-4">
                  { data.HeroTeaser }
                </div>
              </div>
              <div className="col-lg-3 pb-4 pb-lg-0 d-flex align-self-center justify-content-lg-end">
                <div className="btn-row">
                  <Link href={{ url: data.Link, text: "Learn the Rules" }} className="btn btn-primary" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

SoHeroComponent.displayName = "Hero - Sports Orbit (Component/SoHero)";
SoHeroComponent.getDataFragment = () => ['SoHeroData', SoHeroDataFragmentDoc];

export default SoHeroComponent;
