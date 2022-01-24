import Layout from "./../../src/components/Layout/index";
import React from "react";
import New from "../../src/view/new";

const Index = React.memo(() => {
  return (
    <Layout title="New">
      <New />
    </Layout>
  );
});

export default Index;
