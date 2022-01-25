import CharacterSheet from './components/CharacterSheet'
import Logo from './images/logo.png'

function App() {
  return (
    <div id="wrapper">
      <header>
          <div class="logo">
            <img id="header" src={Logo} alt="logo" />
          </div>
      </header>
      <div id="fullwidth">
        <CharacterSheet></CharacterSheet>
      </div>
    </div>
  );
}

export default App;
