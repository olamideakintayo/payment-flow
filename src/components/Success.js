import React from "react";
import success from "./success.png"
import { Link } from "react-router-dom";
const Success = () => {
  return (
    <div>
      <div className="success w-[450px] m-auto ">
        <div className="success__header">
          
            <img src={success} alt="success" className="success-image" />
         
          <h1 className="purchase2 whitespace-nowrap  text-lightbluish">Purchase completed</h1>
          <p className="please text-bluedark">Please check your email concerning <wbr />                                         
        this transaction</p>

          <Link to="/" className="return-home text-orangishyel">
            Return Home</Link>
        </div>
      </div>
    </div>
  );
};

export default Success;
