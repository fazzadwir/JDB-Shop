import React from "react";
import { MDBAccordionItem } from "mdb-react-ui-kit";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

function FaqItem(props) {
  return (
    <MDBAccordionItem collapseId={props.index} headerTitle={props.headerTitle}>
      <strong>{props.mainAnswer}</strong> <br/>{props.secondAnswer}
    </MDBAccordionItem>
  );
}

export default FaqItem;
