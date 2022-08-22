import React, { useState } from "react";
import BillingInfo from "./BillingInfo";
import ConfirmPayment from "./ConfirmPayment";
import PersonalInfo from "./PersonalInfo";
import Success from "./Success";

const Form = () => {
  const [page, setPage] = useState(0);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address1: "",
    address2: "",
    lg: "",
    cardNumber: 0,
    cardType: "",
    cvv: 0,
  });
  const FormTitles = [
    "Personal Info",
    "Billing Info",
    "Confirm Payment",
    "Success",
  ];

  const PageDisplay = () => {
    if (page === 0) {
      return <PersonalInfo formData={formData} setFormData={setFormData} />;
    } else if (page === 1) {
      return <BillingInfo />;
    } else if (page === 2) {
      return <ConfirmPayment />;
    } else {
      return <Success />;
    }
  };
  const handleSubmit = () => {
    if (page === 0) {
      // handle error
    } else if (page === 1) {
      //   handle erroe        )
    }
    setPage(page + 1);
  };

  return (
    <div>
      <div className="header">
        <h1>{FormTitles[page]}</h1>
      </div>
      <div className="progressBar"></div>
      <div className="body">{PageDisplay()}</div>

      <div className={page === 3 ? "hidden" : "footer block m-auto"}>
        <button disabled={page === FormTitles.length - 1} onClick={handleSubmit} className=" mr-48 justify-items-stretch bg-orangish  text-white font-bold py-3 px-16 hover:bg-orange-400 m-7  rounded">
          {page === 2 ? "Pay" : "Next"}
        </button>
        <button type="button" disabled={page === 0} className=" relative right-36 text-lightbluish">
          Cancel Payment
        </button>
      </div>
    </div>
  );
};

export default Form;
