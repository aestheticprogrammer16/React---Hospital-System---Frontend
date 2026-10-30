import { useEffect, useState, useContext } from "react";
import { useNavigate } from 'react-router-dom'
import M from "./Medicalrecords.module.css";
import { Helmet } from 'react-helmet-async'
import axios from 'axios'
const API = import.meta.env.VITE_HOSTING_API

import { MyContext } from "../Mycontext.jsx";

function Medicalrecords() {
    const { setActive01, buttonPermissons, setActive100 } = useContext(MyContext);

    const navigateTo = useNavigate()

    const [active, setActive] = useState(false)
    const [active1, setActive1] = useState(false)
    const [active2, setActive2] = useState(false)
    const [active3, setActive3] = useState(false)
    const [active4, setActive4] = useState(false)
    const [active5, setActive5] = useState(false)
    const [active6, setActive6] = useState(false)


    const [totalRecords, setTotalRecords] = useState(0)
    const [todaysRecords, setTodaysRecords] = useState(0)
    const [recordsThisWeek, setRecordsThisWeek] = useState(0)
    const [recordsThisMonth, setRecordsThisMonth] = useState(0)

    const [feedBack, setFeedBack] = useState("")
    const [feedBack1, setFeedBack1] = useState("")

    const [filteredPatients, setFilteredPatients] = useState([]);
    const [fetchedPatients, setFetchedPatients] = useState([]);
    const [filteredPatients1, setFilteredPatients1] = useState([]);
    const [fetchedPatients1, setFetchedPatients1] = useState([]);
    const [filterType, setFilterType] = useState("Newest First")
    const [FilterIcon, setFilterIcon] = useState("down")



    function filterButton() {
        if (filterType === "Newest First") {
            setFilterType("Oldest First")
            setFilterIcon("up")
            oldRecords()

        } else {
            setFilterType("Newest First")
            setFilterIcon("down")
            fetchRecordsNewest()
        }
    }


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


    async function dashboardRecords() {
        try {
            const response = await axios.get(`${API}/patient/dashoard-medical-records`)
            const results = await response.data;
            if (results.success === true) {

                setTotalRecords(results.totalRecords)
                setTodaysRecords(results.todaysRecords)
                setRecordsThisWeek(results.recordsThisWeek)
                setRecordsThisMonth(results.recordsThisMonth)

            } else {
                console.log(results.message)
            }
        } catch (error) {
            console.log(error.message)
        }
    }

    useEffect(() => {
        dashboardRecords()
    }, [])


    async function deleteRecord() {
        setActive4(true)
        setFeedBack("")
        const id = localStorage.getItem("deletingMedicalRecordId")
        try {
            const response = await axios.get(`${API}/patient/delete-medical-record/${id}`)
            const results = response.data;

            if (results.success === true) {
                setActive4(false)
                setFeedBack(results.message)
                setTimeout(() => {
                    fetchRecordsNewest()
                    setActive3(false)
                }, 850);

            } else {

                setActive4(false)
                setFeedBack("Internal Server Error: please try again later")
                console.log(results.message)
            }
        } catch (error) {

            setActive4(false)
            setFeedBack("Server error: please try again later")
            console.log(error.message)

        }
    }














    async function oldRecords() {
        try {
            const response = await axios.get(`${API}/patient/fetchRecordsoldest`)
            const results = await response.data

            if (results.success === true) {
                setActive1(true)
                setFetchedPatients1(results.records);
                setFilteredPatients1(results.records);

            } else {
                setActive1(true)
                setActive2(true)

                console.log(message)
            }
        } catch (error) {
            setActive1(true)
            setActive2(true)
            console.log(error.message)
        }
    }



    async function fetchRecordsNewest() {
        try {
            const response = await axios.get(`${API}/patient/fetchRecords`)
            const results = response.data


            if (results.success === true) {
                setActive1(true)
                setFetchedPatients1(results.records);
                setFilteredPatients1(results.records);

            } else {
                setActive1(true)
                setActive2(true)

                console.log(message)
            }
        } catch (error) {
            setActive1(true)
            setActive2(true)
            console.log(error.message)
        }
    }



    async function fetchRecords() {
        setActive1(false)
        setActive2(false)
        try {
            const response = await axios.get(`${API}/patient/fetchRecords`)
            const results = response.data


            if (results.success === true) {
                setActive1(true)
                setFetchedPatients1(results.records);
                setFilteredPatients1(results.records);

            } else {
                setActive1(true)
                setActive2(true)

                console.log(message)
            }
        } catch (error) {
            setActive1(true)
            setActive2(true)
            console.log(error.message)
        }
    }

    useEffect(() => {
        fetchRecords()
    }, [])


    async function fetchPatients() {
        try {
            const response = await axios.get(`${API}/patient/view-patients`)
            const results = response.data;

            if (results.success === true && results.count === true) {
                setFetchedPatients(results.patients);
                setFilteredPatients(results.patients);


                // console.log(results.patients)
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


    function search(value) {
        const e = value.trim();
        if (e === "") {
            return setFilteredPatients(fetchedPatients)
        }

        const results = fetchedPatients.filter((fp) => {
            return fp.first_name.toLowerCase().includes(e.toLowerCase()) || fp.last_name.toLowerCase().includes(e.toLowerCase()) || fp.middle_name.toLowerCase().includes(e.toLowerCase())
        })
        setFilteredPatients(results)
    }


    function PatientId() {
        navigateTo("/his/records")
        setActive01(false)
    }



    async function checkingIfRecordExist(value) {
        const id = value
        localStorage.setItem("SpecialRecordId", id)
        // alert(id)
        try {
            const response = await axios.get(`${API}/patient/check-record-existence/${id}`)
            const results = response.data;
            if (results.success === true && results.exist === true) {
                setActive01(true)
                setActive5(true)
                setActive(false);
            } else if (results.success === true && results.exist === false) {
                PatientId()

            } else {
                setActive(false)
                setActive01(true)
                setActive6(true)
                setFeedBack1(results.message)
            }

        } catch (error) {
            setActive(false)
            setActive01(true)
            setActive6(true)
            setFeedBack1(`Please try again later`)
        }
    }


    function dateName(dataValue) {

        if (!dataValue) {
            return "";
        }

        return new Date(dataValue).toLocaleDateString(
            "en-US",
            {
                year: "numeric",
                month: "long",
                day: "numeric",
                hour: "numeric",
                minute: "2-digit",
                hour12: true
            }
        );
    }



    function searchRecord(value) {
        const e = value.trim().toLowerCase();

        if (e === "") {
            return setFilteredPatients1(fetchedPatients1);
        }

        const results = fetchedPatients1.filter((fp) => {
            return (fp.first_name || "").toLowerCase().includes(e) ||
                (fp.last_name || "").toLowerCase().includes(e) ||
                (fp.middle_name || "").toLowerCase().includes(e);
        });

        setFilteredPatients1(results);
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
                    <button className={M.refreshButton} onClick={() => {

                        fetchPatients();
                        setActive100(true)
                        setTimeout(() => {
                            setActive100(false)
                        }, 2000);
                    }
                    }
                    >
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
                        <h2>{totalRecords}</h2>
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
                        <h2>{todaysRecords}</h2>
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
                        <h2>{recordsThisWeek}</h2>
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
                        <span>This Month</span>
                        <h2>{recordsThisMonth}</h2>
                        <p>
                            <i className="bi bi-calendar-week"></i>
                            Records created this week
                        </p>
                    </div>
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
                        onChange={(e) => searchRecord(e.target.value)}
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

                    <span>Currently filtering: </span>
                    <button className={M.sortButton}
                        onClick={filterButton}>
                        <i className={`bi bi-sort-${FilterIcon}`}></i>
                        {filterType}
                    </button>
                </div>
            </div>

            {/* RECORDS LIST */}
            <div className={M.recordsContainer}>
                {active1 ? (<>

                    {filteredPatients1.length > 0 ?
                        (<>  {/* RECORD 2 */}
                            {filteredPatients1.map((ftp1) => (

                                < div className={M.recordCard} >
                                    <div className={M.recordDate}>
                                        <strong>{ftp1.first_name[0]}{ftp1.last_name[0]}</strong>
                                        {/* <span>{dateName(ftp1.created_at).split(",")[0].slice(0, 3).toUpperCase()}</span> */}
                                    </div>

                                    <div className={M.recordMain}>
                                        <div className={M.recordPatient}>
                                            <div>

                                                <h3>
                                                    {ftp1.first_name}{" "}
                                                    {ftp1.middle_name ? `${ftp1.middle_name} ` : ""}
                                                    {ftp1.last_name}
                                                </h3>
                                            </div>
                                        </div>

                                        <div className={M.recordInformation}>
                                            <div>

                                                <center>
                                                    {buttonPermissons ? (
                                                        <strong className={M.deleteMedicalRecord}
                                                            onClick={() => {
                                                                localStorage.setItem("deletingMedicalRecordId", ftp1.id);
                                                                setActive3(true)
                                                            }}
                                                        >

                                                            <i className="bi bi-trash"></i>
                                                        </strong>
                                                    ) : (
                                                        <div className={M.disabledMedicalRecord}>
                                                            <i className="bi bi-trash3"></i>
                                                            <span>Disabled</span>
                                                        </div>
                                                    )}
                                                </center>
                                            </div>
                                            <div>
                                                <span>Created By</span>
                                                <strong>{ftp1.recorded_by}</strong>
                                            </div>
                                            <div>
                                                <span>Date & Time</span>
                                                <strong>{dateName(ftp1.created_at)}</strong>
                                            </div>
                                        </div>
                                    </div>

                                    <button className={M.viewRecordButton}
                                        onClick={() => {
                                            localStorage.setItem("SpecialRecordId", ftp1.id)
                                            navigateTo("/his/records")
                                        }}
                                    >
                                        View
                                        <i className="bi bi-arrow-right"></i>
                                    </button>
                                </div>
                            ))}

                        </>) : (<>
                            <div className={M.noMedicalRecords}>
                                <i className="bi bi-clipboard2-pulse"></i>
                                <h4>No Medical Records</h4>
                                <p>There are no medical records available yet.</p>
                            </div>
                        </>)}

                </>) : (<>
                    <div className={M.loadingContainer}>
                        <div className={M.loadingIcon}>
                            <i className="bi bi-file-earmark-medical"></i>
                            <span className={M.pulse}></span>
                        </div>

                        <h3>Loading Medical Records</h3>

                        <p>
                            Please wait while we retrieve the medical records...
                        </p>

                        <div className={M.loadingTrack}>
                            <span className={M.loadingBar}></span>
                        </div>

                        <small>Retrieving medical records...</small>
                    </div>
                </>)}
            </div>




            {
                active && (
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
                                            // onClick={() => PatientId(ftp.id)}
                                            onClick={() => checkingIfRecordExist(ftp.id)}

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
                )
            }
            {active2 && (<>
                <div className={M.serverErrorOverlay}>
                    <div className={M.serverErrorBox}>
                        <button
                            type="button"
                            className={M.serverErrorClose}
                            onClick={() => setActive2(false)}
                            aria-label="Close error message"
                        >
                            <i className="bi bi-x-lg"></i>
                        </button>

                        <div className={M.serverErrorIcon}>
                            <i className="bi bi-exclamation-triangle"></i>
                        </div>

                        <h3>Server Error</h3>

                        <p>
                            We couldn't load the medical records due to a server error.
                            Please try again later.
                        </p>

                        <div className={M.serverErrorActions}>
                            <button
                                type="button"
                                onClick={() => setActive2(false)}
                            >
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            </>)}

            {active3 && (
                <>
                    <div className={M.deleteOverlay}>
                        <div className={M.deleteContainer}>
                            <button
                                type="button"
                                className={M.closeButton}
                                onClick={() => { setActive3(false); setActive4(false); setFeedBack("") }}
                                aria-label="Close warning"
                            >
                                <i className="bi bi-x-lg"></i>
                            </button>

                            <div className={M.warningIcon}>
                                <i className="bi bi-exclamation-triangle-fill"></i>
                            </div>

                            <h3>Move Medical Record to Recycle Bin?</h3>

                            <p className={M.warningText}>
                                Are you sure you want to delete this patient's medical record?
                                The record will be moved to the Recycle Bin, where it can be
                                restored later if needed.
                            </p>

                            <div className={M.warningNotice}>
                                <i className="bi bi-info-circle-fill"></i>
                                <span>
                                    This record will no longer appear among active medical records.
                                    You can access it from the Recycle Bin.
                                </span>
                            </div>
                            {feedBack && (
                                <div className={M.successMessage}>
                                    <span>{feedBack}</span>

                                </div>
                            )}

                            <div className={M.actionButtons}>
                                <button
                                    type="button"
                                    className={M.cancelButton}
                                    onClick={() => { setActive3(false); setActive4(false); setFeedBack("") }}
                                >
                                    <small>
                                        Cancel
                                    </small>

                                </button>

                                <button
                                    type="button"
                                    className={M.confirmButton}
                                    onClick={deleteRecord}
                                >
                                    {active4 ? (
                                        <>
                                            <small>
                                                Moving . . .
                                            </small>
                                        </>
                                    ) : (
                                        <>
                                            <small>
                                                <i className="bi bi-trash3"></i>
                                                &nbsp;
                                                Move to Recycle Bin
                                            </small>
                                        </>
                                    )}
                                </button>
                            </div>
                        </div>
                    </div>
                </>
            )}

            {active5 && (
                <div className={M.existingRecordOverlay}>
                    <div className={M.existingRecordModal}>
                        <button
                            type="button"
                            className={M.existingRecordClose}
                            onClick={() => {
                                setActive5(false);
                                setActive01(false)
                            }}
                            aria-label="Close overlay"
                        >
                            <i className="bi bi-x-lg"></i>
                        </button>

                        <div className={M.existingRecordIcon}>
                            <i className="bi bi-file-earmark-medical"></i>
                            <span>
                                <i className="bi bi-exclamation"></i>
                            </span>
                        </div>

                        <div className={M.existingRecordHeading}>
                            <span className={M.existingRecordLabel}>
                                PATIENT RECORD NOTICE
                            </span>

                            <h3>Medical Record Already Exists</h3>

                            <p>
                                This patient already has a medical record in the system.
                                To avoid creating a duplicate record, please view the
                                existing record instead.
                            </p>
                        </div>

                        <div className={M.existingRecordNotice}>
                            <i className="bi bi-info-circle"></i>
                            <span>
                                Review the existing medical record before proceeding
                                with any further documentation.
                            </span>
                        </div>

                        <div className={M.existingRecordActions}>
                            <button
                                type="button"
                                className={M.existingRecordCancel}
                                onClick={() => {
                                    setActive5(false);
                                    setActive01(false)

                                }}
                            >
                                <i className="bi bi-x-circle"></i>
                                Close
                            </button>

                            <button
                                type="button"
                                className={M.existingRecordView}
                                onClick={() => {
                                    setActive5(false);
                                    navigateTo("/his/records");
                                    setActive01(false)
                                }}
                            >
                                <i className="bi bi-eye"></i>
                                View Medical Record
                                <i className="bi bi-arrow-up-right"></i>
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {active6 && (
                <div className={M.serverFailureOverlay}>
                    <div
                        className={M.serverFailureModal}
                        role="alertdialog"
                        aria-modal="true"
                        aria-labelledby="serverFailureTitle"
                    >
                        <button
                            type="button"
                            className={M.serverFailureClose}
                            onClick={() => setActive6(false)}
                            aria-label="Close server error"
                        >
                            <i className="bi bi-x-lg"></i>
                        </button>

                        <div className={M.serverFailureIcon}>
                            <i className="bi bi-exclamation-triangle"></i>
                        </div>

                        <div className={M.serverFailureContent}>
                            <h3 id="serverFailureTitle">
                                Server Error
                            </h3>

                            {feedBack1 && (
                                <div className={M.successMessage}>
                                    <span>{feedBack1}</span>

                                </div>
                            )}
                        </div>

                        <button
                            type="button"
                            className={M.serverFailureButton}
                            onClick={() => setActive6(false)}
                        >
                            <i className="bi bi-x-lg"></i>
                            Close
                        </button>
                    </div>
                </div>
            )}

        </div >
    );
}

export default Medicalrecords;