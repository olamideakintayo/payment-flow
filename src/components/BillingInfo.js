import React, { useState } from "react";

const BillingInfo = () => {
  const options = [
    { value: "visa", text: "Visa" },
    { value: "verve", text: "Verve" },
    { value: "masterCard", text: "Master Card" },
  ];
  const [selected, setSelected] = useState(options[0].value);
  const handleChange = (event) => {
    setSelected(event.target.value);
  };
  return (
    <div>
      <div className="form-container flex flex-col">
        <div className="top block">
          <h1 className="cmplt mr-96 whitespace-nowrap  text-lightbluish">Complete your purchase</h1>
          <div className="navigation font-html ">
            <ul className="lis flex items-center">
              <li  className="personal-info relative right-0.5 text-bluish">Personal Info</li>
              <li className="billinfo text-orangeyellow">Billing Info</li>
              <li className="conpayment text-bluish">Confirm Payment</li>
            </ul>
            <div className="bar2 bg-orangish rounded">
               .
            </div>
          </div>
          <form className="flex flex-col text-start">
            <label htmlFor="name">Name</label>
            <input required type="text" id="card-name" placeholder="Linus Opara Ahmed"/>

            <label htmlFor="card">
              Card Type
              <span className="text-red"> *</span>
            </label>
            <select
              name="cardType"
              id="cardType"
              value={selected}
              onChange={handleChange}
            >
              {options.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.text}
                </option>
              ))}
            </select>
            <div className="wrap flex gap-6 items-center">
              <div className="cardDetails-wrap">
                <label htmlFor="cardNumber">
                  Card details  <span>*</span>
                </label>
                <input required name="cardNumber" id="cardd-number" type="number" placeholder="44960  44960  44960  44960" />
              </div>
              <div className="expiry-wrap">
                <label htmlFor="expiry" className="relative left-4">
                  Expiry date   <span>*</span>
                </label>
                <input
                 
                  required
                  name="expiry-date"
                  id="expiryy-date"
                  placeholder="04 / 23"
                  className=" w-24 relative left-3"
                />
              </div>
              <div className="cvv-wrap">
                <label htmlFor="cvv" className="relative left-6">
                  CVV <span>*</span>
                </label>
                <input
                  className="w-[70px] relative bottom-0.5"
                  type="number"
                  required
                  max={3}
                  name="cvv"
                  id="cvv"
                  placeholder="923"
                />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BillingInfo;
