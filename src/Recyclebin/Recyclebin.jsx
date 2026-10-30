import React, { useState, useEffect, useContext } from "react";
import P from "./Recyclebin.module.css";
import { Helmet } from "react-helmet-async";
import axios from "axios";
import { MyContext } from "../Mycontext.jsx";
const API = import.meta.env.VITE_HOSTING_API;

function Recyclebin() {
    const { buttonPermissons } = useContext(MyContext);
    const [patientSearch, setPatientSearch] = useState("");
    const [recordSearch, setRecordSearch] = useState("");
    const [noRecycledPatient, setNoRecycledPatient] = useState(0);

    const [filterRecycledrecords, setFilterRecycledrecords] = useState([])
    const [recycledrecords, setRecycledrecords] = useState([])
    const [noRecycledrecords, setNoRecycledrecords] = useState(0)

    const [feedBack, setFeedBack] = useState("")
    const [feedBack1, setFeedBack1] = useState("")
    const [feedBack2, setFeedBack2] = useState("")
    const [feedBack3, setFeedBack3] = useState("")
    // buttonPermissons

    const [active, setActive] = useState(false)
    const [active1, setActive1] = useState(false)
    const [active2, setActive2] = useState(false)
    const [active3, setActive3] = useState(false)
    const [active4, setActive4] = useState(false)
    const [active5, setActive5] = useState(false)
    const [active6, setActive6] = useState(false)
    const [active7, setActive7] = useState(false)
    const [active8, setActive8] = useState(false)
    const [active9, setActive9] = useState(false)
    const [active10, setActive10] = useState(false)
    const [active11, setActive11] = useState(false)
    const [active12, setActive12] = useState(false)
    const [active13, setActive13] = useState(false)
    const [active14, setActive14] = useState(false)


    const [filteredPatients, setFilteredPatients] = useState([]);
    const [fetchedPatients, setFetchedPatients] = useState([]);




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


    async function permanentDeleteRecord() {
        const id = localStorage.getItem("permanentDeleteId")
        setActive12(true)

        try {
            const response = await axios.delete(`${API}/patient/permanent-delete-medical-record/${id}`)
            const results = response.data

            if (results.success === true) {
                setFeedBack3(results.message)
                setActive12(false)
                setTimeout(() => {
                    recycledMedicalRecords()
                    setActive11(false)
                }, 2500);



            } else {
                setFeedBack3(results.message)
                recycledMedicalRecords()
                setTimeout(() => {
                    recycledMedicalRecords()
                    setActive11(false)
                }, 2500);
                setActive12(false)
            }
        } catch (error) {
            setFeedBack3("Server error: Please try again later")
            setTimeout(() => {
                recycledMedicalRecords()
                setActive11(false)
            }, 2500);
            setActive12(false)
        }
    }






    async function restoringRecord() {
        setActive10(true)
        setFeedBack2("")
        const id = localStorage.getItem("restoringId")

        try {

            const response = await axios.patch(`${API}/patient/restore-record/${id}`)
            const results = response.data

            if (results.success === true) {
                setActive10(false)
                setFeedBack2(results.message)
                setTimeout(() => {
                    setActive2(false)
                }, 900);
                setTimeout(() => {
                    recycledMedicalRecords()
                }, 1300);
            } else {
                setFeedBack2(results.message)
                setActive10(false)
            }


        } catch (error) {
            setActive10(false)
            setFeedBack2("Server Error: Please try again later")

        }
    }


    async function fetchRecycledPatients() {
        setActive6(false)
        setActive7(false)
        try {
            const response = await axios.get(`${API}/patient/recycled-patients`);
            const results = response.data

            if (results.success && results.count) {
                setActive6(true)
                console.log(results.message)
                console.log(results.patients);
                setNoRecycledPatient(results.patients.length)
                setFilteredPatients(results.patients)
                localStorage.setItem("retrievedDeletedPatients", JSON.stringify(results.patients))
                localStorage.setItem("countPatients", JSON.stringify(results.count))
                setFetchedPatients(results.patients)
                console.log(results.patients.length)

            } else if (results.success && !results.count) {
                console.log(results.message)
                setActive6(true)
                setNoRecycledPatient(results.count)
                setFilteredPatients(results.patients)
                localStorage.removeItem("retrievedDeletedPatients")
                const deleetedStoredPatient = localStorage.getItem("retrievedDeletedPatients")
                const countedPatients = JSON.parse(localStorage.getItem("countPatients"))

                console.log(results.message)
                if (deleetedStoredPatient) {
                    const StoredPatient = JSON.parse(deleetedStoredPatient)
                    setNoRecycledPatient(countedPatients)
                    setFilteredPatients(StoredPatient)
                } else {
                    setNoRecycledPatient(0)
                    setFilteredPatients([])
                }

            } else {
                setActive6(true)
                setActive7(true)
                const deleetedStoredPatient = localStorage.getItem("retrievedDeletedPatients")
                const countedPatients = JSON.parse(localStorage.getItem("countPatients"))
                console.log(results.message)
                if (deleetedStoredPatient) {
                    const StoredPatient = JSON.parse(deleetedStoredPatient)
                    setNoRecycledPatient(countedPatients)
                    setFilteredPatients(StoredPatient)
                } else {
                    setNoRecycledPatient(0)
                    setFilteredPatients([])
                }
            }

        } catch (error) {
            console.log(error);
            setActive7(true)
            setActive6(true)
            const deleetedStoredPatient = localStorage.getItem("retrievedDeletedPatients")
            const countedPatients = JSON.parse(localStorage.getItem("countPatients"))
            if (deleetedStoredPatient) {
                const StoredPatient = JSON.parse(deleetedStoredPatient)
                setNoRecycledPatient(countedPatients)
                setFilteredPatients(StoredPatient)
            }


        }
    };

    function dateName(dataValue) {
        if (!dataValue) {
            return "";
        }

        return new Date(dataValue).toLocaleDateString("en-US",
            {
                year: "numeric",
                month: "long",
                day: "numeric",
                hour: "numeric",
                minute: "2-digit",
                hours12: true
            }
        )
    }

    useEffect(() => {
        fetchRecycledPatients();
    }, []);


    async function restorePatient() {
        setFeedBack("")
        setActive4(true)
        const id = localStorage.getItem("restoreId")

        try {
            const response = await axios.patch(`${API}/patient/restore/${id}`)
            const results = response.data
            if (results.success === true) {
                setActive4(false)
                localStorage.removeItem("restoreId")
                setFeedBack("This Patient has been restored")
                setTimeout(() => {
                    setActive(false)
                }, 2300);
                await fetchRecycledPatients()

            } else {
                setActive4(false)
                localStorage.removeItem("restoreId")
                setTimeout(() => {
                    setActive(false)
                }, 2300);
                setFeedBack("Server Error: Could not restore patient")
            }
        } catch (error) {
            setFeedBack("Server Error: Could not restore patient")
            localStorage.removeItem("restoreId")
            setTimeout(() => {
                setActive(false)
            }, 2300);
            setActive4(false)
        } finally {
            setTimeout(() => {
                setActive(false)
                setFeedBack("")
            }, 2300);
        }

    }

    function search(e) {

        if (e === "") {
            return setFilteredPatients(fetchedPatients)
        }

        const results = fetchedPatients.filter((fdp) => {
            return fdp.first_name.toLowerCase().includes(e.toLowerCase()) || fdp.last_name.toLowerCase().includes(e.toLowerCase()) || fdp.middle_name.toLowerCase().includes(e.toLowerCase())
        })
        setFilteredPatients(results)
    }


    function SearchRecord(value) {
        let e = value.trim().toLowerCase();

        if (e === "") {
            return setRecycledrecords(filterRecycledrecords);
        }

        const results = filterRecycledrecords.filter((rr) => {
            return (
                rr.first_name.toLowerCase().includes(e) ||
                rr.last_name.toLowerCase().includes(e) ||
                (rr.middle_name || "").toLowerCase().includes(e)
            );
        });

        setRecycledrecords(results);
    }


    async function deletePatient() {
        setActive13(true);
        setFeedBack1("")
        setActive14(true)
        const id = localStorage.getItem("deleteId")
        // alert(`OH`)
        try {
            const response = await axios.delete(`${API}/patient/permanently-delete/${id}`)
            const results = response.data
            if (results.success === true) {
                setActive14(false)
                setFeedBack1("Patient has been deleted permanently ")

                setTimeout(() => {
                    fetchRecycledPatients();
                    setActive13(false);
                }, 2600);

            } else {
                setActive14(false)
                setFeedBack1("Server Error: Failed to delete this patient's folder")

                setTimeout(() => {
                    fetchRecycledPatients();
                    setActive13(false);
                }, 2500);
            }

        } catch (error) {
            setActive14(false)
            setFeedBack1("Server Error: Failed to delete this patient's folder")
            setTimeout(() => {
                fetchRecycledPatients();
                setActive13(false);
            }, 2500);
            console.log(error.message)
        }
    }





    async function recycledMedicalRecords() {
        setActive9(false)
        try {
            const response = await axios.get(`${API}/patient/recycled-medical-records`)
            const results = response.data

            if (results.success === true) {
                setActive9(true)
                setRecycledrecords(results.records)
                setFilterRecycledrecords(results.records)
                setNoRecycledrecords(results.records.length)
            } else {
                setActive9(true)
                setRecycledrecords([])
                setFilterRecycledrecords([])
                setNoRecycledrecords(0)
            }
        } catch (error) {

            setActive9(true)
            console.log(error.message)

        }

    }

    useEffect(() => {
        recycledMedicalRecords()
    }, [])




    return (
        <>
            <Helmet>
                <title>Recycle Bin | Hospital Management System</title>
            </Helmet>
            <div>
                <br className={P.b1}></br>
                <br className={P.b2}></br>
                <br className={P.b3}></br>
                <br className={P.b4}></br>
                <br className={P.b5}></br>
            </div>
            <div className={P.recycleBinPage}>

                {/* PAGE HEADER */}
                <div className={P.pageHeader}>

                    <div className={P.headerIcon}>
                        <i className="bi bi-trash3"></i>
                    </div>

                    <div>
                        <h1>Recycle Bin</h1>
                        <p>
                            Deleted patients and medical records are kept here
                            before they are permanently removed.
                        </p>
                    </div>
                    {/* <button className={P.restoreButton} onClick={()>
                        <i className="bi bi-arrow-counterclockwise"></i>
                        Restore
                    </button> */}
                </div>


                {/* DELETED PATIENTS */}
                <section className={P.recycleSection}>

                    <div className={P.sectionHeader}>

                        <div>
                            <h2 className={P.sectionTitle}>
                                <i className={`bi bi-person-x ${P.sectionIcon}`}></i>
                                Deleted Patient Folders
                            </h2>

                            <span className={P.itemCount}>
                                {noRecycledPatient || "0"} deleted patients
                            </span>
                        </div>

                        <div className={P.searchContainer}>
                            <i className="bi bi-search"></i>

                            <input
                                type="text"
                                placeholder="Search patients..."

                                onChange={(e) => search(e.target.value)}
                            />
                        </div>
                    </div>


                    <div className={P.itemsContainer}>

                        {/* PATIENT 1 */}
                        {active6 ?
                            (
                                <>
                                    {filteredPatients.length > 0 ? (
                                        <>
                                            {filteredPatients.map((fp) => (
                                                <>
                                                    <div className={P.recycleItem}>
                                                        <div className={P.recycleItemInfo}>
                                                            <div className={P.recycleItemIcon}>
                                                                <i className="bi bi-person"></i>
                                                            </div>
                                                            <div className={P.recycleItemDetails}>
                                                                <h4>{fp.first_name} {fp.middle_name || ""} {fp.last_name}</h4>
                                                                <p>
                                                                    Gender: {fp.gender}
                                                                </p>
                                                                <p>
                                                                    Deleted on: {dateName(fp.deleted_at) || "Deletion date unavailable"}
                                                                </p>
                                                            </div>
                                                        </div>

                                                        <div className={P.recycleItemActions}>

                                                            <button className={P.restoreButton} onClick={() => { setActive(true); localStorage.setItem("restoreId", fp.id) }}>
                                                                <i className="bi bi-arrow-counterclockwise"></i>
                                                                Restore
                                                            </button>
                                                            {buttonPermissons ? (
                                                                <button
                                                                    className={P.permanentDeleteButton}
                                                                    onClick={() => {
                                                                        setActive1(true);
                                                                        localStorage.setItem("deleteId", fp.id);
                                                                    }}
                                                                >
                                                                    <i className="bi bi-trash3"></i>
                                                                    Delete Permanently
                                                                </button>
                                                            ) : (



                                                                <button
                                                                    className={P.permanentDeleteDisabledButton}
                                                                    disabled
                                                                    title="Permanent deletion is disabled in Settings"
                                                                >
                                                                    <i className="bi bi-shield-lock"></i>
                                                                    Deletion Disabled
                                                                </button>
                                                            )}
                                                        </div>
                                                    </div>

                                                </>
                                            ))}
                                        </>
                                    )
                                        :
                                        (
                                            <>
                                                <div className={P.emptyRecyclePatients}>
                                                    <div className={P.emptyRecycleIcon}>
                                                        <i className="bi bi-person-check"></i>
                                                    </div>
                                                    <h3>No deleted patients</h3>
                                                    <p>
                                                        There are no patients waiting to be restored.
                                                    </p>
                                                </div>
                                            </>
                                        )
                                    }
                                </>
                            )
                            :
                            (
                                <>
                                    <div className={P.recycleBinLoadingContainer}>

                                        <div className={P.recycleBinLoadingVisual}>
                                            <div className={P.recycleBinLoadingRing}></div>

                                            <div className={P.recycleBinLoadingIcon}>
                                                <i className="bi bi-trash3"></i>
                                            </div>
                                        </div>

                                        <h3>Loading Recycle Bin</h3>

                                        <p>Retrieving deleted patients</p>

                                        <div className={P.recycleBinLoadingDots}>
                                            <span></span>
                                            <span></span>
                                            <span></span>
                                        </div>
                                    </div>
                                </>
                            )
                        }
                    </div>
                </section>





                {/* DELETED MEDICAL RECORDS */}
                <section className={P.recycleSection}>

                    <div className={P.sectionHeader}>

                        <div>
                            <h2 className={P.sectionTitle}>
                                <i className={`bi bi-file-earmark-medical ${P.sectionIcon}`}></i>
                                Deleted Medical Records
                            </h2>

                            <span className={P.itemCount}>
                                {noRecycledrecords || "0"} deleted records
                            </span>
                        </div>

                        <div className={P.searchContainer}>

                            <i className="bi bi-search"></i>
                            <input
                                type="text"
                                placeholder="Search medical records..."

                                onChange={(e) => SearchRecord(e.target.value)}
                            />
                        </div>
                    </div>

                    {/* Medical Record */}
                    {active9 ? (
                        <>
                            {recycledrecords.length > 0 ? (
                                <>
                                    {recycledrecords.map((rr) => (
                                        <>
                                            <div className={P.itemsContainer}>
                                                <br></br>
                                                <div className={P.recycleItem}>
                                                    <div className={P.recycleItemInfo}>
                                                        <div className={P.recycleItemIcon}>
                                                            <i className="bi bi-file-medical"></i>
                                                        </div>
                                                        <div className={P.recycleItemDetails}>
                                                            <p className={P.patientName}>
                                                                {rr.first_name} {rr.middle_name} {rr.last_name}
                                                            </p>
                                                            <p>
                                                                Date deleted: {dateName(rr.off_record_date)}
                                                            </p>
                                                        </div>
                                                    </div>

                                                    <div className={P.recycleItemActions}>

                                                        <button className={P.restoreButton}
                                                            onClick={() => {
                                                                setActive2(true);
                                                                setFeedBack("");
                                                                localStorage.setItem("restoringId", rr.id)

                                                            }}
                                                        >
                                                            <i className="bi bi-arrow-counterclockwise"></i>
                                                            Restore
                                                        </button>

                                                        {buttonPermissons ? (<>

                                                            <button className={P.permanentDeleteButton}
                                                                onClick={() => {
                                                                    setActive3(true);
                                                                    setFeedBack1("");
                                                                    localStorage.setItem("permanentDeleteId", rr.id)
                                                                }}
                                                            >
                                                                <i className="bi bi-trash3"></i>
                                                                Delete Permanently
                                                            </button>
                                                        </>
                                                        ) : (
                                                            <>
                                                                <button
                                                                    className={P.permanentDeleteDisabledButton}
                                                                    disabled
                                                                    title="Permanent deletion is disabled in Settings"
                                                                >
                                                                    <i className="bi bi-shield-lock"></i>
                                                                    Deletion Disabled
                                                                </button>
                                                            </>)}
                                                    </div>
                                                </div>

                                            </div>
                                        </>))}
                                </>
                            ) : (
                                <>
                                    <div className={P.emptyRecyclePatients}>
                                        <div className={P.emptyRecycleIcon}>
                                            <i className={`bi bi-file-earmark-medical ${P.sectionIcon}`}></i>
                                        </div>
                                        <h3>No deleted medical records</h3>
                                        <p>
                                            There are no records waiting to be restored.
                                        </p>
                                    </div>
                                </>
                            )}
                        </>
                    ) : (
                        <>
                            <div className={P.deletedMedicalRecordsLoadingContainer}>

                                <div className={P.deletedMedicalRecordsLoadingVisual}>
                                    <div className={P.deletedMedicalRecordsLoadingRing}></div>

                                    <div className={P.deletedMedicalRecordsLoadingIcon}>
                                        <i className="bi bi-trash3"></i>
                                    </div>
                                </div>

                                <h3>Loading Medical Records</h3>

                                <p>Retrieving deleted medical records</p>

                                <div className={P.deletedMedicalRecordsLoadingDots}>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </div>
                            </div>
                        </>
                    )}
                </section>
            </div>



            {active ? (<>
                {/* RESTORE CONFIRMATION OVERLAY */}
                <div className={P.restoreOverlay}>

                    <div className={P.restoreModal}>

                        <div className={P.restoreModalIcon}>
                            <i className="bi bi-arrow-counterclockwise"></i>
                        </div>

                        <h2>Restore Patient?</h2>

                        <p className={P.restoreMessage}>
                            Are you sure you want to restore this folder?
                        </p>

                        <p className={P.restoreInfo}>
                            This folder will be moved back to the active patient records.
                        </p>

                        {feedBack && (
                            <div className={P.message2}>
                                <span>{feedBack}</span>
                            </div>
                        )}

                        <br></br>
                        <div className={P.restoreModalActions}>

                            <button className={P.cancelRestoreButton} onClick={() => setActive(false)}>
                                <small>
                                    No, Keep in Recycle Bin
                                </small>
                            </button>

                            <button className={P.confirmRestoreButton} onClick={() => restorePatient()}>
                                <small>
                                    {active4 ? (
                                        <>
                                            <span>
                                                <i className="bi bi-arrow-repeat"></i>
                                                &nbsp; &nbsp;Restoring . . .
                                            </span>

                                        </>
                                    )
                                        :
                                        (<>
                                            <i className="bi bi-arrow-counterclockwise"></i>
                                            &nbsp; Yes, Restore Patient
                                        </>
                                        )}
                                </small>
                            </button>

                        </div>

                    </div>

                </div>
            </>) : (<></>)
            }


            {active1 &&
                (<>
                    {/* PERMANENT DELETE CONFIRMATION OVERLAY */}
                    <div className={P.deleteOverlay}>

                        <div className={P.deleteModal}>

                            <div className={P.deleteModalIcon}>
                                <i className="bi bi-trash3"></i>
                            </div>

                            <h2>Permanently delete patient's folder ?</h2>

                            <p className={P.deleteMessage}>
                                Are you sure you want to permanently delete this folder?
                            </p>

                            <p className={P.deleteWarning}>
                                This action can't be undone.
                            </p>

                            <div className={P.deleteModalActions}>
                                <button className={P.cancelDeleteButton}
                                    onClick={() => setActive1(false)}>
                                    <small>
                                        No, Keep Patient
                                    </small>
                                </button>

                                <button className={P.confirmDeleteButton}
                                    onClick={() => {
                                        setActive1(false);
                                        setFeedBack1("")
                                        setActive13(true)
                                    }}

                                >
                                    {active5 ?
                                        "Deleting..." : (<>
                                            <small>
                                                <i className="bi bi-trash3"></i>
                                                &nbsp; Yes, Delete Permanently
                                            </small>
                                        </>)}
                                </button>
                            </div>
                        </div>
                    </div>
                </>
                )
            }


            {active2 && (<>
                {/* RESTORE MEDICAL RECORD CONFIRMATION */}
                <div className={P.restoreRecordOverlay}>
                    <div className={P.restoreRecordModal}>

                        <div className={P.restoreRecordModalIcon}>
                            <i className="bi bi-arrow-counterclockwise"></i>
                        </div>

                        <h2>Restore Medical Record?</h2>

                        <p className={P.restoreRecordMessage}>
                            Are you sure you want to restore this medical record.
                        </p>

                        {feedBack2 && (
                            <div className={P.message2}>
                                <span>{feedBack2}</span>
                            </div>
                        )}

                        <div className={P.restoreRecordModalActions}>
                            <button className={P.cancelRestoreRecordButton} onClick={() => { setActive2(false); setFeedBack2(""); setActive10(false) }}>
                                Cancel
                            </button>

                            <button className={P.confirmRestoreRecordButton}
                                onClick={() => {
                                    setActive10(true);
                                    restoringRecord()
                                }}>
                                {active10 ?
                                    (
                                        <>
                                            Restoring...

                                        </>) : (
                                        <>
                                            <i className="bi bi-arrow-counterclockwise"></i>
                                            Restore
                                        </>)}
                            </button>
                        </div>
                    </div>
                </div>
            </>
            )
            }


            {active3 && (
                <>
                    {/* DELETE MEDICAL RECORD CONFIRMATION */}
                    <div className={P.deleteRecordOverlay}>
                        <div className={P.deleteRecordModal}>
                            <div className={P.deleteRecordModalIcon}>
                                <i className="bi bi-trash3"></i>
                            </div>
                            <h2>Delete Medical Record?</h2>
                            <p className={P.deleteRecordMessage}>
                                Are you sure you want to permanently delete this medical record?

                            </p>

                            <p className={P.deleteRecordWarning}>
                                This action can't be undone.
                            </p>


                            <div className={P.deleteRecordModalActions}>
                                <button className={P.cancelDeleteRecordButton} onClick={() => setActive3(false)}>
                                    Cancel
                                </button>

                                <button className={P.confirmDeleteRecordButton}
                                    onClick={() => {
                                        setActive3(false);
                                        setActive11(true)
                                    }}
                                >

                                    <i className="bi bi-trash3"></i>
                                    Delete Permanently
                                </button>
                            </div>
                        </div>
                    </div>
                </>
            )
            }


            {active8 && (
                <>
                    <div className={P.recycleBinLoadingContainer}>
                        <div className={P.recycleBinLoadingVisual}>
                            <div className={P.recycleBinLoadingRing}></div>

                            <div className={P.recycleBinLoadingIcon}>
                                <i className="bi bi-trash3"></i>
                            </div>
                        </div>

                        <h3>Loading Recycle Bin</h3>
                        <p>Retrieving deleted patients</p>
                        <div className={P.recycleBinLoadingDots}>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </div>
                </>
            )}


            {active7 &&
                (
                    <>
                        <div className={P.recycleBinServerErrorContainer}>

                            <button
                                className={P.recycleBinServerErrorClose}
                                onClick={() => setActive7(false)}
                                aria-label="Close server error"
                            >
                                <i className="bi bi-x-lg"></i>
                            </button>

                            <div className={P.recycleBinServerErrorIcon}>
                                <i className="bi bi-exclamation-triangle"></i>
                            </div>

                            <h3>Server Error</h3>

                            <p>
                                Unable to load deleted patients. Please try again.
                            </p>

                        </div>
                    </>
                )
            }

            {/* {active9 && (
                <div className={P.deletedMedicalRecordsLoadingContainer}>

                    <div className={P.deletedMedicalRecordsLoadingVisual}>
                        <div className={P.deletedMedicalRecordsLoadingRing}></div>

                        <div className={P.deletedMedicalRecordsLoadingIcon}>
                            <i className="bi bi-trash3"></i>
                        </div>
                    </div>

                    <h3>Loading Medical Records</h3>

                    <p>Retrieving deleted medical records</p>

                    <div className={P.deletedMedicalRecordsLoadingDots}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
            )} */}

            {active11 && (
                <div className={P.finalConfirmOverlay}>
                    <div className={P.finalConfirmBox}>
                        <i className={`bi bi-exclamation-triangle ${P.finalConfirmIcon}`}></i>

                        <h3>Proceed with deletion?</h3>
                        <p>
                            This medical record will be permanently deleted and cannot be recovered.
                        </p>
                        {feedBack3 && (
                            <div className={P.message2}>
                                <span>{feedBack3}</span>
                            </div>
                        )}
                        <div className={P.finalConfirmActions}>
                            <button
                                onClick={() => setActive11(false)}
                                className={P.finalConfirmCancel}
                            >
                                Cancel
                            </button>

                            <button
                                onClick={() => {
                                    permanentDeleteRecord();
                                }}
                                className={P.finalConfirmDelete}
                            >
                                {active12 ? "Deleting..." : "  Yes, Proceed"}
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {active13 && (
                <div className={P.finalConfirmOverlay}>
                    <div className={P.finalConfirmBox}>
                        <i className={`bi bi-exclamation-triangle ${P.finalConfirmIcon}`}></i>

                        <h3>Proceed with deletion?</h3>

                        <p>
                            This patient folder and its associated information will be permanently deleted and cannot be recovered.
                        </p>
                        {feedBack1 && (
                            <div className={P.message2}>
                                <span>{feedBack1}</span>
                            </div>
                        )}


                        <div className={P.finalConfirmActions}>
                            <button
                                onClick={() => setActive13(false)}
                                className={P.finalConfirmCancel}
                            >
                                Cancel
                            </button>

                            <button
                                onClick={() => {
                                    deletePatient()
                                }}
                                className={P.finalConfirmDelete}
                            >
                                {active14 ?
                                    "Deleting..." : " Yes, Proceed"}

                            </button>
                        </div>
                    </div>
                </div >
            )}
        </>
    );
}

export default Recyclebin;
