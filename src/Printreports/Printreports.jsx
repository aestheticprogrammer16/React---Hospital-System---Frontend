import P from "./Printreports.module.css";

function PrintReports() {

    const patient = {
        name: "John Mensah",
        patientId: "PT000124",
        age: "34",
        gender: "Male",
        phone: "024 123 4567",
        dateOfBirth: "12 March 1992"
    };

    const hospital = {
        name: "AESTHETIC PRIVATE HOSPITAL",
        tagline: "Quality Care • Compassion • Excellence",
        location: "Accra, Ghana",
        phone: "+233 24 000 0000",
        email: "info@aesthetichospital.com",
        address: "14 Hospital Road, Accra, Ghana"
    };

    const reports = [
        {
            id: 1,

            name: "Malaria",

            date: "24 August 2026",

            status: "Completed",

            updatedAt: "24 August 2026",

            recordNumber: "MR-2026-00124",

            doctor: {
                name: "Dr. Michael Mensah",
                title: "Medical Doctor",
                license: "MDC-GH-45821"
            },

            information: [
                {
                    property: "Temperature",
                    value: "38.7°C"
                },

                {
                    property: "Headache",
                    value:
                        "Patient complained of persistent headache, especially around the forehead and temple region."
                },

                {
                    property: "Body Weakness",
                    value:
                        "Patient reported general body weakness and tiredness for approximately three days."
                },

                {
                    property: "Malaria Test",
                    value: "Positive"
                },

                {
                    property: "Blood Pressure",
                    value: "120/80 mmHg"
                },

                {
                    property: "Teeth",
                    value:
                        "No abnormality observed during the examination."
                },

                {
                    property: "Treatment",
                    value:
                        "Patient was placed on the prescribed malaria treatment and advised to take sufficient fluids and adequate rest."
                },

                {
                    property: "Additional Information",
                    value:
                        "Patient was advised to return for review if symptoms persist or become worse."
                }
            ]
        },

        {
            id: 2,

            name: "Fever",

            date: "18 August 2026",

            status: "Recently Updated",

            updatedAt: "18 August 2026",

            recordNumber: "MR-2026-00117",

            doctor: {
                name: "Dr. Michael Mensah",
                title: "Medical Doctor",
                license: "MDC-GH-45821"
            },

            information: [
                {
                    property: "Temperature",
                    value: "39.1°C"
                },

                {
                    property: "Duration",
                    value:
                        "Approximately two days before the patient was brought to the hospital."
                },

                {
                    property: "Headache",
                    value:
                        "Mild headache reported mainly in the evening."
                },

                {
                    property: "Body Pain",
                    value:
                        "Patient reported mild pain around the back and joints."
                },

                {
                    property: "Test Result",
                    value:
                        "No serious abnormality detected."
                },

                {
                    property: "Treatment",
                    value:
                        "Patient was given the appropriate medication and instructed to return if the fever persists."
                }
            ]
        }
    ];


    return (

        <div className={P.printReportsPage}>

            {/* =====================================================
                TOP NAVIGATION
            ====================================================== */}
            <div>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
            </div>
            <div className={P.topNavigation}>

                <button className={P.backButton}>
                    <i className="bi bi-arrow-left"></i>

                    <span>
                        Back to Reports
                    </span>
                </button>


                <div className={P.topTitle}>

                    <i className="bi bi-printer"></i>

                    <div>

                        <span>
                            REPORT PREVIEW
                        </span>

                        <h1>
                            Patient Reports
                        </h1>

                    </div>

                </div>


                <button className={P.printAllButton}>

                    <i className="bi bi-printer-fill"></i>

                    Print Selected

                </button>

            </div>


            {/* =====================================================
                PATIENT SUMMARY
            ====================================================== */}

            <div className={P.patientSummary}>

                <div className={P.patientIdentity}>

                    <div className={P.patientAvatar}>

                        <i className="bi bi-person-fill"></i>

                    </div>


                    <div>

                        <span className={P.patientLabel}>
                            PATIENT
                        </span>

                        <h2>
                            {patient.name}
                        </h2>

                        <p>

                            Patient ID:

                            <strong>
                                {" "}
                                {patient.patientId}
                            </strong>

                        </p>

                    </div>

                </div>


                <div className={P.patientDetails}>

                    <div>

                        <span>
                            Date of Birth
                        </span>

                        <strong>
                            {patient.dateOfBirth}
                        </strong>

                    </div>


                    <div>

                        <span>
                            Age
                        </span>

                        <strong>
                            {patient.age} years
                        </strong>

                    </div>


                    <div>

                        <span>
                            Gender
                        </span>

                        <strong>
                            {patient.gender}
                        </strong>

                    </div>


                    <div>

                        <span>
                            Phone
                        </span>

                        <strong>
                            {patient.phone}
                        </strong>

                    </div>

                </div>

            </div>


            {/* =====================================================
                INSTRUCTION
            ====================================================== */}

            <div className={P.reportInstruction}>

                <div className={P.instructionIcon}>

                    <i className="bi bi-info-circle"></i>

                </div>


                <div>

                    <h3>
                        Select information to print
                    </h3>

                    <p>
                        Check or uncheck individual information
                        before printing the patient's medical report.
                    </p>

                </div>


                <div className={P.selectionActions}>

                    <button>

                        <i className="bi bi-check2-square"></i>

                        Select All

                    </button>


                    <button>

                        <i className="bi bi-square"></i>

                        Clear All

                    </button>

                </div>

            </div>


            {/* =====================================================
                REPORT SUMMARY
            ====================================================== */}

            <div className={P.reportSummaryBar}>

                <div>

                    <i className="bi bi-file-earmark-medical"></i>

                    <span>
                        {reports.length} medical records
                    </span>

                </div>


                <div className={P.selectedCount}>

                    <i className="bi bi-check-circle"></i>

                    <span>
                        Selected information ready for printing
                    </span>

                </div>

            </div>


            {/* =====================================================
                REPORT DOCUMENTS
            ====================================================== */}

            {reports.map((report) => (

                <div
                    className={P.reportDocument}
                    key={report.id}
                >


                    {/* =================================================
                        HOSPITAL HEADER
                    ================================================== */}

                    <div className={P.documentHospitalHeader}>

                        <div className={P.hospitalBrand}>

                            <div className={P.hospitalLogo}>

                                <i className="bi bi-hospital"></i>

                            </div>


                            <div>

                                <h2>
                                    {hospital.name}
                                </h2>

                                <p>
                                    {hospital.tagline}
                                </p>

                            </div>

                        </div>


                        <div className={P.hospitalContact}>

                            <span>

                                <i className="bi bi-geo-alt"></i>

                                {hospital.address}

                            </span>


                            <span>

                                <i className="bi bi-telephone"></i>

                                {hospital.phone}

                            </span>


                            <span>

                                <i className="bi bi-envelope"></i>

                                {hospital.email}

                            </span>

                        </div>

                    </div>


                    {/* =================================================
                        DOCUMENT TITLE / RECORD IDENTIFICATION
                    ================================================== */}

                    <div className={P.documentTitle}>

                        <div>

                            <span>
                                MEDICAL RECORD
                            </span>

                            <h2>
                                {report.name}
                            </h2>

                            <p className={P.recordReference}>
                                Record No: {report.recordNumber}
                            </p>

                        </div>


                        <label className={P.includeRecord}>

                            <input
                                type="checkbox"
                                defaultChecked
                            />

                            Include this record

                        </label>

                    </div>


                    {/* =================================================
                        PATIENT INFORMATION
                    ================================================== */}

                    <div className={P.documentPatientInfo}>

                        <div>

                            <span>
                                Patient Name
                            </span>

                            <strong>
                                {patient.name}
                            </strong>

                        </div>


                        <div>

                            <span>
                                Patient ID
                            </span>

                            <strong>
                                {patient.patientId}
                            </strong>

                        </div>


                        <div>

                            <span>
                                Age
                            </span>

                            <strong>
                                {patient.age} years
                            </strong>

                        </div>


                        <div>

                            <span>
                                Gender
                            </span>

                            <strong>
                                {patient.gender}
                            </strong>

                        </div>


                        <div>

                            <span>
                                Record Date
                            </span>

                            <strong>
                                {report.date}
                            </strong>

                        </div>


                        <div>

                            <span>
                                Status
                            </span>

                            <strong
                                className={
                                    report.status === "Completed"
                                        ? P.completedStatus
                                        : P.updatedStatus
                                }
                            >
                                {report.status}
                            </strong>

                        </div>

                    </div>


                    {/* =================================================
                        MEDICAL INFORMATION
                    ================================================== */}

                    <div className={P.documentSection}>

                        <div className={P.documentSectionHeader}>

                            <div>

                                <span>
                                    CLINICAL INFORMATION
                                </span>

                                <h3>
                                    Medical Details
                                </h3>

                            </div>


                            <i className="bi bi-clipboard2-pulse"></i>

                        </div>


                        <div className={P.medicalTable}>


                            {/* LEFT COLUMN */}

                            <div className={P.medicalColumn}>

                                {report.information
                                    .filter(
                                        (_, index) =>
                                            index % 2 === 0
                                    )
                                    .map((item, index) => (

                                        <div
                                            className={P.reportField}
                                            key={index}
                                        >

                                            <label>

                                                <input
                                                    type="checkbox"
                                                    defaultChecked
                                                />

                                                <span>
                                                    {item.property}
                                                </span>

                                            </label>


                                            <div
                                                className={P.reportValue}
                                            >
                                                {item.value}
                                            </div>

                                        </div>

                                    ))}

                            </div>


                            {/* RIGHT COLUMN */}

                            <div className={P.medicalColumn}>

                                {report.information
                                    .filter(
                                        (_, index) =>
                                            index % 2 !== 0
                                    )
                                    .map((item, index) => (

                                        <div
                                            className={P.reportField}
                                            key={index}
                                        >

                                            <label>

                                                <input
                                                    type="checkbox"
                                                    defaultChecked
                                                />

                                                <span>
                                                    {item.property}
                                                </span>

                                            </label>


                                            <div
                                                className={P.reportValue}
                                            >
                                                {item.value}
                                            </div>

                                        </div>

                                    ))}

                            </div>

                        </div>

                    </div>


                    {/* =================================================
                        RECORD DETAILS
                    ================================================== */}

                    <div className={P.recordDetails}>

                        <div>

                            <span>
                                Recorded By
                            </span>

                            <strong>

                                <i className="bi bi-person-badge"></i>

                                {report.doctor.name}

                            </strong>

                        </div>


                        <div>

                            <span>
                                Professional Role
                            </span>

                            <strong>

                                <i className="bi bi-person-vcard"></i>

                                {report.doctor.title}

                            </strong>

                        </div>


                        <div>

                            <span>
                                License / Registration
                            </span>

                            <strong>

                                <i className="bi bi-patch-check"></i>

                                {report.doctor.license}

                            </strong>

                        </div>


                        <div>

                            <span>
                                Record Date
                            </span>

                            <strong>

                                <i className="bi bi-calendar3"></i>

                                {report.date}

                            </strong>

                        </div>


                        <div>

                            <span>
                                Last Updated
                            </span>

                            <strong>

                                <i className="bi bi-clock-history"></i>

                                {report.updatedAt}

                            </strong>

                        </div>


                        <div>

                            <span>
                                Document Reference
                            </span>

                            <strong>

                                <i className="bi bi-file-earmark-text"></i>

                                {report.recordNumber}

                            </strong>

                        </div>

                    </div>


                    {/* =================================================
                        DOCTOR DECLARATION
                    ================================================== */}

                    <div className={P.doctorDeclaration}>

                        <div className={P.declarationHeader}>

                            <i className="bi bi-shield-check"></i>

                            <div>

                                <span>
                                    CLINICAL DECLARATION
                                </span>

                                <h3>
                                    Attending Clinician
                                </h3>

                            </div>

                        </div>


                        <p>
                            I confirm that the information contained
                            in this medical record represents the
                            patient's clinical information recorded
                            during the stated consultation or review.
                        </p>

                    </div>


                    {/* =================================================
                        SIGNATURE AREA
                    ================================================== */}

                    <div className={P.signatureSection}>


                        {/* DOCTOR */}

                        <div className={P.signatureBox}>

                            <div className={P.signatureSpace}>
                                {/* Space reserved for handwritten signature */}
                            </div>


                            <div className={P.signatureLine}></div>


                            <strong>
                                {report.doctor.name}
                            </strong>


                            <span>
                                {report.doctor.title}
                            </span>


                            <span>
                                License: {report.doctor.license}
                            </span>


                            <small>
                                Doctor's Signature
                            </small>

                        </div>


                        {/* REVIEWER */}

                        <div className={P.signatureBox}>

                            <div className={P.signatureSpace}>
                                {/* Space reserved for reviewing clinician */}
                            </div>


                            <div className={P.signatureLine}></div>


                            <strong>
                                ______________________________
                            </strong>


                            <span>
                                Reviewing Clinician
                            </span>


                            <span>
                                Professional ID: __________________
                            </span>


                            <small>
                                Reviewing Signature
                            </small>

                        </div>


                        {/* DATE */}

                        <div className={P.signatureBox}>

                            <div className={P.signatureSpace}>
                                {/* Date/signing space */}
                            </div>


                            <div className={P.signatureLine}></div>


                            <strong>
                                {report.date}
                            </strong>


                            <span>
                                Date
                            </span>


                            <span>
                                Time: __________________
                            </span>


                            <small>
                                Date of Authorization
                            </small>

                        </div>

                    </div>


                    {/* =================================================
                        CONFIDENTIALITY NOTICE
                    ================================================== */}

                    <div className={P.confidentialityNotice}>

                        <i className="bi bi-lock-fill"></i>


                        <div>

                            <strong>
                                CONFIDENTIAL MEDICAL INFORMATION
                            </strong>

                            <p>
                                This document contains confidential
                                patient information and is intended
                                only for authorized medical or
                                administrative purposes. Unauthorized
                                disclosure or distribution is prohibited.
                            </p>

                        </div>

                    </div>


                    {/* =================================================
                        DOCUMENT FOOTER
                    ================================================== */}

                    <div className={P.documentFooter}>

                        <div>

                            <i className="bi bi-hospital"></i>

                            <span>
                                {hospital.name}
                            </span>

                        </div>


                        <span>
                            {hospital.location}
                        </span>


                        <span>
                            Record: {report.recordNumber}
                        </span>

                    </div>

                </div>

            ))}


            {/* =====================================================
                FINAL PRINT ACTION
            ====================================================== */}

            <div className={P.finalActions}>

                <div className={P.finalMessage}>

                    <div className={P.finalIcon}>

                        <i className="bi bi-file-earmark-pdf"></i>

                    </div>


                    <div>

                        <h3>
                            Reports are ready
                        </h3>

                        <p>
                            Only the selected records and information
                            will be included when printing.
                        </p>

                    </div>

                </div>


                <div className={P.finalButtons}>

                    <button className={P.cancelPrintButton}>

                        <i className="bi bi-arrow-left"></i>

                        Back

                    </button>


                    <button className={P.printButton}>

                        <i className="bi bi-printer-fill"></i>

                        Print Reports

                    </button>

                </div>

            </div>


            {/* =====================================================
                PAGE FOOTER
            ====================================================== */}

            <div className={P.pageFooter}>

                <div>

                    <i className="bi bi-lock-fill"></i>

                    <span>
                        Confidential patient information
                    </span>

                </div>


                <span>
                    {hospital.name}
                </span>

            </div>

        </div>
    );
}

export default PrintReports;