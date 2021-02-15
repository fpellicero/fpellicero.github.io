import { usePageviewTracking } from "components/Analytics/GoogleAnalytics";
import Layout from "components/Layout/Layout";
import { AppProps } from "next/dist/next-server/lib/router/router";
import { NextWebVitalsMetric } from "next/dist/next-server/lib/utils";
import * as React from "react";
import "styles/main.scss";

function MyApp({ Component, pageProps }: AppProps) {
  usePageviewTracking();
  return (
    <Layout
      currentPage={Component["PAGE_TYPE"]}
    >
      <Component {...pageProps} />
    </Layout>
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
