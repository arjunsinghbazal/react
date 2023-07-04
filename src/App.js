import React from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import ShowData from "./showData";
import SingleData from "./SingleData";

const App = () => {
  const navigate = useNavigate();

  function handleNavigateToShowData() {
    navigate("/");
  }

  return (
    <>
      <div>
        <nav>
          <p onClick={handleNavigateToShowData}>Social Media App</p> {/* Add onClick event */}
        </nav>
        <Routes>
          <Route path="/" element={<ShowData />} />
          <Route path="/item/:id" element={<SingleData />} />
        </Routes>
      </div>
    </>
  );
};

export default App;
