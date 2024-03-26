import { Fragment } from "react";

import './overlay.css';

import { MdOutlineClose } from "react-icons/md";

const Overlay = ({ icon, header, message, onClose, id }) => {
    
    return (
        <Fragment>
            <div className="overlay">
                <div className="overlay-content">
                    <div className="response" id={id} >
                        <div className="icon">
                            <div className="response-icon">
                                <i>
                                    {icon}                                    
                                </i>
                            </div>
                        </div>
                        <div className="message">
                            <h2>
                                {header}
                            </h2>
                            <p>
                                {message}
                            </p>
                        </div>
                        <div className="close">
                            <i onClick={onClose} > 
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