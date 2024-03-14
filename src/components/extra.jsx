import { Fragment } from "react"

import './extra.css';

import clearPithone from '../assets/pithone-bg.png'

const Extra = () => {
    
    return (
        <Fragment>
            <main className="section" id="extra-section"> 
                <div className="centered-content" id="extra-content" >
                    <img className="clear-image" src={clearPithone} />
                </div>  
            </main>
        </Fragment>
    )
}
export default Extra;