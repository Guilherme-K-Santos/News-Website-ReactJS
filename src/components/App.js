import Menu from './Menu';
import SideMenu from './Side-menu';
import MainMenu from './Main-menu';
import FooterMenu from './Footer-menu';
import MobileMenu from './Mobile-menu';
import '../style-components/App.css'
import '../style-components/media-queries/media-queries.css';

function App() {
  return (
    <div>
      <MobileMenu />
      <div className="App">
        <Menu />
        <div className="main-content">
          <MainMenu />
          <SideMenu />
        </div>
        <FooterMenu />
      </div>
    </div>
  );
}

export default App;
