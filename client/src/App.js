import CharacterSheet from './components/CharacterSheet'
import Logo from './images/logo.png'

function App() {
  const characterId = null // set if loading saved data

  return (
    <div id="wrapper">
      <header>
          <div class="logo">
            <img id="header" src={Logo} alt="logo" />
          </div>
      </header>
      <div id="fullwidth">
        <CharacterSheet characterId={characterId} ></CharacterSheet>
      </div>
    </div>
  );
}

export default App;
