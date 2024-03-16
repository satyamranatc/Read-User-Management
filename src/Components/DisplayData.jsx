import React,{useState,useEffect} from "react";
import "./DisplayData.css";

export default function DisplayData({ UserData,setCurrentFromData,setUserData }) {

  let [AllDataDisplay,setAllDataDisplay] = useState(false);
  let [CurrentData,setCurrentdata] = useState({});


  useEffect(() => {
 console.log("Hi")
  }, [UserData]);

  function ShowData(e) {
    setAllDataDisplay(true);
    setCurrentdata(e);

  }

  function UpdateData()
  {
    console.log("From Display:-",CurrentData);
    setCurrentFromData(CurrentData);  
  }

  function DeleteData()
  {

      let x = UserData; 
      let Index = UserData.indexOf(CurrentData);
      x.splice(Index,1);
      console.log(x);
      setUserData(x);
      setAllDataDisplay(false);


    
  }



  let TotalUser = UserData.length;
  return (
    <div className="DisplayData">


    {AllDataDisplay? 
      <div id="AllData">

      <button onClick={()=>setAllDataDisplay(false)} id = "close">Close</button>

      <div id= "TableDiv">
       <table>
        <tr>
          <th>Id</th>
          <th>Name</th>
          <th>Age</th>
        </tr>
        <tr>
          <td>{CurrentData.Id}</td>
          <td>{CurrentData.Name}</td>
          <td>{CurrentData.Age}</td>
        </tr>
       </table>

       <div id="BtnGrp">
        <button onClick={()=>UpdateData()} >Update</button>
        <button onClick={()=>DeleteData()}>Delete</button>
       </div>
    
      </div>


     </div>:
     null}
    





      <div id="NameShowCase">
        <h3>Total Users- {TotalUser}</h3>

        <div id="UserList">
          {TotalUser ? (
            UserData.map((e, i) => (
              <p onClick={() => ShowData(e)} className="UserName" key={i}>
                {e.Name}
              </p>
            ))
          ) : (
            <h4>No Users To Show</h4>
          )}
        </div>
      </div>
    </div>
  );
}
