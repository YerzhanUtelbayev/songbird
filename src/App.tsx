import React, { FunctionComponent } from 'react';
import Layout from './components/Layout/Layout';
import Main from './containers/Main/Main';

const App: FunctionComponent = () => (
  <Layout>
    <Main />
  </Layout>
);

export default App;
