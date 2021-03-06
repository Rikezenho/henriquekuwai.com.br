import React from "react";
import Head from "next/head";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import { globals } from "../globals";

const theme = {
  colors: {
    primary: "#A5E22E",
    text: {
      primary: "#444",
    },
  },
  breakpoints: {
    mobileS: "320px",
    mobileM: "375px",
    mobileL: "425px",
    tablet: "768px",
    laptop: "1024px",
    laptopL: "1440px",
    desktop: "2560px",
  },
};

const GlobalStyle = createGlobalStyle`
  *,
  *:before,
  *:after {
    box-sizing: border-box;
    margin: 0;
  }

  body {
    padding: 0;
    font-family: 'Fira Sans', Helvetica, sans-serif;
    line-height: 1.4;
    font-size: 16px;
    color: ${theme.colors.text.primary};
  }
`;

const App: React.FC = ({ Component, pageProps }: any) => {
  return (
    <div className="container">
      <Head>
        {globals.googleAnalyticsId && (
          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${globals.googleAnalyticsId}`}
          ></script>
        )}
        {globals.googleAnalyticsId && (
          <script
            dangerouslySetInnerHTML={{
              __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('globals', '${globals.googleAnalyticsId}');
            `,
            }}
          ></script>
        )}
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </div>
  );
};

export default App;
