import { Fragment } from "react";
import "./footer.css";
import { MdCopyright } from "react-icons/md";
import { Link } from "react-router-dom";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <Fragment>
      <main className="section" id="footer-section">
        <div className="centered-content">
          <div className="footer">
            <div className="footer-left">
              <i>
                <MdCopyright />
              </i>
              <span className="copyright-year">{year}</span>
              <span>Pithone International. All Rights Reserved.</span>
            </div>
            <div className="footer-links">
              <Link to="/terms">Terms & Conditions</Link> |
              <Link to="/refund-policy">Refund Policy</Link>
            </div>
          </div>
        </div>
      </main>
    </Fragment>
  );
};

export default Footer;
