import React from 'react';
import { Switch, Route, useLocation } from 'react-router-dom';
import { useTransition, animated } from 'react-spring';

import Home from '../Home';
import Works from '../Works';
import Container from '../../styledComponents/Container';

const App: React.FC = () => {
  const location = useLocation();
  const transitions = useTransition(location, (loc) => loc.pathname, {
    from: {
      opacity: 0,
      transform: 'translate(100%, 0)',
    },
    enter: {
      opacity: 1,
      transform: 'translate(0, 0)',
    },
    leave: {
      opacity: 1,
      transform: 'translate(-50%, 0)',
    },
  });
  return (
    <Container>
      {transitions.map(({ item, props, key }) => (
        <animated.div key={key} style={props}>
          <Switch location={item}>
            <Route exact path="/" component={Home} />
            <Route exact path="/works" component={Works} />
          </Switch>
        </animated.div>
      ))}
    </Container>
  );
};

export default App;
