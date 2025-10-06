import type * as Schema from "./graphql";
import type { GraphQLClient, RequestOptions } from 'graphql-request';
import gql from 'graphql-tag';
type GraphQLClientRequestHeaders = RequestOptions['requestHeaders'];
export const LinkDataFragmentDoc = gql`
    fragment LinkData on ContentUrl {
  base
  default
}
    `;
export const ReferenceDataFragmentDoc = gql`
    fragment ReferenceData on ContentReference {
  key
  url {
    ...LinkData
  }
}
    `;
export const PageSeoSettingsPropertyDataFragmentDoc = gql`
    fragment PageSeoSettingsPropertyData on PageSeoSettingsProperty {
  MetaTitle
  MetaDescription
  MetaKeywords
  SharingImage {
    ...ReferenceData
  }
  GraphType
}
    `;
export const CompositionNodeDataFragmentDoc = gql`
    fragment CompositionNodeData on ICompositionNode {
  name: displayName
  layoutType: nodeType
  type
  key
  template: displayTemplateKey
  settings: displaySettings {
    key
    value
  }
}
    `;
export const IContentInfoFragmentDoc = gql`
    fragment IContentInfo on IContentMetadata {
  key
  locale
  types
  displayName
  version
  url {
    ...LinkData
  }
}
    `;
export const IContentDataFragmentDoc = gql`
    fragment IContentData on _IContent {
  _metadata {
    ...IContentInfo
  }
  _type: __typename
}
    `;
export const BlockDataFragmentDoc = gql`
    fragment BlockData on _IComponent {
  ...IContentData
}
    `;
export const IElementDataFragmentDoc = gql`
    fragment IElementData on _IComponent {
  _metadata {
    ...IContentInfo
  }
  _type: __typename
}
    `;
export const ElementDataFragmentDoc = gql`
    fragment ElementData on _IComponent {
  ...IElementData
}
    `;
export const ArticleListElementDataFragmentDoc = gql`
    fragment ArticleListElementData on ArticleListElement {
  articleListCount
  topics
}
    `;
export const BrandingDataFragmentDoc = gql`
    fragment BrandingData on Branding {
  SOLogo {
    ...ReferenceData
  }
}
    `;
export const ButtonBlockDataFragmentDoc = gql`
    fragment ButtonBlockData on ButtonBlock {
  children: ButtonText
  url: ButtonUrl {
    ...LinkData
  }
  className: ButtonClass
  buttonType: ButtonType
  buttonVariant: ButtonVariant
}
    `;
export const CTAElementDataFragmentDoc = gql`
    fragment CTAElementData on CTAElement {
  cta_text: Text
  cta_link: Link {
    ...LinkData
  }
}
    `;
export const CardWithIconDataFragmentDoc = gql`
    fragment CardWithIconData on CardWithIcon {
  CardTitle
  Icon
  Body {
    json
    html
  }
}
    `;
export const IContentListItemFragmentDoc = gql`
    fragment IContentListItem on _IContent {
  ...IContentData
}
    `;
export const ImageMediaComponentDataFragmentDoc = gql`
    fragment ImageMediaComponentData on ImageMedia {
  alt: AltText
  meta: _metadata {
    url {
      default
    }
    name: displayName
  }
}
    `;
export const VideoMediaComponentDataFragmentDoc = gql`
    fragment VideoMediaComponentData on VideoMedia {
  meta: _metadata {
    url {
      default
    }
    name: displayName
  }
}
    `;
export const ContentRecsElementDataFragmentDoc = gql`
    fragment ContentRecsElementData on ContentRecsElement {
  ElementDeliveryApiKey
  ElementRecommendationCount
}
    `;
export const GlobalHeaderDataFragmentDoc = gql`
    fragment GlobalHeaderData on GlobalHeader {
  MainMenu {
    ...IContentListItem
    ...ImageMediaComponentData
    ...VideoMediaComponentData
  }
  SiteLogo {
    ...IContentListItem
    ...ImageMediaComponentData
    ...VideoMediaComponentData
  }
}
    `;
export const HeaderForComponentDataFragmentDoc = gql`
    fragment HeaderForComponentData on HeaderForComponent {
  HeaderForComponent
}
    `;
export const LinkItemDataFragmentDoc = gql`
    fragment LinkItemData on Link {
  title
  text
  target
  url {
    ...LinkData
  }
}
    `;
export const HeaderMainNavigationDataFragmentDoc = gql`
    fragment HeaderMainNavigationData on HeaderMainNavigation {
  MenuLink {
    ...LinkItemData
  }
}
    `;
export const HeadingElementDataFragmentDoc = gql`
    fragment HeadingElementData on HeadingElement {
  headingText
}
    `;
export const ButtonBlockPropertyDataFragmentDoc = gql`
    fragment ButtonBlockPropertyData on ButtonBlockProperty {
  children: ButtonText
  url: ButtonUrl {
    ...LinkData
  }
  className: ButtonClass
  buttonType: ButtonType
  buttonVariant: ButtonVariant
}
    `;
export const HeroBlockDataFragmentDoc = gql`
    fragment HeroBlockData on HeroBlock {
  heroImage: HeroImage {
    ...ReferenceData
  }
  eyebrow: Eyebrow
  heroHeading: Heading
  heroSubheading: SubHeading
  heroDescription: Description {
    json
    html
  }
  heroColor: HeroColor
  heroButton: HeroButton {
    ...ButtonBlockPropertyData
  }
}
    `;
export const ImageElementDataFragmentDoc = gql`
    fragment ImageElementData on ImageElement {
  altText
  imageLink {
    ...ReferenceData
  }
}
    `;
export const LayoutSettingsBlockDataFragmentDoc = gql`
    fragment LayoutSettingsBlockData on LayoutSettingsBlock {
  mainMenu {
    ...IContentListItem
    ...ImageMediaComponentData
    ...VideoMediaComponentData
  }
  contactInfoHeading
  serviceButtons {
    ...IContentListItem
    ...ImageMediaComponentData
    ...VideoMediaComponentData
  }
  contactInfo {
    json
    html
  }
  footerMenus {
    ...IContentListItem
    ...ImageMediaComponentData
    ...VideoMediaComponentData
  }
  copyright
  legalLinks {
    ...LinkItemData
  }
  appIdentifiers
}
    `;
export const MenuNavigationBlockDataFragmentDoc = gql`
    fragment MenuNavigationBlockData on MenuNavigationBlock {
  _metadata {
    displayName
  }
  MenuNavigationHeading
  NavigationLinks {
    ...LinkItemData
  }
}
    `;
export const BlogPostPageMenuBlockFragmentDoc = gql`
    fragment BlogPostPageMenuBlock on BlogPostPage {
  meta: _metadata {
    published
    url {
      ...LinkData
    }
  }
  topics: Topic
  heading: Heading
  author: ArticleAuthor
  image: BlogPostPromoImage {
    ...ReferenceData
  }
  sharing: SeoSettings {
    description: MetaDescription
    image: SharingImage {
      ...ReferenceData
    }
  }
}
    `;
export const MegaMenuGroupBlockDataFragmentDoc = gql`
    fragment MegaMenuGroupBlockData on MegaMenuGroupBlock {
  _metadata {
    displayName
  }
  MenuMenuHeading
  MegaMenuUrl {
    ...LinkData
  }
  MegaMenuContentArea {
    ...IContentData
    ...MenuNavigationBlockData
    ...BlogPostPageMenuBlock
  }
}
    `;
export const MoblieNavDataFragmentDoc = gql`
    fragment MoblieNavData on MoblieNav {
  empty: _metadata {
    key
  }
}
    `;
export const OdpEmbedBlockDataFragmentDoc = gql`
    fragment OdpEmbedBlockData on OdpEmbedBlock {
  ContentId
}
    `;
export const PageSeoSettingsDataFragmentDoc = gql`
    fragment PageSeoSettingsData on PageSeoSettings {
  MetaTitle
  MetaDescription
  MetaKeywords
  SharingImage {
    ...ReferenceData
  }
  GraphType
}
    `;
export const ParagraphElementDataFragmentDoc = gql`
    fragment ParagraphElementData on ParagraphElement {
  text {
    json
  }
}
    `;
