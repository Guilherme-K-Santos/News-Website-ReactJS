import { useState } from 'react';
import '../style-components/media-queries/mobile-menu.css';

function MobileMenu() {
    const [active, setMode] = useState(false)
    const toggleMode = () => {
      setMode(!active)
    }

    return (
        <div className='mobile-menu-component'>
            {/* these two divs below represent the mobile button that will be rendered in cases
            width-specific */}
            <div className={active ? 'icon iconActive' : 'icon'} onClick={toggleMode}>
                <div className='imagem imagemIcone'></div>
            </div>

            <nav id='mobile-menu' className={active ? 'menu menuOpen': 'menuClose'}>
                <a href="/" className="links">Home</a>
                <a href="/" className="links">New</a>
                <a href="/" className="links">Popular</a>
                <a href="/" className="links">Trending</a>
                <a href="/" className="links">Categories</a>
            </nav>
      </div>
    );
}

export default MobileMenu;
