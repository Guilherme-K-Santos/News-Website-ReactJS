import '../style-components/Main-menu.css'
import '../style-components/media-queries/media-queries.css'

function MainMenu() {
  return (
    <div className="main">
      <img src={process.env.PUBLIC_URL + '/images/image-web-3-desktop.jpg'} alt="Colorful puzzle" />
      
      <div className="content">
        <h1 className="h1-mainmenu">The Bright Future of Web 3.0?</h1>
        <div>
          <p>
            We dive into the next evolution of the 
            web that claims to put the power of the platforms back into the hands 
            of the people. 
            But is it really fulfilling its promise?
          </p>

          <a href="/">READ MORE</a>
        </div>
      </div>
    </div>
  );
}

export default MainMenu;