import 'server-only'
import type { Metadata } from "next";
import { Figtree } from "next/font/google";
import "./globals.scss";
import { Body, ThemeProvider } from "@/components/theme"
import SoHeader from "@/components/layout/so_site_header";
import SoFooter from "@/components/layout/so_site_footer";
import { factory } from '@/components/factory';
import { createClient } from '@remkoj/optimizely-graph-client';

// Server side components
import { EnvTools, Scripts, OptimizelyOneGadget } from "@remkoj/optimizely-one-nextjs/server";
import { ServerContext } from "@remkoj/optimizely-cms-react/rsc";

// Client side trackers
import { OptimizelyOneProvider, PageActivator } from "@remkoj/optimizely-one-nextjs/client";
import GoogleAnalytics from '@/components/integrations/google-analytics'
import { SpeedInsights } from "@vercel/speed-insights/next"

/* eslint-disable @next/next/no-css-tags */

const figtree = Figtree({ subsets: ["latin"] });

export async function generateMetadata(): Promise<Metadata> {
  const domain = process.env.NEXT_PUBLIC_SITE_DOMAIN || process.env.VERCEL_PROJECT_PRODUCTION_URL || 'localhost:3000'
  const scheme = domain && (domain.startsWith("localhost") || domain.endsWith(".local")) ? 'http' : 'https'
  const base = domain ? new URL(`${scheme}://${domain}`) : undefined
  return {
    metadataBase: base,
    title: {
      default: `Sports Orbit`,
      template: `%s | Sports Orbit`,
    },
    openGraph: {
      title: {
        default: `Sports Orbit`,
        template: `%s | Sports Orbit`,
      },
      siteName: "Sports Orbit",
      images: [
        {
          url: "/apple-touch-icon.png",
        },
      ],
    },
    description:
      "A Demo showcasing SAAS capabilities of Optimizely Cloud with Next.js and React.",
    icons: {
      apple: { sizes: "180x180", url: "/apple-touch-icon.png" },
      icon: [
        { type: "image/png", sizes: "32x32", url: "/favicon-32x32.png" },
        { type: "image/png", sizes: "16x16", url: "/favicon-16x16.png" },
      ],
    },
    manifest: "/site.webmanifest",
  };
}

export type RootLayoutProps = {
  children: React.ReactNode
};

export default function RootLayout({ children }: RootLayoutProps) {
  const locale = "en"
  const client = createClient(undefined, undefined, {
    nextJsFetchDirectives: true,
    cache: true,
    queryCache: true,
  });
  const ctx = new ServerContext({ locale, factory, client })

  // Allow environment control over whether the WX snippet can be changed by the client
  const forceDisableOverride = EnvTools.readValueAsBoolean("DISABLE_WX_SWITCHER", false);
  
  // Check if services are enabled
  const ga_id = EnvTools.readValue("GA_TRACKING_ID");
  const enableGoogleAnalytics = ga_id && ga_id.trim() != "";
  const enableDemoTools = EnvTools.readValueAsBoolean("OPTIMIZELY_ONE_HELPER", false);

  return (
    <html lang={ locale }>
      <head>
        <Scripts.Header experimentationAllowOverride={ !forceDisableOverride } />
        { enableDemoTools && <link key="dynamic-styles" rel="stylesheet" href="/main.css" ></link> }

        { /*
        Temporary Styles from Sports Orbit (demo only)
        TODO: Load up only necessary Bootstrap styles via SASS (pre-compiled)
        */}
        <link rel="stylesheet" href="/assets/css/cagov.core.min.css" />
        <link rel="stylesheet" href="/assets/css/sportsorbit-custom.css" />
        <link rel="stylesheet" href="/assets/css/colortheme-oceanside.min.css" />
      </head>      
        <Body className="primary">
          <OptimizelyOneProvider value={{ debug: false }} >
            <PageActivator />           
              <SoHeader locale={ locale } ctx={ ctx } />
              <div id="main-content" className="main-content">
                <main className="main-primary">{ children }</main>
              </div>
              <SoFooter ctx={ ctx } />           
            <OptimizelyOneGadget />
          </OptimizelyOneProvider>
          <Scripts.Footer />
          { enableGoogleAnalytics && <GoogleAnalytics measurementId={ ga_id } /> }
          <SpeedInsights />
        </Body>      
    </html>
  );
}
