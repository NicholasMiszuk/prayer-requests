import React from "react";
import { ThemeProvider } from "@material-ui/styles";
import { ApolloProvider } from "@apollo/client";
import { useApollo } from "../config/createApolloClient";
import theme from "../styles";
import Layout from "../components/Layout";

function MyApp({ Component, pageProps }) {
  const client = useApollo(pageProps.initialApolloState);
  return (
    <ApolloProvider client={client}>
      <ThemeProvider theme={theme}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </ApolloProvider>
  );
}

export default MyApp;
