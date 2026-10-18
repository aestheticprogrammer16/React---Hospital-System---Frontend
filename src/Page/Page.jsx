
import { Routes, Route } from "react-router-dom";
import Header from "../Header/Header";
import Dashboard from '../Dashboard/Dashboard.jsx'
import Patients from '../Patient/Patients.jsx'
import Medicalrecords from '../MedicalRecords/Medicalrecords.jsx'
import Records from '../Records/Records.jsx'
import Reports from '../Reports/Reports.jsx'
import PrintReports from '../Printreports/Printreports.jsx'
import Settings from '../Settings/Settings.jsx';
import Protectedroutes from "../ProtectedRoutes/ProtectedRoutes.jsx";
import Notfound from '../Notfound/Notfound.jsx';
import Patientforms from '../Patientforms/Patientforms.jsx';
import Recyclebin from '../Recyclebin/Recyclebin.jsx';
import Patientdetials from "../Viewpatientdetails/Patientdetails.jsx";
import Editpatient from '../Editpatient/Editpatient.jsx';
import Context from "../Mycontext.jsx";

function Page() {
    return (
        <>
            <Protectedroutes>
                <Context >
                    <Header />
                    <Routes>
                        <Route path="dashboard" element={<Dashboard />} />
                        <Route path="patients" element={<Patients />} />
                        <Route path="edit-patient-forms" element={<Editpatient />} />
                        <Route path="fill-forms" element={<Patientforms />} />
                        <Route path="medical-records" element={<Medicalrecords />} />
                        <Route path="records" element={< Records />} />
                        <Route path="reports" element={<Reports />} />
                        <Route path="recycle-bin" element={<Recyclebin />} />
                        <Route path="document" element={<PrintReports />} />
                        <Route path="settings" element={<Settings />} />
                        <Route path="*" element={<Notfound />} />
                        <Route path="patients-info" element={<Patientdetials />} />
                    </Routes>
                </Context>
            </Protectedroutes>
        </>
    )
}
export default Page;