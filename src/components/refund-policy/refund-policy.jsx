import Navbar, { MobileNav } from "../navbar";
import { Fragment } from "react";
import "./refund-policy.css";
import Footer from "../footer";
import SectionHeading from "../heading";
import ClauseSection from "../clause-section/clause-section";

const RefundPolicy = () => {
  return (
    <Fragment>
      <Navbar />
      <MobileNav />
      <main className="section" id="refund-policy-section">
        <div className="centered-content">
          <SectionHeading heading={`Refund policy`} />
          <ClauseSection section={`I. REFUNDABILITY OF PAYMENTS`}>
            In any event of Termination of Agreement whereby the Client demands
            a refund of service fee payments:
            <ol type="a" style={{ paddingLeft: "1.5rem" }}>
              <li>
                The Client shall in the first instance issue the stipulated 30
                days notice of Agreement Termination.
              </li>
              <li>
                The Service Provider shall only be liable to reapply the visa
                process at the costs and expenses of the Service Provider within
                a reasonable time limit that shall be agreed upon between both
                Parties.
              </li>
            </ol>
          </ClauseSection>
        </div>
      </main>
      <Footer />
    </Fragment>
  );
};
export default RefundPolicy;
