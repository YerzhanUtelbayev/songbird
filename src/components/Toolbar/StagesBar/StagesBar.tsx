import React, { FunctionComponent } from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { Nav, NavItem, NavbarText } from 'reactstrap';

import { RootState } from '../../../store/configureStore';
import stageTitles from '../../../utilities/stageTitles';

const StagesBar: FunctionComponent<PropsFromRedux> = ({ activeStage }) => {
  const stages = stageTitles;

  return (
    <Nav>
      {stages.map((stage, index) => {
        const stylesClass = index + 1 === activeStage ? 'active' : '';
        return (
          <NavItem key={stage} className={stylesClass}>
            <NavbarText className="text-white">{stage}</NavbarText>
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
