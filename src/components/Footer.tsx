import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopyright } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookF,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <footer className="py-2 bg-primary text-center fixed-bottom w-100 mt-5">
      <div className="container">
        <p className="text-white">
          <FontAwesomeIcon icon={faCopyright} /> Copyright 2024. All Rights
          Reserved.
        </p>
        <div className="social-icons ml-3">
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
      </div>
    </footer>
  );
}
