import React, { FunctionComponent } from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { Nav, NavItem, NavbarText } from 'reactstrap';

import { RootState } from '../../../store/configureStore';
import stageTitles from '../../../utilities/stageTitles';
import './StagesBar.css';

const StagesBar: FunctionComponent<PropsFromRedux> = ({ activeStage }) => {
  const stages = stageTitles;

  return (
    <Nav className="StagesBar">
      {stages.map((stage, index) => {
        const stylesClass = index + 1 === activeStage ? 'StagesBar-item StagesBar-active' : 'StagesBar-item';

        return (
          <NavItem key={stage} className={stylesClass}>
            <NavbarText className="text-white p-0">{stage}</NavbarText>
          </NavItem>
        );
      })}
    </Nav>
  );
};

const mapStateToProps = (state: RootState) => ({
  activeStage: state.game.activeStage,
});

const connector = connect(mapStateToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

export default connector(StagesBar);
