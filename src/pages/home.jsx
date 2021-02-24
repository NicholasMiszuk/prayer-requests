import React from "react";
import { Grid } from "@material-ui/core";
import Category from "../components/Home/Category";
import Latest from "../components/Home/Latest";

const Home = () => {
  return (
    <Grid container spacing={4} style={{ maxWidth: 1140, margin: "0 auto" }}>
      <Grid item sm={6}>
        <Category />
      </Grid>
      <Grid item sm={6}>
        <Latest />
      </Grid>
    </Grid>
  );
};

export default Home;
