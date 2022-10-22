import "../Styles/JoinTheConversation.css";
import { Icons } from "./SocialMediaIcons/Icons";
export const JoinTheConversationView = () => {
  return (
    <div className="conversation">
      <ul>
        <li>Careers</li>
        <li>Executives</li>
        <li>Impact Report</li>
        <li>Our Commitments</li>
      </ul>
      <div>
        <h4 className="convo-text">Join The Conversation</h4>
        <div className="social-media-logos">
          <span>{Icons["instagram"]}</span>
          <span>{Icons["twich"]}</span>
          <span>{Icons["twitter"]}</span>
          <span>{Icons["youTube"]}</span>
          <span>{Icons["linkedIn"]}</span>
        </div>
      </div>
    </div>
  );
};
