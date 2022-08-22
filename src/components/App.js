import PersonalInfo from "./PersonalInfo";

import { Routes, Route } from "react-router-dom";
import Success from "./Success";
import Form from "./Form";
function App() {
  return (
    <div className="App text-center font-html">
      <Routes>
        <Route to="/" element={<PersonalInfo />} />
        <Route to="/success" element={<Success />} />
      </Routes>
      <Form />
    </div>
  );
}

export default App;
