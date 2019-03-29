import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

const Footer = () => {
  return (
    <MDBFooter color="blue" className="font-small pt-4 mt-4">
        <MDBContainer fluid className="text-center py-3">
          &copy; {new Date().getFullYear()} Copyright: <a href="http://www.oualstechnologies.com"> oualstechnologies.com </a>
        </MDBContainer>
    </MDBFooter>
  );
}

export default Footer;