import React, { FunctionComponent } from 'react';
import { Container } from 'reactstrap';

const Layout: FunctionComponent = ({ children }) => (
  <>
    <main>
      <Container>{children}</Container>
    </main>
  </>
);

export default Layout;
