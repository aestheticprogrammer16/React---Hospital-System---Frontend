import React from "react";
import D from "./Dashboard.module.css";
import { Helmet } from 'react-helmet-async'

function Dashboard() {
    return (
        <div className={D.dashboard}>
            <Helmet>
                <title>
                    Dashboard
                </title>
            </Helmet>

            {/* ================= HEADER ================= */}
            <div>
                <br className={D.b1}></br>
                <br className={D.b2}></br>
                <br className={D.b3}></br>
                <br className={D.b4}></br>
                <br className={D.b5}></br>
            </div>
            <header className={D.header}>

                <div className={D.headerTitle}>
                    <span className={D.pageLabel}>
                        <i className="bi bi-hospital"></i>
                        Hospital Overview
                    </span>

                    <h1>Dashboard</h1>

                    <p>
                        Here's a quick overview of today's patient
                        and medical record activity.
                    </p>
                </div>

                <div className={D.headerActions}>

                    <button
                        className={D.notificationButton}
                        aria-label="Notifications"
                    >
                        <i className="bi bi-bell"></i>
                        <span></span>
                    </button>

                    <div className={D.dateDisplay}>
                        <i className="bi bi-calendar3"></i>
                        <span>23 August 2026</span>
                    </div>

                </div>

            </header>


            {/* ================= STATISTICS ================= */}

            <section className={D.statsGrid}>

                {/* TOTAL PATIENTS */}

                <div className={D.statCard}>

                    <div className={`${D.statIcon} ${D.blueIcon}`}>
                        <i className="bi bi-people"></i>
                    </div>

                    <div className={D.statContent}>

                        <span>Total Patients</span>

                        <h2>248</h2>

                        <p>
                            <i className="bi bi-arrow-up"></i>
                            8 new this month
                        </p>

                    </div>

                </div>


                {/* TODAY'S PATIENTS */}

                <div className={D.statCard}>

                    <div className={`${D.statIcon} ${D.greenIcon}`}>
                        <i className="bi bi-person-check"></i>
                    </div>

                    <div className={D.statContent}>

                        <span>Today's Patients</span>

                        <h2>14</h2>

                        <p>
                            <i className="bi bi-calendar-check"></i>
                            Today's visits
                        </p>

                    </div>

                </div>


                {/* MEDICAL RECORDS */}

                <div className={D.statCard}>

                    <div className={`${D.statIcon} ${D.purpleIcon}`}>
                        <i className="bi bi-file-medical"></i>
                    </div>

                    <div className={D.statContent}>

                        <span>Medical Records</span>

                        <h2>386</h2>

                        <p>
                            <i className="bi bi-arrow-up"></i>
                            12 added this month
                        </p>

                    </div>

                </div>


                {/* PENDING RECORDS */}

                <div className={D.statCard}>

                    <div className={`${D.statIcon} ${D.orangeIcon}`}>
                        <i className="bi bi-clock-history"></i>
                    </div>

                    <div className={D.statContent}>

                        <span>Pending Records</span>

                        <h2>6</h2>

                        <p>
                            <i className="bi bi-exclamation-circle"></i>
                            Need attention
                        </p>

                    </div>

                </div>


                {/* ================= SECOND ROW ================= */}


                {/* NEW PATIENTS */}

                <div className={D.statCard}>

                    <div className={`${D.statIcon} ${D.blueIcon}`}>
                        <i className="bi bi-person-plus"></i>
                    </div>

                    <div className={D.statContent}>

                        <span>New Patients</span>

                        <h2>8</h2>

                        <p>
                            <i className="bi bi-person-add"></i>
                            Registered this month
                        </p>

                    </div>

                </div>


                {/* FOLLOW UPS */}

                <div className={D.statCard}>

                    <div className={`${D.statIcon} ${D.greenIcon}`}>
                        <i className="bi bi-arrow-repeat"></i>
                    </div>

                    <div className={D.statContent}>

                        <span>Follow-ups</span>

                        <h2>12</h2>

                        <p>
                            <i className="bi bi-calendar-event"></i>
                            Scheduled records
                        </p>

                    </div>

                </div>


                {/* UPDATED RECORDS */}

                <div className={D.statCard}>

                    <div className={`${D.statIcon} ${D.purpleIcon}`}>
                        <i className="bi bi-pencil-square"></i>
                    </div>

                    <div className={D.statContent}>

                        <span>Records Updated</span>

                        <h2>21</h2>

                        <p>
                            <i className="bi bi-activity"></i>
                            This month
                        </p>

                    </div>

                </div>


                {/* ACTIVE TODAY */}

                <div className={D.statCard}>

                    <div className={`${D.statIcon} ${D.blueIcon}`}>
                        <i className="bi bi-activity"></i>
                    </div>

                    <div className={D.statContent}>

                        <span>Active Today</span>

                        <h2>18</h2>

                        <p>
                            <i className="bi bi-circle-fill"></i>
                            Patient activity
                        </p>

                    </div>

                </div>

            </section>


            {/* ================= MAIN CONTENT ================= */}

            <div className={D.mainGrid}>


                {/* ================= RECENT PATIENTS ================= */}

                <section className={D.panel}>

                    <div className={D.panelHeader}>

                        <div>

                            <h2>
                                <i className="bi bi-people"></i>
                                Recent Patients
                            </h2>

                            <p>
                                Recently added or updated patients
                            </p>

                        </div>

                        <button className={D.viewButton}>
                            View all
                            <i className="bi bi-arrow-right"></i>
                        </button>

                    </div>


                    <div className={D.patientList}>


                        {/* PATIENT 1 */}

                        <div className={D.patientRow}>

                            <div className={`${D.patientAvatar} ${D.avatarOne}`}>
                                JM
                            </div>

                            <div className={D.patientInfo}>

                                <strong>John Mensah</strong>

                                <span>
                                    PT000001
                                </span>

                            </div>

                            <div className={D.patientRecord}>

                                <span>
                                    Last record
                                </span>

                                <strong>
                                    Today, 10:32 AM
                                </strong>

                            </div>

                            <button
                                className={D.moreButton}
                                aria-label="More options"
                            >
                                <i className="bi bi-three-dots-vertical"></i>
                            </button>

                        </div>


                        {/* PATIENT 2 */}

                        <div className={D.patientRow}>

                            <div className={`${D.patientAvatar} ${D.avatarTwo}`}>
                                AO
                            </div>

                            <div className={D.patientInfo}>

                                <strong>Ama Owusu</strong>

                                <span>
                                    PT000002
                                </span>

                            </div>

                            <div className={D.patientRecord}>

                                <span>
                                    Last record
                                </span>

                                <strong>
                                    Today, 09:15 AM
                                </strong>

                            </div>

                            <button
                                className={D.moreButton}
                                aria-label="More options"
                            >
                                <i className="bi bi-three-dots-vertical"></i>
                            </button>

                        </div>


                        {/* PATIENT 3 */}

                        <div className={D.patientRow}>

                            <div className={`${D.patientAvatar} ${D.avatarThree}`}>
                                MD
                            </div>

                            <div className={D.patientInfo}>

                                <strong>Michael Doe</strong>

                                <span>
                                    PT000003
                                </span>

                            </div>

                            <div className={D.patientRecord}>

                                <span>
                                    Last record
                                </span>

                                <strong>
                                    Yesterday, 04:20 PM
                                </strong>

                            </div>

                            <button
                                className={D.moreButton}
                                aria-label="More options"
                            >
                                <i className="bi bi-three-dots-vertical"></i>
                            </button>

                        </div>


                        {/* PATIENT 4 */}

                        <div className={D.patientRow}>

                            <div className={`${D.patientAvatar} ${D.avatarFour}`}>
                                EA
                            </div>

                            <div className={D.patientInfo}>

                                <strong>Esther Addo</strong>

                                <span>
                                    PT000004
                                </span>

                            </div>

                            <div className={D.patientRecord}>

                                <span>
                                    Last record
                                </span>

                                <strong>
                                    Yesterday, 02:48 PM
                                </strong>

                            </div>

                            <button
                                className={D.moreButton}
                                aria-label="More options"
                            >
                                <i className="bi bi-three-dots-vertical"></i>
                            </button>

                        </div>

                    </div>

                </section>


                {/* ================= QUICK ACTIONS ================= */}

                <section className={D.panel}>

                    <div className={D.panelHeader}>

                        <div>

                            <h2>
                                <i className="bi bi-lightning-charge"></i>
                                Quick Actions
                            </h2>

                            <p>
                                Common patient tasks
                            </p>

                        </div>

                    </div>


                    <div className={D.quickActions}>

                        <button className={D.actionCard}>

                            <div className={D.actionIcon}>
                                <i className="bi bi-person-plus"></i>
                            </div>

                            <div>

                                <strong>
                                    Add Patient
                                </strong>

                                <span>
                                    Register a new patient
                                </span>

                            </div>

                            <i className={`bi bi-chevron-right ${D.actionArrow}`}></i>

                        </button>


                        <button className={D.actionCard}>

                            <div className={D.actionIcon}>
                                <i className="bi bi-file-earmark-plus"></i>
                            </div>

                            <div>

                                <strong>
                                    New Medical Record
                                </strong>

                                <span>
                                    Add a patient's record
                                </span>

                            </div>

                            <i className={`bi bi-chevron-right ${D.actionArrow}`}></i>

                        </button>


                        <button className={D.actionCard}>

                            <div className={D.actionIcon}>
                                <i className="bi bi-search"></i>
                            </div>

                            <div>

                                <strong>
                                    Find Patient
                                </strong>

                                <span>
                                    Search patient records
                                </span>

                            </div>

                            <i className={`bi bi-chevron-right ${D.actionArrow}`}></i>

                        </button>

                    </div>

                </section>

            </div>


            {/* ================= BOTTOM CONTENT ================= */}

            <div className={D.bottomGrid}>


                {/* ================= RECENT RECORDS ================= */}

                <section className={D.panel}>

                    <div className={D.panelHeader}>

                        <div>

                            <h2>
                                <i className="bi bi-file-medical"></i>
                                Recent Medical Records
                            </h2>

                            <p>
                                Latest patient record activity
                            </p>

                        </div>

                        <button className={D.viewButton}>
                            View records
                            <i className="bi bi-arrow-right"></i>
                        </button>

                    </div>


                    <div className={D.recordsTable}>

                        <div className={D.tableHeader}>

                            <span>Patient</span>
                            <span>Record</span>
                            <span>Date</span>
                            <span>Status</span>

                        </div>


                        <div className={D.tableRow}>

                            <div className={D.tablePatient}>

                                <strong>John Mensah</strong>

                                <span>
                                    PT000001
                                </span>

                            </div>

                            <span>
                                General Health
                            </span>

                            <span>
                                Today, 10:32 AM
                            </span>

                            <span className={D.completedStatus}>
                                Completed
                            </span>

                        </div>


                        <div className={D.tableRow}>

                            <div className={D.tablePatient}>

                                <strong>Ama Owusu</strong>

                                <span>
                                    PT000002
                                </span>

                            </div>

                            <span>
                                Routine Check
                            </span>

                            <span>
                                Today, 09:15 AM
                            </span>

                            <span className={D.completedStatus}>
                                Completed
                            </span>

                        </div>


                        <div className={D.tableRow}>

                            <div className={D.tablePatient}>

                                <strong>Michael Doe</strong>

                                <span>
                                    PT000003
                                </span>

                            </div>

                            <span>
                                Follow-up
                            </span>

                            <span>
                                Yesterday, 04:20 PM
                            </span>

                            <span className={D.pendingStatus}>
                                Pending
                            </span>

                        </div>

                    </div>

                </section>


                {/* ================= TODAY'S OVERVIEW ================= */}

                <section className={D.panel}>

                    <div className={D.panelHeader}>

                        <div>

                            <h2>
                                <i className="bi bi-bar-chart"></i>
                                Today's Overview
                            </h2>

                            <p>
                                Patient activity today
                            </p>

                        </div>

                    </div>


                    <div className={D.overview}>

                        <div className={D.overviewItem}>

                            <div className={D.overviewIcon}>
                                <i className="bi bi-person"></i>
                            </div>

                            <div>

                                <strong>14</strong>

                                <span>
                                    Patient visits
                                </span>

                            </div>

                        </div>


                        <div className={D.overviewItem}>

                            <div className={D.overviewIcon}>
                                <i className="bi bi-file-plus"></i>
                            </div>

                            <div>

                                <strong>11</strong>

                                <span>
                                    Records added
                                </span>

                            </div>

                        </div>


                        <div className={D.overviewItem}>

                            <div className={D.overviewIcon}>
                                <i className="bi bi-pencil-square"></i>
                            </div>
                            <div>
                                <strong>8</strong>
                                <span>
                                    Records updated
                                </span>
                            </div>
                        </div>

                        <div className={D.overviewItem}>
                            <div className={D.overviewIcon}>
                                <i className="bi bi-check-circle"></i>
                            </div>
                            <div>
                                <strong>12</strong>
                                <span>
                                    Completed
                                </span>
                            </div>
                        </div>
                    </div>
                </section>
            </div>


            {/* ================= FOOTER ================= */}

            <footer className={D.dashboardFooter}>

                <span>
                    <i className="bi bi-shield-check"></i>
                    Patient information is confidential
                </span>

                <span>
                    <i className="bi bi-clock"></i>
                    Last system activity: Today, 10:45 AM
                </span>

            </footer>

        </div>
    );
}

export default Dashboard;