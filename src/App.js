// import logo from './logo.svg';
import  React,{ useState } from 'react';
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

// let a="Manroop";
function App() {
  const[mode,setMode]=useState("light");
  const [value, setValue]=useState('Dark Mode')
  const[alert,setAlert]=useState(null);

  const showAlert=(message,type)=>{
     setAlert({
      message:message,
      type:type
     })
     setTimeout(()=>{
      setAlert(null)
     },1500)
  }

  const toggleMode=()=>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor='#002266';
      setValue("Light Mode");
      document.body.style.color ='white';  
      showAlert(": Dark mode has been enabled","success");
      document.title="TextUtils-DarkMode"
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white'
      setValue("Dark Mode");
      document.body.style.color ='black';  
      showAlert(": Light mode has been enabled","success");
      document.title="TextUtils-LightMode"
    }
  }
  return (
    <>  
    {/* <Router> */}
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} value={value}/>
      <Alert alert={alert}/>
       <div className='container'my-3>
       {/* <Routes> */}
          {/* <Route exact path="/" element={<TextForm heading="Enter your text" mode={mode} showAlert={showAlert}/>}/>
          
          {/* <Route exact path="/about" element={<About mode={mode}/>}/> */}
  
        {/* </Routes> */}
        <TextForm heading="Enter your text" mode={mode} showAlert={showAlert}/> 
        </div>
         {/* </Router> */}

   </>
  );
}

export default App;
