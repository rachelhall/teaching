import Document, { Html, Head, Main, NextScript } from "next/document";
import { ServerStyleSheet } from "styled-components";

export default class Overrides extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: App => props => sheet.collectStyles(<App {...props} />)
        });

      const initialProps = await Document.getInitialProps(ctx);
      const styleTags = sheet.getStyleElement();
      return {
        ...initialProps,
        styleTags,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        )
      };
    } finally {
      sheet.seal();
    }
  }

  renderFacebook = () => {
    const innerHtml = `
      window.fbAsyncInit = function() {
          FB.init({
            appId            : '1130361247169607',
            autoLogAppEvents : true,
            xfbml            : true,
            version          : 'v4.0'
          });
        };
    `;

    return (
      <script
        key="facebook-init"
        dangerouslySetInnerHTML={{ __html: innerHtml }}
      />
    );
  };

  render() {
    return (
      <Html>
        <Head>
          <meta
            key="facebook-id"
            property="fb:app_id"
            content="1130361247169607"
          />
          {this.renderFacebook()}
          <script
            key="facebook-sdk"
            async
            defer
            src="https://connect.facebook.net/en_US/sdk.js"
          ></script>
          {this.props.styleTags}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
