import React, { FunctionComponent } from 'react';
import { NavbarBrand } from 'reactstrap';

import LogoIcon from '../../../assets/icons/ic-logo.svg';

import './Logo.css';

const Logo: FunctionComponent = () => (
  <NavbarBrand className="Logo-title mr-auto text-white d-inline-flex align-bottom">
    <LogoIcon className="mr-2" />
    <span>
      Song
      <span className="text-success">bird</span>
    </span>
  </NavbarBrand>
);

export default Logo;
