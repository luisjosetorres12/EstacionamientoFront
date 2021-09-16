import React, { useContext } from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import { LandingPage } from 'pages/Landing';
import { FoodMenuPage } from 'pages/FoodMenu';
import { CrearTicketPage } from 'pages/CrearTicket';
import { SessionContext } from 'context/SessionContext';
import { ConditionalRoute } from 'components/ConditionalRoute';

const App: React.FC = () => {
  const {
    data: { sessionId },
  } = useContext(SessionContext);
  return (
    <Router>
      <Switch>
        <ConditionalRoute path="/create" component={CrearTicketPage} />
        <ConditionalRoute path="/" component={LandingPage} />
      </Switch>
    </Router>
  );
};

export default App;
