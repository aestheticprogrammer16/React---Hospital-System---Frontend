import P from "./Printreports.module.css";
import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import axios from "axios";
const API = import.meta.env.VITE_HOSTING_API;

import { MyContext } from "../Mycontext.jsx";


function formatDate(value) {
    if (!value) return "";
    const d = new Date(value);
    if (isNaN(d.getTime())) return "";
    return d.toLocaleDateString("en-GB", {
        day: "2-digit",
        month: "long",
        year: "numeric"
    });
}




function PrintReports() {
    const navigateTo = useNavigate();
    const { setActive01 } = useContext(MyContext);
    const [active, setActive] = useState(false);

    // patient
    const [patientName, setPatientName] = useState("");
    const [patientBirth, setPatientBirth] = useState("");
    const [patientAge, setPatientAge] = useState("");
    const [patientGender, setPatientGender] = useState("");
    const [patientTel, setPatientTel] = useState("");

    // settings
    const [hospitalName, setHospitalName] = useState("");
    const [tel, setTel] = useState("");
    const [hospitalEmail, setHospitalEmail] = useState("");
    const [hospitalAddress, setHospitalAddress] = useState("");
    const [tagline, setTagline] = useState("");
    const [hospitalLogoUrl, setHospitalLogoUrl] = useState("");

    // records from the backend
    const [records, setRecords] = useState([]);
    const [loadingRecords, setLoadingRecords] = useState(true);

    // selection (undefined = checked)
    const [includedRecords, setIncludedRecords] = useState({});
    const [includedFields, setIncludedFields] = useState({});

    const isRecordIncluded = (rid) => includedRecords[rid] !== false;
    const isFieldIncluded = (rid, fid) => includedFields[`${rid}-${fid}`] !== false;

    async function fetchSettings() {
        try {
            const response = await axios.get(`${API}/login/fetchsettings`);
            const results = response.data;
            if (results.success === true) {
                const s = results.settings;
                setTagline(s.tagline);
                setHospitalName(s.hospital_name);
                setTel(s.tel);
                setHospitalEmail(s.hospital_email);
                setHospitalAddress(s.hospital_address);
                setHospitalLogoUrl(s.hospital_logo_url);
            } else {
                console.log(results.message);
            }
        } catch (error) {
            console.log(error.message);
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



    async function fetchPatientInfo() {
        const id = localStorage.getItem("patientRecordId");
        try {
            const response = await axios.get(
                `${API}/patient/fetch-patient-credentials?id=${id}`
            );
            const results = response.data;
            if (results.success === true) {
                const p = results.patients;
                setPatientName(
                    `${p.first_name} ${p.middle_name ? p.middle_name : ""} ${p.last_name}`
                        .replace(/\s+/g, " ")
                        .trim()
                );
                setPatientBirth(p.dob.split("T")[0]);
                setPatientAge(p.age);
                setPatientGender(p.gender);
                setPatientTel(p.phone);
            } else {
                alert("Failed");
            }
        } catch (error) {
            alert("Failed - 2");
        }
    }

    async function fetchRecordsAndFields() {
        const id = localStorage.getItem("patientRecordId");
        setLoadingRecords(true);
        try {
            // ⚠️ change this path to match your actual route for fetchrecordsandfieleds
            const response = await axios.get(
                `${API}/patient/fetch-records-and-fields/${id}`
            );
            const results = response.data;
            if (results.success === true) {
                setRecords(results.records);
            } else {
                setRecords([]);
                console.log(results.message);
            }
        } catch (error) {
            setRecords([]);
            console.log(error.message);
        } finally {
            setLoadingRecords(false);
        }
    }

    useEffect(() => {
        fetchSettings();
        fetchPatientInfo();
        fetchRecordsAndFields();
    }, []);

    // reset after the print dialog closes
    useEffect(() => {
        const afterPrint = () => {
            setActive(false);
            setActive01(false);
        };
        window.addEventListener("afterprint", afterPrint);
        return () => window.removeEventListener("afterprint", afterPrint);
    }, [setActive01]);

    const selectAll = () => {
        setIncludedRecords({});
        setIncludedFields({});
    };

    const clearAll = () => {
        const recs = {};
        const fields = {};
        records.forEach((r) => {
            recs[r.id] = false;
            (r.information || []).forEach((f) => {
                fields[`${r.id}-${f.id}`] = false;
            });
        });
        setIncludedRecords(recs);
        setIncludedFields(fields);
    };

    const toggleRecord = (rid) =>
        setIncludedRecords((prev) => ({ ...prev, [rid]: prev[rid] === false }));

    const toggleField = (rid, fid) =>
        setIncludedFields((prev) => ({
            ...prev,
            [`${rid}-${fid}`]: prev[`${rid}-${fid}`] === false
        }));

    const selectedRecordCount = records.filter((r) => isRecordIncluded(r.id)).length;

    const handlePrint = () => {
        if (selectedRecordCount === 0) {
            alert("Please select at least one record to print.");
            return;
        }
        setActive01(true);
        setActive(true);
        setTimeout(() => window.print(), 500);
    };

    return (
        <div className={P.printReportsPage}>
            <Helmet>
                <title>Document | 📑</title>
            </Helmet>

            <div className={P.screenOnly} style={{ display: active ? "none" : "" }}>
                <br /><br /><br /><br /><br />
            </div>

            {/* TOP NAVIGATION */}
            <div className={`${P.topNavigation} ${P.screenOnly}`}>
                <button className={P.backButton} onClick={() => navigateTo(-1)}>
                    <i className="bi bi-arrow-left"></i>
                    <span>Back to Reports</span>
                </button>

                <div className={P.topTitle}>
                    <i className="bi bi-printer"></i>
                    <div>
                        <span>REPORT PREVIEW</span>
                        <h1>Patient Reports</h1>
                    </div>
                </div>

                <button className={P.printAllButton} onClick={handlePrint}>
                    <i className="bi bi-printer-fill"></i>
                    Print Selected
                </button>
            </div>

            {/* PATIENT SUMMARY */}
            <div className={`${P.patientSummary} ${P.screenOnly}`}>
                <div className={P.patientIdentity}>
                    <div className={P.patientAvatar}>
                        <i className="bi bi-person-fill"></i>
                    </div>
                    <div>
                        <span className={P.patientLabel}>PATIENT</span>
                        <h2>{patientName}</h2>
                    </div>
                </div>

                <div className={P.patientDetails}>
                    <div>
                        <span>Date of Birth</span>
                        <strong>{patientBirth}</strong>
                    </div>
                    <div>
                        <span>Age</span>
                        <strong>{patientAge} years</strong>
                    </div>
                    <div>
                        <span>Gender</span>
                        <strong>{patientGender}</strong>
                    </div>
                    <div>
                        <span>Phone</span>
                        <strong>{patientTel}</strong>
                    </div>
                </div>
            </div>

            {/* INSTRUCTION */}
            <div className={`${P.reportInstruction} ${P.screenOnly}`}>
                <div className={P.instructionIcon}>
                    <i className="bi bi-info-circle"></i>
                </div>
                <div>
                    <h3>Select information to print</h3>
                    <p>
                        Check or uncheck individual information before printing
                        the patient's medical report.
                    </p>
                </div>

                <div className={P.selectionActions}>
                    <button onClick={selectAll}>
                        <i className="bi bi-check2-square"></i>
                        Select All
                    </button>
                    <button onClick={clearAll}>
                        <i className="bi bi-square"></i>
                        Clear All
                    </button>
                </div>
            </div>

            {/* SUMMARY BAR */}
            <div className={`${P.reportSummaryBar} ${P.screenOnly}`}>
                <div>
                    <i className="bi bi-file-earmark-medical"></i>
                    <span>{records.length} medical records</span>
                </div>
                <div className={P.selectedCount}>
                    <i className="bi bi-check-circle"></i>
                    <span>
                        {selectedRecordCount} of {records.length} records selected for printing
                    </span>
                </div>
            </div>

            {/* LOADING / EMPTY STATE */}
            {loadingRecords && (
                <div className={`${P.reportSummaryBar} ${P.screenOnly}`}>
                    <div>
                        <i className="bi bi-hourglass-split"></i>
                        <span>Loading records...</span>
                    </div>
                </div>
            )}

            {!loadingRecords && records.length === 0 && (
                <div className={`${P.reportSummaryBar} ${P.screenOnly}`}>
                    <div>
                        <i className="bi bi-folder-x"></i>
                        <span>No records found for this patient.</span>
                    </div>
                </div>
            )}

            {/* REPORT DOCUMENTS */}
            <div className={P.reportsList}>
                {records.map((record) => (
                    <div
                        key={record.id}
                        className={`${P.reportDocument} ${isRecordIncluded(record.id) ? "" : P.recordOff
                            }`}
                    >
                        {/* HOSPITAL HEADER */}
                        <div className={P.documentHospitalHeader}>
                            <div className={P.hospitalBrand}>
                                <div className={P.hospitalLogo}>
                                    {hospitalLogoUrl ? (
                                        <img src={hospitalLogoUrl} alt="Hospital Logo" />
                                    ) : (
                                        <i className="bi bi-hospital"></i>
                                    )}
                                </div>
                                <div>
                                    <h2>{hospitalName}</h2>
                                    <p>{tagline}</p>
                                </div>
                            </div>

                            <div className={P.hospitalContact}>
                                <span>
                                    <i className="bi bi-geo-alt"></i>
                                    {hospitalAddress}
                                </span>
                                <span>
                                    <i className="bi bi-telephone"></i>
                                    {tel}
                                </span>
                                <span>
                                    <i className="bi bi-envelope"></i>
                                    {hospitalEmail}
                                </span>
                            </div>
                        </div>

                        {/* TITLE */}
                        <div className={P.documentTitle}>
                            <div>
                                <span>MEDICAL RECORD</span>
                                <h2>{record.condition}</h2>
                            </div>

                            <label className={`${P.includeRecord} ${P.screenOnly}`}>
                                <input
                                    type="checkbox"
                                    checked={isRecordIncluded(record.id)}
                                    onChange={() => toggleRecord(record.id)}
                                />
                                Include this record
                            </label>
                        </div>

                        {/* PATIENT INFO */}
                        <div className={P.documentPatientInfo}>
                            <div>
                                <span>Patient Name</span>
                                <strong>{patientName}</strong>
                            </div>
                            <div>
                                <span>Age</span>
                                <strong>{patientAge} years</strong>
                            </div>
                            <div>
                                <span>Gender</span>
                                <strong>{patientGender}</strong>
                            </div>
                            <div>
                                <span>Record Date</span>
                                <strong>{formatDate(record.created_at)}</strong>
                            </div>
                        </div>

                        {/* MEDICAL INFORMATION */}
                        <div className={P.documentSection}>
                            <div className={P.documentSectionHeader}>
                                <div>
                                    <span>CLINICAL INFORMATION</span>
                                    <h3>Medical Details</h3>
                                </div>
                                <i className="bi bi-clipboard2-pulse"></i>
                            </div>

                            <div className={P.medicalGrid}>
                                {(record.information || []).map((item) => (
                                    <div
                                        key={item.id}
                                        className={`${P.reportField} ${isFieldIncluded(record.id, item.id) ? "" : P.fieldOff
                                            }`}
                                    >
                                        <label>
                                            <input
                                                type="checkbox"
                                                checked={isFieldIncluded(record.id, item.id)}
                                                onChange={() => toggleField(record.id, item.id)}
                                            />
                                            <span>{item.property}</span>
                                        </label>
                                        <div className={P.reportValue}>{item.value}</div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* DECLARATION */}
                        <div className={P.doctorDeclaration}>
                            <div className={P.declarationHeader}>
                                <i className="bi bi-shield-check"></i>
                                <div>
                                    <span>CLINICAL DECLARATION</span>
                                    <h3>Attending Clinician</h3>
                                </div>
                            </div>
                            <p>
                                I confirm that the information contained in this medical
                                record represents the patient's clinical information
                                recorded during the stated consultation or review.
                            </p>
                        </div>

                        {/* SIGNATURES */}
                        <div className={P.signatureSection}>
                            <div className={P.signatureBox}>
                                {/* doctor's name comes from recorded_by */}
                                <div
                                    className={P.signatureSpace}
                                    style={{
                                        display: "flex",
                                        alignItems: "flex-end",
                                        fontSize: "12px",
                                        fontWeight: 700,
                                        color: "#263d4a",
                                        paddingBottom: "3px"
                                    }}
                                >
                                </div>
                                <small>Doctor's Name</small>
                                <br></br>
                                <br></br>
                                <div className={P.signatureLine}></div>

                                <div className={P.signatureSpace}></div>
                                <small>Doctor's Signature</small>
                                <br></br>
                                <br></br>
                                <div className={P.signatureLine}></div>
                            </div>

                            <div className={`${P.signatureBox} ${P.signatureRight}`}>
                                <div className={P.signatureSpace}></div>
                                <div className={P.signatureLine}></div>
                                <small>Issued Date</small>
                            </div>
                        </div>

                        {/* CONFIDENTIALITY */}
                        <div className={P.confidentialityNotice}>
                            <i className="bi bi-lock-fill"></i>
                            <div>
                                <strong>CONFIDENTIAL MEDICAL INFORMATION</strong>
                                <p>
                                    This document contains confidential patient information
                                    and is intended only for authorized medical or
                                    administrative purposes. Unauthorized disclosure or
                                    distribution is prohibited.
                                </p>
                            </div>
                        </div>

                        {/* DOCUMENT FOOTER */}
                        <div className={P.documentFooter}>
                            <div>

                                <span>{hospitalName}</span>
                            </div>
                            <span>📍- {hospitalAddress}</span>
                        </div>
                    </div>
                ))}
            </div>

            {/* FINAL ACTIONS */}
            <div className={`${P.finalActions} ${P.screenOnly}`}>
                <div className={P.finalMessage}>
                    <div className={P.finalIcon}>
                        <i className="bi bi-file-earmark-pdf"></i>
                    </div>
                    <div>
                        <h3>Reports are ready</h3>
                        <p>
                            Only the selected records and information will be included
                            when printing.
                        </p>
                    </div>
                </div>

                <div className={P.finalButtons}>
                    <button className={P.cancelPrintButton} onClick={() => navigateTo(-1)}>
                        <i className="bi bi-arrow-left"></i>
                        Back
                    </button>
                    <button className={P.printButton} onClick={handlePrint}>
                        <i className="bi bi-printer-fill"></i>
                        Print Reports
                    </button>
                </div>
            </div>

            {/* PAGE FOOTER */}
            <div className={`${P.pageFooter} ${P.screenOnly}`}>
                <div>
                    <i className="bi bi-lock-fill"></i>
                    <span>Confidential patient information</span>
                </div>
                <span>{hospitalName}</span>
            </div>
        </div>
    );
}

export default PrintReports;