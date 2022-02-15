import CharacterSheet from "./components/CharacterSheet";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Logo from "./images/logo.png";


function App() {
  const characterId = null; // set if loading saved data

  return (
    <Router>
      <div id="wrapper">
        <header>
          <div className="logo">
            <img id="header" src={Logo} alt="logo" />
          </div>
        </header>
        <div id="fullwidth">
          <Switch>
    	      <Route exact path='/:characterId'>
              <CharacterSheet characterId={characterId}></CharacterSheet>
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
