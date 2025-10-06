import 'server-only'
import { PopoverGroup } from '@headlessui/react';
import { type GenericContext, CmsContentArea } from '@remkoj/optimizely-cms-react/rsc';
import { createClient, localeToGraphLocale } from '@remkoj/optimizely-graph-client';
import { type Locales, type InputMaybe } from '@/gql/graphql';
import { getSdk } from "@/gql/client";

import { Logo } from "./partials/_logo";
import SecondaryMenu from './partials/_secondary-menu';
import MobileMenu from './partials/_mobile-menu';
import { Suspense } from 'react';

export type HeaderProps = {
    locale?: string;
    ctx: GenericContext
};
  
export default async function SiteHeader({ locale, ctx }: HeaderProps) 
{
    const { client, locale: serverLocale = locale } = ctx
    const currentDomain = client?.siteInfo.frontendDomain
    const ctxLocale = locale ?? serverLocale
    const currentLocale = (ctxLocale ? localeToGraphLocale(ctxLocale) : undefined) as InputMaybe<Locales> | undefined
    const currentClient = client ?? createClient(undefined, undefined, {
        nextJsFetchDirectives: true,
        cache: true,
        queryCache: true
    });

    const headerData = await getSdk(currentClient).getHeaderData({
        locale: currentLocale,
        domain: currentDomain
    }).then(x => x.appLayout?.items?.at(0)).catch((e: { response: { code: string, status: number, system: { message: string, auth: string} }}) => {
        console.error(`❌ [Optimizely Graph] [Error] ${e.response.code} ${e.response.system.message} ${e.response.system.auth}`)
        return undefined
    })

    return <header  role="banner" id="header" className="global-header fixed">
        <div className="container mx-auto px-4 lg:px-6 py-4 gap-2 flex flex-row justify-between items-stretch lg:flex-wrap 2xl:flex-nowrap">
            <Suspense fallback={<Logo />}>
                <Logo />
            </Suspense>
          
        <div className="navigation-search full-width-nav container"><div className="nav-drawer"><button type="button" className="mobile-control toggle-menu" aria-expanded="false" aria-controls="navigation" tabindex="-1"><span></span><span></span><span></span><span></span><span className="sr-only">Menu</span></button></div>
        <div id="head-search" className="search-container featured-search">
            <div className="container">
                <form id="Search" className="pos-rel d-flex justify-content-end" action="/search">
                    <span className="sr-only" id="SearchInput">Custom Google Search</span>
                    <button type="submit" className="gsc-search-button">
                        <span className="ca-gov-icon-search" aria-hidden="true"></span>
                        <span className="sr-only">Submit</span>
                    </button>
                    <div className="close-search-btn">
                        <button className="close-search gsc-clear-button border-0 bg-transparent pos-rel" type="reset">
                            <span className="sr-only">Close</span>
                        </button>
                    </div>
                </form>
            </div>
        </div>

        <nav id="navigation" className="main-navigation dropdown nav" data-multiselectable="false" data-nav-id="53c0g9bl2i">
            <ul id="nav_list" className="top-level-nav">
                        <li className="nav-item">
                            <a href="/link/80cb334b73864e919dda630746b24975.aspx" className="first-level-link ">
                                  <CmsContentArea as={ PopoverGroup } className="" items={ headerData?.mainMenu } itemWrapper={{ noWrapper: true }} ctx={ ctx }/>
                            </a>
                        </li>                
            </ul>
        </nav>

</div>
        </div>
    </header>
}