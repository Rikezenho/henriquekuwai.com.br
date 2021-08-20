import React from "react";
import Head from "next/head";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import { globals } from "../globals";
import "../styles/base.css";

const theme = {
  colors: {
    primary: "#A5E22E",
    text: {
      primary: "#444",
    },
  },
};

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Fira Sans', Helvetica, sans-serif;
    line-height: 1.4;
    font-size: 1rem;
    color: ${theme.colors.text.primary};
  }
`;

const App: React.FC = ({ Component, pageProps }: any) => {
  return (
    <div className="container">
      <Head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Fira+Sans:300,400,700"
        />
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
      </Head>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </div>
  );
};

export default App;
