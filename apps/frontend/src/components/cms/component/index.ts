// Auto generated dictionary
// @not-modified => When this line is removed, the "force" parameter of the CLI tool is required to overwrite this file
import { type ComponentTypeDictionary } from "@remkoj/optimizely-cms-react";
import VideoElementComponent from "./VideoElement";
import VenuesComponent from "./Venues";
import UpcomingEventsComponent from "./UpcomingEvents";
import TextBlockComponent from "./TextBlock";
import TestimonialElementComponent from "./TestimonialElement";
import SoSectionTwoComponent from "./SoSectionTwo";
import SoSectionComponent from "./SoSection";
import SoRowComponent from "./SoRow";
import SoHeroComponent from "./SoHero";
import SoFooterComponent from "./SoFooter";
import SoColumnComponent from "./SoColumn";
import SoCardComponent from "./SoCard";
import RichTextElementComponent from "./RichTextElement";
import QuoteBlockComponent from "./QuoteBlock";
import ParagraphElementComponent from "./ParagraphElement";
import PageSeoSettingsComponent from "./PageSeoSettings";
import OdpEmbedBlockComponent from "./OdpEmbedBlock";
import MoblieNavComponent from "./MoblieNav";
import MenuNavigationBlockComponent from "./MenuNavigationBlock";
import MegaMenuGroupBlockMobileComponent from "./MegaMenuGroupBlock/mobile";
import MegaMenuGroupBlockComponent from "./MegaMenuGroupBlock";
import LayoutSettingsBlockComponent from "./LayoutSettingsBlock";
import ImageElementComponent from "./ImageElement";
import HeroBlockComponent from "./HeroBlock";
import HeadingElementComponent from "./HeadingElement";
import HeaderMainNavigationComponent from "./HeaderMainNavigation";
import HeaderForComponentComponent from "./HeaderForComponent";
import GlobalHeaderComponent from "./GlobalHeader";
import CTAElementComponent from "./CTAElement";
import ContinueReadingComponentComponent from "./ContinueReadingComponent";
import ContentRecsElementComponent from "./ContentRecsElement";
import CarouselBlockComponent from "./CarouselBlock";
import CardWithIconComponent from "./CardWithIcon";
import ButtonBlockComponent from "./ButtonBlock";
import BreadcrumbsBreadcrumbComponent from "./Breadcrumbs/Breadcrumb";
import BrandingComponent from "./Branding";
import ArticleListElementComponent from "./ArticleListElement";
import ArticleListElementLoader from "./ArticleListElement/loading";
import ComponentPageFactory from "./Page";

// Prefix entries - if needed
prefixDictionaryEntries(ComponentPageFactory, "Page");

// Build dictionary
export const ComponentFactory : ComponentTypeDictionary = [
    { 
        type: "VideoElement", 
        component: VideoElementComponent 
    },
    { 
        type: "Venues", 
        component: VenuesComponent 
    },
    { 
        type: "UpcomingEvents", 
        component: UpcomingEventsComponent 
    },
    { 
        type: "TextBlock", 
        component: TextBlockComponent 
    },
    { 
        type: "TestimonialElement", 
        component: TestimonialElementComponent 
    },
    { 
        type: "SoSectionTwo", 
        component: SoSectionTwoComponent 
    },
    { 
        type: "SoSection", 
        component: SoSectionComponent 
    },
    { 
        type: "SoRow", 
        component: SoRowComponent 
    },
    { 
        type: "SoHero", 
        component: SoHeroComponent 
    },
    { 
        type: "SoFooter", 
        component: SoFooterComponent 
    },
    { 
        type: "SoColumn", 
        component: SoColumnComponent 
    },
    { 
        type: "SoCard", 
        component: SoCardComponent 
    },
    { 
        type: "RichTextElement", 
        component: RichTextElementComponent 
    },
    { 
        type: "QuoteBlock", 
        component: QuoteBlockComponent 
    },
    { 
        type: "ParagraphElement", 
        component: ParagraphElementComponent 
    },
    { 
        type: "PageSeoSettings", 
        component: PageSeoSettingsComponent 
    },
    { 
        type: "OdpEmbedBlock", 
        component: OdpEmbedBlockComponent 
    },
    { 
        type: "MoblieNav", 
        component: MoblieNavComponent 
    },
    { 
        type: "MenuNavigationBlock", 
        component: MenuNavigationBlockComponent 
    },
    { 
        type: "MegaMenuGroupBlock/mobile", 
        component: MegaMenuGroupBlockMobileComponent 
    },
    { 
        type: "MegaMenuGroupBlock", 
        component: MegaMenuGroupBlockComponent 
    },
    { 
        type: "LayoutSettingsBlock", 
        component: LayoutSettingsBlockComponent 
    },
    { 
        type: "ImageElement", 
        component: ImageElementComponent 
    },
    { 
        type: "HeroBlock", 
        component: HeroBlockComponent 
    },
    { 
        type: "HeadingElement", 
        component: HeadingElementComponent 
    },
    { 
        type: "HeaderMainNavigation", 
        component: HeaderMainNavigationComponent 
    },
    { 
        type: "HeaderForComponent", 
        component: HeaderForComponentComponent 
    },
    { 
        type: "GlobalHeader", 
        component: GlobalHeaderComponent 
    },
    { 
        type: "CTAElement", 
        component: CTAElementComponent 
    },
    { 
        type: "ContinueReadingComponent", 
        component: ContinueReadingComponentComponent 
    },
    { 
        type: "ContentRecsElement", 
        component: ContentRecsElementComponent 
    },
    { 
        type: "CarouselBlock", 
        component: CarouselBlockComponent 
    },
    { 
        type: "CardWithIcon", 
        component: CardWithIconComponent 
    },
    { 
        type: "ButtonBlock", 
        component: ButtonBlockComponent 
    },
    { 
        type: "Breadcrumbs/Breadcrumb", 
        component: BreadcrumbsBreadcrumbComponent 
    },
    { 
        type: "Branding", 
        component: BrandingComponent 
    },
    { 
        type: "ArticleListElement", 
        component: ArticleListElementComponent,
        useSuspense: true,
        loader: ArticleListElementLoader
    },
    ...ComponentPageFactory
];

// Export dictionary
export default ComponentFactory;

// Helper functions
function prefixDictionaryEntries(list: ComponentTypeDictionary, prefix: string) : ComponentTypeDictionary
{
    list.forEach((component, idx, dictionary) => {
        dictionary[idx].type = typeof component.type == 'string' ? prefix + "/" + component.type : [ prefix, ...component.type ]
    });
    return list;
}
