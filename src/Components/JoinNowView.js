import "../Styles/JoinNow.css";
export const JoinNowView = () => {
  return (
    <div>
      <div className="joinNowImage">
        <div className="playImage">
          <img
            src="https://media.contentapi.ea.com/content/dam/eacom/subscription/ea-play/common/hero-logos/color/ea-play-logo-coral-hero-logo-small.svg"
            alt=""
          />
        </div>
        <h2 className="joinNowText">
          Don’t just get the game. Get more from your game. Unlock exclusive
          rewards, members-only content, and a library of top titles.
        </h2>
        <button className="joinNowButton">Join Now</button>
      </div>
      <div className="learnMore">
        <h2 className="learn-more-text">
          Parents: Video game control is in your hands.
          <button className="learn-more-btn">Learn More</button>
        </h2>
      </div>
    </div>
  );
};
