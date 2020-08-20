import React, { FunctionComponent } from 'react';
import { Container, Navbar, NavbarBrand } from 'reactstrap';
import ScoreIndicator from './ScoreIndicator/ScoreIndicator';
import StagesBar from './StagesBar/StagesBar';

const Toolbar: FunctionComponent = () => (
  <header>
    <Container>
      <Navbar dark>
        <NavbarBrand className="mr-auto text-white">
          Song
          <span className="text-success">bird</span>
        </NavbarBrand>
        <ScoreIndicator />
      </Navbar>
      <Navbar color="success" light>
        <StagesBar />
      </Navbar>
    </Container>
  </header>
);

export default Toolbar;
