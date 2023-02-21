import '../style-components/Menu.css'

function Menu() {
  return (
    <div className="menu">
      <img src={process.env.PUBLIC_URL + '/images/logo.svg'} alt="logo" />
      <nav>
        <a href="/" className="links">Home</a>
        <a href="/" className="links">New</a>
        <a href="/" className="links">Popular</a>
        <a href="/" className="links">Trending</a>
        <a href="/" className="links">Categories</a>
      </nav>
    </div>
  );
}

export default Menu;
