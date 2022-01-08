import Home from "./components/Home/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Page from "./components/Page/Page";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/pokemon/:name" component={Page} />
      </Switch>
    </Router>
  );
}

export default App;
