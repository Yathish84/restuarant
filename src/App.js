import React, { useEffect, useState } from "react";
import './App.css';
import Sidebar from './Sidebar';
import Main from './Main';


const App=()=>{
  const[itemsdata , setitemdata]=useState([]);
  useEffect(()=>{

    fetch("./items.json")
    .then((res)=>res.json())
    .then((data)=>{
      setitemdata(data);
      
    })
    
  },[])

  return (
    <div className="app">
     <Sidebar />
     <Main data={itemsdata} />
    </div>
  );
}

export default App;
