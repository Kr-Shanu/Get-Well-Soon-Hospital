// import logo from './logo.svg';
import './App.css'
import Home from './components/Home'
import DocLogin from './components/DocLogin'
import PatLogin from './components/PatLogin'
import {Route, Routes} from "react-router-dom";
import Failure from './components/Failure';
import Success from './components/Success';


function App() {


  return (
    <div className='App'>
      <header className='App-header'>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/doctorLogin" element={<DocLogin />} />
          <Route path="/patientLogin" element={<PatLogin />} />
          <Route path="/failure" element={<Failure />} />
            <Route path='/success' element={<Success/>} />
        </Routes>
      </header>
    </div>
  )

}

export default App;