export const QuoteBlockDataFragmentDoc = gql`
    fragment QuoteBlockData on QuoteBlock {
  quote: QuoteText
  color: QuoteColor
  active: QuoteActive
  name: QuoteProfileName
  profilePicture: QuoteProfilePicture {
    ...ReferenceData
  }
  location: QuoteProfileLocation
}
    `;
export const RichTextElementDataFragmentDoc = gql`
    fragment RichTextElementData on RichTextElement {
  text {
    json
    html
  }
}
    `;
export const SoCardDataFragmentDoc = gql`
    fragment SoCardData on SoCard {
  Image {
    ...ReferenceData
  }
  Heading
  Teaser {
    json
    html
  }
  Link {
    ...LinkData
  }
}
    `;
export const SoFooterDataFragmentDoc = gql`
    fragment SoFooterData on SoFooter {
  ColumnTextOne {
    json
    html
  }
  ColumnTextTwo {
    json
    html
  }
  ColumnTextThree {
    json
    html
  }
}
    `;
export const SoHeroDataFragmentDoc = gql`
    fragment SoHeroData on SoHero {
  BackgroundImage {
    ...ReferenceData
  }
  Heading
  HeroTeaser
  Link {
    ...LinkData
  }
}
    `;
export const SoRowPropertyDataFragmentDoc = gql`
    fragment SoRowPropertyData on SoRowProperty {
  Modifiers
  Column {
    ...SoColumnPropertyData
  }
}
    `;
export const SoSectionDataFragmentDoc = gql`
    fragment SoSectionData on SoSection {
  Modifiers
  Row {
    ...SoRowPropertyData
  }
}
    `;
export const TestimonialElementDataFragmentDoc = gql`
    fragment TestimonialElementData on TestimonialElement {
  customerName
  customerLocation
  customerImage {
    ...ReferenceData
  }
  referenceTitle
  referenceText {
    json
  }
}
    `;
export const TextBlockDataFragmentDoc = gql`
    fragment TextBlockData on TextBlock {
  overline: TextBlockOverline
  headingSize: TextBlockHeadingSize
  heading: TextBlockHeading
  description: TextBlockDescription {
    json
    html
  }
  center: TextCenter
  width: TextBlockWidth
  className: TextClassName
}
    `;
export const UpcomingEventsDataFragmentDoc = gql`
    fragment UpcomingEventsData on UpcomingEvents {
  UpcomingEventTitle
  EventListRoot {
    ...ReferenceData
  }
}
    `;
export const VenuesDataFragmentDoc = gql`
    fragment VenuesData on Venues {
  VenueTitle
  VenueListRoot {
    ...IContentListItem
    ...ImageMediaComponentData
    ...VideoMediaComponentData
  }
}
    `;
export const VideoElementDataFragmentDoc = gql`
    fragment VideoElementData on VideoElement {
  title
  video {
    ...ReferenceData
  }
  placeholder {
    ...ReferenceData
  }
}
    `;
export const BlankSectionDataFragmentDoc = gql`
    fragment BlankSectionData on BlankSection {
  _metadata {
    key
  }
}
    `;
export const SoSectionTwoDataFragmentDoc = gql`
    fragment SoSectionTwoData on SoSectionTwo {
  Modifiers
  Content {
    ...BlockData
    ...ArticleListElementData
    ...BrandingData
    ...ButtonBlockData
    ...CTAElementData
    ...CardWithIconData
    ...CarouselBlockData
    ...ContentRecsElementData
    ...ContinueReadingComponentData
    ...GlobalHeaderData
    ...HeaderForComponentData
    ...HeaderMainNavigationData
    ...HeadingElementData
    ...HeroBlockData
    ...ImageElementData
    ...LayoutSettingsBlockData
    ...MegaMenuGroupBlockData
    ...MenuNavigationBlockData
    ...MoblieNavData
    ...OdpEmbedBlockData
    ...PageSeoSettingsData
    ...ParagraphElementData
    ...QuoteBlockData
    ...RichTextElementData
    ...SoCardData
    ...SoColumnData
    ...SoFooterData
    ...SoHeroData
    ...SoRowData
    ...SoSectionData
    ...SoSectionTwoData
    ...TestimonialElementData
    ...TextBlockData
    ...UpcomingEventsData
    ...VenuesData
    ...VideoElementData
    ...BlankSectionData
  }
}
    `;
export const SoColumnPropertyDataFragmentDoc = gql`
    fragment SoColumnPropertyData on SoColumnProperty {
  ColumnClasses
  ColumnContent {
    ...IContentListItem
    ...BlockData
    ...ImageMediaComponentData
    ...VideoMediaComponentData
    ...ArticleListElementData
    ...BrandingData
    ...ButtonBlockData
    ...CTAElementData
    ...CardWithIconData
    ...CarouselBlockData
    ...ContentRecsElementData
    ...ContinueReadingComponentData
    ...GlobalHeaderData
    ...HeaderForComponentData
    ...HeaderMainNavigationData
    ...HeadingElementData
    ...HeroBlockData
    ...ImageElementData
    ...LayoutSettingsBlockData
    ...MegaMenuGroupBlockData
    ...MenuNavigationBlockData
    ...MoblieNavData
    ...OdpEmbedBlockData
    ...PageSeoSettingsData
    ...ParagraphElementData
    ...QuoteBlockData
    ...RichTextElementData
    ...SoCardData
    ...SoColumnData
    ...SoFooterData
    ...SoHeroData
    ...SoRowData
    ...SoSectionData
    ...SoSectionTwoData
    ...TestimonialElementData
    ...TextBlockData
    ...UpcomingEventsData
    ...VenuesData
    ...VideoElementData
    ...BlankSectionData
  }
}
    `;
export const SoRowDataFragmentDoc = gql`
    fragment SoRowData on SoRow {
  Modifiers
  Column {
    ...SoColumnPropertyData
  }
}
    `;
export const SoColumnDataFragmentDoc = gql`
    fragment SoColumnData on SoColumn {
  ColumnClasses
  ColumnContent {
    ...BlockData
    ...ArticleListElementData
    ...BrandingData
    ...ButtonBlockData
    ...CTAElementData
    ...CardWithIconData
    ...CarouselBlockData
    ...ContentRecsElementData
    ...ContinueReadingComponentData
    ...GlobalHeaderData
    ...HeaderForComponentData
    ...HeaderMainNavigationData
    ...HeadingElementData
    ...HeroBlockData
    ...ImageElementData
    ...LayoutSettingsBlockData
    ...MegaMenuGroupBlockData
    ...MenuNavigationBlockData
    ...MoblieNavData
    ...OdpEmbedBlockData
    ...PageSeoSettingsData
    ...ParagraphElementData
    ...QuoteBlockData
    ...RichTextElementData
    ...SoCardData
    ...SoColumnData
    ...SoFooterData
    ...SoHeroData
    ...SoRowData
    ...SoSectionData
    ...SoSectionTwoData
    ...TestimonialElementData
    ...TextBlockData
    ...UpcomingEventsData
    ...VenuesData
    ...VideoElementData
    ...BlankSectionData
  }
}
    `;
export const ContinueReadingComponentDataFragmentDoc = gql`
    fragment ContinueReadingComponentData on ContinueReadingComponent {
  topline
  shared
  heading
  content {
    ...IContentData
    ...BlockData
    ...ArticleListElementData
    ...BrandingData
    ...ButtonBlockData
    ...CTAElementData
    ...CardWithIconData
    ...CarouselBlockData
    ...ContentRecsElementData
    ...ContinueReadingComponentData
    ...GlobalHeaderData
    ...HeaderForComponentData
    ...HeaderMainNavigationData
    ...HeadingElementData
    ...HeroBlockData
    ...ImageElementData
    ...LayoutSettingsBlockData
    ...MegaMenuGroupBlockData
    ...MenuNavigationBlockData
    ...MoblieNavData
    ...OdpEmbedBlockData
    ...PageSeoSettingsData
    ...ParagraphElementData
    ...QuoteBlockData
    ...RichTextElementData
    ...SoCardData
    ...SoColumnData
    ...SoFooterData
    ...SoHeroData
    ...SoRowData
    ...SoSectionData
    ...SoSectionTwoData
    ...TestimonialElementData
    ...TextBlockData
    ...UpcomingEventsData
    ...VenuesData
    ...VideoElementData
    ...BlankSectionData
  }
}
    `;
