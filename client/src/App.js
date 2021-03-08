import { Switch, Route, Redirect } from 'react-router-dom';

import { Header } from './components/Header';
import { About, Contact, Portfolio, Resume } from './pages';
import './App.css';

function App() {
  
  return (
    <>
      <Header />
      <Switch>
        <Route path="/" exact>
          <About />
        </Route>
        <Route path="/contact" exact>
          <Contact />
        </Route>
        <Route path="/portfolio" exact>
          <Portfolio />
        </Route>
        <Route path="/resume" exact>
          <Resume />
        </Route>
        <Route path="*">
          <Redirect to="/" />
        </Route>
      </Switch>
    </>
  );
}

export default App;
