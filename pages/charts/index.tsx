import Charts from "./../../src/view/charts/index";
import Layout from "./../../src/components/Layout/index";
import React from "react";

const Index = React.memo(() => {
  return (
    <Layout title="Charts">
      <Charts />
    </Layout>
  );
});

export default Index;