export const CarouselBlockDataFragmentDoc = gql`
    fragment CarouselBlockData on CarouselBlock {
  CarouselItemsContentArea {
    ...IContentListItem
    ...BlockData
    ...ImageMediaComponentData
    ...VideoMediaComponentData
    ...ArticleListElementData
    ...BrandingData
    ...ButtonBlockData
    ...CTAElementData
    ...CardWithIconData
    ...CarouselBlockData
    ...ContentRecsElementData
    ...ContinueReadingComponentData
    ...GlobalHeaderData
    ...HeaderForComponentData
    ...HeaderMainNavigationData
    ...HeadingElementData
    ...HeroBlockData
    ...ImageElementData
    ...LayoutSettingsBlockData
    ...MegaMenuGroupBlockData
    ...MenuNavigationBlockData
    ...MoblieNavData
    ...OdpEmbedBlockData
    ...PageSeoSettingsData
    ...ParagraphElementData
    ...QuoteBlockData
    ...RichTextElementData
    ...SoCardData
    ...SoColumnData
    ...SoFooterData
    ...SoHeroData
    ...SoRowData
    ...SoSectionData
    ...SoSectionTwoData
    ...TestimonialElementData
    ...TextBlockData
    ...UpcomingEventsData
    ...VenuesData
    ...VideoElementData
    ...BlankSectionData
  }
}
    `;
export const CompositionComponentNodeDataFragmentDoc = gql`
    fragment CompositionComponentNodeData on ICompositionComponentNode {
  component {
    ...BlockData
    ...ElementData
    ...ArticleListElementData
    ...BrandingData
    ...ButtonBlockData
    ...CTAElementData
    ...CardWithIconData
    ...CarouselBlockData
    ...ContentRecsElementData
    ...ContinueReadingComponentData
    ...GlobalHeaderData
    ...HeaderForComponentData
    ...HeaderMainNavigationData
    ...HeadingElementData
    ...HeroBlockData
    ...ImageElementData
    ...LayoutSettingsBlockData
    ...MegaMenuGroupBlockData
    ...MenuNavigationBlockData
    ...MoblieNavData
    ...OdpEmbedBlockData
    ...PageSeoSettingsData
    ...ParagraphElementData
    ...QuoteBlockData
    ...RichTextElementData
    ...SoCardData
    ...SoColumnData
    ...SoFooterData
    ...SoHeroData
    ...SoRowData
    ...SoSectionData
    ...SoSectionTwoData
    ...TestimonialElementData
    ...TextBlockData
    ...UpcomingEventsData
    ...VenuesData
    ...VideoElementData
    ...BlankSectionData
  }
}
    `;
export const ExperienceDataFragmentDoc = gql`
    fragment ExperienceData on _IExperience {
  composition {
    ...CompositionNodeData
    nodes {
      ...CompositionNodeData
      ... on ICompositionStructureNode {
        nodes {
          ...CompositionNodeData
          ... on ICompositionStructureNode {
            nodes {
              ...CompositionNodeData
              ... on ICompositionStructureNode {
                nodes {
                  ...CompositionNodeData
                  ...CompositionComponentNodeData
                }
              }
            }
          }
        }
      }
      ...CompositionComponentNodeData
    }
  }
}
    `;
export const BlankExperienceDataFragmentDoc = gql`
    fragment BlankExperienceData on BlankExperience {
  BlankExperienceSeoSettings {
    ...PageSeoSettingsPropertyData
  }
  ...ExperienceData
}
    `;
export const BlogSectionExperienceDataFragmentDoc = gql`
    fragment BlogSectionExperienceData on BlogSectionExperience {
  ...ExperienceData
}
    `;
export const BlogPostPageDataFragmentDoc = gql`
    fragment BlogPostPageData on BlogPostPage {
  blogTitle: Heading
  blogSubtitle: ArticleSubHeading
  blogImage: BlogPostPromoImage {
    ...ReferenceData
  }
  blogBody: BlogPostBody {
    json
  }
  blogAuthor: ArticleAuthor
  blogTopics: Topic
  continueReading {
    ...IContentListItem
    ...BlockData
    ...ImageMediaComponentData
    ...VideoMediaComponentData
    ...ArticleListElementData
    ...BrandingData
    ...ButtonBlockData
    ...CTAElementData
    ...CardWithIconData
    ...CarouselBlockData
    ...ContentRecsElementData
    ...ContinueReadingComponentData
    ...GlobalHeaderData
    ...HeaderForComponentData
    ...HeaderMainNavigationData
    ...HeadingElementData
    ...HeroBlockData
    ...ImageElementData
    ...LayoutSettingsBlockData
    ...MegaMenuGroupBlockData
    ...MenuNavigationBlockData
    ...MoblieNavData
    ...OdpEmbedBlockData
    ...PageSeoSettingsData
    ...ParagraphElementData
    ...QuoteBlockData
    ...RichTextElementData
    ...SoCardData
    ...SoColumnData
    ...SoFooterData
    ...SoHeroData
    ...SoRowData
    ...SoSectionData
    ...SoSectionTwoData
    ...TestimonialElementData
    ...TextBlockData
    ...UpcomingEventsData
    ...VenuesData
    ...VideoElementData
    ...BlankSectionData
  }
}
    `;
export const BlogPostPageSearchResultFragmentDoc = gql`
    fragment BlogPostPageSearchResult on BlogPostPage {
  title: Heading
  image: BlogPostPromoImage {
    ...ReferenceData
  }
  author: ArticleAuthor
  seodata: SeoSettings {
    MetaTitle
    MetaDescription
  }
  _metadata {
    published
  }
}
    `;
export const EventDetailsDataFragmentDoc = gql`
    fragment EventDetailsData on EventDetails {
  Title
  Description {
    json
    html
  }
  PreviewText
  StartDate
  EndDate
  PhoneNumber
  SelectVenue {
    ...ReferenceData
  }
}
    `;
export const EventListPageDataFragmentDoc = gql`
    fragment EventListPageData on EventListPage {
  EventTitle
  EventBody {
    json
    html
  }
  EventMainContentArea {
    ...BlockData
    ...ArticleListElementData
    ...BrandingData
    ...ButtonBlockData
    ...CTAElementData
    ...CardWithIconData
    ...CarouselBlockData
    ...ContentRecsElementData
    ...ContinueReadingComponentData
    ...GlobalHeaderData
    ...HeaderForComponentData
    ...HeaderMainNavigationData
    ...HeadingElementData
    ...HeroBlockData
    ...ImageElementData
    ...LayoutSettingsBlockData
    ...MegaMenuGroupBlockData
    ...MenuNavigationBlockData
    ...MoblieNavData
    ...OdpEmbedBlockData
    ...PageSeoSettingsData
    ...ParagraphElementData
    ...QuoteBlockData
    ...RichTextElementData
    ...SoCardData
    ...SoColumnData
    ...SoFooterData
    ...SoHeroData
    ...SoRowData
    ...SoSectionData
    ...SoSectionTwoData
    ...TestimonialElementData
    ...TextBlockData
    ...UpcomingEventsData
    ...VenuesData
    ...VideoElementData
    ...BlankSectionData
  }
}
    `;
