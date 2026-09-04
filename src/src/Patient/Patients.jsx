import { useState, useEffect, useContext } from "react";
import { useNavigate, Navigate } from "react-router-dom";
import { Hospitalsystemcontext } from "../UseContext/Usecontext";
import P from "./Patients.module.css";
import { Helmet } from 'react-helmet-async'
import axios from 'axios'
const API = import.meta.env.VITE_HOSTING_API


function Patients() {
    const [active, setActive] = useState(false);
    const [active1, setActive1] = useState(false);
    const [active2, setActive2] = useState(false);
    const navigateTo = useNavigate();

    const [feedBack, setFeedback] = useState("");
    const [menu, setMenu] = useState(null);

    const [tt, setTT] = useState("");
    const [filteredPatients, setFilteredPatients] = useState([]);
    const [fetchedPatients, setFetchedPatients] = useState([]);
    const [fetchedSinglePatients, setFetchedSinglePatients] = useState([]);

    const { setRefreshPatientFolders } = useContext(Hospitalsystemcontext)

    async function fetchPatients() {
        try {
            const response = await axios.get(`${API}/patient/view-patients`)
            const results = response.data;
            if (results.success === true) {
                setFetchedPatients(results.patients);
                setFilteredPatients(results.patients);
            } else {
                console.log(results.message)
            }

        } catch (error) {
            console.log(error.name);
        }
    }

    useEffect(() => {
        fetchPatients();
    }, []);

    function runRefreshPatientFolder() {
        setFetchedSinglePatients(fetchPatients);
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
        const id = localStorage.getItem("id");

        try {
            const response = await axios.post(`${API}/patient/recycle-patient/${id}`);
            const results = response.data;

            if (results.success === true) {
                setActive2(false)
                console.log(results.message)
                setFeedback("Patient moved to recycle bin successfully.")

            } else {
                console.log(results.message)

                setActive2(false)
                setFeedback("Failed to move patient to recycle bin. Please try again.")
            }

        } catch (error) {
            console.log(error.message)
            setActive2(false)
            setFeedback("Failed to move patient to recycle bin. Please try again.")
            console.log(results.message)

        } finally {


            setTimeout(() => {
                setActive2(false)
                setActive1(false)
                setFeedback("")
            }, 2000);
            setTimeout(() => {
                fetchPatients();
            }, 2500);
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


    return (
        <div className={P.patientsPage}>
            <Helmet>
                <title>
                    Patients || 🏥
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
                    <button className={P.refreshButton}>
                        <i className="bi bi-arrow-clockwise"></i>
                        <span>Refresh</span>
                    </button>
                    <button className={P.addPatientButton} onClick={() => { window.location.href = "/his/fill-forms" }}>
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
                        <h2>248</h2>
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
                        <h2>186</h2>
                        <p>
                            <i className="bi bi-check-circle-fill"></i>
                            Currently active
                        </p>
                    </div>
                </div>

                <div className={P.statCard}>
                    <div className={`${P.statIcon} ${P.pink}`}>
                        <i className="bi bi-person-plus-fill"></i>
                    </div>
                    <div className={P.statInfo}>
                        <span>New This Month</span>
                        <h2>32</h2>
                        <p>
                            <i className="bi bi-calendar3"></i>
                            August 2026
                        </p>
                    </div>
                </div>

                <div className={P.statCard}>
                    <div className={`${P.statIcon} ${P.orange}`}>
                        <i className="bi bi-file-medical-fill"></i>
                    </div>
                    <div className={P.statInfo}>
                        <span>Records Updated</span>
                        <h2>74</h2>
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
                            setTT(e.target.value)
                            search(e.target.value)
                        }}
                        placeholder="Search by patient name or patient ID..."
                    />
                </div>

                <div className={P.filterGroup}>
                    <button className={P.filterButton}>
                        <i className="bi bi-funnel"></i>
                        <span>Filter</span>
                        <i className="bi bi-chevron-down"></i>
                    </button>

                    <button className={P.sortButton}>
                        <i className="bi bi-sort-down"></i>
                        <span>Newest</span>
                    </button>
                </div>
            </div>

            {/* PATIENTS HEADER */}
            <div className={P.listHeader}>
                <div>
                    <h2>Patient Folders</h2>
                    <p>
                        Select a patient to view their information and medical history.
                    </p>
                </div>
                <span className={P.patientCount}>{(fetchedPatients.length + " Patients") || ("No Patients Available")}</span>
            </div>

            {/* PATIENT FOLDERS */}

            {filteredPatients.length > 0 ?
                (<>
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

                                <div className={P.folderFooter}>
                                    <span>
                                        Registered {fp.registration_date.split("T")[0]}
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
                                    Last Updated {fp.updated_at.split("T")[0]}
                                </small>
                            </div>
                        ))
                        }
                    </div>
                </>
                )
                :
                (<>
                    <center>

                        <div className={P.noPatients}>
                            <div className={P.noPatientsIcon}>
                                <i className="bi bi-person-vcard"></i>
                            </div>
                            <h3>No Patients Found</h3>
                            <p>
                                There are currently no patients to display.
                            </p>
                        </div>
                    </center>
                </>)}


            {/* PAGINATION */}
            <div className={P.pagination}>
                <span>Showing 1–6 of 248 patients</span>

                <div className={P.paginationButtons}>
                    <button disabled>
                        <i className="bi bi-chevron-left"></i>
                    </button>
                    <button className={P.activePage}>1</button>
                    <button>2</button>
                    <button>3</button>
                    <span>...</span>
                    <button>42</button>
                    <button>
                        <i className="bi bi-chevron-right"></i>
                    </button>
                </div>
            </div>


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
        </div>
    );
}

export default Patients;