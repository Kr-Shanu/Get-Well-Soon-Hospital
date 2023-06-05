import './App.css'
import Home from './components/Home'
import DocLogin from './components/DocLogin'
import PatLogin from './components/PatLogin'
import {Route, Routes} from "react-router-dom";
import Failure from './components/Failure';
// import Success from './components/Success';
import PatHome from './components/PatServices/PatHome/PatHome';
import Emergency from './components/PatServices/Emergency/Emergency'
import DailyCheckup from './components/PatServices/DailyCheckup'
import Prescriptions from './components/PatServices/Prescriptions'
import FirstAid from './components/PatServices/FirstAid/FirstAid'

function App() {


  return (
    <div className='App'>
      <header className='App-header'>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/doctorLogin" element={<DocLogin />} />
          <Route path="/patientLogin" element={<PatLogin />} />
          <Route path="/failure" element={<Failure />} />
          <Route path='/success' element={<PatHome/>} />
          <Route path='/emergency' element={<Emergency/>} />
          <Route path='/dailyCheckup' element={<DailyCheckup/>} />
          <Route path='/reportsAndMedicines' element={<Prescriptions/>} />
          <Route path='/firstAid' element={<FirstAid/>} />
        </Routes>
      </header>
    </div>
  )

}

export default App;