import  { useState } from 'react';
import './App.css';
// import About from './Components/About';
import Alert from './Components/Alert';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import React from "react";

// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
// } from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert =(massage, type) =>{
      setAlert({
        msg : massage,
        type : type
      })
      setTimeout(()=>{
        setAlert(null);

      }, 2000);
      }
  

  const toggleMode = () =>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor = '#343a40';
      showAlert("Dark mode has been enabled","success");
      // document.title = "Text Utils- home(dark)";
    }else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled","success");
      // document.title = "Text Utils- home";
    }
    

  }
  return (
   <>
   {/* <Router> */}

   <Navbar title="Manipulating TexT" aboutt="about" mode={mode} toggleMode={toggleMode}/>
   <Alert alert={alert}/>
   <div className="container my-3">
   {/* <Routes>
    <Route exact path="/about" element={<About mode={mode}/>} /> */}
    <TextForm head="Manipulate your TexT- Word counter | UpperCase to LowerCase" mode={mode} showAlert={showAlert}/>
{/* </Routes>            */}
   </div>
   {/* </Router> */}

   </>
    
  );
}

export default App;
