import { useState } from 'react';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert'

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    });

    setTimeout(()=>{
      setAlert(null);
    }, 2000);
  };

  const toggleMode = () => {
    if(mode==="light"){
      setMode("dark");
      document.body.style.backgroundColor = '#0e0e0e';
      showAlert("Dark Mode Enabled","success")
    }
    else{
      setMode("light");
      document.body.style.backgroundColor = 'white';
      showAlert("Light Mode Enabled","success")
    }
  };

  return (
    <>
    <Navbar title="Textify" aboutText="About US" mode={mode} toggleMode={toggleMode}/>
    <Alert alert={alert}/>
    <div className='container my-3'>
      <TextForm heading="Enter your text" mode={mode} showAlert = {showAlert}/>
    </div>
    </>
  );
}

export default App;
