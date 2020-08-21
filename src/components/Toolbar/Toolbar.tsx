import React, { FunctionComponent } from 'react';
import { Container, Navbar, NavbarBrand } from 'reactstrap';
import ScoreIndicator from './ScoreIndicator/ScoreIndicator';
import StagesBar from './StagesBar/StagesBar';

const Toolbar: FunctionComponent = () => (
  <header className="mb-4">
    <Container>
      <Navbar dark>
        <NavbarBrand className="mr-auto text-white">
          Song
          <span className="text-success">bird</span>
        </NavbarBrand>
        <ScoreIndicator />
      </Navbar>
      <Navbar light className="p-0">
        <StagesBar />
      </Navbar>
    </Container>
  </header>
);

export default Toolbar;
