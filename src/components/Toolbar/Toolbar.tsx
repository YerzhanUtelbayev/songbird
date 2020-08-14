import React, { FunctionComponent } from 'react';
import { Container, Navbar, NavbarBrand } from 'reactstrap';
import ScoreIndicator from '../ScoreIndicator/ScoreIndicator';

const Toolbar: FunctionComponent = () => (
  <header>
    <Container>
      <Navbar color="dark" dark>
        <NavbarBrand className="mr-auto text-white">
          Song
          <span className="text-success">bird</span>
        </NavbarBrand>
        <ScoreIndicator />
      </Navbar>
    </Container>
  </header>
);

export default Toolbar;
