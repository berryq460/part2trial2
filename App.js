import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import Dog from "./components/service/Dog";
import Cats from "./components/service/Cats";
import Header from "./components/Header";
import CatSearch from "./components/service/BreedSearch"

function App() {
  return (
    <div>
      <Router>
      <Header />
      <main className="app-main">
             
        <Switch>
        <Route exact path="/" component={Home} />
          <Route path="/Dog" component={Dog} />
          <Route path="/Cats" component={Cats} />
          <Route exact path="/BreedSearch" component={CatSearch} />
        </Switch>
      </main>
      </Router>
    </div>

  );
}
export default App;

