import "./App.css";
import {FeaturedGamesCard} from '../src/Components/FeaturedGamesCard';
import { Navbar } from "./Navbar";
import { LatestUpdates } from "./Components/LatestUpdates";
import { JoinNowView } from "./Components/JoinNowView";
import { JoinTheConversationView } from "./Components/JoinTheConversationView";
import { Footer } from "./Components/Footer";
import { SideNavbar } from "./Components/SideNavbar";

function App() {
  return (
    <>
      <div className="homePageImage">
        <Navbar />
        <div className="stackedImage">
          <img
            src="https://media.contentapi.ea.com/content/dam/eacom/SIMS/images/2021/05/ts4-adaptive-logo-center-aligned-ts4-light-xl-7x2-lg-5x2-md-2x1.png.adapt.crop7x2.1920w.png"
            alt=""
          />
          <h1 className="mainText">
            Create a unique world of Sims that’s an expression of you.
          </h1>
          <a href="/">
            <button className="playButton">Play For Free Now</button>
          </a>
        </div>
      </div>
      <div className="flagImage">
        <h2 className="flagText">Play the F1® 22 Free Play Weekend<button className="playButton">Learn More</button></h2>
      </div>
      <SideNavbar/>
      <FeaturedGamesCard/>
      <LatestUpdates/>
      <JoinNowView/>
      <JoinTheConversationView/>
      <Footer/>
    </>
  );
}

export default App;
