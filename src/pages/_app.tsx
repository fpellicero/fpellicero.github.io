import * as React from "react";

import { i18n } from '@lingui/core'
import { I18nProvider } from "@lingui/react";
import { usePageviewTracking } from "components/Analytics/GoogleAnalytics";
import Layout from "components/Layout/Layout";
import { AppProps } from "next/dist/next-server/lib/router/router";
import { NextWebVitalsMetric } from "next/dist/next-server/lib/utils";
import "styles/main.scss";
import { useRouter } from "next/router";

import { messages as EN } from "locales/en";
import { messages as ES } from "locales/es";
import { DefaultLocale } from "i18n/Locales";
import LocaleProvider from "i18n/LocaleProvider";

i18n.load("es", ES);
i18n.load("en", EN);

function MyApp({ Component, pageProps, router }: AppProps) {
  const locale = router.query["locale"] as string;

  i18n.activate(locale || DefaultLocale);

  React.useEffect(() => {
    window.localStorage.setItem("locale", locale);
  }, [locale]);

  usePageviewTracking();

  return (
    <I18nProvider i18n={i18n} >
      <LocaleProvider value={locale}>
        <Layout
          currentPage={Component["PAGE_TYPE"]}
        >
          <Component {...pageProps} />
        </Layout>
      </LocaleProvider>
    </I18nProvider>
  )
}

export function reportWebVitals({ name, label, value, id }: NextWebVitalsMetric) {
  window.gtag('event', name, {
    event_category:
      label === 'web-vital' ? 'Web Vitals' : 'Next.js custom metric',
    value: Math.round(name === 'CLS' ? value * 1000 : value), // values must be integers
    event_label: id, // id unique to current page load
    non_interaction: true, // avoids affecting bounce rate.
  })
}


export default MyApp
