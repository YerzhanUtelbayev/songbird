import React, { FunctionComponent } from 'react';
import { Container, Navbar } from 'reactstrap';
import ScoreIndicator from './ScoreIndicator/ScoreIndicator';
import StagesBar from './StagesBar/StagesBar';
import Logo from '../UI/Logo/Logo';

const Toolbar: FunctionComponent = () => (
  <header className="mb-4">
    <Container>
      <Navbar>
        <Logo />
        <ScoreIndicator />
      </Navbar>
      <Navbar light className="p-0">
        <StagesBar />
      </Navbar>
    </Container>
  </header>
);

export default Toolbar;
