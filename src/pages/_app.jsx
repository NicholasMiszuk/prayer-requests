import React from "react";
import { ThemeProvider } from "@material-ui/styles";
import theme from "../styles";
// import Layout from "../components/Layout";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      {/* <Layout> */}
      <Component {...pageProps} />
      {/* </Layout> */}
    </ThemeProvider>
  );
}

export default MyApp;
