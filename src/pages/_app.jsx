import React from "react";
import { ThemeProvider } from "@material-ui/styles";
import theme from "../styles";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
