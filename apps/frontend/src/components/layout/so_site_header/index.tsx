import 'server-only'
import { PopoverGroup } from '@headlessui/react';
import { type GenericContext, CmsContentArea } from '@remkoj/optimizely-cms-react/rsc';
import { createClient, localeToGraphLocale } from '@remkoj/optimizely-graph-client';
import {  Locales, type InputMaybe } from '@/gql/graphql';
import { getSdk } from "@/gql/client";
import SecondaryMenu from './so-partials/_secondary-menu';
import { SiteSearch } from "./so-partials/_site-search";
import { BrandingComponent as PureBranding } from "@/components/cms/component/Branding";
import { type BrandingDataFragment } from "@/gql/graphql";
import { CmsContent } from '@remkoj/optimizely-cms-react';

export type HeaderProps = {
    locale?: string;    
    ctx: GenericContext
};
  
export default async function SiteHeader({ locale, ctx }: HeaderProps) {const { client, locale: serverLocale = locale } = ctx
   
    const ctxLocale = locale ?? serverLocale
    const currentLocale = (ctxLocale ? localeToGraphLocale(ctxLocale) : undefined) as InputMaybe<Locales> | undefined
    const currentClient = client ?? createClient(undefined, undefined, {
        nextJsFetchDirectives: true,
        cache: true,
        queryCache: true
    });

    const headerData = await getSdk(currentClient).getSoHeaderData({
        locale: currentLocale
       
    }).then(x => x.appLayout?.items?.at(0)).catch((e: { response: { code: string, status: number, system: { message: string, auth: string} }}) => {
        console.error(`❌ [Optimizely Graph] [Error] ${e.response.code} ${e.response.system.message} ${e.response.system.auth}`)
        return undefined
    })
    return (
        <header  role="banner" id="header" className="global-header fixed">          
            <div className="section-default">
                <div className="branding">
                    <div className="header-organization-banner">
                       <CmsContentArea as={ PopoverGroup } items={ headerData?.SiteLogo } itemWrapper={{ noWrapper: true }} ctx={ ctx }/>  
                    </div>
                </div>
            </div>
            <div className="navigation-search full-width-nav container"><div className="nav-drawer"><button type="button" className="mobile-control toggle-menu" aria-expanded="false" aria-controls="navigation"><span></span><span></span><span></span><span></span><span className="sr-only">Menu</span></button></div>
            <SiteSearch/>
            <CmsContentArea as={ PopoverGroup } items={ headerData?.MainMenu } itemWrapper={{ noWrapper: true }} ctx={ ctx }/>        
         </div>           
        </header>
    );
}