import { useEffect, useState, useContext } from "react";
import { useNavigate } from 'react-router-dom'
import M from "./Medicalrecords.module.css";
import { Helmet } from 'react-helmet-async'
import axios from 'axios'
const API = import.meta.env.VITE_HOSTING_API

import { MyContext } from "../Mycontext.jsx";

function Medicalrecords() {

    const navigateTo = useNavigate()
    const [active, setActive] = useState(false)
    const { setActive01 } = useContext(MyContext);

    const [filteredPatients, setFilteredPatients] = useState([]);
    const [fetchedPatients, setFetchedPatients] = useState([]);



    async function fetchPatients() {
        try {

            const response = await axios.get(`${API}/patient/view-patients`)
            const results = response.data;

            if (results.success === true && results.count === true) {
                setFetchedPatients(results.patients);
                setFilteredPatients(results.patients);
                console.log(results.patients)
            } else if (results.success === true && results.count === false) {
                console.log(results.message)

            } else {
                console.log(results.message)

            }

        } catch (error) {
            console.log(error.message);

        }
    }

    useEffect(() => {
        fetchPatients()
    }, [])


    function search(e) {
        if (e === "") {
            return setFilteredPatients(fetchedPatients)
        }

        const results = filteredPatients.filter((fp) => {
            return fp.first_name.toLowerCase().includes(e.toLowerCase()) || fp.last_name.toLowerCase().includes(e.toLowerCase()) || fp.middle_name.toLowerCase().includes(e.toLowerCase())
        })
        setFilteredPatients(results)
    }


    function PatientId(id) {
        localStorage.setItem("SpecialRecordId", id)
        navigateTo("/his/records")
        setActive01(false)
    }

    return (
        <div className={M.medicalRecordsPage}>
            {/* PAGE HEADER */}
            <Helmet>
                <title>
                    Medical Records | 📚
                </title>
            </Helmet>

            <div>
                <br className={M.b1}></br>
                <br className={M.b2}></br>
                <br className={M.b3}></br>
                <br className={M.b4}></br>
                <br className={M.b5}></br>
            </div>
            <div className={M.pageHeader}>
                <div className={M.headerText}>
                    <div className={M.pageLabel}>
                        <i className="bi bi-file-medical-fill"></i>
                        Patient Care
                    </div>
                    <h1>Medical Records</h1>
                    <p>
                        Search, filter and manage medical records belonging to registered patients.
                    </p>
                </div>

                <div className={M.headerActions}>
                    <button className={M.refreshButton} onClick={() => fetchPatients()}>
                        <i className="bi bi-arrow-clockwise"></i>
                        <span>Refresh</span>
                    </button>
                    <button className={M.addRecordButton} onClick={() => {
                        setActive(true);
                        setActive01(true)
                    }
                    }>
                        <i className="bi bi-file-earmark-plus-fill"></i>
                        <span>New Record</span>
                    </button>
                </div>
            </div>

            {/* RECORD STATISTICS */}
            <div className={M.recordStats}>
                <div className={M.statCard}>
                    <div className={`${M.statIcon} ${M.blue}`}>
                        <i className="bi bi-files"></i>
                    </div>
                    <div className={M.statContent}>
                        <span>Total Records</span>
                        <h2>1,284</h2>
                        <p>
                            <i className="bi bi-file-medical"></i>
                            All patient records
                        </p>
                    </div>
                </div>

                <div className={M.statCard}>
                    <div className={`${M.statIcon} ${M.green}`}>
                        <i className="bi bi-calendar-check-fill"></i>
                    </div>
                    <div className={M.statContent}>
                        <span>Today's Records</span>
                        <h2>18</h2>
                        <p>
                            <i className="bi bi-arrow-up"></i>
                            Added today
                        </p>
                    </div>
                </div>

                <div className={M.statCard}>
                    <div className={`${M.statIcon} ${M.pink}`}>
                        <i className="bi bi-clock-history"></i>
                    </div>
                    <div className={M.statContent}>
                        <span>Recent Records</span>
                        <h2>42</h2>
                        <p>
                            <i className="bi bi-clock"></i>
                            Last 7 days
                        </p>
                    </div>
                </div>

                <div className={M.statCard}>
                    <div className={`${M.statIcon} ${M.orange}`}>
                        <i className="bi bi-person-lines-fill"></i>
                    </div>
                    <div className={M.statContent}>
                        <span>Patients With Records</span>
                        <h2>231</h2>
                        <p>
                            <i className="bi bi-people-fill"></i>
                            Registered patients
                        </p>
                    </div>
                </div>
            </div>

            {/* SEARCH AND FILTERS */}
            <div className={M.filterPanel}>
                <div className={M.filterHeader}>
                    <div>
                        <h2>
                            <i className="bi bi-search"></i>
                            Find Medical Records
                        </h2>
                        <p>
                            Use the filters below to locate a specific patient's record.
                        </p>
                    </div>

                    <button className={M.clearButton}>
                        <i className="bi bi-x-circle"></i>
                        Clear Filters
                    </button>
                </div>

                <div className={M.filterGrid}>
                    {/* SEARCH PATIENT */}
                    <div className={M.filterField}>
                        <label>Patient</label>
                        <div className={M.inputWrapper}>
                            <i className="bi bi-person-search"></i>
                            <input
                                type="text"
                                placeholder="Search patient name or ID..."
                            />
                        </div>
                    </div>

                    {/* RECORD TYPE */}
                    <div className={M.filterField}>
                        <label>Record Type</label>
                        <div className={M.selectWrapper}>
                            <i className="bi bi-file-medical"></i>
                            <select defaultValue="">
                                <option value="" disabled>All record types</option>
                                <option value="consultation">Consultation</option>
                                <option value="followup">Follow-up</option>
                                <option value="assessment">Assessment</option>
                                <option value="general">General Record</option>
                            </select>
                            <i className="bi bi-chevron-down"></i>
                        </div>
                    </div>

                    {/* DATE FROM */}
                    <div className={M.filterField}>
                        <label>From Date</label>
                        <div className={M.inputWrapper}>
                            <i className="bi bi-calendar3"></i>
                            <input type="date" />
                        </div>
                    </div>

                    {/* DATE TO */}
                    <div className={M.filterField}>
                        <label>To Date</label>
                        <div className={M.inputWrapper}>
                            <i className="bi bi-calendar3"></i>
                            <input type="date" />
                        </div>
                    </div>

                    {/* CREATED BY */}
                    <div className={M.filterField}>
                        <label>Recorded By</label>
                        <div className={M.selectWrapper}>
                            <i className="bi bi-person-badge"></i>
                            <select defaultValue="">
                                <option value="" disabled>All staff</option>
                                <option value="doctor">Doctor</option>
                                <option value="nurse">Nurse</option>
                                <option value="admin">Administrator</option>
                            </select>
                            <i className="bi bi-chevron-down"></i>
                        </div>
                    </div>

                    {/* RECORD STATUS */}
                    <div className={M.filterField}>
                        <label>Status</label>
                        <div className={M.selectWrapper}>
                            <i className="bi bi-check2-circle"></i>
                            <select defaultValue="">
                                <option value="" disabled>All statuses</option>
                                <option value="completed">Completed</option>
                                <option value="draft">Draft</option>
                                <option value="updated">Recently Updated</option>
                            </select>
                            <i className="bi bi-chevron-down"></i>
                        </div>
                    </div>
                </div>

                <div className={M.filterActions}>
                    <button className={M.applyButton}>
                        <i className="bi bi-funnel-fill"></i>
                        Apply Filters
                    </button>
                </div>
            </div>
            {/* =====================================================
    QUICK PATIENT SEARCH
===================================================== */}

            <div className={M.quickSearch}>

                <div className={M.quickSearchInput}>

                    <i className="bi bi-search"></i>

                    <input
                        type="text"
                        placeholder="Search patient by name or patient ID..."
                    />

                </div>

                <button className={M.quickSearchButton}>
                    <i className="bi bi-search"></i>
                    Search
                </button>

            </div>

            {/* RECORD LIST HEADER */}
            <div className={M.recordsHeader}>
                <div>
                    <h2>Medical Records</h2>
                    <p>1,284 records available</p>
                </div>

                <div className={M.sortArea}>
                    <span>Sort by</span>
                    <button className={M.sortButton}>
                        <i className="bi bi-sort-down"></i>
                        Newest First
                        <i className="bi bi-chevron-down"></i>
                    </button>
                </div>
            </div>

            {/* RECORDS LIST */}
            <div className={M.recordsContainer}>
                {/* RECORD 1 */}
                <div className={M.recordCard}>
                    <div className={M.recordDate}>
                        <strong>24</strong>
                        <span>AUG</span>
                    </div>

                    <div className={M.recordMain}>
                        <div className={M.recordPatient}>
                            <div className={M.patientAvatar}>JM</div>
                            <div>
                                <h3>John Mensah</h3>
                                <span>PAT-000001</span>
                            </div>
                        </div>

                        <div className={M.recordInformation}>
                            <div>
                                <span>Record Type</span>
                                <strong>Consultation</strong>
                            </div>
                            <div>
                                <span>Recorded By</span>
                                <strong>Dr. Staff</strong>
                            </div>
                            <div>
                                <span>Time</span>
                                <strong>09:42 AM</strong>
                            </div>
                        </div>

                        <div className={M.recordStatus}>
                            <span className={M.completed}>
                                <i className="bi bi-check-circle-fill"></i>
                                Completed
                            </span>
                        </div>
                    </div>

                    <button className={M.viewRecordButton}>
                        View
                        <i className="bi bi-arrow-right"></i>
                    </button>
                </div>

                {/* RECORD 2 */}
                <div className={M.recordCard}>
                    <div className={M.recordDate}>
                        <strong>23</strong>
                        <span>AUG</span>
                    </div>

                    <div className={M.recordMain}>
                        <div className={M.recordPatient}>
                            <div className={M.patientAvatar}>AB</div>
                            <div>
                                <h3>Ama Boateng</h3>
                                <span>PAT-000002</span>
                            </div>
                        </div>

                        <div className={M.recordInformation}>
                            <div>
                                <span>Record Type</span>
                                <strong>Follow-up</strong>
                            </div>
                            <div>
                                <span>Recorded By</span>
                                <strong>Nurse</strong>
                            </div>
                            <div>
                                <span>Time</span>
                                <strong>11:18 AM</strong>
                            </div>
                        </div>

                        <div className={M.recordStatus}>
                            <span className={M.completed}>
                                <i className="bi bi-check-circle-fill"></i>
                                Completed
                            </span>
                        </div>
                    </div>

                    <button className={M.viewRecordButton}>
                        View
                        <i className="bi bi-arrow-right"></i>
                    </button>
                </div>

                {/* RECORD 3 */}
                <div className={M.recordCard}>
                    <div className={M.recordDate}>
                        <strong>22</strong>
                        <span>AUG</span>
                    </div>

                    <div className={M.recordMain}>
                        <div className={M.recordPatient}>
                            <div className={M.patientAvatar}>KA</div>
                            <div>
                                <h3>Kofi Asare</h3>
                                <span>PAT-000003</span>
                            </div>
                        </div>

                        <div className={M.recordInformation}>
                            <div>
                                <span>Record Type</span>
                                <strong>Assessment</strong>
                            </div>
                            <div>
                                <span>Recorded By</span>
                                <strong>Administrator</strong>
                            </div>
                            <div>
                                <span>Time</span>
                                <strong>02:25 PM</strong>
                            </div>
                        </div>

                        <div className={M.recordStatus}>
                            <span className={M.updated}>
                                <i className="bi bi-arrow-repeat"></i>
                                Updated
                            </span>
                        </div>
                    </div>

                    <button className={M.viewRecordButton}>
                        View
                        <i className="bi bi-arrow-right"></i>
                    </button>
                </div>

                {/* RECORD 4 */}
                <div className={M.recordCard}>
                    <div className={M.recordDate}>
                        <strong>20</strong>
                        <span>AUG</span>
                    </div>

                    <div className={M.recordMain}>
                        <div className={M.recordPatient}>
                            <div className={M.patientAvatar}>EA</div>
                            <div>
                                <h3>Esther Addo</h3>
                                <span>PAT-000004</span>
                            </div>
                        </div>

                        <div className={M.recordInformation}>
                            <div>
                                <span>Record Type</span>
                                <strong>General Record</strong>
                            </div>
                            <div>
                                <span>Recorded By</span>
                                <strong>Nurse</strong>
                            </div>
                            <div>
                                <span>Time</span>
                                <strong>10:06 AM</strong>
                            </div>
                        </div>

                        <div className={M.recordStatus}>
                            <span className={M.completed}>
                                <i className="bi bi-check-circle-fill"></i>
                                Completed
                            </span>
                        </div>
                    </div>

                    <button className={M.viewRecordButton}>
                        View
                        <i className="bi bi-arrow-right"></i>
                    </button>
                </div>

                {/* RECORD 5 */}
                <div className={M.recordCard}>
                    <div className={M.recordDate}>
                        <strong>18</strong>
                        <span>AUG</span>
                    </div>

                    <div className={M.recordMain}>
                        <div className={M.recordPatient}>
                            <div className={M.patientAvatar}>YA</div>
                            <div>
                                <h3>Yaw Asante</h3>
                                <span>PAT-000005</span>
                            </div>
                        </div>

                        <div className={M.recordInformation}>
                            <div>
                                <span>Record Type</span>
                                <strong>Consultation</strong>
                            </div>
                            <div>
                                <span>Recorded By</span>
                                <strong>Doctor</strong>
                            </div>
                            <div>
                                <span>Time</span>
                                <strong>03:17 PM</strong>
                            </div>
                        </div>

                        <div className={M.recordStatus}>
                            <span className={M.draft}>
                                <i className="bi bi-pencil-fill"></i>
                                Draft
                            </span>
                        </div>
                    </div>

                    <button className={M.viewRecordButton}>
                        View
                        <i className="bi bi-arrow-right"></i>
                    </button>
                </div>
            </div>

            {/* PAGINATION */}
            <div className={M.pagination}>
                <span>Showing 1–5 of 1,284 records</span>

                <div className={M.paginationButtons}>
                    <button disabled>
                        <i className="bi bi-chevron-left"></i>
                    </button>
                    <button className={M.activePage}>1</button>
                    <button>2</button>
                    <button>3</button>
                    <span>...</span>
                    <button>257</button>
                    <button>
                        <i className="bi bi-chevron-right"></i>
                    </button>
                </div>
            </div>

            {active && (
                <div className={M.recordOverlay}>

                    <div className={M.recordOverlayContainer}>

                        {/* Header */}
                        <div className={M.recordOverlayHeader}>

                            <div className={M.recordOverlayHeaderText}>
                                <h2>Select Patient</h2>

                                <p>
                                    Select an existing patient to create a medical record.
                                </p>
                            </div>

                            <button
                                type="button"
                                className={M.recordOverlayClose}
                                onClick={() => {
                                    setActive(false);
                                    setActive01(false)
                                }}
                                aria-label="Close patient selection"
                            >
                                <i className="bi bi-x-lg"></i>
                            </button>

                        </div>


                        {/* Search */}
                        <div className={M.recordOverlaySearch}>

                            <i className="bi bi-search"></i>

                            <input
                                type="text"
                                placeholder="Search patient..."
                                onChange={(e) => search(e.target.value)}
                            />

                        </div>


                        {/* Patients */}
                        <div className={M.recordOverlayPatients}>

                            {filteredPatients.length > 0 ? (

                                filteredPatients.map((ftp) => (

                                    <div
                                        className={M.recordOverlayPatient}
                                        key={ftp.id}
                                        onClick={() => PatientId(ftp.id)}
                                    >

                                        <div className={M.recordOverlayPatientIcon}>
                                            <i className="bi bi-person"></i>
                                        </div>

                                        <div className={M.recordOverlayPatientInfo}>

                                            <h3>
                                                {ftp.first_name}{" "}
                                                {ftp.middle_name}{" "}
                                                {ftp.last_name}
                                            </h3>

                                            <span>
                                                {ftp.gender} • {ftp.age} years
                                            </span>

                                        </div>

                                        <i className="bi bi-chevron-right"></i>

                                    </div>

                                ))

                            ) : (

                                <div className={M.recordOverlayEmpty}>

                                    <i className="bi bi-person-x"></i>

                                    <h3>No Patients Found</h3>

                                    <p>
                                        No patients match your search.
                                    </p>

                                </div>

                            )}

                        </div>


                        {/* Footer */}
                        <div className={M.recordOverlayFooter}>

                            <span>
                                {filteredPatients.length}{" "}
                                {filteredPatients.length === 1
                                    ? "Patient"
                                    : "Patients"}
                            </span>

                            <button
                                type="button"
                                onClick={() => {
                                    setActive(false);
                                    setActive01(false)
                                }}
                            >
                                Cancel
                            </button>

                        </div>

                    </div>

                </div>
            )}
        </div>
    );
}

export default Medicalrecords;