import R from "./Reports.module.css";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Helmet } from 'react-helmet-async'
import axios from "axios";


const API = import.meta.env.VITE_HOSTING_API;

function Reports() {

    const navigateTo = useNavigate()
    const [filterPatients, setFilterPatients] = useState([])
    const [fetchedPatients, setFetchedPatients] = useState([])
    const [active, setActive] = useState(false)
    const [count, setCount] = useState("")



    async function activateServer() {

        run1()
        try {
            const respoonse = await axios.get(`${API}/login/server-activation`)

            const results = respoonse.data;
            if (results.success === true) {
                console.log(results.message)
            } else {
                console.log(results.message)
            }

        } catch (error) {
            console.log(`Failed to activate server - catch block`)
        }
    }

    useEffect(() => {
        activateServer()
    }, [])

    function run1() {
        setTimeout(() => {

            activateServer()
            console.log(`1`)
        }, 80000);
    }


    async function fetchRecordsandPatients() {
        setActive(false)
        try {
            const response = await axios.get(`${API}/patient/fetch-patient-records`)
            const results = response.data

            if (results.success === true) {
                setActive(true)
                setFetchedPatients(results.patients)
                setFilterPatients(results.patients)
                console.log(results.patients)
                setCount(results.patients.length)

            } else {
                setActive(true)

            }
        } catch (error) {
            setActive(true)
            console.log(error.message)
            setFeedBack2("Server Error: Please try again later")
        }
    }

    useEffect(() => {
        fetchRecordsandPatients()
    }, [])

    function searchBar(value) {
        const e = value.toLowerCase().trim()

        if (e === "") {
            return setFetchedPatients(filterPatients)
        } else {

            const results = filterPatients.filter((fp) => {
                return `${fp.first_name} ${fp.middle_name ? fp.middle_name : ""} ${fp.last_name}`.toLowerCase().includes(e)
                    || fp.last_name.toLowerCase().includes(e) ||
                    fp.middle_name.toLowerCase().includes(e) ||
                    `${fp.first_name} ${fp.last_name} ${fp.middle_name ? fp.middle_name : ""} `.toLowerCase().includes(e) ||
                    `${fp.last_name}   ${fp.middle_name ? fp.middle_name : ""}  ${fp.first_name}`.toLowerCase().includes(e)
            })

            setFetchedPatients(results)
        }
    }

    return (
        <div className={R.reportsPage}>
            <Helmet>
                <title>
                    Reports | 🔖
                </title>
            </Helmet>

            {/* =====================================================
                PAGE HEADER
            ===================================================== */}
            <div>
                <br className={R.b1}></br>
                <br className={R.b2}></br>
                <br className={R.b3}></br>
                <br className={R.b4}></br>
                <br className={R.b5}></br>
            </div>
            <section className={R.pageHeader}>

                <div className={R.headerIcon}>
                    <i className="bi bi-file-earmark-bar-graph-fill"></i>
                </div>
                <div className={R.headerContent}>
                    <span className={R.headerLabel}>
                        HOSPITAL REPORTS
                    </span>
                    <h1>Patient Reports</h1>
                    <p>
                        Search for a patient to review their medical records
                        and prepare a report for printing.
                    </p>
                </div>
            </section>

            {/* ====================================================
                REPORT INFORMATION
            ===================================================== */}

            <section className={R.reportGuide}>

                <div className={R.guideIcon}>
                    <i className="bi bi-info-circle-fill"></i>
                </div>

                <div>

                    <h2>
                        How reports work
                    </h2>

                    <p>
                        Search for a patient below. After selecting a patient,
                        you will be able to choose which medical records and
                        specific information should appear in the report before
                        printing it.
                    </p>

                </div>

            </section>


            {/* =====================================================
                SEARCH SECTION
            ===================================================== */}

            <section className={R.searchSection}>
                <div className={R.sectionTitle}>
                    <div>
                        <span>
                            FIND A PATIENT
                        </span>
                        <h2>
                            Search Patient Records
                        </h2>
                        <p>
                            Enter the patient's name or patient ID to continue.
                        </p>
                    </div>
                </div>


                {/* SEARCH BAR */}

                <div className={R.mainSearch}>
                    <i className="bi bi-search"></i>
                    <input
                        type="text"
                        onChange={(e) => searchBar(e.target.value)}

                        placeholder="Search patient to view all medical record"
                    />

                    <button>
                        <i className="bi bi-search"></i>
                        Search
                    </button>
                </div>
            </section>


            {/* =====================================================
                SEARCH RESULTS HEADER
            ===================================================== */}

            <div className={R.resultsHeader}>

                <div>

                    <span>
                        SEARCH RESULTS
                    </span>

                    <h2>
                        Patients
                    </h2>

                </div>

                <div className={R.resultCount}>

                    <i className="bi bi-people-fill"></i>
                    {/* patients found */}
                    <span>
                        {count > 0 ? `${count} patients found` : "0 patients found"}
                    </span>
                </div>
            </div>

            <section className={R.patientResults}>
                {active ? (
                    <>
                        {fetchedPatients.length > 0 ?
                            (<>
                                {fetchedPatients.map((fp) => (<>
                                    <article className={R.patientCard}>
                                        <div className={R.patientMain}>
                                            <div className={R.patientAvatar}>
                                                JM
                                            </div>
                                            <div className={R.patientInfo}>
                                                <div className={R.patientNameRow}>
                                                    <h3>
                                                        {fp.first_name} {fp.middle_name || " "} {fp.last_name}
                                                    </h3>
                                                </div>
                                                <p></p> {/* for spacing */}
                                                <div className={R.patientMeta}>
                                                    <span>
                                                        <i className="bi bi-person"></i>
                                                        {fp.gender}
                                                    </span>
                                                    <span>
                                                        <i className="bi bi-calendar3"></i>
                                                        {fp.age} years
                                                    </span>
                                                </div>
                                            </div>
                                        </div>

                                        <div className={R.patientLastRecord}>
                                            <span>Patient Since</span>
                                            <strong>{fp.registration_date.split("T")[0]} </strong>
                                            <small>Patient Registration Date</small>
                                        </div>
                                        <button className={R.viewPatientButton}
                                            onClick={() => {
                                                localStorage.setItem("patientRecordId", fp.patient_id)
                                                navigateTo("/his/document")

                                            }}
                                        >
                                            <span>View Reports</span>
                                            <i className="bi bi-arrow-right"></i>

                                        </button>
                                    </article>
                                </>))}
                            </>) : (<>
                                <section className={R.emptyState}>
                                    <div className={R.emptyIcon}>
                                        <i className="bi bi-person-x"></i>
                                    </div>
                                    <h3>
                                        No Medical Records Exists
                                    </h3>
                                </section>
                            </>)}

                    </>) : (
                    <>
                        <div className={R.loadingContainer}>
                            <div className={R.loadingIcon}>
                                <i className="bi bi-file-earmark-medical"></i>
                                <span className={R.pulse}></span>
                            </div>
                            <h3>Loading patient's reports on medical records</h3>
                            <p>
                                Please wait while we retrieve the medical records...
                            </p>
                            <div className={R.loadingTrack}>
                                <span className={R.loadingBar}></span>
                            </div>
                            <small>Retrieving medical records...</small>
                        </div>
                    </>
                )}
            </section>




            <footer className={R.reportsFooter}>
                <div>
                    <i className="bi bi-shield-check"></i>
                    <span>
                        Patient reports contain confidential medical information.
                    </span>
                </div>
                <span>
                    Reports & Documents
                </span>
            </footer>
        </div>
    );
}

export default Reports;