export const LandingPageDataFragmentDoc = gql`
    fragment LandingPageData on LandingPage {
  TopContentArea {
    ...BlockData
    ...ArticleListElementData
    ...BrandingData
    ...ButtonBlockData
    ...CTAElementData
    ...CardWithIconData
    ...CarouselBlockData
    ...ContentRecsElementData
    ...ContinueReadingComponentData
    ...GlobalHeaderData
    ...HeaderForComponentData
    ...HeaderMainNavigationData
    ...HeadingElementData
    ...HeroBlockData
    ...ImageElementData
    ...LayoutSettingsBlockData
    ...MegaMenuGroupBlockData
    ...MenuNavigationBlockData
    ...MoblieNavData
    ...OdpEmbedBlockData
    ...PageSeoSettingsData
    ...ParagraphElementData
    ...QuoteBlockData
    ...RichTextElementData
    ...SoCardData
    ...SoColumnData
    ...SoFooterData
    ...SoHeroData
    ...SoRowData
    ...SoSectionData
    ...SoSectionTwoData
    ...TestimonialElementData
    ...TextBlockData
    ...UpcomingEventsData
    ...VenuesData
    ...VideoElementData
    ...BlankSectionData
  }
  MainContentArea {
    ...BlockData
    ...ArticleListElementData
    ...BrandingData
    ...ButtonBlockData
    ...CTAElementData
    ...CardWithIconData
    ...CarouselBlockData
    ...ContentRecsElementData
    ...ContinueReadingComponentData
    ...GlobalHeaderData
    ...HeaderForComponentData
    ...HeaderMainNavigationData
    ...HeadingElementData
    ...HeroBlockData
    ...ImageElementData
    ...LayoutSettingsBlockData
    ...MegaMenuGroupBlockData
    ...MenuNavigationBlockData
    ...MoblieNavData
    ...OdpEmbedBlockData
    ...PageSeoSettingsData
    ...ParagraphElementData
    ...QuoteBlockData
    ...RichTextElementData
    ...SoCardData
    ...SoColumnData
    ...SoFooterData
    ...SoHeroData
    ...SoRowData
    ...SoSectionData
    ...SoSectionTwoData
    ...TestimonialElementData
    ...TextBlockData
    ...UpcomingEventsData
    ...VenuesData
    ...VideoElementData
    ...BlankSectionData
  }
}
    `;
export const SOHomePageDataFragmentDoc = gql`
    fragment SOHomePageData on SOHomePage {
  WebSiteLogo {
    ...BlockData
    ...ArticleListElementData
    ...BrandingData
    ...ButtonBlockData
    ...CTAElementData
    ...CardWithIconData
    ...CarouselBlockData
    ...ContentRecsElementData
    ...ContinueReadingComponentData
    ...GlobalHeaderData
    ...HeaderForComponentData
    ...HeaderMainNavigationData
    ...HeadingElementData
    ...HeroBlockData
    ...ImageElementData
    ...LayoutSettingsBlockData
    ...MegaMenuGroupBlockData
    ...MenuNavigationBlockData
    ...MoblieNavData
    ...OdpEmbedBlockData
    ...PageSeoSettingsData
    ...ParagraphElementData
    ...QuoteBlockData
    ...RichTextElementData
    ...SoCardData
    ...SoColumnData
    ...SoFooterData
    ...SoHeroData
    ...SoRowData
    ...SoSectionData
    ...SoSectionTwoData
    ...TestimonialElementData
    ...TextBlockData
    ...UpcomingEventsData
    ...VenuesData
    ...VideoElementData
    ...BlankSectionData
  }
  MainNavigation {
    ...BlockData
    ...ArticleListElementData
    ...BrandingData
    ...ButtonBlockData
    ...CTAElementData
    ...CardWithIconData
    ...CarouselBlockData
    ...ContentRecsElementData
    ...ContinueReadingComponentData
    ...GlobalHeaderData
    ...HeaderForComponentData
    ...HeaderMainNavigationData
    ...HeadingElementData
    ...HeroBlockData
    ...ImageElementData
    ...LayoutSettingsBlockData
    ...MegaMenuGroupBlockData
    ...MenuNavigationBlockData
    ...MoblieNavData
    ...OdpEmbedBlockData
    ...PageSeoSettingsData
    ...ParagraphElementData
    ...QuoteBlockData
    ...RichTextElementData
    ...SoCardData
    ...SoColumnData
    ...SoFooterData
    ...SoHeroData
    ...SoRowData
    ...SoSectionData
    ...SoSectionTwoData
    ...TestimonialElementData
    ...TextBlockData
    ...UpcomingEventsData
    ...VenuesData
    ...VideoElementData
    ...BlankSectionData
  }
  HomePageFooterNavigation {
    ...BlockData
    ...ArticleListElementData
    ...BrandingData
    ...ButtonBlockData
    ...CTAElementData
    ...CardWithIconData
    ...CarouselBlockData
    ...ContentRecsElementData
    ...ContinueReadingComponentData
    ...GlobalHeaderData
    ...HeaderForComponentData
    ...HeaderMainNavigationData
    ...HeadingElementData
    ...HeroBlockData
    ...ImageElementData
    ...LayoutSettingsBlockData
    ...MegaMenuGroupBlockData
    ...MenuNavigationBlockData
    ...MoblieNavData
    ...OdpEmbedBlockData
    ...PageSeoSettingsData
    ...ParagraphElementData
    ...QuoteBlockData
    ...RichTextElementData
    ...SoCardData
    ...SoColumnData
    ...SoFooterData
    ...SoHeroData
    ...SoRowData
    ...SoSectionData
    ...SoSectionTwoData
    ...TestimonialElementData
    ...TextBlockData
    ...UpcomingEventsData
    ...VenuesData
    ...VideoElementData
    ...BlankSectionData
  }
  Title
  BannerContentArea {
    ...BlockData
    ...ArticleListElementData
    ...BrandingData
    ...ButtonBlockData
    ...CTAElementData
    ...CardWithIconData
    ...CarouselBlockData
    ...ContentRecsElementData
    ...ContinueReadingComponentData
    ...GlobalHeaderData
    ...HeaderForComponentData
    ...HeaderMainNavigationData
    ...HeadingElementData
    ...HeroBlockData
    ...ImageElementData
    ...LayoutSettingsBlockData
    ...MegaMenuGroupBlockData
    ...MenuNavigationBlockData
    ...MoblieNavData
    ...OdpEmbedBlockData
    ...PageSeoSettingsData
    ...ParagraphElementData
    ...QuoteBlockData
    ...RichTextElementData
    ...SoCardData
    ...SoColumnData
    ...SoFooterData
    ...SoHeroData
    ...SoRowData
    ...SoSectionData
    ...SoSectionTwoData
    ...TestimonialElementData
    ...TextBlockData
    ...UpcomingEventsData
    ...VenuesData
    ...VideoElementData
    ...BlankSectionData
  }
  HomeMainContentArea {
    ...BlockData
    ...ArticleListElementData
    ...BrandingData
    ...ButtonBlockData
    ...CTAElementData
    ...CardWithIconData
    ...CarouselBlockData
    ...ContentRecsElementData
    ...ContinueReadingComponentData
    ...GlobalHeaderData
    ...HeaderForComponentData
    ...HeaderMainNavigationData
    ...HeadingElementData
    ...HeroBlockData
    ...ImageElementData
    ...LayoutSettingsBlockData
    ...MegaMenuGroupBlockData
    ...MenuNavigationBlockData
    ...MoblieNavData
    ...OdpEmbedBlockData
    ...PageSeoSettingsData
    ...ParagraphElementData
    ...QuoteBlockData
    ...RichTextElementData
    ...SoCardData
    ...SoColumnData
    ...SoFooterData
    ...SoHeroData
    ...SoRowData
    ...SoSectionData
    ...SoSectionTwoData
    ...TestimonialElementData
    ...TextBlockData
    ...UpcomingEventsData
    ...VenuesData
    ...VideoElementData
    ...BlankSectionData
  }
}
    `;
export const SOLandingPageDataFragmentDoc = gql`
    fragment SOLandingPageData on SOLandingPage {
  LandingPageTitle
  MainContentArea {
    ...BlockData
    ...ArticleListElementData
    ...BrandingData
    ...ButtonBlockData
    ...CTAElementData
    ...CardWithIconData
    ...CarouselBlockData
    ...ContentRecsElementData
    ...ContinueReadingComponentData
    ...GlobalHeaderData
    ...HeaderForComponentData
    ...HeaderMainNavigationData
    ...HeadingElementData
    ...HeroBlockData
    ...ImageElementData
    ...LayoutSettingsBlockData
    ...MegaMenuGroupBlockData
    ...MenuNavigationBlockData
    ...MoblieNavData
    ...OdpEmbedBlockData
    ...PageSeoSettingsData
    ...ParagraphElementData
    ...QuoteBlockData
    ...RichTextElementData
    ...SoCardData
    ...SoColumnData
    ...SoFooterData
    ...SoHeroData
    ...SoRowData
    ...SoSectionData
    ...SoSectionTwoData
    ...TestimonialElementData
    ...TextBlockData
    ...UpcomingEventsData
    ...VenuesData
    ...VideoElementData
    ...BlankSectionData
  }
  LandingDescription {
    json
    html
  }
  SeoSettings {
    ...PageSeoSettingsPropertyData
  }
}
    `;
