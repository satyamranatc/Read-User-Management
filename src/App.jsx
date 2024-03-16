import React, { useState, useEffect } from "react";
import "./App.css";
import DisplayData from "./Components/DisplayData";

export default function App() {
  const [UserData, setUserData] = useState([]);
  const [CurrentFormData, setCurrentFromData] = useState({ Id: "", Name: "", Age: "" });
  const [TempData, setTempData] = useState({ Id: "", Name: "", Age: "" });

  useEffect(() => {
    console.log("From app", CurrentFormData);
    setTempData({Id:CurrentFormData.Id, Name:CurrentFormData.Name, Age:CurrentFormData.Age});
  }, [CurrentFormData]);

  function Duplicate_Id_Found(currentId) {
    let IdFound = false;
    UserData.forEach((e) => {
      if (e.Id === currentId) {
        IdFound = true;
      }
    });
    return IdFound;
  }

  function handelForm(e) {
    e.preventDefault();

    if (e.target[0].value.length === 0 || e.target[1].value.length === 0) {
      alert("Sorry Id or Name Is Empty...");
    } 
    
    
    
    else if (Duplicate_Id_Found(e.target[0].value) === true) 
    {
      alert("Id Already Exists...");

      let Index = UserData.indexOf(CurrentFormData);
      let x = UserData;
      x[Index] = { Id: e.target[0].value, Name: e.target[1].value, Age: e.target[2].value }    
      setUserData(x);  
      setCurrentFromData({ Id: "", Name: "", Age: "" });

    } 
    
    
    
    
    
    else {
      setUserData([...UserData, { Id: e.target[0].value, Name: e.target[1].value, Age: e.target[2].value }]);
      e.target[0].value = "";
      e.target[1].value = "";
      e.target[2].value = "";
      setTempData({ Id: "", Name: "", Age: "" });
    }
  }

  function handleInputChange(e, field) {
    setTempData({ ...TempData, [field]: e.target.value });
  }

  return (
    <div className="App">
      <div id="Form">
        <h1>Hello User!</h1>
        <form onSubmit={(e) => handelForm(e)}>
          <input onChange={(e) => handleInputChange(e, "Id")} type="text" placeholder="Enter your Id" value={TempData.Id} />
          <input onChange={(e) => handleInputChange(e, "Name")} type="text" placeholder="Enter your Name" value={TempData.Name} />
          <input onChange={(e) => handleInputChange(e, "Age")} type="text" placeholder="Enter your Age" value={TempData.Age} />

          <div>
            <button type="submit">Submit</button>
            <button type="reset">Reset</button>
          </div>
        </form>
      </div>

      <DisplayData setCurrentFromData={setCurrentFromData} setUserData = {setUserData} UserData={UserData} />
    </div>
  );
}
