import './App.css'
import { Routes, Route } from 'react-router-dom';
import Login from './Login/Login.jsx'
import Page from './Page/Page.jsx';
import Landingpage from './LandingPage/Landingpage.jsx';
import PlansAndPricing from './PlansAndPricing/PlansAndPricing.jsx';
import Notfound from './Notfound/Notfound.jsx';
import Hospitalprovider from './UseContext/Usecontext.jsx';
import Practice from './practice.jsx/practice.jsx';
import Medicalrecords from './MedicalRecords/Medicalrecords.jsx';
import Recyclebin from './Recyclebin/Recyclebin.jsx';
import Records from './Records/Records.jsx';
import Patients from './Patient/Patients.jsx'
import Refreshpage from './Refreshpage/Refreshpage.jsx';
import Hehe from './hehe.jsx';
import Header from './Header/Header.jsx';



function App() {
  return (
    <>
      {/* <Records /> */}
      {/* <PrintReports /> */}
      {/* <Patientforms /> */}
      {/* <Recyclebin /> */}
      {/* <Patientpersonaldetails /> */}
      {/* <Login /> */}
      {/* <Editpatient /> */}
      {/* <Practice /> */}
      {/* <Medicalrecords /> */}
      {/* <Recyclebin />   */}
      {/* <Activepatients /> */}
      {/* <Inactivepatients /> */}
      {/* <Activepatients /> */}
      {/* <Patients /> */}
      {/* <Refreshpage /> */}
      {/* <Hehe /> */}
      {/* <Context /> */}
      {/* <Header /> */}

      <Routes >
        <Route path="" element={<Landingpage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/pricing" element={<PlansAndPricing />} />
        <Route path="/his/*" element={<Page />} />
        <Route path="*" element={<Notfound />} />
      </Routes>
    </>
  )
}
export default App;