export const VenueDetailsDataFragmentDoc = gql`
    fragment VenueDetailsData on VenueDetails {
  Name
  Policies {
    json
    html
  }
  Address
  CallInNumber
  _metadata {
    published
  }
}
    `;
export const VenueListDataFragmentDoc = gql`
    fragment VenueListData on VenueList {
  VenueTitle
  VenueBody {
    json
    html
  }
  VenueMainContentArea {
    ...BlockData
    ...ArticleListElementData
    ...BrandingData
    ...ButtonBlockData
    ...CTAElementData
    ...CardWithIconData
    ...CarouselBlockData
    ...ContentRecsElementData
    ...ContinueReadingComponentData
    ...GlobalHeaderData
    ...HeaderForComponentData
    ...HeaderMainNavigationData
    ...HeadingElementData
    ...HeroBlockData
    ...ImageElementData
    ...LayoutSettingsBlockData
    ...MegaMenuGroupBlockData
    ...MenuNavigationBlockData
    ...MoblieNavData
    ...OdpEmbedBlockData
    ...PageSeoSettingsData
    ...ParagraphElementData
    ...QuoteBlockData
    ...RichTextElementData
    ...SoCardData
    ...SoColumnData
    ...SoFooterData
    ...SoHeroData
    ...SoRowData
    ...SoSectionData
    ...SoSectionTwoData
    ...TestimonialElementData
    ...TextBlockData
    ...UpcomingEventsData
    ...VenuesData
    ...VideoElementData
    ...BlankSectionData
  }
}
    `;
export const SearchDataFragmentDoc = gql`
    fragment SearchData on _IContent {
  ...IContentData
}
    `;
export const PageDataFragmentDoc = gql`
    fragment PageData on _IContent {
  ...IContentData
}
    `;
export const getArticleListElementItemsDocument = gql`
    query getArticleListElementItems($count: Int!, $locale: [Locales], $topics: [String], $excludeKeys: [String]) {
  BlogPostPage(
    orderBy: {_metadata: {published: DESC}}
    limit: $count
    locale: $locale
    where: {_metadata: {status: {eq: "Published"}, key: {notIn: $excludeKeys}}, Topic: {in: $topics}}
  ) {
    items {
      ...IContentData
      articleMeta: _metadata {
        key
        published
        lastModified
      }
      blogTitle: Heading
      blogSubtitle: ArticleSubHeading
      blogImage: BlogPostPromoImage {
        ...ReferenceData
      }
      blogBody: BlogPostBody {
        json
      }
      blogAuthor: ArticleAuthor
    }
  }
}
    ${IContentDataFragmentDoc}
${IContentInfoFragmentDoc}
${LinkDataFragmentDoc}
${ReferenceDataFragmentDoc}`;
export const getDefaultArticleListDocument = gql`
    query getDefaultArticleList($locale: [Locales!]) {
  ArticleListElement(
    where: {_metadata: {displayName: {startsWith: "[DEFAULT]"}, status: {eq: "Published"}}}
    locale: $locale
    orderBy: {_metadata: {published: DESC}}
    limit: 1
  ) {
    items {
      ...IContentData
      ...ArticleListElementData
    }
  }
}
    ${IContentDataFragmentDoc}
${IContentInfoFragmentDoc}
${LinkDataFragmentDoc}
${ArticleListElementDataFragmentDoc}`;
export const getSharedContinueReadingDocument = gql`
    query getSharedContinueReading($locale: [Locales]) {
  ContinueReadingComponent(where: {shared: {eq: true}}, locale: $locale) {
    total
    item {
      ...IContentData
      ...ContinueReadingComponentData
    }
  }
}
    ${IContentDataFragmentDoc}
${IContentInfoFragmentDoc}
${LinkDataFragmentDoc}
${ContinueReadingComponentDataFragmentDoc}
${BlockDataFragmentDoc}
${ArticleListElementDataFragmentDoc}
${BrandingDataFragmentDoc}
${ReferenceDataFragmentDoc}
${ButtonBlockDataFragmentDoc}
${CTAElementDataFragmentDoc}
${CardWithIconDataFragmentDoc}
${CarouselBlockDataFragmentDoc}
${IContentListItemFragmentDoc}
${ImageMediaComponentDataFragmentDoc}
${VideoMediaComponentDataFragmentDoc}
${ContentRecsElementDataFragmentDoc}
${GlobalHeaderDataFragmentDoc}
${HeaderForComponentDataFragmentDoc}
${HeaderMainNavigationDataFragmentDoc}
${LinkItemDataFragmentDoc}
${HeadingElementDataFragmentDoc}
${HeroBlockDataFragmentDoc}
${ButtonBlockPropertyDataFragmentDoc}
${ImageElementDataFragmentDoc}
${LayoutSettingsBlockDataFragmentDoc}
${MegaMenuGroupBlockDataFragmentDoc}
${MenuNavigationBlockDataFragmentDoc}
${BlogPostPageMenuBlockFragmentDoc}
${MoblieNavDataFragmentDoc}
${OdpEmbedBlockDataFragmentDoc}
${PageSeoSettingsDataFragmentDoc}
${ParagraphElementDataFragmentDoc}
${QuoteBlockDataFragmentDoc}
${RichTextElementDataFragmentDoc}
${SoCardDataFragmentDoc}
${SoColumnDataFragmentDoc}
${SoFooterDataFragmentDoc}
${SoHeroDataFragmentDoc}
${SoRowDataFragmentDoc}
${SoColumnPropertyDataFragmentDoc}
${SoSectionDataFragmentDoc}
${SoRowPropertyDataFragmentDoc}
${SoSectionTwoDataFragmentDoc}
${TestimonialElementDataFragmentDoc}
${TextBlockDataFragmentDoc}
${UpcomingEventsDataFragmentDoc}
${VenuesDataFragmentDoc}
${VideoElementDataFragmentDoc}
${BlankSectionDataFragmentDoc}`;
export const GetAllEventsDocument = gql`
    query GetAllEvents($locale: [Locales!]) {
  EventDetails(locale: $locale) {
    items {
      Title
      StartDate
      EndDate
      PhoneNumber
      PreviewText
      SelectVenue {
        url {
          default
        }
      }
      _metadata {
        key
        url {
          default
        }
      }
    }
  }
}
    `;
export const GetAllVenueDocument = gql`
    query GetAllVenue($locale: [Locales!]) {
  VenueDetails(locale: $locale) {
    items {
      _metadata {
        key
        url {
          default
        }
      }
      Name
      Address
      CallInNumber
    }
  }
}
    `;
