import { Switch, Route, Link, Redirect} from 'react-router-dom';
import './App.css';

function App() {
  return (
    <Switch>
      <Route path="/" exact>
        <h1>This is our home page</h1>
      </Route>
      <Route path="/portfolio" exact>
        <h1>This is our portfolio page</h1>
      </Route>
      <Route path="/contact" exact>
        <h1>This is our contact page</h1>
      </Route>
      <Route path="*">
        <Redirect to="/" />
      </Route>
    </Switch>
  );
}

export default App;
