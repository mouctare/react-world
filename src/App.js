import Home from "./pages/Home";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/a-propos" component={About} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
