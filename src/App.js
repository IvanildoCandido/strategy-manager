import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ReactTooltip from 'react-tooltip';
import SetStrategy from './pages/SetStrategy/SetStrategy';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={SetStrategy} />
      </Switch>
      <ReactTooltip place="bottom" effect="solid" />
    </BrowserRouter>
  );
}

export default App;
