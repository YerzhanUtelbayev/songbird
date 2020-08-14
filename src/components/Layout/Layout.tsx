import React, { FunctionComponent } from 'react';
import { Container } from 'reactstrap';

import Toolbar from '../Toolbar/Toolbar';

const Layout: FunctionComponent = ({ children }) => (
  <>
    <Toolbar />
    <main>
      <Container>{children}</Container>
    </main>
  </>
);

export default Layout;
