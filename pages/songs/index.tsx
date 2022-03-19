import Songs from "../../src/view/songs/index";
import Layout from "../../src/components/Layout/index";
import React from "react";

const Index = React.memo(() => {
  return (
    <Layout title="Charts">
      <Songs />
    </Layout>
  );
});

export default Index;
