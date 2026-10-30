import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom'
import D from "./Dashboard.module.css";
import { Helmet } from 'react-helmet-async'
import axios from 'axios'
const API = import.meta.env.VITE_HOSTING_API;

function Dashboard() {
    const navigateTo = useNavigate()

    const [patientDays, setPatientDays] = useState(2);

    const [total_patients, setTotalPatients] = useState(0);
    const [total_patients1, setTotalPatients1] = useState(0);
    const [patients_new_this_month, setPatientsNewThisMonth] = useState(0);
    const [total_records, setTotalRecords] = useState(0);
    const [total_medical_records, setTotalMedicalRecords] = useState(0);
    const [new_this_month, setNewThisMonth] = useState(0);
    const [recycled_patients, setRecycledPatients] = useState(0);
    const [recycled_medical_records, setRecycledMedicalRecords] = useState(0);
    const [activePatients, setActivePatients] = useState(0);
    const [inactivePatients, setInactivePatients] = useState(0);
    const [recentPatients, setRecentPatients] = useState([])

    async function fetchdashboard() {
        try {
            const response = await axios.get(`${API}/patient/main-dashboard`)
            const results = response.data;
            if (results.success === true) {

                const r = results.dashboard[0];
                setTotalPatients(Number(r.total_patients));
                setPatientsNewThisMonth(Number(r.patients_new_this_month));
                setTotalRecords(Number(r.total_records));
                setTotalMedicalRecords(Number(r.total_medical_records));
                setNewThisMonth(Number(r.new_this_month));
                setRecycledPatients(Number(r.recycled_patients));
                setRecycledMedicalRecords(Number(r.recycled_medical_records));
                setActivePatients(Number(r.active_patients));
                setInactivePatients(Number(r.inactive_patients));
                setRecentPatients(results.patients)

            } else {
                console.log(results.message)
            }

        } catch (error) {
            console.log(error.message)
        }

    }

    useEffect(() => {
        fetchdashboard()
        oneDashboard(patientDays)
    }, [])

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


    const today = new Date().toLocaleDateString("en-US", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric"
    });


    async function oneDashboard(value) {
        const number = Number(value)
        // alert(number)
        try {
            const response = await axios.get(`${API}/patient/one-dashboard?number=${number}`)
            const results = response.data;
            if (results.success === true) {
                setTotalPatients1(results.patients_added_today)
            } else {
                console.log(results.message)
            }
        } catch (error) {
            console.log(error.message)
        }

    }


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
                    <span className={D.pageLabel} onClick={() => fetchdashboard()}>
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

                    <div className={D.dateDisplay}>
                        <i className="bi bi-calendar3"></i>
                        <span>{today}</span>
                    </div>
                </div>
            </header>
            
            <section className={D.statsGrid}>
                <div className={D.statCard}>
                    <div className={`${D.statIcon} ${D.blueIcon}`}>
                        <i className="bi bi-people"></i>
                    </div>
                    <div className={D.statContent}>
                        <span style={{ fontSize: "1em" }}>Total Patients</span>
                        <h2>{total_patients}</h2>
                        <p>
                            <i className="bi bi-arrow-up"></i>
                            {patients_new_this_month} new this month
                        </p>
                    </div>
                </div>


                <div className={D.statCard}>
                    <div className={`${D.statIcon} ${D.greenIcon}`}>
                        <i className="bi bi-person-check"></i>
                    </div>

                    <div className={D.statContent}>
                        <span style={{ fontSize: "1em" }}>Medical Records <small>/ patients</small></span>
                        <h2>{total_records}</h2>
                        <p>
                            <i className="bi bi-calendar-check"></i>
                            Paitents with medical records only
                        </p>
                    </div>
                </div>

                <div className={D.statCard}>

                    <div className={`${D.statIcon} ${D.purpleIcon}`}>
                        <i className="bi bi-file-medical"></i>
                    </div>

                    <div className={D.statContent}>

                        <span style={{ fontSize: "1em" }}> Records</span>

                        <h2>{total_medical_records}</h2>

                        <p>
                            <i className="bi bi-arrow-up"></i>
                            {new_this_month} added this month
                        </p>

                    </div>

                </div>


                {/* PENDING RECORDS */}



                {/* ================= SECOND ROW ================= */}


                {/* NEW PATIENTS */}

                <div className={D.statCard}>

                    <div className={`${D.statIcon} ${D.blueIcon}`}>
                        <i className="bi bi-person-plus"></i>
                    </div>

                    <div className={D.statContent}>
                        <span style={{ fontSize: "0.8em" }}>New Patients</span>

                        <h2>{total_patients1}</h2>

                        <p>
                            <i className="bi bi-person-add"></i>

                        </p>
                    </div>


                    <div className={D.patientDaysControl}>
                        <br></br>
                        <br></br>
                        <label htmlFor="patientDays" style={{ fontWeight: "200" }}>Patients in the last <span style={{ color: "blue", fontWeight: "bold" }}>{patientDays} {patientDays === 1 ? "day" : "days"}</span> </label>

                        <div className={D.patientDaysActions}>
                            <input
                                id="patientDays"
                                type="number"
                                min="1"
                                step="1"
                                value={patientDays}
                                onChange={(e) => setPatientDays(Math.max(1, Number(e.target.value)))}
                            />

                            <button type="button"
                                onClick={() => { oneDashboard(patientDays) }}>
                                <i className="bi bi-funnel"></i>
                            </button>
                        </div>
                    </div>

                </div>


                {/* FOLLOW UPS */}

                <div className={D.statCard}>

                    <div className={`${D.statIcon} ${D.greenIcon}`}>
                        <i className="bi bi-arrow-repeat"></i>
                    </div>

                    <div className={D.statContent}>

                        <span style={{ color: "#000dff", fontSize: "1em" }}>
                            Active Patients
                        </span>

                        <h2>{activePatients}</h2>

                        <p >
                            <i className="bi bi-person-x" ></i>
                            Total active patients
                        </p>

                    </div>

                </div>


                {/* UPDATED RECORDS */}

                <div className={D.statCard}>

                    <div className={`${D.statIcon} ${D.purpleIcon}`}>
                        <i className="bi bi-pencil-square"></i>
                    </div>

                    <div className={D.statContent} >

                        <span style={{ color: "#1aa801", fontSize: "1em" }}>
                            Inactive Patients
                        </span>

                        <h2>{inactivePatients}</h2>

                        <p >
                            <i className="bi bi-person-x"></i>
                            Total inactive patients
                        </p>

                    </div>

                </div>


                <div className={D.statCard}>

                    <div className={`${D.statIcon} ${D.blueIcon}`}>
                        <i className="bi bi-recycle"></i>
                    </div>

                    <div className={D.statContent}>

                        <span style={{ color: "#ff0707", fontSize: "1em" }}>Recycled Patients</span>

                        <h2>{recycled_patients}</h2>

                        <p>
                            <i className="bi bi-person-x"></i>
                            Patients moved to recycle bin
                        </p>

                    </div>

                </div>

                <div className={D.statCard}>

                    <div className={`${D.statIcon} ${D.blueIcon}`}>
                        <i className="bi bi-recycle"></i>
                    </div>

                    <div className={D.statContent}>


                        <span style={{ color: "#ff0707", fontSize: "1em" }}>
                            Patients with Recycled Records
                        </span>

                        <h2>{recycled_medical_records}</h2>

                        <p>
                            <i className="bi bi-archive"></i>
                            <small>
                                Patients whose medical records were moved to the recycle bin
                            </small>
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
                                Recently added patients
                            </p>

                        </div>

                        <button className={D.viewButton}>
                            View all
                            <i className="bi bi-arrow-right"></i>
                        </button>

                    </div>


                    <div className={D.patientList}>


                        {/* PATIENT 1 */}
                        {recentPatients.map((rp) => (
                            <>
                                <div className={D.patientRow} onClick={() => {
                                    localStorage.setItem("viewId", rp.id);
                                    navigateTo("/his/patients-info")
                                }
                                }>

                                    <div className={`${D.patientAvatar} ${D.avatarOne}`}>
                                        {rp.first_name[0]}{rp.last_name[0]}
                                    </div>

                                    <div className={D.patientInfo}>
                                        <strong>{rp.first_name} {rp.middle_name ? rp.middle_name : " "} {rp.last_name}</strong>
                                        <span>
                                            {rp.gender} - {rp.age} years
                                        </span>
                                    </div>
                                    <div className={D.patientRecord}>
                                        <span>
                                            Date added
                                        </span>
                                        <strong>
                                            {dateName(rp.registration_date)}
                                        </strong>
                                    </div>
                                </div>

                            </>
                        ))}


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

                        <button className={D.actionCard}
                            onClick={() => {
                                navigateTo("/his/fill-forms")
                            }}
                        >

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


                        <button className={D.actionCard}
                            onClick={() => {
                                navigateTo("/his/medical-records")
                            }}
                        >

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


                        <button className={D.actionCard}
                            onClick={() => {
                                navigateTo("/his/patients")
                            }}
                        >

                            <div className={D.actionIcon}>
                                <i className="bi bi-search"></i>
                            </div>

                            <div>

                                <strong>
                                    Find Patient
                                </strong>

                                <span>
                                    Search for a patient
                                </span>

                            </div>

                            <i className={`bi bi-chevron-right ${D.actionArrow}`}></i>

                        </button>

                    </div>

                </section>

            </div>

            {/* ================= FOOTER ================= */}

            <footer className={D.dashboardFooter}>

                <span>
                    <i className="bi bi-shield-check"></i>
                    Patient information is confidential
                </span>
            </footer>

        </div>
    );
}

export default Dashboard;