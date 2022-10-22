import "../Styles/Navbar.css";
import "../Styles/SideNavbar.css";
export const Navbar = () => {
  const openSideNavbar = () => {
    document.getElementById("mySidenav").style.width = "350px";
  };
  return (
    <nav className="topnav">
      <ul className="menu">
        <li className="electronicArts" onClick={openSideNavbar}>
          &#xFE19;
        </li>
        <li className="electronicArts">Electronic Arts</li>
        <li>
          Games <i className="arrow down" />
          <ul className="sub-menu games">
            <div>
              <li className="division1">BROWSE GAMES</li>
              <li>Latest Games</li>
              <li>Coming Soon</li>
              <li>Free-To-Play</li>
              <li>EA SPORTS</li>
              <li>EA Originals</li>
              <li>Games Library</li>
            </div>
            <div>
              <li className="division1">PLATFORMS</li>
              <li>PC</li>
              <li>PlayStation 5</li>
              <li>Old PlayStations</li>
              <li>Xbor Series X</li>
              <li>Nintendo Switch</li>
              <li>Mobile</li>
            </div>
          </ul>
        </li>
        <li>
          More Experience <i className="arrow down" />
          <ul className="sub-menu">
            <li>EA Play</li>
            <li>The EA app</li>
            <li>Competitive Gaming</li>
            <li>EA Play Live</li>
          </ul>
        </li>
        <li>
          About <i className="arrow down" />
          <ul className="sub-menu">
            <li>Company</li>
            <li>EA Studios</li>
            <li>Careers</li>
            <li>Our Technologies</li>
            <li>EA Partners</li>
            <li>News</li>
            <li>Inside EA</li>
          </ul>
        </li>
        <li>
          Commitments<i className="arrow down" />
          <ul className="sub-menu">
            <li>Our Commitments</li>
            <li>Positive Play</li>
            <li>Inclusion & Diversity</li>
            <li>Social Impact</li>
            <li>People & Culture</li>
            <li>Environment</li>
          </ul>
        </li>
        <li>
          Resources <i className="arrow down" />
          <ul className="sub-menu">
            <li>Help</li>
            <li>Forums</li>
            <li>Parental Controls</li>
            <li>Accessibility</li>
            <li>Press</li>
            <li>Investors</li>
            <li>Playtesting</li>
          </ul>
        </li>
      </ul>
    </nav>
  );
};