export const getBlankExperienceMetaDataDocument = gql`
    query getBlankExperienceMetaData($key: String!, $locale: [Locales]) {
  page: BlankExperience(where: {_metadata: {key: {eq: $key}}}, locale: $locale) {
    items {
      meta: _metadata {
        url {
          base
        }
        displayName
      }
      seo: BlankExperienceSeoSettings {
        title: MetaTitle
        description: MetaDescription
        image: SharingImage {
          ...ReferenceData
        }
        type: GraphType
      }
    }
  }
}
    ${ReferenceDataFragmentDoc}
${LinkDataFragmentDoc}`;
export const getChildBlogPostsDocument = gql`
    query getChildBlogPosts($parentKey: String!, $locale: [Locales!]! = ALL, $author: [String!], $topic: [String!], $limit: Int! = 9, $skip: Int! = 0) {
  result: BlogSectionExperience(
    where: {_metadata: {key: {eq: $parentKey}}}
    locale: $locale
  ) {
    items {
      container: _metadata {
        key
        displayName
      }
      items: _link(type: ITEMS) {
        BlogPostPage(skip: $skip, limit: $limit, locale: $locale) {
          total
          items {
            ...IContentData
            metadata: _metadata {
              key
              url {
                base
                default
              }
              published
            }
            heading: Heading
            subheading: ArticleSubHeading
            author: ArticleAuthor
            topic: Topic
            image: BlogPostPromoImage {
              src: url {
                base
                default
              }
            }
          }
          facets {
            author: ArticleAuthor(filters: $author) {
              name
              count
            }
            topic: Topic(orderBy: ASC, filters: $topic) {
              name
              count
            }
            metadata: _metadata {
              published(unit: DAY) {
                name
                count
              }
            }
          }
        }
      }
    }
  }
}
    ${IContentDataFragmentDoc}
${IContentInfoFragmentDoc}
${LinkDataFragmentDoc}`;
export const getBlogSectionExperienceMetaDataDocument = gql`
    query getBlogSectionExperienceMetaData($key: String!, $version: String, $locale: [Locales!]) {
  page: BlogSectionExperience(
    where: {_metadata: {key: {eq: $key}, version: {eq: $version}}}
    locale: $locale
  ) {
    items {
      _metadata {
        displayName
        published
        url {
          base
          default
        }
      }
      seo_data {
        ...PageSeoSettingsPropertyData
      }
    }
  }
}
    ${PageSeoSettingsPropertyDataFragmentDoc}
${ReferenceDataFragmentDoc}
${LinkDataFragmentDoc}`;
export const getBlogPostPageMetaDataDocument = gql`
    query getBlogPostPageMetaData($key: String!, $version: String, $locale: [Locales!]) {
  BlogPostPage(
    where: {_metadata: {key: {eq: $key}, version: {eq: $version}}}
    locale: $locale
  ) {
    pages: items {
      cms: _metadata {
        title: displayName
        published
        url {
          base
          default
        }
      }
      title: Heading
      author: ArticleAuthor
      image: BlogPostPromoImage {
        ...ReferenceData
      }
      topics: Topic
      seo: SeoSettings {
        title: MetaTitle
        description: MetaDescription
        keywords: MetaKeywords
        image: SharingImage {
          ...ReferenceData
        }
        type: GraphType
      }
    }
  }
}
    ${ReferenceDataFragmentDoc}
${LinkDataFragmentDoc}`;
export const GetVenueDetailsDocument = gql`
    query GetVenueDetails($key: String!, $locale: [Locales!]) {
  VenueDetails(where: {_metadata: {key: {eq: $key}}}, locale: $locale) {
    items {
      Name
      Address
      CallInNumber
      Policies {
        html
      }
    }
  }
}
    `;
export const getLandingPageMetaDataDocument = gql`
    query getLandingPageMetaData($key: String!, $version: String, $locale: [Locales]) {
  LandingPage(
    where: {_metadata: {key: {eq: $key}, version: {eq: $version}}}
    locale: $locale
  ) {
    pages: items {
      _metadata {
        displayName
        key
        version
        locale
        url {
          base
        }
      }
      SeoSettings {
        MetaTitle
        MetaDescription
        SharingImage {
          ...ReferenceData
        }
        GraphType
      }
    }
  }
}
    ${ReferenceDataFragmentDoc}
${LinkDataFragmentDoc}`;
export const GetEventsForVenueDocument = gql`
    query GetEventsForVenue($venueKey: String!, $locale: [Locales!]) {
  EventDetails(where: {SelectVenue: {key: {eq: $venueKey}}}, locale: $locale) {
    items {
      Title
      StartDate
      EndDate
      PreviewText
      _metadata {
        url {
          default
        }
      }
    }
  }
}
    `;
export const getFooterDataDocument = gql`
    query getFooterData($domain: String, $locale: [Locales!]) {
  appLayout: LayoutSettingsBlock(
    where: {_or: [{appIdentifiers: {exist: false}}, {_and: [{appIdentifiers: {exist: true}}, {appIdentifiers: {eq: $domain}}]}]}
    locale: $locale
  ) {
    items {
      _metadata {
        key
        displayName
      }
      copyright
      footerMenus {
        ...IContentData
        ...MenuNavigationBlockData
      }
      legalLinks {
        ...LinkItemData
      }
      contactInfoHeading
      contactInfo {
        json
      }
    }
  }
}
    ${IContentDataFragmentDoc}
${IContentInfoFragmentDoc}
${LinkDataFragmentDoc}
${MenuNavigationBlockDataFragmentDoc}
${LinkItemDataFragmentDoc}`;
export const getHeaderDataDocument = gql`
    query getHeaderData($domain: String, $locale: [Locales!]) {
  appLayout: LayoutSettingsBlock(
    where: {_or: [{appIdentifiers: {exist: false}}, {_and: [{appIdentifiers: {exist: true}}, {appIdentifiers: {eq: $domain}}]}]}
    locale: $locale
  ) {
    items {
      _metadata {
        key
        displayName
      }
      appIdentifiers
      mainMenu {
        ...IContentData
        ...MegaMenuGroupBlockData
      }
      serviceButtons {
        ...IContentData
        ...ButtonBlockData
      }
    }
  }
}
    ${IContentDataFragmentDoc}
${IContentInfoFragmentDoc}
${LinkDataFragmentDoc}
${MegaMenuGroupBlockDataFragmentDoc}
${MenuNavigationBlockDataFragmentDoc}
${LinkItemDataFragmentDoc}
${BlogPostPageMenuBlockFragmentDoc}
${ReferenceDataFragmentDoc}
${ButtonBlockDataFragmentDoc}`;
export const getSoFooterDataDocument = gql`
    query getSoFooterData($domain: String, $locale: [Locales!]) {
  appLayout: SoFooter(
    where: {_or: [{appIdentifiers: {exist: false}}, {_and: [{appIdentifiers: {exist: true}}, {appIdentifiers: {eq: $domain}}]}]}
    locale: $locale
  ) {
    items {
      _metadata {
        key
        displayName
      }
      ColumnTextOne {
        json
        html
      }
      ColumnTextTwo {
        json
        html
      }
      ColumnTextThree {
        json
        html
      }
    }
  }
}
    `;
export const getSoHeaderDataDocument = gql`
    query getSoHeaderData($locale: [Locales!]) {
  appLayout: GlobalHeader(locale: $locale) {
    items {
      MainMenu {
        ...IContentData
        ...HeaderMainNavigationData
      }
      SiteLogo {
        ...IContentData
        ...BrandingData
      }
    }
  }
}
    ${IContentDataFragmentDoc}
${IContentInfoFragmentDoc}
${LinkDataFragmentDoc}
${HeaderMainNavigationDataFragmentDoc}
${LinkItemDataFragmentDoc}
${BrandingDataFragmentDoc}
${ReferenceDataFragmentDoc}`;
export const getLocalesDocument = gql`
    query getLocales {
  schema: __schema {
    types {
      kind
      name
      enumValues {
        name
      }
    }
  }
}
    `;
