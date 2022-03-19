import Artists from "../../src/view/artists/index";
import Layout from "../../src/components/Layout/index";
import React from "react";

const Index = React.memo(() => {
  return (
    <Layout title="Artists">
      <Artists />
    </Layout>
  );
});

export default Index;
