import { Fragment } from "react";
import "./clause-section.css";

const ClauseSection = ({ section, children }) => {
  return (
    <Fragment>
      <h2>{section}</h2>
      <p className="clause">{children}</p>
    </Fragment>
  );
};
export default ClauseSection;