export const getArticlesDocument = gql`
    query getArticles($pageSize: Int! = 10, $start: Int! = 0, $locale: [Locales], $author: [String!], $published: Date, $publishedEnd: Date) {
  getArticles: BlogPostPage(
    where: {_and: [{_metadata: {published: {gte: $published}}}, {_metadata: {published: {lte: $publishedEnd}}}], _metadata: {status: {eq: "Published"}}}
    locale: $locale
    limit: $pageSize
    skip: $start
    orderBy: {_metadata: {published: DESC}}
  ) {
    total
    items {
      ...IContentData
      _metadata {
        status
        published
      }
      title: Heading
      description: SeoSettings {
        text: MetaDescription
      }
      author: ArticleAuthor
      image: BlogPostPromoImage {
        ...ReferenceData
      }
    }
    facets {
      author: ArticleAuthor(orderType: VALUE, orderBy: ASC, filters: $author) {
        count
        name
      }
      _metadata {
        published(unit: DAY) {
          count
          name
        }
      }
    }
  }
}
    ${IContentDataFragmentDoc}
${IContentInfoFragmentDoc}
${LinkDataFragmentDoc}
${ReferenceDataFragmentDoc}`;
export const searchContentDocument = gql`
    query searchContent($term: String!, $locale: [String!], $withinLocale: [Locales], $types: [String!], $pageSize: Int! = 25, $start: Int! = 0) {
  Content: _Page(
    where: {_fulltext: {match: $term}, _metadata: {url: {base: {exist: true}}}}
    orderBy: {_ranking: SEMANTIC}
    limit: $pageSize
    skip: $start
    locale: $withinLocale
  ) {
    total
    items {
      _score
      ...SearchData
      _metadata {
        published
      }
      preview: _fulltext(
        highlight: {enabled: true, startToken: "<span>", endToken: "</span>"}
      )
      ...BlogPostPageSearchResult
    }
    facets {
      _metadata {
        types(filters: $types) {
          name
          count
        }
        locale(filters: $locale) {
          name
          count
        }
      }
    }
  }
}
    ${SearchDataFragmentDoc}
${IContentDataFragmentDoc}
${IContentInfoFragmentDoc}
${LinkDataFragmentDoc}
${BlogPostPageSearchResultFragmentDoc}
${ReferenceDataFragmentDoc}`;
export const personalizedSearchContentDocument = gql`
    query personalizedSearchContent($term: String!, $topInterest: String, $locale: [String!], $withinLocale: [Locales], $types: [String!], $pageSize: Int! = 25, $start: Int! = 0, $boost: Int! = 100) {
  Content: _Page(
    where: {_or: [{_fulltext: {match: $term}}, {_fulltext: {match: $topInterest, boost: $boost}}], _metadata: {url: {base: {exist: true}}}}
    orderBy: {_ranking: SEMANTIC}
    limit: $pageSize
    skip: $start
    locale: $withinLocale
  ) {
    total
    items {
      _score
      ...SearchData
      _metadata {
        published
      }
      preview: _fulltext(
        highlight: {enabled: true, startToken: "<span>", endToken: "</span>"}
      )
      ...BlogPostPageSearchResult
    }
    facets {
      _metadata {
        types(filters: $types) {
          name
          count
        }
        locale(filters: $locale) {
          name
          count
        }
      }
    }
  }
}
    ${SearchDataFragmentDoc}
${IContentDataFragmentDoc}
${IContentInfoFragmentDoc}
${LinkDataFragmentDoc}
${BlogPostPageSearchResultFragmentDoc}
${ReferenceDataFragmentDoc}`;
export const getContentByIdDocument = gql`
    query getContentById($key: String!, $version: String, $locale: [Locales!], $path: String, $domain: String) {
  content: _Content(
    where: {_or: [{_metadata: {key: {eq: $key}, version: {eq: $version}}}, {_metadata: {url: {hierarchical: {eq: $path}, base: {eq: $domain}}, version: {eq: $version}}}]}
    locale: $locale
  ) {
    total
    items: item {
      ...BlockData
      ...PageData
      ...ArticleListElementData
      ...BrandingData
      ...ButtonBlockData
      ...CTAElementData
      ...CardWithIconData
      ...CarouselBlockData
      ...ContentRecsElementData
      ...ContinueReadingComponentData
      ...GlobalHeaderData
      ...HeaderForComponentData
      ...HeaderMainNavigationData
      ...HeadingElementData
      ...HeroBlockData
      ...ImageElementData
      ...LayoutSettingsBlockData
      ...MegaMenuGroupBlockData
      ...MenuNavigationBlockData
      ...MoblieNavData
      ...OdpEmbedBlockData
      ...PageSeoSettingsData
      ...ParagraphElementData
      ...QuoteBlockData
      ...RichTextElementData
      ...SoCardData
      ...SoColumnData
      ...SoFooterData
      ...SoHeroData
      ...SoRowData
      ...SoSectionData
      ...SoSectionTwoData
      ...TestimonialElementData
      ...TextBlockData
      ...UpcomingEventsData
      ...VenuesData
      ...VideoElementData
      ...BlankSectionData
      ...BlankExperienceData
      ...BlogSectionExperienceData
      ...BlogPostPageData
      ...EventDetailsData
      ...EventListPageData
      ...LandingPageData
      ...SOHomePageData
      ...SOLandingPageData
      ...VenueDetailsData
      ...VenueListData
    }
  }
}
    ${BlockDataFragmentDoc}
${IContentDataFragmentDoc}
${IContentInfoFragmentDoc}
${LinkDataFragmentDoc}
${PageDataFragmentDoc}
${ArticleListElementDataFragmentDoc}
${BrandingDataFragmentDoc}
${ReferenceDataFragmentDoc}
${ButtonBlockDataFragmentDoc}
${CTAElementDataFragmentDoc}
${CardWithIconDataFragmentDoc}
${CarouselBlockDataFragmentDoc}
${IContentListItemFragmentDoc}
${ImageMediaComponentDataFragmentDoc}
${VideoMediaComponentDataFragmentDoc}
${ContentRecsElementDataFragmentDoc}
${ContinueReadingComponentDataFragmentDoc}
${GlobalHeaderDataFragmentDoc}
${HeaderForComponentDataFragmentDoc}
${HeaderMainNavigationDataFragmentDoc}
${LinkItemDataFragmentDoc}
${HeadingElementDataFragmentDoc}
${HeroBlockDataFragmentDoc}
${ButtonBlockPropertyDataFragmentDoc}
${ImageElementDataFragmentDoc}
${LayoutSettingsBlockDataFragmentDoc}
${MegaMenuGroupBlockDataFragmentDoc}
${MenuNavigationBlockDataFragmentDoc}
${BlogPostPageMenuBlockFragmentDoc}
${MoblieNavDataFragmentDoc}
${OdpEmbedBlockDataFragmentDoc}
${PageSeoSettingsDataFragmentDoc}
${ParagraphElementDataFragmentDoc}
${QuoteBlockDataFragmentDoc}
${RichTextElementDataFragmentDoc}
${SoCardDataFragmentDoc}
${SoColumnDataFragmentDoc}
${SoFooterDataFragmentDoc}
${SoHeroDataFragmentDoc}
${SoRowDataFragmentDoc}
${SoColumnPropertyDataFragmentDoc}
${SoSectionDataFragmentDoc}
${SoRowPropertyDataFragmentDoc}
${SoSectionTwoDataFragmentDoc}
${TestimonialElementDataFragmentDoc}
${TextBlockDataFragmentDoc}
${UpcomingEventsDataFragmentDoc}
${VenuesDataFragmentDoc}
${VideoElementDataFragmentDoc}
${BlankSectionDataFragmentDoc}
${BlankExperienceDataFragmentDoc}
${PageSeoSettingsPropertyDataFragmentDoc}
${ExperienceDataFragmentDoc}
${CompositionNodeDataFragmentDoc}
${CompositionComponentNodeDataFragmentDoc}
${ElementDataFragmentDoc}
${IElementDataFragmentDoc}
${BlogSectionExperienceDataFragmentDoc}
${BlogPostPageDataFragmentDoc}
${EventDetailsDataFragmentDoc}
${EventListPageDataFragmentDoc}
${LandingPageDataFragmentDoc}
${SOHomePageDataFragmentDoc}
${SOLandingPageDataFragmentDoc}
${VenueDetailsDataFragmentDoc}
${VenueListDataFragmentDoc}`;
export const getContentByPathDocument = gql`
    query getContentByPath($path: [String!]!, $locale: [Locales!], $siteId: String) {
  content: _Content(
    where: {_metadata: {url: {default: {in: $path}, base: {eq: $siteId}}}}
    locale: $locale
  ) {
    total
    items: item {
      ...IContentData
      ...PageData
      ...BlankExperienceData
      ...BlogSectionExperienceData
      ...BlogPostPageData
      ...EventDetailsData
      ...EventListPageData
      ...LandingPageData
      ...SOHomePageData
      ...SOLandingPageData
      ...VenueDetailsData
      ...VenueListData
    }
  }
}
    ${IContentDataFragmentDoc}
${IContentInfoFragmentDoc}
${LinkDataFragmentDoc}
${PageDataFragmentDoc}
${BlankExperienceDataFragmentDoc}
${PageSeoSettingsPropertyDataFragmentDoc}
${ReferenceDataFragmentDoc}
${ExperienceDataFragmentDoc}
${CompositionNodeDataFragmentDoc}
${CompositionComponentNodeDataFragmentDoc}
${BlockDataFragmentDoc}
${ElementDataFragmentDoc}
${IElementDataFragmentDoc}
${ArticleListElementDataFragmentDoc}
${BrandingDataFragmentDoc}
${ButtonBlockDataFragmentDoc}
${CTAElementDataFragmentDoc}
${CardWithIconDataFragmentDoc}
${CarouselBlockDataFragmentDoc}
${IContentListItemFragmentDoc}
${ImageMediaComponentDataFragmentDoc}
${VideoMediaComponentDataFragmentDoc}
${ContentRecsElementDataFragmentDoc}
${ContinueReadingComponentDataFragmentDoc}
${GlobalHeaderDataFragmentDoc}
${HeaderForComponentDataFragmentDoc}
${HeaderMainNavigationDataFragmentDoc}
${LinkItemDataFragmentDoc}
${HeadingElementDataFragmentDoc}
${HeroBlockDataFragmentDoc}
${ButtonBlockPropertyDataFragmentDoc}
${ImageElementDataFragmentDoc}
${LayoutSettingsBlockDataFragmentDoc}
${MegaMenuGroupBlockDataFragmentDoc}
${MenuNavigationBlockDataFragmentDoc}
${BlogPostPageMenuBlockFragmentDoc}
${MoblieNavDataFragmentDoc}
${OdpEmbedBlockDataFragmentDoc}
${PageSeoSettingsDataFragmentDoc}
${ParagraphElementDataFragmentDoc}
${QuoteBlockDataFragmentDoc}
${RichTextElementDataFragmentDoc}
${SoCardDataFragmentDoc}
${SoColumnDataFragmentDoc}
${SoFooterDataFragmentDoc}
${SoHeroDataFragmentDoc}
${SoRowDataFragmentDoc}
${SoColumnPropertyDataFragmentDoc}
${SoSectionDataFragmentDoc}
${SoRowPropertyDataFragmentDoc}
${SoSectionTwoDataFragmentDoc}
${TestimonialElementDataFragmentDoc}
${TextBlockDataFragmentDoc}
${UpcomingEventsDataFragmentDoc}
${VenuesDataFragmentDoc}
${VideoElementDataFragmentDoc}
${BlankSectionDataFragmentDoc}
${BlogSectionExperienceDataFragmentDoc}
${BlogPostPageDataFragmentDoc}
${EventDetailsDataFragmentDoc}
${EventListPageDataFragmentDoc}
${LandingPageDataFragmentDoc}
${SOHomePageDataFragmentDoc}
${SOLandingPageDataFragmentDoc}
${VenueDetailsDataFragmentDoc}
${VenueListDataFragmentDoc}`;
export const getContentTypeDocument = gql`
    query getContentType($key: String!, $version: String, $locale: [Locales!], $path: String, $domain: String) {
  content: _Content(
    where: {_or: [{_metadata: {key: {eq: $key}, version: {eq: $version}}}, {_metadata: {url: {hierarchical: {eq: $path}, base: {eq: $domain}}, version: {eq: $version}}}]}
    locale: $locale
  ) {
    total
    items: item {
      _metadata {
        types
      }
    }
  }
}
    `;

