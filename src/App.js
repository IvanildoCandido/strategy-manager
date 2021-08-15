import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ReactTooltip from 'react-tooltip';
import SetStrategy from './pages/SetStrategy/SetStrategy';
import ViewStrategies from './pages/ViewStrategies/ViewStrategies';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={SetStrategy} />
        <Route exact path="/strategies" component={ViewStrategies} />
      </Switch>
      <ReactTooltip place="bottom" effect="solid" />
    </BrowserRouter>
  );
}

export default App;
