import React, { useState } from "react";

const PersonalInfo = ({ formData, setFormData, handleSubmit }) => {
  const options = [
    { value: "lagos", text: "Lagos" },
    { value: "adamawa", text: "Adamawa" },
    { value: "akwa ibom", text: "Akwa Ibom" },
    { value: "anambra", text: "Anambra" },
  ];
  const [selected, setSelected] = useState(options[0].value);

  const handleChange = (event) => {
    console.log(event.target.value);
    setSelected(event.target.value);
  };

  return (
    <div className="font-link font-html bg-gradient-to-bl">
      <div className="form-container flex flex-col ">
        <div className="top block">
          <h1 className="cmplt mr-96 whitespace-nowrap  text-lightbluish">Complete your Purchase</h1>
          <div className="navigation font-html ">
            <ul className="lis flex items-center ">
              
              <li className="personal-info relative right-0.5 text-orangeyellow">Personal Info </li>
              <li className="billinfo text-bluish">Billing Info</li>
              
              <li className="conpayment text-bluish">Confirm Payment</li>
            </ul>
            <div className="bar bg-orangish rounded">
               .
            </div>
          </div>
        </div>
        <form className="flex flex-col text-start">
          <label htmlFor="name">Name</label>
          <input
            onChange={(e) => {
              setFormData({ ...formData, name: e.target.value });
            }}
            required
            type="text"
            name="name"
            id="name"
            value={formData.name}
            placeholder="Opara Linus Ahmed"
          />

          <label htmlFor="email">
            Email Address <span>*</span>
            <br />
            <p>The purchase receipt would be sent to this address</p>
          </label>
          <input
            onChange={(e) => {
              setFormData({ ...formData, email: e.target.value });
            }}
            required
            type="email"
            name="email"
            id="email"
            value={formData.email}
            placeholder="OparaLinusAhmed@devmail.com"
          />

          <label htmlFor="address">Address 1 </label>
          <input
            onChange={(e) => {
              setFormData({ ...formData, address1: e.target.value });
            }}
            required
            type="text"
            name="address"
            id="address"
            value={formData.address1}
            placeholder="The address of the user goes here"
          />
          <label htmlFor="address">Address 2 </label>
          <input
            onChange={(e) => {
              setFormData({ ...formData, address2: e.target.value });
            }}
            required
            type="text"
            name="address"
            id="address"
            value={formData.address2}
            placeholder="and here"
          />

          <div className="wrap flex items-center gap-3">
            <div className="lg-wrap flex flex-col">
              <label htmlFor="lg">Local Government</label>
              <input
                onChange={(e) => {
                  setFormData({ ...formData, lg: e.target.value });
                }}
                required
                type="text"
                value={formData.lg}
                name="lg"
                id="lg"
                placeholder="Surulere"
                className=" w-64"
              />
            </div>
            <div className="state-wrap flex flex-col mr-12 relative">
              <label htmlFor="state">State</label>

              <select
                onChange={handleChange}
                value={selected}
                name="states_of_nigeria"
                id="select"
                className=" w-44"
              >
                {options.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.text}
                  </option>
                ))}
                {/* <option>ABUJA FCT</option>
                <option>ABIA</option>
                <option>ADAMAWA</option>
                <option>AKWA IBOM</option>
                <option>ANAMBRA</option>
                <option>BAUCHI</option>
                <option>BAYELSA</option>
                <option>BENUE</option>
                <option>BORNO</option>
                <option>CROSS RIVER</option>
                <option>DELTA</option>
                <option>EBONYI</option>
                <option>EDO</option>
                <option>EKITI</option>
                <option>ENUGU</option>
                <option>GOMBE</option>
                <option>IMO</option>
                <option>JIGAWA</option>
                <option>KADUNA</option>
                <option>KANO</option>
                <option>KATSINA</option>
                <option>KEBBI</option>
                <option>KOGI</option>
                <option>KWARA</option>
                <option>LAGOS</option>
                <option>NASSARAWA</option>
                <option>NIGER</option>
                <option>OGUN</option>
                <option>ONDO</option>
                <option>OSUN</option>
                <option>OYO</option>
                <option>PLATEAU</option>
                <option>RIVERS</option>
                <option>SOKOTO</option>
                <option>TARABA</option>
                <option>YOBE</option>
                <option>ZAMFARA</option> */}
              </select>
            </div>
          </div>
          {/* <div className="buttons  flex gap-4">
            <button type="submit">Next</button>
            <button type="button"> Cancel Payment</button>
          </div> */}
        </form>
      </div>
    </div>
  );
};

export default PersonalInfo;
