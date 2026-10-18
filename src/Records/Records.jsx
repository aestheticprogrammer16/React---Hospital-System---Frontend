
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import R from "./Records.module.css";
import { Helmet } from "react-helmet-async";
import axios from "axios";

const API = import.meta.env.VITE_HOSTING_API;

function Records() {

    const navigate = useNavigate();

    const [feedBack, setFeedBack] = useState("");
    const [feedBack1, setFeedBack1] = useState("");

    // =====================================================
    // MODAL / UI STATES
    // =====================================================

    const [active1, setActive1] = useState(false);
    const [active2, setActive2] = useState(false);
    const [active3, setActive3] = useState(false);
    const [active4, setActive4] = useState(false);
    const [active5, setActive5] = useState(false);

    const [edit, setEdit] = useState(null);


    const [recordName, setRecordName] = useState("");
    const [recordedBy, setRecordedBy] = useState("");

    const [newRecord, setNewRecord] = useState([]);


    const [patientInfo, setPatientInfo] = useState([]);
    const [a, setA] = useState("--");
    const [b, setB] = useState("--");
    const [regdate, setRegDate] = useState("--");
    const [dob, setDob] = useState("--");

    const [recordFields, setRecordFields] = useState(
        [
            {
                recordId: 1,
                fields:
                    [
                        {
                            id: 1,
                            fieldName: "",
                            fieldValue: ""
                        }
                    ]
            },

            {
                recordId: 2,
                fields:
                    [
                        {
                            id: 2,
                            fieldName: "",
                            fieldValue: ""
                        }
                    ]
            },
        ]
    );


    function addNewFields() {

        setRecordFields((previousRecords) => {
            return previousRecords.map((record) => {
                return {
                    ...record,
                    fields: [
                        ...record.fields,
                        {
                            id: Date.now(),
                            fieldName: "",
                            fieldValue: ""
                        }
                    ]
                };
            });
        });
    }




    async function deleteRecordById() {
        setActive4(true)

        const id = localStorage.getItem("deleteMedicalRecordId");
        alert(id)

        try {

            const response = await axios.delete(
                `${API}/patient/delete-record/${id}`
            );

            const results = response.data;

            if (results.success === true) {
                setFeedBack("Record deleted");
                setActive4(false);

                setTimeout(() => {
                    fetchRecord();
                }, 2300);

                setTimeout(() => {
                    setActive3(false);
                    setFeedBack("");
                }, 15000);

            } else {
                setActive4(false)
                setFeedBack("Server Error: Failed to delete record");
                setActive4(false);

            }

        } catch (error) {

            setFeedBack("Server Error: Failed to delete record");
            setActive4(false);
            console.log(error.message);

        } finally {

            setTimeout(() => {
                setFeedBack("");
                setActive3(false);
                setActive4(false);
            }, 2000);
        }
    }

    async function displayPatientInfo() {

        const id = localStorage.getItem("SpecialRecordId");

        try {

            const response = await axios.get(`${API}/patient/${id}/info`);

            const results = response.data;

            if (results.success === true) {

                setPatientInfo(results.patient);

                setA(results.patient.first_name[0]);
                setB(results.patient.last_name[0]);

                setRegDate(
                    results.patient.registration_date.split("T")[0]
                );

                setDob(
                    results.patient.dob.split("T")[0]
                );

            } else {

                console.log(results.message);
            }

        } catch (error) {

            console.log(error.message);
        }
    }

    useEffect(() => {
        displayPatientInfo();
    }, []);

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



    async function submitNewRecord(e) {

        e.preventDefault();

        setFeedBack1("");

        const id = localStorage.getItem("SpecialRecordId");

        try {
            const response = await axios.post(`${API}/patient/add-record/${id}`,
                {
                    recordName,
                    recordedBy
                }
            );

            const results = response.data;

            if (results.success === true) {

                fetchRecord();

                setFeedBack1("You added a new record");

                setTimeout(() => {
                    setActive1(false);
                }, 2000);

            } else {
                setFeedBack1(
                    "Server Error: Failed to add record"
                );

                setTimeout(() => {
                    setActive1(false);
                }, 3000);

            }

        } catch (error) {

            setFeedBack1(
                "Server Error: Failed to add record"
            );

            console.log(error.message);

            setTimeout(() => {
                setActive1(false);
            }, 3000);

        } finally {

            setTimeout(() => {

                setFeedBack1("");
                setRecordName("");
                setRecordedBy("");

            }, 3500);
        }
    }

    async function fetchRecord() {

        setActive2(false);

        const id = localStorage.getItem("SpecialRecordId");

        try {

            const response = await axios.get(
                `${API}/patient/view-record/${id}`
            );

            const results = response.data;

            if (results.success && !results.empty) {

                console.log(results.record);

                setNewRecord(results.record);



            } else if (results.success && results.empty) {

                setActive2(false);
                setNewRecord([]);
                setRecordFields({});

            } else {

                console.log(results.message);
                setActive2(true);
            }

        } catch (error) {

            console.log(error.message);
            setActive2(true);
        }
    }

    useEffect(() => {
        fetchRecord();
    }, []);



    return (

        <div className={R.recordsPage}>

            <Helmet>
                <title>Medical Records | Hospital Management System</title>
            </Helmet>

            <div>
                <br className={R.b1}></br>
                <br className={R.b2}></br>
                <br className={R.b3}></br>
                <br className={R.b4}></br>
                <br className={R.b5}></br>
            </div>


            <div className={R.topNavigation}>

                <button
                    className={R.backButton}
                    onClick={() =>
                        navigate("/his/medical-records")
                    }
                >
                    <i className="bi bi-arrow-left"></i>
                    <span>Back to Medical Records</span>
                </button>

                <div className={R.topActions}>

                    <button
                        className={R.printButton}

                    >
                        <i className="bi bi-printer"></i>
                        <span>Print</span>
                    </button>

                    <button className={R.patientAction}>
                        <i className="bi bi-three-dots-vertical"></i>
                    </button>

                </div>

            </div>

            {/* =====================================================
                PATIENT HEADER
            ===================================================== */}

            <section className={R.patientHeader}>

                <div className={R.patientIdentity}>

                    <div className={R.patientAvatar}>
                        {a}{b}
                    </div>

                    <div className={R.patientName}>

                        <div className={R.patientLabel}>
                            <i className="bi bi-person-vcard"></i>
                            PATIENT
                        </div>

                        <h1>
                            {patientInfo.first_name}{" "}
                            {patientInfo.middle_name || ""}{" "}
                            {patientInfo.last_name}
                        </h1>

                    </div>

                </div>

                <div className={R.patientDetails}>

                    <div>
                        <span>Gender</span>

                        <strong>
                            <i className="bi bi-gender-male"></i>
                            {patientInfo.gender}
                        </strong>
                    </div>

                    <div>
                        <span>Age</span>

                        <strong>
                            {patientInfo.age} years
                        </strong>
                    </div>

                    <div>
                        <span>Date of Birth</span>

                        <strong>
                            {dob}
                        </strong>
                    </div>

                    <div>
                        <span>Date Registered</span>

                        <strong>
                            {regdate}
                        </strong>
                    </div>

                </div>

            </section>

            {/* =====================================================
                PATIENT QUICK INFORMATION
            ===================================================== */}

            <section className={R.patientQuickInfo}>

                <div className={R.quickInfoItem}>

                    <i className="bi bi-telephone-fill"></i>

                    <div>
                        <span>Phone</span>

                        <strong>
                            {patientInfo.phone}
                        </strong>
                    </div>

                </div>

                <div className={R.quickInfoItem}>

                    <i className="bi bi-geo-alt-fill"></i>

                    <div>
                        <span>Address</span>

                        <strong>
                            {patientInfo.address}
                        </strong>
                    </div>

                </div>

                <div className={R.quickInfoItem}>

                    <i className="bi bi-heart-pulse-fill"></i>

                    <div>
                        <span>Medical Records</span>

                        <strong>
                            {newRecord.length} Records
                        </strong>
                    </div>

                </div>

                <div className={R.quickInfoItem}>

                    <i className="bi bi-clock-history"></i>

                    <div>
                        <span>Last Updated</span>

                        <strong>
                            24 Aug 2026
                        </strong>
                    </div>

                </div>

            </section>

            {/* =====================================================
                SEARCH & FILTER
            ===================================================== */}

            <section className={R.recordSearchSection}>

                <div className={R.sectionHeading}>

                    <div>

                        <h2>
                            <i className="bi bi-file-medical-fill"></i>
                            Medical Record History
                        </h2>

                        <p>
                            Search and manage all medical records
                            belonging to this patient.
                        </p>

                    </div>

                    <button
                        className={R.newRecordButton}
                        onClick={() => setActive1(true)}
                    >
                        <i className="bi bi-plus-circle-fill"></i>
                        New Medical Record
                    </button>

                </div>

                {/* SEARCH */}

                <div className={R.recordSearch}>

                    <i className="bi bi-search"></i>

                    <input
                        type="text"
                        placeholder="Search this patient's records by record name..."
                    />

                </div>

                {/* FILTERS */}

                <div className={R.recordFilters}>
                </div>

            </section>

            {/* =====================================================
                SUMMARY
            ===================================================== */}

            <div className={R.recordsSummary}>

                <div>

                    <span>Showing</span>

                    <strong>
                        {newRecord.length} medical records
                    </strong>

                </div>

                <button className={R.clearFiltersButton}>

                    <i className="bi bi-x-circle"></i>
                    Clear filters

                </button>

            </div>

            {/* =====================================================
                RECORDS
            ===================================================== */}

            {active2 ? (

                <div className={R.serverErrorMessage}>

                    <div className={R.serverErrorIcon}>
                        <i className="bi bi-exclamation-triangle"></i>
                    </div>

                    <h3>Server Error</h3>

                    <p>
                        An unexpected error occurred while
                        processing your request. Please try again later.
                    </p>

                </div>

            ) : (

                <>

                    {newRecord.length > 0 ? (

                        <>
                            {newRecord.map((nr) => (
                                <>

                                    <section className={R.recordCard}>

                                        {/* RECORD HEADER */}

                                        <div className={R.recordCardHeader}>

                                            <div className={R.recordTitleArea}>

                                                <div className={R.recordIcon}>
                                                    <i className="bi bi-file-medical-fill"></i>
                                                </div>

                                                <div>

                                                    <h2>
                                                        {nr.condition}
                                                    </h2>

                                                    <p>
                                                        Created on {dateName(nr.created_at)}
                                                    </p>

                                                </div>

                                            </div>
                                            <div className={R.recordCardActions}>

                                                <span className={`${R.recordStatus} ${R.completed}`}>
                                                    <i className="bi bi-check-circle-fill"></i>
                                                    {nr.status}
                                                </span>

                                                <button
                                                    className={R.iconAction}
                                                    title="Edit record"
                                                >
                                                    <i className="bi bi-pencil-square"></i>
                                                </button>

                                                <button
                                                    className={`${R.iconAction} ${R.deleteAction}`}
                                                    title="Delete record"
                                                    onClick={() => { setActive3(true); localStorage.setItem("deleteMedicalRecordId", nr.id) }}
                                                >
                                                    {/* qwerty */}
                                                    <i className="bi bi-trash3"></i>
                                                </button>
                                            </div>
                                        </div>

                                        {/* RECORD META */}

                                        <div className={R.recordMeta}>

                                            <div>

                                                <span>Recorded By</span>

                                                <strong>
                                                    <i className="bi bi-person-badge"></i>
                                                    {nr.recorded_by}
                                                </strong>
                                            </div>

                                            <div>
                                                <span>Record Date</span>
                                                <strong>
                                                    <i className="bi bi-calendar3"></i>
                                                    {dateName(nr.created_at)}
                                                </strong>
                                            </div>

                                            <div>

                                                <span>Last Updated</span>

                                                <strong>
                                                    <i className="bi bi-clock-history"></i>
                                                    {dateName(nr.updated_at)}
                                                </strong>

                                            </div>

                                        </div>

                                        {/* RECORD INFORMATION */}
                                        <div className={R.informationSection}>
                                            <div className={R.informationHeader}>
                                                <div>
                                                    <h3>
                                                        Record Information
                                                    </h3>
                                                    <p>
                                                        Information recorded during this consultation.
                                                    </p>
                                                </div>
                                            </div>

                                            {/* Aesthetic */}
                                            {recordFields.map((rf) => (
                                                <div className={R.sectionFields}>
                                                    <>
                                                        <div key={rf.recordId}>
                                                            {rf.fields.map((r) => (

                                                                <div className={R.customField} key={r.id} >
                                                                    <div className={R.fieldName}>
                                                                        <input
                                                                            type="text"
                                                                            placeholder="Field name..."
                                                                            onChange={(e) => r.fieldName}
                                                                            value={r.fieldName}
                                                                        />
                                                                        <span>
                                                                            &nbsp; Property
                                                                        </span>
                                                                    </div>
                                                                    <div className={R.fieldValue}>
                                                                        <textarea
                                                                            placeholder="Enter information..."
                                                                            value={r.fieldValue}
                                                                            onChange={(e) => r.fieldValue}
                                                                        ></textarea>
                                                                    </div>
                                                                    <button
                                                                        type="button"
                                                                        className={R.fieldDelete}
                                                                        title="Remove field"
                                                                    >
                                                                        <i className="bi bi-trash3"></i>
                                                                    </button>
                                                                </div>
                                                            ))}
                                                        </div>
                                                    </>
                                                </div>
                                            ))}
                                            <button className={R.addFieldButton}
                                                onClick={() => { addNewFields(nr.id) }}

                                            >
                                                <i className="bi bi-plus-circle"></i>
                                                Add Another Information Field
                                            </button>
                                        </div>

                                        <div className={R.recordFooter}>
                                            <div className={R.lastModified}>
                                                <i className="bi bi-info-circle"></i>
                                                <span>
                                                    Last changes saved on {dateName(nr.updated_at)}
                                                </span>
                                            </div>
                                            <div className={R.saveActions}>
                                                <button className={R.cancelButton}>
                                                    Cancel
                                                </button>
                                                <button className={R.saveButton}>
                                                    <i className="bi bi-check2"></i>
                                                    Save Changes
                                                </button>
                                            </div>
                                        </div>
                                    </section>
                                </>
                            ))}
                        </>

                    ) : (

                        <div className={R.emptyRecordsMessage}>

                            <div className={R.emptyRecordsIcon}>

                                <i className="bi bi-clipboard2-pulse"></i>

                            </div>

                            <h3>
                                No Medical Records Available
                            </h3>

                            <p>
                                No clinical records have been documented
                                for this patient.
                            </p>

                        </div>

                    )}

                </>

            )}

            {/* =====================================================
                FOOTER
            ===================================================== */}

            <div className={R.pageFooter}>

                <div>

                    <i className="bi bi-shield-check"></i>

                    <span>
                        Patient information is securely stored.
                    </span>

                </div>

                <span>
                    <i className="bi bi-hospital"></i>&nbsp;&nbsp; PrimeLife Care Hospital
                </span>

            </div>

            {/* =====================================================
                NEW MEDICAL RECORD MODAL
            ===================================================== */}










































            {active1 && (

                <form onSubmit={submitNewRecord}>

                    <div className={R.recordOverlay}>

                        <div className={R.recordModal}>

                            <div className={R.recordModalHeader}>

                                <div>

                                    <h3>
                                        New Medical Record
                                    </h3>

                                    <p>
                                        Enter the basic information
                                        for this record.
                                    </p>

                                </div>

                                <button
                                    type="button"
                                    className={R.recordClose}
                                    onClick={function () {
                                        setActive1(false);
                                    }}
                                >
                                    <i className="bi bi-x-lg"></i>
                                </button>

                            </div>

                            <div className={R.recordModalBody}>

                                <div className={R.recordInputGroup}>

                                    <label>
                                        Medical Record / Diagnosis
                                    </label>

                                    <input
                                        required
                                        type="text"
                                        placeholder="e.g. Malaria"
                                        value={recordName}
                                        onChange={(e) =>
                                            setRecordName(
                                                e.target.value
                                            )
                                        }
                                    />

                                </div>

                                <div className={R.recordInputGroup}>

                                    <label>
                                        Recorded By
                                    </label>

                                    <input
                                        required
                                        type="text"
                                        placeholder="Enter your name here   eg. Doctor Albert Ansah"
                                        value={recordedBy}
                                        onChange={(e) =>
                                            setRecordedBy(
                                                e.target.value
                                            )
                                        }
                                    />

                                </div>

                            </div>

                            <center>

                                <p>
                                    {feedBack1}
                                </p>

                                <br></br>

                            </center>

                            <div className={R.recordModalFooter}>

                                <button
                                    type="button"
                                    className={R.recordCancel}
                                    onClick={function () {
                                        setActive1(false);
                                    }}
                                >
                                    Cancel
                                </button>

                                <button
                                    className={R.recordCreate}
                                >
                                    <i className="bi bi-plus-lg"></i>
                                    Create Record
                                </button>

                            </div>

                        </div>

                    </div>

                </form>

            )}

            {/* =====================================================
                DELETE RECORD MODAL
            ===================================================== */}

            {active3 && (

                <div className={R.conditionDeleteOverlay}>

                    <div className={R.conditionDeleteModal}>

                        <div className={R.conditionDeleteIcon}>

                            <i className="bi bi-exclamation-triangle"></i>

                        </div>

                        <div className={R.conditionDeleteContent}>

                            <h3>
                                Delete Record?
                            </h3>

                            <p>
                                Do you want to move this medical
                                record to the recycle bin?
                                You would be able to retrieve it
                                in the recycle bin.
                            </p>

                            <br></br>

                            <span className={R.fb}>
                                {feedBack}
                            </span>

                        </div>

                        <div className={R.conditionDeleteActions}>

                            <button
                                type="button"
                                onClick={() =>
                                    setActive3(false)
                                }
                                className={R.conditionDeleteNo}
                            >
                                No
                            </button>

                            <button
                                type="button"
                                className={R.conditionDeleteYes}
                                onClick={deleteRecordById}
                            >

                                {active4 ? (

                                    <p>

                                        <span>
                                            <i className="bi bi-arrow-repeat"></i>
                                        </span>

                                        &nbsp;&nbsp; Moving...

                                    </p>

                                ) : (

                                    <p>
                                        &nbsp;&nbsp;Yes, Delete
                                    </p>

                                )}
                            </button>
                        </div>
                    </div>
                </div>

            )}

        </div>

    );
}

export default Records;
