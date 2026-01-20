import { Fragment } from "react";
import Navbar from "../navbar";
import Footer from "../footer";
import SectionHeading from "../heading";
import "./terms.css";
import { MobileNav } from "../navbar";
import ClauseSection from "../clause-section/clause-section";

const Terms = () => {
  return (
    <Fragment>
      <Navbar />
      <MobileNav />
      <main className="section" id="terms-section">
        <div className="centered-content">
          <SectionHeading heading={`Terms and conditions`} />
          {/* <ClauseSection section={`I. PARTIES`}>
            This Service Contract Agreement (hereinafter referred to as the
            “Agreement”) is entered into on{" "}
            <span
              style={{
                textDecoration: "underline",
                display: "inline-block",
                minWidth: "300px",
              }}
            >
              _______________________________________________________
            </span>{" "}
            2025 (the “Effective Date”), by and between{" "}
            <strong>PITHONE INTERNATIONAL</strong>, with an address of{" "}
            <span
              style={{
                textDecoration: "underline",
                display: "inline-block",
                minWidth: "200px",
              }}
            >
              _________________________
            </span>{" "}
            (hereinafter referred to as the “Service Provider”) and{" "}
            <span
              style={{
                textDecoration: "underline",
                display: "inline-block",
                minWidth: "300px",
              }}
            >
              ___________________________________________________
            </span>
            , with an address of{" "}
            <span
              style={{
                textDecoration: "underline",
                display: "inline-block",
                minWidth: "300px",
              }}
            >
              _________________________________________________________
            </span>
            , (hereinafter referred to as the “Client”) (collectively referred
            to as the “Parties”).
          </ClauseSection> */}
          <ClauseSection
            section={`I. LIST OF SERVICES PROVIDED AND THEIR PRICES`}
          >
            During the period of this Agreement, the Service Provider shall have
            the responsibility to perform and provide the following services
            (hereinafter referred to as “Services”) :{""}
            <table
              style={{
                width: "100%",
                borderCollapse: "collapse",
                marginTop: "1rem",
              }}
            >
              <thead>
                <tr>
                  <th
                    style={{
                      border: "1px solid #052F58CC",
                      padding: "8px",
                      textAlign: "left",
                    }}
                  >
                    S/N
                  </th>
                  <th
                    style={{
                      border: "1px solid #052F58CC",
                      padding: "8px",
                      textAlign: "left",
                    }}
                  >
                    Description
                  </th>
                  <th
                    style={{
                      border: "1px solid #052F58CC",
                      padding: "8px",
                      textAlign: "left",
                    }}
                  >
                    Amount (Ksh)
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td style={{ border: "1px solid #052F58CC", padding: "8px" }}>
                    1
                  </td>
                  <td style={{ border: "1px solid #052F58CC", padding: "8px" }}>
                    Appraisal of Client Financial Information
                  </td>
                  <td style={{ border: "1px solid #052F58CC", padding: "8px" }}>
                    (depends on destination)
                  </td>
                </tr>
                <tr>
                  <td style={{ border: "1px solid #052F58CC", padding: "8px" }}>
                    2
                  </td>
                  <td style={{ border: "1px solid #052F58CC", padding: "8px" }}>
                    Flight and Hotel Reservation
                  </td>
                  <td style={{ border: "1px solid #052F58CC", padding: "8px" }}>
                    (depends on destination)
                  </td>
                </tr>
                <tr>
                  <td style={{ border: "1px solid #052F58CC", padding: "8px" }}>
                    3
                  </td>
                  <td style={{ border: "1px solid #052F58CC", padding: "8px" }}>
                    Invitation Letter
                  </td>
                  <td style={{ border: "1px solid #052F58CC", padding: "8px" }}>
                    (depends on destination)
                  </td>
                </tr>
                <tr>
                  <td style={{ border: "1px solid #052F58CC", padding: "8px" }}>
                    4
                  </td>
                  <td style={{ border: "1px solid #052F58CC", padding: "8px" }}>
                    Visa Application/ Processing Services (including medicals)
                  </td>
                  <td style={{ border: "1px solid #052F58CC", padding: "8px" }}>
                    (depends on destination)
                  </td>
                </tr>
                <tr>
                  <td style={{ border: "1px solid #052F58CC", padding: "8px" }}>
                    5
                  </td>
                  <td style={{ border: "1px solid #052F58CC", padding: "8px" }}>
                    Visa
                  </td>
                  <td style={{ border: "1px solid #052F58CC", padding: "8px" }}>
                    (depends on destination)
                  </td>
                </tr>
                <tr>
                  <td style={{ border: "1px solid #052F58CC", padding: "8px" }}>
                    6
                  </td>
                  <td style={{ border: "1px solid #052F58CC", padding: "8px" }}>
                    Others
                  </td>
                  <td style={{ border: "1px solid #052F58CC", padding: "8px" }}>
                    (depends on destination)
                  </td>
                </tr>
                <tr>
                  <td
                    colSpan="2"
                    style={{
                      border: "1px solid #052F58CC",
                      padding: "8px",
                      fontWeight: "bold",
                    }}
                  >
                    TOTAL
                  </td>
                  <td style={{ border: "1px solid #052F58CC", padding: "8px" }}>
                    (depends on destination)
                  </td>
                </tr>
              </tbody>
            </table>
          </ClauseSection>
          <ClauseSection section={`II. PAYMENT TERMS`}>
            The Services are to be paid for as follows:
            <ol type="a" style={{ paddingLeft: "1.5rem" }}>
              <li>
                Amount at signing of this Agreement:{" "}
                <span
                  style={{
                    textDecoration: "underline",
                    display: "inline-block",
                    minWidth: "200px",
                  }}
                >
                  (depends on destination)
                </span>
              </li>
              <li>
                Amount at the completion of the provision of the Services:{" "}
                <span
                  style={{
                    textDecoration: "underline",
                    display: "inline-block",
                    minWidth: "200px",
                  }}
                >
                  (depends on destination)
                </span>
              </li>
            </ol>
          </ClauseSection>
          <ClauseSection section={`III. INVOICES`}>
            The Parties agree that the invoiced amounts must be paid within
            fourteen (14) days after the Client receives the invoice.
          </ClauseSection>
          <ClauseSection section={`IV. TERM OF AGREEMENT`}>
            This Agreement shall be effective on the date of signing this
            Agreement (hereinafter referred to as the “Effective Date”) and will
            end on ________________. At the end of the term of the Agreement, it
            will not be automatically renewed for a new term.
          </ClauseSection>
          <ClauseSection section={`V. TERMINATION`}>
            This Agreement may be terminated in the event that any of the
            following occurs:
            <ol type="a" style={{ paddingLeft: "1.5rem" }}>
              <li>
                Immediately in the event that one of the Parties breaches this
                Agreement.
              </li>
              <li>
                At any given time by providing written notice to the other party
                30 days prior to terminating the Agreement.
              </li>
              <li>
                Upon terminating this Agreement, the Client will be required to
                return all the Service Provider’s products or any other content
                (if any) at his/her earliest convenience, but not beyond seven
                (7) working days.
              </li>
              <li>
                This Agreement will automatically end upon the completion of the
                provision of the Services and payment due.
              </li>
            </ol>
          </ClauseSection>
          <ClauseSection
            section={`VI. NON-CIRCUMVENTION/ NON-DISCLOSURE/ CONFIDENTIALITY`}
          >
            <ol type="a" style={{ paddingLeft: "1.5rem" }}>
              <li>
                The Client agrees to refrain from initiating, contacting or
                attempting to share or obtain information or conducting business
                for the purposes of circumventing the Service Provider, with any
                contacts, other current or prospective clients, organizations,
                institutions or embassies referred by the Service Provider or
                with any affiliates of the entity or entities specified in the
                Service Agreement.{" "}
              </li>
              <li>
                Circumvention is hereby understood to mean any conduct of
                interference or unauthorized contact, sharing or obtaining
                information, or business dealing between the Client and any of
                the above-mentioned entities which could prevent the Service
                Provider from successful transaction conclusion, realizing
                profits, fees or other gains, is only to be carried out with
                explicit, written permission from the Service Provider on a
                case-by-case basis.
              </li>
            </ol>
          </ClauseSection>
          <ClauseSection section={`VII. REFUNDABILITY OF PAYMENTS`}>
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
          <ClauseSection section={`VIII. RELATIONSHIP OF THE PARTIES`}>
            The Parties agree that this is a non-exclusive agreement and that
            the Parties are regarded as independent contractors.
          </ClauseSection>
          <ClauseSection section={`IX. AMENDMENTS`}>
            <ol type="a" style={{ paddingLeft: "1.5rem" }}>
              <li>
                The Parties agree that any amendments made to this Agreement
                must be in writing, where they must be signed by both Parties to
                this Agreement.
              </li>
              <li>
                Accordingly, any amendments made by the Parties will be applied
                to this Agreement.
              </li>
            </ol>
          </ClauseSection>
          <ClauseSection section={`X. ASSIGNMENT`}>
            The Parties are not entitled to assign the responsibilities that
            they have under this Agreement to anyone else, unless both Parties
            agree to the assignment and provide such agreement in writing.
          </ClauseSection>
          <ClauseSection section={`XI. ENTIRE AGREEMENT`}>
            This Agreement contains the entire agreement and understanding among
            the Parties to it with respect to its subject matter, and supersedes
            all prior agreements, understandings, inducements anThis Agreement
            shall be governed by and construed in accordance with the laws of
            Kenyad conditions, express or implied, oral or written, of any
            nature whatsoever with respect to its subject matter. The express
            terms of the Agreement control and supersede any course of
            performance and/or usage of the trade inconsistent with any of its
            terms.
          </ClauseSection>
          <ClauseSection section={`XII. SEVERABILITY`}>
            In the event that any provision of this Agreement is found to be
            void and unenforceable by a court of competent jurisdiction, then
            the remaining provisions will remain in force in accordance with the
            Parties’ intention.
          </ClauseSection>
          <ClauseSection section={`XIII. GOVERNING LAW`}>
            This Agreement shall be governed by and construed in accordance with
            the laws of Kenya
          </ClauseSection>
          <ClauseSection section={`XIV. ALTERNATIVE DISPUTE RESOLUTION`}>
            Any dispute or difference whatsoever arising out of, or in
            connection with, this Agreement shall be submitted to
            arbitration/mediation/negotiation (circle one) in accordance with,
            and subject to the laws of the Republic of Kenya
          </ClauseSection>
        </div>
      </main>
      <Footer />
    </Fragment>
  );
};
export default Terms;
