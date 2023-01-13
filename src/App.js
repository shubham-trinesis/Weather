import React from "react";
import './components/Weather.css'
import Weather from "./components/Weather";



const App=()=>{
  
    // const sty = {
    //  display: 'flex',
    //  float :'center'
    
    // }

  return(
  
    <>
    
          <h1 className="header">Weather and Time-zone</h1>
           <Weather />
          
           

    </>
    
  )

}


export default App;

