
import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import R from "./Records.module.css";
import { Helmet } from "react-helmet-async";
import axios from "axios";
import { MyContext } from "../Mycontext.jsx";

const API = import.meta.env.VITE_HOSTING_API;

function Records() {
    const { hospitalName, fetchedNotifications, buttonPermissons } = useContext(MyContext);

    const selfplacement = localStorage.getItem("SpecialRecordId");


    const navigateTo = useNavigate();

    const [feedBack, setFeedBack] = useState("");
    const [feedBack1, setFeedBack1] = useState("");

    const [feedBack2, setFeedBack2] = useState({
        recordId: null,
        message: ""
    });

    const [feedBack3, setFeedBack3] = useState("");
    const [allFields, seAllFields] = useState([]);
    const [activateInput, setActivateInput] = useState(null)
    // =====================================================
    // MODAL / UI STATES
    // =====================================================

    const [active1, setActive1] = useState(false);
    const [active2, setActive2] = useState(false);
    const [active3, setActive3] = useState(false);
    const [active4, setActive4] = useState(false);
    const [active5, setActive5] = useState(false);
    const [active6, setActive6] = useState(false);
    const [active7, setActive7] = useState(false);

    const [edit, setEdit] = useState(null);


    const [recordName, setRecordName] = useState("");
    const [recordedBy, setRecordedBy] = useState("");

    const [newRecord, setNewRecord] = useState([]);


    const [patientInfo, setPatientInfo] = useState([]);
    const [a, setA] = useState("--");
    const [b, setB] = useState("--");
    const [regdate, setRegDate] = useState("--");
    const [dob, setDob] = useState("--");

    const [recordFields, setRecordFields] = useState([]);

    const addNewFields = (recordId) => {
        setRecordFields((prev) => {
            const recordExists = prev.some(
                (record) => record.recordId === recordId
            );

            if (recordExists) {
                return prev.map((record) =>
                    record.recordId === recordId
                        ? {
                            ...record,
                            fields: [
                                ...record.fields,
                                {
                                    id: crypto.randomUUID(),
                                    fieldName: "",
                                    fieldValue: ""
                                }
                            ]
                        }
                        : record
                );
            }

            return [
                ...prev,
                {
                    recordId,
                    fields: [
                        {
                            id: crypto.randomUUID(),
                            fieldName: "",
                            fieldValue: ""
                        }
                    ]
                }
            ];
        });
    };


    async function saveRecordFields(recordId) {
        // setFeedBack2("")

        setFeedBack2({
            recordId: recordId,
            message: ""
        });

        try {
            const record = recordFields
                .filter((item) => item.recordId === recordId)
                .map((item) => item.fields)[0];

            if (!record || record.length === 0) {
                // setFeedBack2("No information fields found for this record.")

                setFeedBack2({
                    recordId: recordId,
                    message: "No information fields found for this record"
                });

                return;
            }

            const emptyField = record.some(
                (field) =>
                    !field.fieldName.trim() ||
                    !field.fieldValue.trim()
            );

            if (emptyField) {
                // setFeedBack2("Please enter both the field name and field value for every field.")
                setFeedBack2({
                    recordId: recordId,
                    message: "Please enter both the field name and field value for every field."
                });

                return;
            }
            const token = localStorage.getItem("token");

            const response = await axios.post(`${API}/patient/saveFullRecord`, {
                recordId: recordId,
                fields: record
            });

            const results = response.data;


            if (results.success === true && results.forms === true) {
                setFeedBack2({
                    recordId: recordId,
                    message: results.message
                });

                fetchRecord();

            } else if (results.success === false && results.forms === false) {
                setFeedBack2({
                    recordId: recordId,
                    message: results.message || "Please complete the fields"
                });

            } else if (results.success === false && results.forms === true) {
                setFeedBack2({
                    recordId: recordId,
                    message: results.message || "Server error: Could not save this record, try again later"
                });

            } else {
                setFeedBack2({
                    recordId: recordId,
                    message: results.message || "Server error. Please try again later."
                });
            }

        } catch (error) {
            setFeedBack2({
                recordId: recordId,
                message: error.response?.data?.message || "Internal server error, please try again later."
            });
        }
    };


    async function fieldDeletion() {
        if (active6) return;

        setActive6(true);
        setFeedBack3("");

        const id = localStorage.getItem("deleteFieldId");
        const recordId = Number(localStorage.getItem("deleteFieldRecordId"));

        try {
            const response = await axios.delete(
                `${API}/patient/deleteField/${id}`
            );

            const results = response.data;

            if (results.success === true) {
                // Remove the field from the page ONLY after server success.
                setRecordFields((prev) =>
                    prev.map((record) =>
                        record.recordId === recordId
                            ? {
                                ...record,
                                fields: record.fields.filter(
                                    (field) => String(field.id) !== String(id)
                                )
                            }
                            : record
                    )
                );

                setFeedBack3(results.message || "Field deleted successfully.");

                setTimeout(() => {
                    setActive5(false);
                    setFeedBack3("");
                }, 1000);
            } else {
                // Keep the field on the page if deletion fails.
                setFeedBack3(
                    results.message || "Server error: Failed to delete field."
                );
            }
        } catch (error) {
            // Keep the field on the page if the request fails.
            setFeedBack3(
                error.response?.data?.message ||
                "Server error: Please try again later."
            );

            console.log(error.message);
        } finally {
            setActive6(false);
        }
    }



    async function fetchFields() {
        let id = localStorage.getItem("fields_ids")


        try {
            const response = await axios.get(`${API}/patient/fetchFields/${id}`)

            const results = response.data;

            if (results.success === true) {
                return results;

            } else {
                alert(`Failed - in fetchFields`)
            }

        } catch (error) {
            alert(`Failed - 2 - in fetchFields`)
            console.log(error.message)
        }
    }


    // useEffect(() => {
    //     fetchField()
    // }, [])




    async function fetchRecord() {
        setActive2(false);
        setActive7(false)
        const id = localStorage.getItem("SpecialRecordId");

        try {
            const response = await axios.get(`${API}/patient/view-record/${id}`
            );

            const results = response.data;

            if (results.success && !results.empty) {
                // 1. Get all medical records
                const records = results.record;
                setActive7(true)

                // 2. Get the IDs in the same order as the records
                const fieldsIds = records.map((record) => record.id);

                // 3. Save the IDs BEFORE fetching their fields
                localStorage.setItem("fields_ids", fieldsIds.join(","));

                // 4. Fetch the fields belonging to those IDs
                const receivedFields = await fetchFields();

                const fetchedFields = receivedFields?.fetchedFields || [];

                // 5. Match each set of fields to its medical record
                const formattedFields = records.map((record, index) => ({
                    recordId: Number(record.id),

                    fields: (fetchedFields[index] || []).map((field) => ({
                        id: field.id,
                        fieldName: field.field_name,
                        fieldValue: field.field_value
                    }))
                }));

                // 6. Update React state
                setNewRecord(records);
                setRecordFields(formattedFields);

            } else if (results.success && results.empty) {
                setActive7(true)
                setNewRecord([]);
                setRecordFields([]);
                localStorage.removeItem("fields_ids");

            } else {
                setActive7(true)
                console.log(results.message);
                setActive2(true);
            }

        } catch (error) {
            setActive7(true)
            console.log(error.message);
            setActive2(true);
        }
    }


    async function deleteRecordById() {
        setActive4(true)

        const id = localStorage.getItem("deleteMedicalRecordId");

        try {

            const response = await axios.delete(`${API}/patient/delete-record/${id}`
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
                }, 1500);

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
                fetchedNotifications()
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
                        navigateTo(-1)
                    }
                >
                    <i className="bi bi-arrow-left"></i>
                    <span>Go Back </span>
                </button>

                <div className={R.topActions}>

                    <button
                        className={R.printButton}
                        onClick={() => {
                            localStorage.setItem("patientRecordId", selfplacement);
                            navigateTo("/his/document")
                        }}
                    >
                        <i className="bi bi-printer"></i>
                        <span>Print</span>
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
                    {active7 ? (
                        <>
                            {newRecord.length > 0 ? (
                                <>
                                    {newRecord.map((nr) => (
                                        <section className={R.recordCard} key={nr.id}>

                                            {activateInput === nr.id ? (
                                                <div className={R.editModeBanner}>
                                                    <i className="bi bi-pencil-square"></i>
                                                    <span>Editing Record</span>
                                                    <span className={R.editModeBadge}>EDIT MODE</span>
                                                </div>
                                            ) : (
                                                <div className={R.viewModeBanner}>
                                                    <i className="bi bi-eye"></i>
                                                    <span>Viewing Record</span>
                                                    <span className={R.viewModeBadge}>READ ONLY</span>
                                                </div>
                                            )}

                                            <div className={R.recordCardHeader}>
                                                {/* Your existing record header code */}
                                            </div>

                                            <div className={R.recordCardHeader}>
                                                <div className={R.recordTitleArea}>
                                                    <div className={R.recordIcon}>
                                                        <i className="bi bi-file-medical-fill"></i>
                                                    </div>
                                                    <div>
                                                        <h2>{nr.condition}</h2>
                                                        <p>{dateName(nr.created_at)}</p>
                                                    </div>
                                                </div>


                                                <div className={R.recordCardActions}>
                                                    <button
                                                        type="button"
                                                        className={R.iconAction}
                                                        title={activateInput === nr.id ? "Exit Edit Mode" : "Edit Record"}
                                                        onClick={() => {
                                                            setActivateInput(
                                                                activateInput === nr.id ? null : nr.id
                                                            );
                                                        }}
                                                    >
                                                        <i className={
                                                            activateInput === nr.id
                                                                ? "bi bi-eye"
                                                                : "bi bi-pencil-square"
                                                        }></i>
                                                    </button>
                                                    {buttonPermissons ? (
                                                        <>
                                                            <button
                                                                type="button"
                                                                className={`${R.iconAction} ${R.deleteAction}`}
                                                                title="Delete Record"
                                                                disabled={activateInput !== nr.id || active4}
                                                                onClick={() => {
                                                                    localStorage.setItem("deleteMedicalRecordId", nr.id);
                                                                    setFeedBack("");
                                                                    setActive3(true);
                                                                }}
                                                            >
                                                                <i className="bi bi-trash3"></i>
                                                            </button>

                                                        </>
                                                    ) : (

                                                        <div className={R.disabledMedicalRecord}>
                                                            <i className="bi bi-trash3"></i>
                                                            <span>Disabled</span>
                                                        </div>
                                                    )}
                                                </div>

                                            </div>

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
                                                        {dateName(nr.created_at).split("at")[0]}
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

                                            <div className={R.informationSection}>
                                                <div className={R.informationHeader}>
                                                    <div>
                                                        <h3>Record Information</h3>
                                                        <p>Information recorded during this consultation.</p>
                                                    </div>
                                                </div>


                                                <div className={R.sectionFields}>
                                                    {recordFields
                                                        .filter((record) => record.recordId === nr.id)
                                                        .map((record) => (

                                                            <div key={record.recordId}>

                                                                {record.fields.length > 0 ? (
                                                                    record.fields.map((field) => (
                                                                        <div className={R.customField} key={field.id}>

                                                                            <div className={R.fieldName}>
                                                                                <input
                                                                                    type="text"
                                                                                    placeholder="Field name..."
                                                                                    value={field.fieldName}
                                                                                    readOnly={activateInput !== nr.id}
                                                                                    onChange={(e) =>
                                                                                        setRecordFields((prev) =>
                                                                                            prev.map((item) =>
                                                                                                item.recordId === nr.id
                                                                                                    ? {
                                                                                                        ...item,
                                                                                                        fields: item.fields.map((f) =>
                                                                                                            f.id === field.id
                                                                                                                ? {
                                                                                                                    ...f,
                                                                                                                    fieldName: e.target.value
                                                                                                                }
                                                                                                                : f
                                                                                                        )
                                                                                                    }
                                                                                                    : item
                                                                                            )
                                                                                        )
                                                                                    }
                                                                                />
                                                                                <span>&nbsp; Property</span>
                                                                            </div>


                                                                            <div className={R.fieldValue}>
                                                                                <textarea
                                                                                    required
                                                                                    placeholder="Enter information..."
                                                                                    value={field.fieldValue}
                                                                                    readOnly={activateInput !== nr.id}
                                                                                    onChange={(e) =>
                                                                                        setRecordFields((prev) =>
                                                                                            prev.map((item) =>
                                                                                                item.recordId === nr.id
                                                                                                    ? {
                                                                                                        ...item,
                                                                                                        fields: item.fields.map((f) =>
                                                                                                            f.id === field.id
                                                                                                                ? {
                                                                                                                    ...f,
                                                                                                                    fieldValue: e.target.value
                                                                                                                }
                                                                                                                : f
                                                                                                        )
                                                                                                    }
                                                                                                    : item
                                                                                            )
                                                                                        )
                                                                                    }
                                                                                ></textarea>
                                                                            </div>

                                                                            {buttonPermissons ? (
                                                                                <>
                                                                                    <button
                                                                                        type="button"
                                                                                        className={R.fieldDelete}
                                                                                        title="Remove field"
                                                                                        disabled={activateInput !== nr.id || active6}
                                                                                        onClick={() => {
                                                                                            localStorage.setItem("deleteFieldId", field.id);
                                                                                            localStorage.setItem("deleteFieldRecordId", nr.id);
                                                                                            setFeedBack3("");
                                                                                            setActive5(true);
                                                                                        }}
                                                                                    >
                                                                                        <i className="bi bi-trash3"></i>
                                                                                    </button>

                                                                                </>
                                                                            ) : (
                                                                                <div className={R.disabledMedicalRecord}>
                                                                                    <i className="bi bi-trash3"></i>
                                                                                    <span>Disabled</span>
                                                                                </div>
                                                                            )}
                                                                        </div>
                                                                    ))
                                                                ) : (
                                                                    <div className={R.noFieldsContainer}>
                                                                        <div className={R.noFieldsIcon}>
                                                                            <i className="bi bi-file-earmark-text"></i>
                                                                        </div>

                                                                        <h4>No Fields Created Yet</h4>

                                                                        <p>
                                                                            No information has been added to this medical record yet.
                                                                            Click "Add a New Field" to start documenting information.
                                                                        </p>
                                                                    </div>
                                                                )}
                                                            </div>
                                                        ))}
                                                </div>



                                                <button
                                                    type="button"
                                                    className={R.addFieldButton}
                                                    disabled={activateInput !== nr.id}
                                                    onClick={() => addNewFields(nr.id)}
                                                >
                                                    <i className="bi bi-plus-circle"></i>
                                                    Add a New Field
                                                </button>
                                            </div>

                                            {feedBack2.recordId === nr.id && feedBack2.message && (
                                                <div className={R.messageContainer2}>
                                                    <p className={R.message2}>{feedBack2.message}</p>
                                                </div>
                                            )}

                                            <div className={R.saveActions} >
                                                <button
                                                    type="button"
                                                    className={R.cancelButton}
                                                    disabled={activateInput !== nr.id}
                                                    onClick={() => setActivateInput(null)}
                                                >
                                                    Cancel
                                                </button>

                                                <button
                                                    type="button"
                                                    className={R.saveButton}
                                                    style={{ marginRight: "1.5em" }}
                                                    disabled={activateInput !== nr.id}
                                                    onClick={() => saveRecordFields(nr.id)}
                                                >
                                                    <i className="bi bi-check2"></i>
                                                    Save Changes
                                                </button>
                                            </div>
                                            <br></br>
                                        </section>
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
                    )
                        :
                        (
                            <>
                                <div className={R.loadingOverlay}>
                                    <div className={R.loadingSpinner}></div>
                                </div>
                            </>
                        )
                    }

                </>

            )}

            {/* =====================================================
                FOOTER
            ===================================================== */}
            <br></br>
            <button
                className={R.backButton}
                onClick={() =>
                    navigateTo(-1)
                }
            >
                <i className="bi bi-arrow-left"></i>
                <span>Go Back </span>
            </button>


            <div className={R.pageFooter}>

                <div>

                    <i className="bi bi-shield-check"></i>

                    <span>
                        Patient information is securely stored.
                    </span>

                </div>

                <span>
                    <i className="bi bi-hospital"></i>&nbsp;&nbsp; {hospitalName ? hospitalName : "Hospital Name not set"}
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
                                <i className="bi bi-x-lg"></i> &nbsp;
                                Cancel
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
                                        &nbsp;&nbsp;Delete
                                    </p>

                                )}
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {active5 &&
                (
                    <>
                        <div className={R.fieldConfirmOverlay}>
                            <div className={R.fieldConfirmBox}>
                                <div className={R.fieldConfirmIcon}>
                                    <i className="bi bi-trash3-fill"></i>
                                </div>

                                <h3>Delete this field?</h3>

                                <p>
                                    Are you sure you want to delete this field?
                                </p>

                                {feedBack3 && (
                                    <p className={R.message3}>{feedBack3}</p>
                                )}
                                <div className={R.fieldConfirmActions}>
                                    <button
                                        type="button"
                                        className={R.fieldConfirmCancel}
                                        onClick={() => setActive5(false)}
                                    >
                                        <i className="bi bi-x-lg"></i>
                                        Cancel
                                    </button>

                                    <button
                                        type="button"
                                        className={R.fieldConfirmDelete}
                                        onClick={() => { fieldDeletion() }}
                                    >
                                        {active6 ?
                                            (
                                                <>
                                                    Deleting...
                                                </>
                                            ) : (
                                                <>
                                                    <i className="bi bi-trash3"></i>
                                                    Delete

                                                </>
                                            )
                                        }
                                    </button>
                                </div>
                            </div>
                        </div>
                    </>
                )}

            {/* {!active7 && (
                <>
                    <div className={R.loadingOverlay}>
                        <div className={R.loadingSpinner}></div>
                    </div>
                </>
            )} */}
        </div>
    );
}

export default Records;
