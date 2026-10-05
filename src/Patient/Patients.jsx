import { useState, useEffect, useContext } from "react";
import { useNavigate, Navigate, NavLink } from "react-router-dom";
import P from "./Patients.module.css";
import { Helmet } from 'react-helmet-async'
import axios from 'axios'
const API = import.meta.env.VITE_HOSTING_API
import { MyContext } from "../Mycontext";


function Patients() {

    const { active100, setActive100, refreshPatients } = useContext(MyContext)
    const [active, setActive] = useState(false);
    const [active1, setActive1] = useState(false);
    const [active2, setActive2] = useState(false);
    const [active3, setActive3] = useState(false)
    const [active4, setActive4] = useState(true)
    const [active5, setActive5] = useState(false)
    const [active6, setActive6] = useState(false)
    const [active7, setActive7] = useState(false)
    const [active8, setActive8] = useState(false)
    const [active9, setActive9] = useState(false)

    const [date, setDate] = useState("")
    const [filterType, setFilterType] = useState("Newest")
    const [filterGender, setFilterGender] = useState("Male")
    const [oldPatient, setOldPatient] = useState([])
    const [inactivePatient, setNewInactivePatient] = useState([])
    const [currentList, setCurrentList] = useState("active")

    const navigateTo = useNavigate();

    const [totalPatients, setTotalPatients] = useState(0);
    const [activePatients, setActivePatients] = useState(0);
    const [inctivePatients, setInActivePatients] = useState(0);
    const [patientsThisMonth, setPatientsThisMonth] = useState(0);
    const [recordsUpdatedThisMonth, setRecordsUpdatedThisMonth] = useState(0);

    const [feedBack, setFeedback] = useState("");
    const [menu, setMenu] = useState(null);


    const [filteredPatients, setFilteredPatients] = useState([]);
    const [fetchedPatients, setFetchedPatients] = useState([]);

    function clicking() {
        if (active5) {
            setActive5(false)
            setCurrentList("active")
        }
        setCurrentList("active")
        setActive4(true)
    }

    function clicking1() {
        if (active4) {
            setCurrentList("inactive")
            setActive4(false)
        }

        setCurrentList("inactive")
        setActive5(true)
    }



    useEffect(() => {
        let currentMonth = new Date().toLocaleString("en-US", {
            month: "long",
            year: "numeric"
        });

        setDate(currentMonth)

    }, [])

    async function dashbaord() {

        try {
            const response = await axios.get(`${API}/patient/`)
            const results = response.data

            if (results.success === true) {
                setTotalPatients(results.totalPatients);
                setActivePatients(results.activePatients);
                setPatientsThisMonth(results.patientsThisMonth);
                setRecordsUpdatedThisMonth(results.recordsUpdatedThisMonth);
                setInActivePatients(results.inactivePatients)


            } else (
                console.log(results.message)
            )

        } catch (error) {
            console.log(error.message)
            console.log(error)
        }

    }

    useEffect(() => {
        dashbaord()
    }, [])

    async function fetchPatients() {
        setActive(false)
        setActive8(false)
        setActive3(false)
        filter4()

        try {

            const response = await axios.get(`${API}/patient/view-patients`)
            const results = response.data;

            if (results.success === true && results.count === true) {
                setActive8(true)
                setFetchedPatients(results.patients);
                setFilteredPatients(results.patients);
                localStorage.setItem("cachedPatientsFolders", JSON.stringify(results.patients))
            } else if (results.success === true && results.count === false) {
                console.log(results.message)
                setActive8(true)
                setActive3(false)
                setFetchedPatients([]);
                setFilteredPatients([]);
            }

            else {
                console.log(results.message)
                setActive8(true)
                setActive3(true)
                const retrieveCachedPatients = localStorage.getItem("cachedPatientsFolders")
                if (retrieveCachedPatients) {
                    const patients = JSON.parse(retrieveCachedPatients)
                    setFetchedPatients(patients);
                    setFilteredPatients(patients);
                }
            }

        } catch (error) {
            console.log(error.name);
            setActive8(true)
            setActive3(true)
            const retrieveCachedPatients = localStorage.getItem("cachedPatientsFolders")
            if (retrieveCachedPatients) {
                const patients = JSON.parse(retrieveCachedPatients)
                setFetchedPatients(patients);
                setFilteredPatients(patients);
            }
        }
    }

    useEffect(() => {
        fetchPatients()
    }, [])


    async function fetchallinactivePatients() {
        try {
            const response = await axios.get(`${API}/patient/inactive-patients`)
            const results = response.data

            if (results.success === true) {
                setFetchedPatients(results.patients);
                setFilteredPatients(results.patients);
            } else {
                console.log(results.message)
            }


        } catch (error) {
            console.log(error.message)
            console.log(error.name)

        }
    }





    async function PatientPersonalDetails(id) {
        localStorage.setItem("viewId", id);
        if (id) {
            navigateTo("/his/patients-info")
        }
    }



    function popUp() {
        setActive(true)
    }


    useEffect(() => {

        const closeMenu = () => {
            setMenu(null);
        };

        document.addEventListener("click", closeMenu);

        return () => {
            document.removeEventListener("click", closeMenu);
        };
    }, []);


    async function deleteFolder() {
        setActive2(true)
        setActive(true)
        const id = localStorage.getItem("id");

        try {
            const response = await axios.post(`${API}/patient/recycle-patient/${id}`);
            const results = response.data;

            if (results.success === true) {
                setActive2(false)
                console.log(results.message)
                setTimeout(() => {
                    setActive1(false)
                }, 2000);
                setFeedback("Patient moved to recycle bin successfully.")
                fetchPatients()
            } else {
                console.log(results.message)
                setActive2(false)

                setFeedback("Server Error: Failed to move patient to the recycle bin, please try again.")
            }

        } catch (error) {
            console.log(error.message)
            setActive2(false)
            setFeedback("Server Error: Failed to move patient to the recycle bin, please try again.")
            console.log(results.message)

        } finally {

            setTimeout(() => {
                setActive2(false)
                setActive1(false)
                setFeedback("")
            }, 3000);
            setTimeout(() => {
                fetchPatients();
            }, 1500);
        }
    }


    function search(e) {
        if (e === "") {
            return setFilteredPatients(fetchedPatients)
        }

        const results = fetchedPatients.filter((fdp) => {
            return fdp.first_name.toLowerCase().includes(e.toLowerCase()) || fdp.last_name.toLowerCase().includes(e.toLowerCase())
        })
        setFilteredPatients(results)
    }


    async function Oldest() {
        try {
            const response = await axios.get(`${API}/patient/oldest`)
            const results = response.data;
            if (results.success === true) {

                setOldPatient(results.patients)
                setFilteredPatients(results.patients)
                console.log(results.patients)
            } else {
                console.log(results.message)
            }

        } catch (error) {
            console.log(error)
        }
    }


    async function newestinactivepatient() {
        try {
            const response = await axios.get(`${API}/patient/inactive-patient/newest`)
            const results = response.data;

            if (results.success === true) {
                setNewInactivePatient(results.patients)
                setFilteredPatients(results.patients)
                console.log(results.patients)
            } else {
                console.log(results.message)
            }

        } catch (error) {
            console.log(error)

        }
    }




    function filter() {

        if (filterType === "Newest" && currentList === "active") {
            setFilterType("Oldest")
            setActive6(true)
            Oldest()    //perfect

        } else if (filterType === "Newest" && currentList === "inactive") {
            setFilterType("Oldest")
            setActive6(true)
            fetchallinactivePatients()


        } else if (filterType === "Oldest" && currentList === "active") {
            fetchPatients()
            setActive6(false)
            setFilterType("Newest") //perfect

        } else {
            setFilterType("Newest")
            setActive6(false)
            newestinactivepatient()
        }

    }

    function filter2() {
        if (filterGender === "Male") {
            setFilteredPatients(fetchedPatients.filter((fdp) => {
                return fdp.gender === "Female"
            }))

            setActive7(true)
            setFilterGender("Female")

        } else {
            setFilteredPatients(fetchedPatients.filter((fdp) => {
                return fdp.gender === "Male"
            }))

            setActive7(false)
            setFilterGender("Male")
        }
    }


    function filter4() {
        setFilterType("None")
        setFilterGender("None")

    }
    function filter3() {
        setFilteredPatients(fetchedPatients)
        setFilterType("None")
        setFilterGender("None")
    }


    return (
        <div className={P.patientsPage}>
            <Helmet>
                <title>
                    Patients | 🏥
                </title>
            </Helmet>
            <div>
                <br className={P.b1}></br>
                <br className={P.b2}></br>
                <br className={P.b3}></br>
                <br className={P.b4}></br>
                <br className={P.b4}></br>
                <br className={P.b5}></br>
            </div>
            {/* PAGE HEADER */}
            <div className={P.pageHeader}>
                <div className={P.headerText}>
                    <div className={P.pageLabel}>
                        <i className="bi bi-people-fill"></i>
                        Patient Management
                    </div>
                    <h1>Patients</h1>
                    <p>
                        View and manage patient information and access their medical records.
                    </p>
                </div>

                <div className={P.headerActions}>
                    <button className={P.refreshButton} onClick={() => {
                        fetchPatients()
                        dashbaord()
                        setActive100(true)
                        // window.location.href = "/his/patients"
                        setTimeout(() => {
                            setActive100(false)
                        }, 2000);
                    }}>
                        <i className="bi bi-arrow-clockwise"></i>
                        <span>Refresh</span>
                    </button>
                    <button className={P.addPatientButton} onClick={() => {
                        // window.location.href = "/his/fill-forms";
                        navigateTo("/his/fill-forms")
                    }
                    }>
                        <i className="bi bi-person-plus-fill"></i>
                        <span>Add Patient</span>
                    </button>
                </div>
            </div>

            {/* PATIENT STATISTICS */}
            <div className={P.patientStats}>
                <div className={P.statCard}>
                    <div className={`${P.statIcon} ${P.blue}`}>
                        <i className="bi bi-people-fill"></i>
                    </div>
                    <div className={P.statInfo}>
                        <span>Total Patients</span>
                        <h2>{totalPatients || (" --")}</h2>
                        <p>
                            <i className="bi bi-arrow-up"></i>
                            Registered patients
                        </p>
                    </div>
                </div>

                <div className={P.statCard}>
                    <div className={`${P.statIcon} ${P.green}`}>
                        <i className="bi bi-person-check-fill"></i>
                    </div>
                    <div className={P.statInfo}>
                        <span>Active Patients</span>
                        <h2>{activePatients || ("--")}</h2>

                        <span className={P.red}>
                            <i className="bi bi-chslash"></i>
                            Inactive patients: <span>{inctivePatients || "0"}</span>
                        </span>
                    </div>
                </div>

                <div className={P.statCard}>
                    <div className={`${P.statIcon} ${P.pink}`}>
                        <i className="bi bi-person-plus-fill"></i>
                    </div>
                    <div className={P.statInfo}>
                        <span>New This Month</span>
                        <h2>{patientsThisMonth || (" --")}</h2>
                        <p>
                            <i className="bi bi-calendar3"></i>
                            {date || "2026"}
                        </p>
                    </div>
                </div>

                <div className={P.statCard}>
                    <div className={`${P.statIcon} ${P.orange}`}>
                        <i className="bi bi-file-medical-fill"></i>
                    </div>
                    <div className={P.statInfo}>
                        <span>Records Updated</span>
                        <h2>{recordsUpdatedThisMonth || "--"}</h2>
                        <p>
                            <i className="bi bi-clock-history"></i>
                            This month
                        </p>
                    </div>
                </div>
            </div>

            {/* SEARCH / FILTER AREA */}
            <div className={P.searchSection}>
                <div className={P.searchBox}>
                    <i className="bi bi-search"></i>
                    <input
                        type="text"
                        onChange={(e) => {
                            search(e.target.value)
                        }}
                        placeholder="Search by patient name or patient ID..."
                    />
                </div>

                <div className={P.filterGroup} >

                    <button className={P.sortButton} onClick={filter}>
                        <small>Currently Filtering &nbsp; &nbsp;{active6 ? (<><i className="bi bi-sort-up"></i></>) : (<><i className="bi bi-sort-down"></i> </>)}
                            {filterType}</small>
                    </button>

                    <button className={P.sortButton} onClick={filter2}>
                        <small>
                            Current Gender:
                            {" " + filterGender + " "}
                            {active7 ? (<>
                                <i className="bi bi-gender-male"></i>
                            </>) : (<>
                                <i className="bi bi-gender-male"></i>
                            </>)}
                        </small>
                    </button>

                    <button className={P.sortButton} onClick={filter3}>
                        <small>Clear Filter</small>
                    </button>
                </div>
            </div>

            {/* PATIENTS HEADER */}


            {active3 &&
                (
                    <>
                        <div className={P.hmsPatientFoldersServerErrorOverlay}>
                            <div className={P.hmsPatientFoldersServerError}>
                                <button
                                    className={P.hmsPatientFoldersServerErrorClose}
                                    onClick={() => setActive3(false)}
                                    aria-label="Close"
                                >
                                    <i className="bi bi-x-lg"></i>
                                </button>
                                <div className={P.hmsPatientFoldersServerErrorIcon}>
                                    <i className="bi bi-server"></i>
                                </div>
                                <div className={P.hmsPatientFoldersServerErrorContent}>
                                    <h3>Server Error</h3>
                                    <p>
                                        The latest patient records could not be retrieved at this time.
                                        Please try again shortly.
                                    </p>
                                    <button
                                        className={P.hmsPatientFoldersServerErrorButton}
                                        onClick={() => {
                                            fetchPatients();
                                            dashbaord();
                                            setActive100(true);

                                            setTimeout(() => {
                                                setActive100(false);
                                            }, 2000);
                                        }}
                                    >
                                        <i className="bi bi-arrow-clockwise"></i>
                                        Try Again
                                    </button>
                                    &nbsp;&nbsp;&nbsp;&nbsp;
                                    <button
                                        className={`${P.hmsPatientFoldersServerErrorButton} ${P.q}`}
                                        onClick={() => setActive3(false)}
                                    >
                                        <i className="bi bi-x"></i>
                                        Close
                                    </button>
                                </div>
                            </div>
                        </div>
                    </>
                )
            }

            {active8 ?
                (
                    <>
                        <div className={P.listHeader}>
                            <div>
                                <h2>Patient Folders</h2>
                                <br></br>
                                <NavLink className={
                                    `${P.filterButtons} ${P.specialButtons}  ${active4 ? P.onn : ""}`}
                                    onClick={() => { clicking(); fetchPatients() }}
                                >
                                    Active Patients</NavLink>
                                &nbsp;&nbsp;
                                <NavLink className={`${P.filterButtons} ${P.specialButtons}   ${active5 ? P.onn : ""}`}
                                    onClick={() => { clicking1(); fetchallinactivePatients() }}
                                >Inactive Patients</NavLink>
                                <p>
                                    Select a patient to view their information and medical history.
                                </p>
                            </div>
                            <span className={P.patientCount}>
                                <span className={P.patientCount}>
                                    {fetchedPatients.length === 0 ? "No Patients Available" : `${fetchedPatients.length} Patients`}
                                </span>
                            </span>
                        </div>

                        {filteredPatients.length > 0 ?
                            (
                                <>
                                    <div className={P.patientGrid}>
                                        {filteredPatients.map((fp) => (
                                            <div className={P.patientFolder} key={fp.id} >
                                                <div className={P.folderTop}>
                                                    <div className={P.folderIcon}>
                                                        <i className="bi bi-folder-fill"></i>
                                                    </div>
                                                    <div className={P.patientMenuWrapper}>
                                                        <button
                                                            className={P.moreButton}
                                                            onClick={(e) => {
                                                                e.stopPropagation();
                                                                setMenu(menu === fp.id ? null : fp.id);
                                                            }}
                                                        >

                                                            <i className="bi bi-three-dots-vertical"></i>
                                                        </button>
                                                        {/* <div className={fp.boxCheck}>
                                                    <input type="checkbox" className={fp.q} />
                                                </div> */}

                                                        {menu === fp.id ? (
                                                            <div className={P.patientMenu}>

                                                                <button type="button" onClick={() => {
                                                                    popUp;
                                                                    navigateTo("/his/edit-patient-forms")
                                                                    localStorage.setItem("editId", fp.id)
                                                                }}>
                                                                    <i className="bi bi-pencil-square"></i>
                                                                    <span>Edit Patient</span>
                                                                </button>

                                                                <button type="button">
                                                                    <i className="bi bi-file-medical"></i>
                                                                    <span>View Records</span>
                                                                </button>
                                                                <button type="button"
                                                                    onClick={(e) => {
                                                                        setActive1(true);
                                                                        localStorage.setItem("id", fp.id);
                                                                    }} >
                                                                    <i className="bi bi-trash3"></i>
                                                                    <span>Delete Folder</span>
                                                                </button>

                                                                <button type="button"
                                                                    onClick={(e) => { closeMenu() }} >
                                                                    <i className="bi bi-x-lg"></i>
                                                                    <span>Exit</span>
                                                                </button>
                                                            </div>
                                                        ) : null}
                                                    </div>
                                                </div>

                                                <div className={P.patientAvatar}>
                                                    {fp.first_name[0]}{fp.last_name[0]}
                                                </div>
                                                <div className={P.patientDetails}>
                                                    <h3>
                                                        {fp.first_name} {fp.last_name}
                                                    </h3>
                                                </div>
                                                <div className={P.patientMeta}>
                                                    <span>
                                                        <i className="bi bi-gender-male"></i>
                                                        {fp.gender}
                                                    </span>
                                                    <span>
                                                        <i className="bi bi-calendar3"></i>
                                                        {fp.age} years
                                                    </span>
                                                </div>
                                                <br></br>
                                                {fp.registration_status ? <small style={{ color: "#01b804" }}>✓ Forms Completed</small> : <small style={{ color: "red" }}>⚠ Forms not completed</small>}

                                                <div className={P.folderFooter}>
                                                    <span>
                                                        Registered: <strong> {fp.registration_date.split("T")[0]}</strong>
                                                    </span>
                                                    <button
                                                        className={P.openButton}
                                                        onClick={(e) => PatientPersonalDetails(fp.id)}
                                                    >
                                                        <i className="bi bi-eye"></i>
                                                        View
                                                        <i className="bi bi-arrow-right"></i>
                                                    </button>
                                                </div>
                                                <small>
                                                    Last Updated: <strong>{fp.updated_at && (fp.updated_at.split("T")[0]) || "Not updated yet"}</strong>
                                                </small>
                                            </div>
                                        ))
                                        }
                                    </div>
                                </>
                            )
                            :
                            (
                                <>
                                    <center>

                                        <div className={P.noPatients}>
                                            <div className={P.noPatientsIcon}>
                                                <i className="bi bi-person-vcard"></i>
                                            </div>
                                            <h3>No Active Patients Found</h3>
                                            <p>
                                                There are currently no active patients to display.
                                            </p>
                                        </div>
                                    </center>
                                </>
                            )
                        }
                    </>
                )
                :
                (
                    <>
                        <div className={P.patientLoadingContainer}>

                            <div className={P.patientLoadingVisual}>

                                <div className={P.patientLoadingRing}></div>

                                <div className={P.patientLoadingIcon}>
                                    <i className="bi bi-person-vcard"></i>
                                </div>
                            </div>
                            <h3>Loading Patients</h3>
                            <p>Retrieving patient information</p>
                            <div className={P.patientLoadingDots}>
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                        </div>
                    </>
                )
            }


            {/* 
            {active9 &&
                (<>
                    <center>

                        <div className={P.noPatients}>
                            <div className={P.noPatientsIcon}>
                                <i className="bi bi-person-vcard"></i>
                            </div>
                            <h3>No Active Patients Found</h3>
                            <p>
                                There are currently no active patients to display.
                            </p>
                        </div>
                    </center>
                </>)} */}

            {/* move to reciycle bin */}
            {/* move to reciycle bin */}

            {active1 ?
                (

                    <div className={P.deleteOverlay}>
                        <div className={P.deleteModal}>

                            <div className={P.deleteIcon}>
                                <i className="bi bi-trash3"></i>
                            </div>

                            <h3>Move Patient to Recycle Bin?</h3>

                            <p>
                                Are you sure you want to move this patient's folder to the
                                recycle bin?
                            </p>

                            <div className={P.deleteWarning}>
                                <i className="bi bi-info-circle"></i>

                                <span>
                                    The patient's folder and its records will be moved to the
                                    recycle bin. The information will no longer appear in the
                                    active patient records, but it can be restored from the
                                    recycle bin later.
                                </span>
                            </div>

                            <center><p>{feedBack}</p></center><br></br>
                            <div className={P.deleteActions}>
                                <button
                                    className={P.cancelDelete}
                                    onClick={() => setActive1(false)}
                                >
                                    <i className="bi bi-x-lg"></i>
                                    Cancel
                                </button>

                                <button
                                    className={P.confirmDelete}
                                    onClick={deleteFolder}
                                    disabled={active}
                                >
                                    {active2 ?
                                        (
                                            <>
                                                <i className={`bi bi-arrow-repeat ${P.patientDeleteLoadingSpinner}`}></i>
                                                Moving...
                                            </>
                                        ) : (
                                            <>
                                                <i className="bi bi-trash3"></i>
                                                Move to Recycle Bin
                                            </>
                                        )}
                                </button>
                            </div>
                        </div>
                    </div>

                ) : (
                    <>
                    </>
                )
            }


            {/* 
            {active9 && (
                <div className={P.patientLoadingContainer}>

                    <div className={P.patientLoadingVisual}>

                        <div className={P.patientLoadingRing}></div>

                        <div className={P.patientLoadingIcon}>
                            <i className="bi bi-person-vcard"></i>
                        </div>

                    </div>

                    <h3>Loading Patients</h3>

                    <p>Retrieving patient information</p>

                    <div className={P.patientLoadingDots}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>

                </div>
            )} */}
        </div>
    );
}

export default Patients;