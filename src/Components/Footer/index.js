import "../../Styles/Footer.css";
export const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-comp">
        <img
          src="https://media.contentapi.ea.com/content/dam/eacom/en-gb/common/october-ea-ring.png"
          alt=""
        />
        <ul>
          <li>Game Library</li>
          <li>Subscribe</li>
          <li>Redeem Code</li>
          <li>EA App</li>
          <li>About</li>
          <li>Accessibility</li>
          <li>Help</li>
        </ul>
      </div>
      <div className="footer-comp2">
        <ul>
          <li>Legal & Privacy</li>
          <li>User Agreement</li>
        </ul>
      </div>
      <div className="footer-comp3">
        <ul>
          <li>Privacy & Cookie Policy (Your Privacy Rights)</li>
          <li>Modern Slavery Act Statement</li>
        </ul>
      </div>
      <div className="footer-comp4">
        <ul>
          <li>UK Tax Strategy</li>
          <li>UK Gender Pay Gap Disclosure</li>
          <li>Online Service Updates</li>
        </ul>
      </div>
      <div className="footer-comp5">
        <ul>
          <li>Security</li>
          <li>YouTube Terms of Service</li>
          <li>Google Privacy Policy</li>
        </ul>
      </div>
      <div className="copyright">
        <div>© 2022 Electronic Arts Inc.</div>
        <img
          src="//privacy-policy.truste.com/privacy-seal/seal?rid=f1a11c5d-0232-4077-8498-2e69a38c1335"
          alt=""
        />
      </div>
    </div>
  );
};
