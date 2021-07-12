import { GtagGlobalScript } from 'components/Analytics/GoogleAnalytics'
import { GoogleTagManager } from 'components/TagManager/GoogleTagManager';
import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
            <GoogleTagManager />
            <GtagGlobalScript />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument;