import { Fragment } from "react";

import './overlay.css';

import { GiCheckMark } from "react-icons/gi";
import { MdOutlineClose } from "react-icons/md";

const Overlay = () => {
    
    return (
        <Fragment>
            <div className="overlay">
                <div className="overlay-content">
                    <div className="response">
                        <div className="icon">
                            <div className="response-icon">
                                <i>
                                    <GiCheckMark />                                    
                                </i>
                            </div>
                        </div>
                        <div className="message">
                            <h2>
                                Success !
                            </h2>
                            <p>
                                Your message has successfully been delivered
                            </p>
                        </div>
                        <div className="close">
                            <i>
                                <MdOutlineClose/>
                            </i>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}
export default Overlay;