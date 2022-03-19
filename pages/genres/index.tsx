import Genres from "../../src/view/genres/index";
import Layout from "../../src/components/Layout/index";
import React from "react";

const Index = React.memo(() => {
  return (
    <Layout title="Genres">
      <Genres />
    </Layout>
  );
});

export default Index;
