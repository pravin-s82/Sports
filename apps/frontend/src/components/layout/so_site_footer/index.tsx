import { getSdk } from "@/gql/client";
import { Locales } from "@gql/graphql";
import { createClient, localeToGraphLocale } from "@remkoj/optimizely-graph-client";
// import SoFooter from "@components/cms/component/SoFooter";
import { RichText, GenericContext } from "@remkoj/optimizely-cms-react/rsc";

export type SoSiteFooterProps = {
  locale?: string;
  ctx: GenericContext
}
export async function SoSiteFooter({ locale, ctx }: SoSiteFooterProps) {
  const { locale: contextLocale, client } = ctx;
  const graphClient = client ?? createClient(undefined, undefined, {
    nextJsFetchDirectives: true,
    cache: true,
    queryCache: true
  });
  const footerLocale = locale ?? contextLocale;
  const footerData = (await getSdk(graphClient).getSoFooterData({
    locale: footerLocale ? localeToGraphLocale(footerLocale) as Locales : Locales.ALL
  }).catch((e: { response: { code: string, status: number, system: { message: string, auth: string} }}) => {
    console.error(`❌ [Optimizely Graph] [Error] ${e.response.code} ${e.response.system.message} ${e.response.system.auth}`)
    return undefined
  }))?.appLayout?.items?.at(0)
  return (
    <footer className="p-b-md p-t-sm section-standout site-footer d-print-none">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            {footerData ? <RichText text={ footerData.ColumnTextOne?.json } ctx={ctx} /> : <p>Loading footer...</p>}
          </div>
          <div className="col-md-4">
            {footerData ? <RichText text={ footerData.ColumnTextTwo?.json } ctx={ctx} /> : <p>Loading footer...</p>}
          </div>
          <div className="col-md-4">
            {footerData ? <RichText text={ footerData.ColumnTextThree?.json } ctx={ctx} /> : <p>Loading footer...</p>}
          </div>
        </div>
      </div>
    </footer>
  );
}

export default SoSiteFooter;
