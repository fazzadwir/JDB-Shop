import React, { useState } from "react";
import FaqItem from "./partials/FaqItem";
import { MDBAccordion, MDBAccordionItem, MDBContainer } from "mdb-react-ui-kit";

function FAQSection() {
  return (
    <div className="container mt-5">
      <h2 className=" fw-bold text-body-emphasis text-center">
        Frequently Asked Questions
      </h2>
      <p className="text-center">
        Pertanyaan yang selalu ditanyakan oleh buyer kita 😁
      </p>
      <MDBContainer className="mt-4" style={{ maxWidth: "1000px" }}>
        <MDBAccordion alwaysOpen initialActive={1}>
          {/* item 1 */}
          <FaqItem
            index="1"
            headerTitle="Kok gratis ongkir sih? gak rugi"
            mainAnswer="Enggak dong kak 😁, paling minus dikit"
            secondAnswer="Soalnya kita telah berpartner dengan ojol depan gang, untuk memberikan harga termurah dan pastinya gratis (kalau <5km) hehe"
          />
          {/* item 2 */}
          <FaqItem 
            index="2"
            headerTitle="Kak beli produk nya dimana sih mirip banget sama yang ori"
            mainAnswer="Tentunya di distributor terpercaya dong 😁"
            secondAnswer="Maaf yang kak ini rahasia, tolong mikir dikit hehe"
          />
          {/* Item 3 */}
          <FaqItem
            index="3"
            headerTitle="Kak aku bisa jadi reseller gak?"
            mainAnswer="Tentunya bisa dong"
            secondAnswer="Caranya adalah dengan kamu spent/belanja di toko kami dengan total 100jt maka kamu bisa jadi reseller di tokko kami, untung kan??"
          />
        </MDBAccordion>
      </MDBContainer>
    </div>
  );
  //   return (
  //     <div className="container mt-5">
  //       <h2 className="text-center mb-4">Frequently Asked Questions</h2>

  //       <div className="accordion" id="accordionExample">
  //         {/* Accordion Item #1 */}
  //         <FaqItem
  //           faqTitle="Ini ongkir nya beneran gratis"
  //           faqMainAnswer="Iya bener bangett onkir nya gratis"
  //           faqAnswer="Jadi tunggu apa lagi? buruan order !"
  //         />
  //         <FaqItem
  //           faqTitle="Kamu nanyea?"
  //           faqMainAnswer="Apakah kamu bertanya?"
  //           faqAnswer="Iyea"
  //         />
  //         <FaqItem
  //           faqTitle="Kamu nanyea?"
  //           faqMainAnswer="Apakah kamu bertanya?"
  //           faqAnswer="Iyea"
  //         />
  //       </div>
  //     </div>
  //   );
}

export default FAQSection;
