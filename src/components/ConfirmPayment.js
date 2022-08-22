import React from "react";

const ConfirmPayment = () => {
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
    </div>
      <div className="card form-container2 w-[450px] m-auto">
        <div className="card-header flex bg-white">
          <p className="relative left-8 top-3 text-white">Item Name</p>
          <div className="text-white flex flex-wrap">
          <span className="naira relative right-12 top-4">&#8358;</span>
          <p className="pricee flex relative top-4 right-10"> Price</p>
          </div>
        </div>

        <div className="body content-stuffs">
          <div className="flex  justify-between">
            <div className="data-science relative bottom-8 left-7">
              <p className="text-lightbluish">Data science and usablity</p>
            </div>
            <div className="price1 text-lightbluish"> 50,000.00</div>
            <hr />
          </div>
          <div className="flex ship justify-between">
            <div className="Shipping">
              <p className="text-lightbluish relative left-7">Shipping </p>
            </div>
            <div className="price2"> 0.00</div>
          
          </div>
          <hr />
          <div className="total flex justify-center gap-60 relative top-24">
            <div className="Ttl">
              <p className="text-bluish right-4 relative">Total</p>
            </div>
            <div className="price3 text-lightbluish">50,000.00</div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default ConfirmPayment;
