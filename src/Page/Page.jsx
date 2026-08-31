
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

function Page() {
    return (
        <>
            <Protectedroutes>
                <Header />
                <Routes>
                    <Route path="dashboard" element={<Dashboard />} />
                    <Route path="patients" element={<Patients />} />
                    <Route path="fill-forms" element={<Patientforms />} />
                    <Route path="medical-records" element={<Medicalrecords />} />
                    <Route path="records" element={< Records />} />
                    <Route path="reports" element={<Reports />} />
                    <Route path="document" element={<PrintReports />} />
                    <Route path="settings" element={<Settings />} />
                    <Route path="*" element={<Notfound />} />
                </Routes>

            </Protectedroutes>

        </>
    )
}
export default Page;