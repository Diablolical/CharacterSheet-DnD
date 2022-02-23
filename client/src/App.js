import CharacterSheet from "./components/CharacterSheet";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Logo from "./images/logo.png";


function App() {
  return (
    <Router>
      <div id="wrapper">
        <header>
          <div className="logo">
            <img id="header" src={Logo} alt="logo" />
          </div>
        </header>
        <div id="fullwidth">
          <Routes>
            <Route path='/character' element={<CharacterSheet />} >
    	        <Route path='/character/:characterId' element={<CharacterSheet />} />
            </Route>
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
