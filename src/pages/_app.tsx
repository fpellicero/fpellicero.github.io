import Layout from "components/Layout/Layout";
import { AppProps } from "next/dist/next-server/lib/router/router";
import * as React from "react";
import "styles/main.scss";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
