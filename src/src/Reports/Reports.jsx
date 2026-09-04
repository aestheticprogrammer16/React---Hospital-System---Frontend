import R from "./Reports.module.css";
import { Helmet } from 'react-helmet-async'

function Reports() {
    return (
        <div className={R.reportsPage}>
            <Helmet>
                <title>
                    Reports || 🔖
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
                        placeholder="Search patient by name or patient ID..."
                    />

                    <button>
                        <i className="bi bi-search"></i>
                        Search
                    </button>

                </div>


                {/* =================================================
                    FILTERS
                ================================================= */}

                <div className={R.filterHeader}>

                    <div>

                        <i className="bi bi-funnel-fill"></i>

                        <span>
                            Filter Results
                        </span>

                    </div>

                    <button className={R.clearFilters}>
                        <i className="bi bi-x-circle"></i>
                        Clear filters
                    </button>

                </div>


                <div className={R.filters}>

                    {/* NAME */}

                    <div className={R.filterGroup}>

                        <label>
                            Patient Name
                        </label>

                        <div className={R.filterInput}>

                            <i className="bi bi-person"></i>

                            <input
                                type="text"
                                placeholder="Patient name"
                            />

                        </div>

                    </div>


                    {/* DATE */}

                    <div className={R.filterGroup}>

                        <label>
                            Record Date
                        </label>

                        <div className={R.filterInput}>

                            <i className="bi bi-calendar3"></i>

                            <input
                                type="date"
                            />

                        </div>

                    </div>


                    {/* STATUS */}

                    <div className={R.filterGroup}>

                        <label>
                            Record Status
                        </label>

                        <div className={R.filterSelect}>

                            <i className="bi bi-check2-circle"></i>

                            <select defaultValue="">

                                <option value="" disabled>
                                    Select status
                                </option>

                                <option value="all">
                                    All statuses
                                </option>

                                <option value="completed">
                                    Completed
                                </option>

                                <option value="updated">
                                    Recently Updated
                                </option>

                                <option value="draft">
                                    Draft
                                </option>

                            </select>

                            <i className="bi bi-chevron-down"></i>

                        </div>

                    </div>


                    {/* YEAR */}

                    <div className={R.filterGroup}>

                        <label>
                            Year
                        </label>

                        <div className={R.filterSelect}>

                            <i className="bi bi-calendar-event"></i>

                            <select defaultValue="">

                                <option value="" disabled>
                                    Select year
                                </option>

                                <option value="2026">
                                    2026
                                </option>

                                <option value="2025">
                                    2025
                                </option>

                                <option value="2024">
                                    2024
                                </option>

                            </select>

                            <i className="bi bi-chevron-down"></i>

                        </div>

                    </div>

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

                    <span>
                        3 patients found
                    </span>

                </div>

            </div>


            {/* =====================================================
                PATIENT RESULTS
            ===================================================== */}

            <section className={R.patientResults}>


                {/* =================================================
                    PATIENT 1
                ================================================= */}

                <article className={R.patientCard}>

                    <div className={R.patientMain}>

                        <div className={R.patientAvatar}>
                            JM
                        </div>

                        <div className={R.patientInfo}>

                            <div className={R.patientNameRow}>

                                <h3>
                                    John Mensah
                                </h3>

                                <span className={R.activeStatus}>
                                    Active
                                </span>

                            </div>

                            <p>
                                Patient ID: PAT-000001
                            </p>

                            <div className={R.patientMeta}>

                                <span>
                                    <i className="bi bi-person"></i>
                                    Male
                                </span>

                                <span>
                                    <i className="bi bi-calendar3"></i>
                                    34 years
                                </span>

                                <span>
                                    <i className="bi bi-file-medical"></i>
                                    8 records
                                </span>

                            </div>

                        </div>

                    </div>


                    <div className={R.patientLastRecord}>

                        <span>
                            Latest Record
                        </span>

                        <strong>
                            Malaria Consultation
                        </strong>

                        <small>
                            24 Aug 2026
                        </small>

                    </div>


                    <button className={R.viewPatientButton}>

                        <span>
                            View Reports
                        </span>

                        <i className="bi bi-arrow-right"></i>

                    </button>

                </article>


                {/* =================================================
                    PATIENT 2
                ================================================= */}

                <article className={R.patientCard}>

                    <div className={R.patientMain}>

                        <div className={R.patientAvatar}>
                            AB
                        </div>

                        <div className={R.patientInfo}>

                            <div className={R.patientNameRow}>

                                <h3>
                                    Ama Boateng
                                </h3>

                                <span className={R.activeStatus}>
                                    Active
                                </span>

                            </div>

                            <p>
                                Patient ID: PAT-000002
                            </p>

                            <div className={R.patientMeta}>

                                <span>
                                    <i className="bi bi-person"></i>
                                    Female
                                </span>

                                <span>
                                    <i className="bi bi-calendar3"></i>
                                    28 years
                                </span>

                                <span>
                                    <i className="bi bi-file-medical"></i>
                                    5 records
                                </span>

                            </div>

                        </div>

                    </div>


                    <div className={R.patientLastRecord}>

                        <span>
                            Latest Record
                        </span>

                        <strong>
                            Fever Follow-up
                        </strong>

                        <small>
                            22 Aug 2026
                        </small>

                    </div>


                    <button className={R.viewPatientButton}>

                        <span>
                            View Reports
                        </span>

                        <i className="bi bi-arrow-right"></i>

                    </button>

                </article>


                {/* =================================================
                    PATIENT 3
                ================================================= */}

                <article className={R.patientCard}>

                    <div className={R.patientMain}>

                        <div className={R.patientAvatar}>
                            KA
                        </div>

                        <div className={R.patientInfo}>

                            <div className={R.patientNameRow}>

                                <h3>
                                    Kwame Asante
                                </h3>

                                <span className={R.activeStatus}>
                                    Active
                                </span>

                            </div>

                            <p>
                                Patient ID: PAT-000003
                            </p>

                            <div className={R.patientMeta}>

                                <span>
                                    <i className="bi bi-person"></i>
                                    Male
                                </span>

                                <span>
                                    <i className="bi bi-calendar3"></i>
                                    41 years
                                </span>

                                <span>
                                    <i className="bi bi-file-medical"></i>
                                    11 records
                                </span>

                            </div>

                        </div>

                    </div>


                    <div className={R.patientLastRecord}>

                        <span>
                            Latest Record
                        </span>

                        <strong>
                            General Consultation
                        </strong>

                        <small>
                            20 Aug 2026
                        </small>

                    </div>


                    <button className={R.viewPatientButton}>

                        <span>
                            View Reports
                        </span>

                        <i className="bi bi-arrow-right"></i>

                    </button>

                </article>

            </section>


            {/* =====================================================
                EMPTY STATE
            ===================================================== */}

            <section className={R.emptyState}>

                <div className={R.emptyIcon}>
                    <i className="bi bi-person-x"></i>
                </div>

                <h3>
                    No patient selected
                </h3>

                <p>
                    Search for a patient above to view their available
                    medical records and prepare a report.
                </p>

            </section>


            {/* =====================================================
                FOOTER INFORMATION
            ===================================================== */}

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