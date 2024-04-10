import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopyright } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookF,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <footer
      className="py-3 bg-primary text-center"
      style={{ position: "fixed", bottom: 0, width: "100%" }}
    >
      <div className="container">
        <p className="text-white">
          <FontAwesomeIcon icon={faCopyright} /> Copyright 2023. All Rights
          Reserved.
        </p>
        <a href="https://www.facebook.com/" target="_blank" className="mx-3">
          <FontAwesomeIcon icon={faFacebookF} color="white" size="2x" />
        </a>
        <a href="https://twitter.com/" target="_blank" className="mx-3">
          <FontAwesomeIcon icon={faTwitter} color="white" size="2x" />
        </a>
        <a href="https://instagram.com/" target="_blank" className="mx-3">
          <FontAwesomeIcon icon={faInstagram} color="white" size="2x" />
        </a>
      </div>
    </footer>
  );
}
