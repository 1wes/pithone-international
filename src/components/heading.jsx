import { Fragment } from "react";

import './heading.css';

const SectionHeading = ({heading}) => {
    
    return (
        <Fragment>
            <h1 className="section-heading">
                {`${heading}`}
            </h1>
        </Fragment>
    )
}
export default SectionHeading;