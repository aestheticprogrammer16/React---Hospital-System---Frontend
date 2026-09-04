import React from "react";
import R from "./Records.module.css";

function Records() {
    return (
        <div className={R.recordsPage}>

            {/* =====================================================
                TOP NAVIGATION
            ===================================================== */}
            <div>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
            </div>
            <div className={R.topNavigation}>

                <button className={R.backButton}>
                    <i className="bi bi-arrow-left"></i>
                    <span>Back to Medical Records</span>
                </button>

                <div className={R.topActions}>

                    <button className={R.printButton}>
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
                        JM
                    </div>

                    <div className={R.patientName}>

                        <div className={R.patientLabel}>
                            <i className="bi bi-person-vcard"></i>
                            PATIENT
                        </div>

                        <h1>John Mensah</h1>

                        <p>
                            Patient ID: <strong>PAT-000001</strong>
                        </p>

                    </div>

                </div>


                <div className={R.patientDetails}>

                    <div>
                        <span>Gender</span>

                        <strong>
                            <i className="bi bi-gender-male"></i>
                            Male
                        </strong>
                    </div>

                    <div>
                        <span>Age</span>
                        <strong>34 years</strong>
                    </div>

                    <div>
                        <span>Date of Birth</span>
                        <strong>14 May 1992</strong>
                    </div>

                    <div>
                        <span>Registered</span>
                        <strong>23 Aug 2026</strong>
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
                        <strong>024 000 0000</strong>
                    </div>

                </div>


                <div className={R.quickInfoItem}>

                    <i className="bi bi-geo-alt-fill"></i>

                    <div>
                        <span>Address</span>
                        <strong>Accra, Ghana</strong>
                    </div>

                </div>


                <div className={R.quickInfoItem}>

                    <i className="bi bi-heart-pulse-fill"></i>

                    <div>
                        <span>Medical Records</span>
                        <strong>8 Records</strong>
                    </div>

                </div>


                <div className={R.quickInfoItem}>

                    <i className="bi bi-clock-history"></i>

                    <div>
                        <span>Last Updated</span>
                        <strong>24 Aug 2026</strong>
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
                            Search and manage all medical records belonging
                            to this patient.
                        </p>

                    </div>


                    <button className={R.newRecordButton}>
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

                    <div className={R.filterItem}>

                        <label>Month</label>

                        <div className={R.selectBox}>

                            <i className="bi bi-calendar3"></i>

                            <select defaultValue="">
                                <option value="" disabled>
                                    All months
                                </option>

                                <option>January</option>
                                <option>February</option>
                                <option>March</option>
                                <option>April</option>
                                <option>May</option>
                                <option>June</option>
                                <option>July</option>
                                <option>August</option>
                                <option>September</option>
                                <option>October</option>
                                <option>November</option>
                                <option>December</option>
                            </select>

                            <i className="bi bi-chevron-down"></i>

                        </div>

                    </div>


                    <div className={R.filterItem}>

                        <label>Year</label>

                        <div className={R.selectBox}>

                            <i className="bi bi-calendar-event"></i>

                            <select defaultValue="">
                                <option value="" disabled>
                                    All years
                                </option>

                                <option>2026</option>
                                <option>2025</option>
                                <option>2024</option>
                            </select>

                            <i className="bi bi-chevron-down"></i>

                        </div>

                    </div>


                    <div className={R.filterItem}>

                        <label>Record Type</label>

                        <div className={R.selectBox}>

                            <i className="bi bi-file-medical"></i>

                            <select defaultValue="">
                                <option value="" disabled>
                                    All types
                                </option>

                                <option>Consultation</option>
                                <option>Follow-up</option>
                                <option>Assessment</option>
                                <option>General Record</option>
                            </select>

                            <i className="bi bi-chevron-down"></i>

                        </div>

                    </div>


                    <div className={R.filterItem}>

                        <label>Status</label>

                        <div className={R.selectBox}>

                            <i className="bi bi-check2-circle"></i>

                            <select defaultValue="">
                                <option value="" disabled>
                                    All statuses
                                </option>

                                <option>Completed</option>
                                <option>Draft</option>
                                <option>Recently Updated</option>
                            </select>

                            <i className="bi bi-chevron-down"></i>

                        </div>

                    </div>


                    <button className={R.applyFilterButton}>
                        <i className="bi bi-funnel-fill"></i>
                        Apply
                    </button>

                </div>

            </section>


            {/* =====================================================
                SUMMARY
            ===================================================== */}

            <div className={R.recordsSummary}>

                <div>
                    <span>Showing</span>
                    <strong>2 medical records</strong>
                </div>

                <button className={R.clearFiltersButton}>
                    <i className="bi bi-x-circle"></i>
                    Clear filters
                </button>

            </div>


            {/* =====================================================
                RECORD 1
                SAME STRUCTURE AS RECORD 2
            ===================================================== */}

            <section className={R.recordCard}>

                {/* RECORD HEADER */}

                <div className={R.recordCardHeader}>

                    <div className={R.recordTitleArea}>

                        <div className={R.recordIcon}>
                            <i className="bi bi-file-medical-fill"></i>
                        </div>

                        <div>

                            <span className={R.recordType}>
                                CONSULTATION
                            </span>

                            <h2>
                                Malaria Consultation
                            </h2>

                            <p>
                                Created on 24 August 2026 at 09:42 AM
                            </p>

                        </div>

                    </div>


                    <div className={R.recordCardActions}>

                        <span className={`${R.recordStatus} ${R.completed}`}>
                            <i className="bi bi-check-circle-fill"></i>
                            Completed
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
                        >
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
                            Doctor
                        </strong>

                    </div>


                    <div>

                        <span>Record Date</span>

                        <strong>
                            <i className="bi bi-calendar3"></i>
                            24 Aug 2026
                        </strong>

                    </div>


                    <div>

                        <span>Last Updated</span>

                        <strong>
                            <i className="bi bi-clock-history"></i>
                            24 Aug 2026
                        </strong>

                    </div>

                </div>


                {/* FLEXIBLE INFORMATION */}

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


                    {/* FIELD */}

                    <div className={R.customField}>

                        <div className={R.fieldName}>

                            <label>
                                Complaint
                            </label>

                            <span>
                                Property
                            </span>

                        </div>

                        <div className={R.fieldValue}>

                            <textarea
                                defaultValue="Patient reported headache, fever and body weakness."
                                placeholder="Enter information..."
                            />

                        </div>

                        <button
                            className={R.fieldDelete}
                            title="Remove field"
                        >
                            <i className="bi bi-trash3"></i>
                        </button>

                    </div>


                    <div className={R.customField}>

                        <div className={R.fieldName}>

                            <label>
                                Blood Pressure
                            </label>

                            <span>
                                Property
                            </span>

                        </div>

                        <div className={R.fieldValue}>

                            <textarea
                                defaultValue="120/80 mmHg"
                                placeholder="Enter information..."
                            />

                        </div>

                        <button
                            className={R.fieldDelete}
                            title="Remove field"
                        >
                            <i className="bi bi-trash3"></i>
                        </button>

                    </div>


                    <div className={R.customField}>

                        <div className={R.fieldName}>

                            <label>
                                Teeth
                            </label>

                            <span>
                                Property
                            </span>

                        </div>

                        <div className={R.fieldValue}>

                            <textarea
                                defaultValue="Patient reports mild tooth sensitivity."
                                placeholder="Enter information..."
                            />

                        </div>

                        <button
                            className={R.fieldDelete}
                            title="Remove field"
                        >
                            <i className="bi bi-trash3"></i>
                        </button>

                    </div>


                    <div className={R.customField}>

                        <div className={R.fieldName}>

                            <label>
                                Hand
                            </label>

                            <span>
                                Property
                            </span>

                        </div>

                        <div className={R.fieldValue}>

                            <textarea
                                defaultValue="No visible injury."
                                placeholder="Describe the patient's condition..."
                            />

                        </div>

                        <button
                            className={R.fieldDelete}
                            title="Remove field"
                        >
                            <i className="bi bi-trash3"></i>
                        </button>

                    </div>


                    {/* ADD FIELD */}

                    <button className={R.addFieldButton}>

                        <i className="bi bi-plus-circle"></i>

                        Add Another Information Field

                    </button>

                </div>


                {/* RECORD FOOTER */}

                <div className={R.recordFooter}>

                    <div className={R.lastModified}>

                        <i className="bi bi-info-circle"></i>

                        <span>
                            Last changes saved on 24 Aug 2026 at 10:15 AM
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


            {/* =====================================================
                RECORD 2
                EXACT SAME STRUCTURE
            ===================================================== */}

            <section className={R.recordCard}>

                {/* RECORD HEADER */}

                <div className={R.recordCardHeader}>

                    <div className={R.recordTitleArea}>

                        <div className={R.recordIcon}>
                            <i className="bi bi-file-medical-fill"></i>
                        </div>

                        <div>

                            <span className={R.recordType}>
                                FOLLOW-UP
                            </span>

                            <h2>
                                Fever Follow-up
                            </h2>

                            <p>
                                Created on 18 August 2026 at 02:15 PM
                            </p>

                        </div>

                    </div>


                    <div className={R.recordCardActions}>

                        <span className={`${R.recordStatus} ${R.updated}`}>
                            <i className="bi bi-arrow-repeat"></i>
                            Recently Updated
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
                        >
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
                            Nurse
                        </strong>

                    </div>


                    <div>

                        <span>Record Date</span>

                        <strong>
                            <i className="bi bi-calendar3"></i>
                            18 Aug 2026
                        </strong>

                    </div>


                    <div>

                        <span>Last Updated</span>

                        <strong>
                            <i className="bi bi-clock-history"></i>
                            19 Aug 2026
                        </strong>

                    </div>

                </div>


                {/* FLEXIBLE INFORMATION */}

                <div className={R.informationSection}>

                    <div className={R.informationHeader}>

                        <div>

                            <h3>
                                Record Information
                            </h3>

                            <p>
                                Information recorded during this follow-up.
                            </p>

                        </div>

                    </div>


                    {/* FIELD */}

                    <div className={R.customField}>

                        <div className={R.fieldName}>

                            <label>
                                Temperature
                            </label>

                            <span>
                                Property
                            </span>

                        </div>

                        <div className={R.fieldValue}>

                            <textarea
                                defaultValue="37.2°C"
                                placeholder="Enter information..."
                            />

                        </div>

                        <button
                            className={R.fieldDelete}
                            title="Remove field"
                        >
                            <i className="bi bi-trash3"></i>
                        </button>

                    </div>


                    <div className={R.customField}>

                        <div className={R.fieldName}>

                            <label>
                                Patient Condition
                            </label>

                            <span>
                                Property
                            </span>

                        </div>

                        <div className={R.fieldValue}>

                            <textarea
                                defaultValue="Patient is responding well to treatment."
                                placeholder="Enter information..."
                            />

                        </div>

                        <button
                            className={R.fieldDelete}
                            title="Remove field"
                        >
                            <i className="bi bi-trash3"></i>
                        </button>

                    </div>


                    <div className={R.customField}>

                        <div className={R.fieldName}>

                            <label>
                                Medication
                            </label>

                            <span>
                                Property
                            </span>

                        </div>

                        <div className={R.fieldValue}>

                            <textarea
                                defaultValue="Continue prescribed medication."
                                placeholder="Enter information..."
                            />

                        </div>

                        <button
                            className={R.fieldDelete}
                            title="Remove field"
                        >
                            <i className="bi bi-trash3"></i>
                        </button>

                    </div>


                    <div className={R.customField}>

                        <div className={R.fieldName}>

                            <label>
                                Notes
                            </label>

                            <span>
                                Property
                            </span>

                        </div>

                        <div className={R.fieldValue}>

                            <textarea
                                defaultValue="Patient advised to return if symptoms worsen."
                                placeholder="Describe additional information..."
                            />

                        </div>

                        <button
                            className={R.fieldDelete}
                            title="Remove field"
                        >
                            <i className="bi bi-trash3"></i>
                        </button>

                    </div>


                    {/* ADD FIELD */}

                    <button className={R.addFieldButton}>

                        <i className="bi bi-plus-circle"></i>

                        Add Another Information Field

                    </button>

                </div>


                {/* RECORD FOOTER */}

                <div className={R.recordFooter}>

                    <div className={R.lastModified}>

                        <i className="bi bi-info-circle"></i>

                        <span>
                            Last changes saved on 19 Aug 2026 at 03:20 PM
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


            {/* =====================================================
                CREATE NEW RECORD
            ===================================================== */}

            <section className={R.newRecordSection}>

                <div className={R.newRecordIcon}>

                    <i className="bi bi-file-earmark-medical-fill"></i>

                </div>


                <div className={R.newRecordContent}>

                    <h2>
                        Add a New Medical Record
                    </h2>

                    <p>
                        Create a separate record for another consultation,
                        illness, follow-up or patient visit.
                    </p>

                </div>


                <button className={R.newRecordButtonBottom}>

                    <i className="bi bi-plus-lg"></i>

                    Create New Record

                </button>

            </section>


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
                    Patient ID: PAT-000001
                </span>

            </div>

        </div>
    );
}

export default Records;