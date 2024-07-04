import React from 'react';
import {SummaryBoard} from "./components/SummaryBoard";
import {Layout} from "antd";
import {Content} from "antd/es/layout/layout";

function App() {
  return (
    <>
      <Layout>
          <Content>
            <SummaryBoard/>
          </Content>
      </Layout>
    </>
  );
}

export default App;
