import React from "react";
import Information from "../../components/Information";
import { useNavigate } from "react-router-dom";

const PersonalInfo = () => {
  const navigate = useNavigate();
  function addPersonalInfo(personalData) {
    // from here i wanna send http request we will use default function fetch here
    fetch(
      "https://reactweb-40795-default-rtdb.asia-southeast1.firebasedatabase.app//onPersonalData.json",
      {
        method: "POST",
        body: JSON.stringify(personalData),
        headers: {
          "Content-Type": "application/json",
        },
      }
    ).then(navigate("/payment", { replace: true }));
  }
  return (
    <div>
      <Information onPersonalData={addPersonalInfo} />
    </div>
  );
};

export default PersonalInfo;
