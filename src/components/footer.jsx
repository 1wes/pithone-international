import { Fragment } from "react";

import './footer.css';

import { MdCopyright } from "react-icons/md";

const Footer = () => {

    const year=new Date().getFullYear()
    
    return (
        <Fragment>
            <main className="section" id="footer-section">
                <div className="centered-content">
                    <div className="footer">
                        <i>
                            <MdCopyright/>
                        </i>
                        <span className="copyright-year">
                            {year}.
                        </span>
                        <span>
                            Pithone International. All Rights Reserved.
                        </span>
                    </div>
                </div>
            </main>
        </Fragment>
    )
}

export default Footer;