export type SdkFunctionWrapper = <T>(action: (requestHeaders?:Record<string, string>) => Promise<T>, operationName: string, operationType?: string, variables?: any) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = (action, _operationName, _operationType, _variables) => action();

export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    getArticleListElementItems(variables: Schema.getArticleListElementItemsQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<Schema.getArticleListElementItemsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<Schema.getArticleListElementItemsQuery>(getArticleListElementItemsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getArticleListElementItems', 'query', variables);
    },
    getDefaultArticleList(variables?: Schema.getDefaultArticleListQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<Schema.getDefaultArticleListQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<Schema.getDefaultArticleListQuery>(getDefaultArticleListDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getDefaultArticleList', 'query', variables);
    },
    getSharedContinueReading(variables?: Schema.getSharedContinueReadingQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<Schema.getSharedContinueReadingQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<Schema.getSharedContinueReadingQuery>(getSharedContinueReadingDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getSharedContinueReading', 'query', variables);
    },
    GetAllEvents(variables?: Schema.GetAllEventsQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<Schema.GetAllEventsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<Schema.GetAllEventsQuery>(GetAllEventsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'GetAllEvents', 'query', variables);
    },
    GetAllVenue(variables?: Schema.GetAllVenueQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<Schema.GetAllVenueQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<Schema.GetAllVenueQuery>(GetAllVenueDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'GetAllVenue', 'query', variables);
    },
    getBlankExperienceMetaData(variables: Schema.getBlankExperienceMetaDataQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<Schema.getBlankExperienceMetaDataQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<Schema.getBlankExperienceMetaDataQuery>(getBlankExperienceMetaDataDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getBlankExperienceMetaData', 'query', variables);
    },
    getChildBlogPosts(variables: Schema.getChildBlogPostsQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<Schema.getChildBlogPostsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<Schema.getChildBlogPostsQuery>(getChildBlogPostsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getChildBlogPosts', 'query', variables);
    },
    getBlogSectionExperienceMetaData(variables: Schema.getBlogSectionExperienceMetaDataQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<Schema.getBlogSectionExperienceMetaDataQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<Schema.getBlogSectionExperienceMetaDataQuery>(getBlogSectionExperienceMetaDataDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getBlogSectionExperienceMetaData', 'query', variables);
    },
    getBlogPostPageMetaData(variables: Schema.getBlogPostPageMetaDataQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<Schema.getBlogPostPageMetaDataQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<Schema.getBlogPostPageMetaDataQuery>(getBlogPostPageMetaDataDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getBlogPostPageMetaData', 'query', variables);
    },
    GetVenueDetails(variables: Schema.GetVenueDetailsQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<Schema.GetVenueDetailsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<Schema.GetVenueDetailsQuery>(GetVenueDetailsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'GetVenueDetails', 'query', variables);
    },
    getLandingPageMetaData(variables: Schema.getLandingPageMetaDataQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<Schema.getLandingPageMetaDataQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<Schema.getLandingPageMetaDataQuery>(getLandingPageMetaDataDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getLandingPageMetaData', 'query', variables);
    },
    GetEventsForVenue(variables: Schema.GetEventsForVenueQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<Schema.GetEventsForVenueQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<Schema.GetEventsForVenueQuery>(GetEventsForVenueDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'GetEventsForVenue', 'query', variables);
    },
    getFooterData(variables?: Schema.getFooterDataQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<Schema.getFooterDataQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<Schema.getFooterDataQuery>(getFooterDataDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getFooterData', 'query', variables);
    },
    getHeaderData(variables?: Schema.getHeaderDataQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<Schema.getHeaderDataQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<Schema.getHeaderDataQuery>(getHeaderDataDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getHeaderData', 'query', variables);
    },
    getSoFooterData(variables?: Schema.getSoFooterDataQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<Schema.getSoFooterDataQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<Schema.getSoFooterDataQuery>(getSoFooterDataDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getSoFooterData', 'query', variables);
    },
    getSoHeaderData(variables?: Schema.getSoHeaderDataQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<Schema.getSoHeaderDataQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<Schema.getSoHeaderDataQuery>(getSoHeaderDataDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getSoHeaderData', 'query', variables);
    },
    getLocales(variables?: Schema.getLocalesQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<Schema.getLocalesQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<Schema.getLocalesQuery>(getLocalesDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getLocales', 'query', variables);
    },
    getArticles(variables?: Schema.getArticlesQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<Schema.getArticlesQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<Schema.getArticlesQuery>(getArticlesDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getArticles', 'query', variables);
    },
    searchContent(variables: Schema.searchContentQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<Schema.searchContentQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<Schema.searchContentQuery>(searchContentDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'searchContent', 'query', variables);
    },
    personalizedSearchContent(variables: Schema.personalizedSearchContentQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<Schema.personalizedSearchContentQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<Schema.personalizedSearchContentQuery>(personalizedSearchContentDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'personalizedSearchContent', 'query', variables);
    },
    getContentById(variables: Schema.getContentByIdQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<Schema.getContentByIdQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<Schema.getContentByIdQuery>(getContentByIdDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getContentById', 'query', variables);
    },
    getContentByPath(variables: Schema.getContentByPathQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<Schema.getContentByPathQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<Schema.getContentByPathQuery>(getContentByPathDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getContentByPath', 'query', variables);
    },
    getContentType(variables: Schema.getContentTypeQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<Schema.getContentTypeQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<Schema.getContentTypeQuery>(getContentTypeDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getContentType', 'query', variables);
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;