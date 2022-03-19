import Playlists from "../../src/view/playlists/index";
import Layout from "../../src/components/Layout/index";
import React from "react";

const Index = React.memo(() => {
  return (
    <Layout title="Playlists">
      <Playlists />
    </Layout>
  );
});

export default Index;
