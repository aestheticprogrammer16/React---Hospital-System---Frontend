import axios from 'axios';
const API = import.meta.env.VITE_HOSTING_API;
import { useEffect, useState, useContext } from 'react'
import { Helmet } from 'react-helmet-async'
import EP from "./Editpatient.module.css";
import { MyContext } from "../Mycontext";


function Editpatient() {
    const { active100, setActive100 } = useContext(MyContext)
    const [active, setActive] = useState(false)
    const [active1, setActive1] = useState(false)
    const [active2, setActive2] = useState(false)

    const [active3, setActive3] = useState(false)
    const [active4, setActive4] = useState(false)

    const [active5, setActive5] = useState(false)
    const [active6, setActive6] = useState(false)

    const [active7, setActive7] = useState(false)
    const [active001, setActive001] = useState(false)

    const [firstName, setFirstName] = useState("");
    const [middleName, setMiddleName] = useState("");
    const [lastName, setLastName] = useState("");
    const [dob, setDob] = useState("");
    const [age, setAge] = useState("");
    const [gender, setGender] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [address, setAddress] = useState("");
    const [emergencyName, setEmergencyName] = useState("");
    const [emergencyRelation, setEmergencyRelation] = useState("");
    const [emergencyPhone, setEmergencyPhone] = useState("");
    const [blood, setBlood] = useState("");
    const [marital, setMarital] = useState("");
    const [occupation, setOccupation] = useState("");
    const [nationality, setNationality] = useState("");
    const [idType, setIdType] = useState("");
    const [idNumber, setIdNumber] = useState("");
    const [registrationStatus, setRegistrationStatus] = useState("");
    const [registrationDate, setRegistrationDate] = useState("");
    const [updated, setUpdated] = useState("");
    const [isActive, setIsActive] = useState("");

    function handleCancel() {
        window.history.back();
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



    async function fetchPatientDetailsById() {
        const id = localStorage.getItem("editId")
        setActive7(false)
        try {
            const response = await axios.get(`${API}/patient/${id}/info`)
            const results = response.data;

            if (results.success === true) {
                setBlood(results.patient.blood)
                setEmergencyRelation(results.patient.emergency_contact_relation)
                setEmergencyName(results.patient.emergency_contact_name)
                setEmergencyPhone(results.patient.emergency_contact_phone)
                setMarital(results.patient.marital_status)
                setOccupation(results.patient.occupation)
                setNationality(results.patient.nationality)
                setIdType(results.patient.identification_type)
                setIdNumber(results.patient.identification_number)
                setUpdated(results.patient.updated_at)
                setRegistrationDate(results.patient.registration_date)
                setFirstName(results.patient.first_name)
                setMiddleName(results.patient.middle_name)
                setLastName(results.patient.last_name)
                setDob(results.patient.dob)
                setAge(results.patient.age)
                setGender(results.patient.gender)
                setPhone(results.patient.phone)
                setEmail(results.patient.email)
                setAddress(results.patient.address)
                setIsActive(results.patient.isactive)
                setRegistrationStatus(String(results.patient.registration_status));
                setRegistrationDate(results.patient.registration_date)
                setUpdated(results.patient.updated_at)

            } else {
                console.log(results.message)
                setActive7(true)

            }
        } catch (error) {
            setActive7(true)
            console.log(error.message)

        }
    }

    useEffect(() => {
        fetchPatientDetailsById()
    }, [])













    useEffect(() => {
        let currentDate = new Date().toISOString().split("T")[0];
        setRegistrationDate(currentDate);
        setUpdated(currentDate);
    })

    async function submit(e) {
        e.preventDefault()
        setActive(false)
        setActive1(false)
        setActive2(false)
        setActive3(true)   // - outer container wrapper - on
        setActive4(false)  // - inner container - off
        setActive5(true)   // - grenn coloured button - on


        if (!firstName || !lastName || !age || !dob || !phone || !address || !marital || !registrationStatus || !isActive) {
            setActive5(false)   // - grenn coloured button - off
            setActive3(false) // - container wrapper - off
            return setActive(true)
        }



        // useEffect(() => {


        try {
            const id = localStorage.getItem("editId")

            const response = await axios.put(`${API}/patient/update-patient/${id}`,
                {
                    firstName,
                    middleName,
                    lastName,
                    dob,
                    age,
                    gender,
                    phone,
                    email,
                    address,
                    emergencyName,
                    emergencyRelation,
                    emergencyPhone,
                    blood,
                    marital,
                    occupation,
                    nationality,
                    idType,
                    idNumber,
                    registrationStatus,
                    registrationDate,
                    updated,
                    isActive
                }
            )
            const results = response.data;
            if (results.success === true && results.forms === true) {
                setActive4(true) // inner container - on
                setActive6(true)
                return setActive1(true)
            }
            else if (results.success === false && results.forms === false) {
                setActive3(false)  // - outer container wrapper - off
                setActive6(false)
                setActive5(false)   // - grenn coloured button - off

                console.log(results.message)
                return setActive(true)

            } else if (results.success === false && results.forms === true) {
                setActive3(false)  // - outer container wrapper - off
                setActive6(false)
                setActive5(false)   // - grenn coloured button - off
                return setActive2(true)
            } else {
                setActive3(false)  // - outer container wrapper - off
                setActive6(false)
                setActive5(false)   // - grenn coloured button - off
                return setActive2(true)
            }
        } catch (error) {

            setActive3(false)  // - outer container wrapper - off
            setActive6(false)
            setActive5(false)   // - grenn coloured button - off
            return setActive2(true)

        } finally {
            setTimeout(() => {
            }, 3000);
        }
    }
















    return (
        <main className={EP.patientFormPage}>
            <Helmet>
                <title>
                    Paitent Edit| 📝
                </title>
            </Helmet>
            {/* =====================================================
                TOP BAR
            ===================================================== */}

            <div className={EP.topBar}>

                <button
                    type="button"
                    className={EP.backButton}
                    onClick={handleCancel}
                >
                    <i className="bi bi-arrow-left"></i>
                    <span>Back to Patients</span>
                </button>

                <div className={EP.formActions}>
                    <span >
                        <i className="bi bi-pencil-square"></i>
                        Editing Patient
                    </span>
                </div>

            </div>


            {/* =====================================================
                PAGE INTRO
            ===================================================== */}

            <section className={EP.pageIntro}>

                <div className={EP.introIcon}>
                    <i className="bi bi-person-vcard"></i>
                </div>

                <div className={EP.introText}>

                    <div className={EP.introLabel}>
                        <i className="bi bi-pencil-square"></i>
                        EDIT PATIENT INFORMATION
                    </div>

                    <h1>
                        Edit Patient's Details
                    </h1>

                    <p>
                        Update the patient's information below and save your
                        changes when you are finished.
                    </p>

                </div>

            </section>


            {/* =====================================================
                EDIT INFORMATION NOTICE
            ===================================================== */}

            <section className={EP.infoBox}>

                <div className={EP.infoBoxIcon}>
                    <i className="bi bi-info-circle-fill"></i>
                </div>

                <div>

                    <h3>
                        Editing patient information
                    </h3>

                    <p>
                        Fields marked with
                        &nbsp;
                        <span className={EP.requiredMark}>*</span>
                        &nbsp;
                        are required.
                    </p>

                    <p>
                        Review the patient's information carefully before
                        saving your changes.
                    </p>

                    <p>
                        You can cancel editing at any time without saving
                        your changes.
                    </p>

                </div>

            </section>


            {/* =====================================================
                FORM
            ===================================================== */}



            {active7 ? (
                <>
                    <div className={EP.hmsEditServerError}>
                        <div className={EP.hmsEditServerErrorIcon}>
                            <i className="bi bi-server"></i>
                        </div>
                        <div className={EP.hmsEditServerErrorBody}>
                            <h2>Server Error</h2>
                            <p>
                                We couldn't load this patient's details because of a
                                server error. Please try again later.
                            </p>
                            <button className={EP.hmsEditServerErrorButton} onClick={
                                () => {
                                    fetchPatientDetailsById();
                                    setActive100(true)
                                    setTimeout(() => {
                                        setActive100(false)
                                    }, 2000);
                                }
                            }>
                                <i className="bi bi-arrow-clockwise"></i>
                                Try Again
                            </button>
                        </div>
                    </div>


                </>) : (<>
                    <form
                        id="patientForm"
                        className={EP.patientForm}
                        onSubmit={submit}
                    >
                        {/* =================================================
                    01 — PATIENT INFORMATION
                ================================================= */}

                        <section className={EP.formSection}>

                            <div className={EP.sectionHeader}>

                                <div className={EP.sectionNumber}>
                                    01
                                </div>

                                <div>

                                    <h2>
                                        Patient Information
                                    </h2>

                                    <p>
                                        Basic information used to identify the patient.
                                    </p>

                                </div>

                            </div>


                            <div className={EP.fieldsGrid}>

                                <div className={EP.inputGroup}>

                                    <label htmlFor="firstName">
                                        <i className="bi bi-person"></i>
                                        First Name
                                        <span className={EP.requiredMark}>*</span>
                                    </label>

                                    <div className={EP.inputWrapper}>

                                        <i className="bi bi-person"></i>

                                        <input
                                            type="text"
                                            id="firstName"
                                            value={firstName}
                                            onChange={(e) =>
                                                setFirstName(e.target.value)
                                            }
                                            placeholder="Enter first name"
                                            required
                                        />

                                    </div>

                                </div>


                                <div className={EP.inputGroup}>

                                    <label htmlFor="middleName">
                                        <i className="bi bi-person"></i>
                                        Middle Name
                                    </label>

                                    <div className={EP.inputWrapper}>

                                        <i className="bi bi-person"></i>

                                        <input
                                            type="text"
                                            id="middleName"
                                            value={middleName}
                                            onChange={(e) =>
                                                setMiddleName(e.target.value)
                                            }
                                            placeholder="Enter middle name (optional)"
                                        />

                                    </div>

                                </div>


                                <div className={EP.inputGroup}>

                                    <label htmlFor="lastName">
                                        <i className="bi bi-person"></i>
                                        Last Name
                                        <span className={EP.requiredMark}>*</span>
                                    </label>

                                    <div className={EP.inputWrapper}>

                                        <i className="bi bi-person"></i>

                                        <input
                                            type="text"
                                            id="lastName"
                                            value={lastName}
                                            onChange={(e) =>
                                                setLastName(e.target.value)
                                            }
                                            placeholder="Enter last name"
                                            required
                                        />

                                    </div>

                                </div>


                                <div className={EP.inputGroup}>

                                    <label htmlFor="age">
                                        <i className="bi bi-calendar3"></i>
                                        Age
                                        <span className={EP.requiredMark}>*</span>
                                    </label>

                                    <div className={EP.inputWrapper}>

                                        <i className="bi bi-person"></i>

                                        <input
                                            type="number"
                                            id="age"
                                            value={age}
                                            onChange={(e) =>
                                                setAge(e.target.value)
                                            }
                                            placeholder="Enter age"
                                            required
                                        />

                                    </div>

                                </div>


                                <div className={EP.inputGroup}>

                                    <label htmlFor="gender">
                                        <i className="bi bi-gender-ambiguous"></i>
                                        Gender
                                        <span className={EP.requiredMark}>*</span>
                                    </label>

                                    <div className={EP.inputWrapper}>

                                        <i className="bi bi-gender-ambiguous"></i>

                                        <select
                                            id="gender"
                                            value={gender}
                                            onChange={(e) =>
                                                setGender(e.target.value)
                                            }
                                            required
                                        >

                                            <option value="">
                                                Select gender
                                            </option>

                                            <option value="Male">
                                                Male
                                            </option>

                                            <option value="Female">
                                                Female
                                            </option>

                                            <option value="Other">
                                                Other
                                            </option>

                                        </select>

                                    </div>

                                </div>


                                <div className={EP.inputGroup}>

                                    <label htmlFor="dateOfBirth">
                                        <i className="bi bi-calendar3"></i>
                                        Date of Birth
                                        <span className={EP.requiredMark}>*</span>
                                    </label>

                                    <div className={EP.inputWrapper}>

                                        <i className="bi bi-calendar-event"></i>

                                        <input
                                            type="date"
                                            id="dateOfBirth"
                                            value={dob.split("T")[0]}
                                            onChange={(e) =>
                                                setDob(e.target.value)
                                            }
                                            required
                                        />

                                    </div>

                                </div>

                            </div>

                        </section>


                        {/* =================================================
                    02 — CONTACT INFORMATION
                ================================================= */}

                        <section className={EP.formSection}>

                            <div className={EP.sectionHeader}>

                                <div className={EP.sectionNumber}>
                                    02
                                </div>

                                <div>

                                    <h2>
                                        Contact Information
                                    </h2>

                                    <p>
                                        How the hospital can contact the patient.
                                    </p>

                                </div>

                            </div>


                            <div className={EP.fieldsGrid}>

                                <div className={EP.inputGroup}>

                                    <label htmlFor="phone">
                                        <i className="bi bi-telephone"></i>
                                        Phone Number
                                        <span className={EP.requiredMark}>*</span>
                                    </label>

                                    <div className={EP.inputWrapper}>

                                        <i className="bi bi-telephone"></i>

                                        <input
                                            type="number"
                                            id="phone"
                                            placeholder="e.g. 0240030600"
                                            value={phone}
                                            onChange={(e) =>
                                                setPhone(e.target.value)
                                            }
                                            required
                                        />

                                    </div>

                                </div>


                                <div className={EP.inputGroup}>

                                    <label htmlFor="email">
                                        <i className="bi bi-envelope"></i>
                                        Email Address
                                    </label>

                                    <div className={EP.inputWrapper}>

                                        <i className="bi bi-envelope"></i>

                                        <input
                                            type="email"
                                            id="email"
                                            value={email}
                                            onChange={(e) =>
                                                setEmail(e.target.value)
                                            }
                                            placeholder="patient@example.com"
                                        />

                                    </div>

                                </div>


                                <div
                                    className={`${EP.inputGroup} ${EP.fullWidth}`}
                                >

                                    <label htmlFor="address">
                                        <i className="bi bi-geo-alt"></i>
                                        Address
                                        <span className={EP.requiredMark}>*</span>
                                    </label>

                                    <div
                                        className={`${EP.inputWrapper} ${EP.textareaWrapper}`}
                                    >

                                        <i className="bi bi-house"></i>

                                        <textarea
                                            id="address"
                                            value={address}
                                            onChange={(e) =>
                                                setAddress(e.target.value)
                                            }
                                            placeholder="Enter patient's residential address"
                                            rows="1"
                                            required
                                        ></textarea>

                                    </div>

                                </div>

                            </div>

                        </section>


                        {/* =================================================
                    03 — EMERGENCY CONTACT
                ================================================= */}

                        <section className={EP.formSection}>

                            <div className={EP.sectionHeader}>

                                <div className={EP.sectionNumber}>
                                    03
                                </div>

                                <div>

                                    <h2>
                                        Emergency Contact
                                    </h2>

                                    <p>
                                        Someone the hospital can contact in an emergency.
                                    </p>

                                </div>

                            </div>


                            <div className={EP.fieldsGrid}>

                                <div className={EP.inputGroup}>

                                    <label htmlFor="emergencyContactName">
                                        <i className="bi bi-person-heart"></i>
                                        Contact Name
                                    </label>

                                    <div className={EP.inputWrapper}>

                                        <i className="bi bi-person-heart"></i>

                                        <input
                                            type="text"
                                            id="emergencyContactName"
                                            value={emergencyName}
                                            onChange={(e) =>
                                                setEmergencyName(e.target.value)
                                            }
                                            placeholder="Enter emergency contact"
                                        />

                                    </div>

                                </div>


                                <div className={EP.inputGroup}>

                                    <label htmlFor="emergencyContactPhone">
                                        <i className="bi bi-telephone-forward"></i>
                                        Contact Phone
                                    </label>

                                    <div className={EP.inputWrapper}>

                                        <i className="bi bi-telephone-forward"></i>

                                        <input
                                            type="tel"
                                            id="emergencyContactPhone"
                                            value={emergencyPhone}
                                            onChange={(e) =>
                                                setEmergencyPhone(e.target.value)
                                            }
                                            placeholder="Enter contact number"
                                        />

                                    </div>

                                </div>


                                <div className={EP.inputGroup}>

                                    <label htmlFor="emergencyContactRelation">
                                        <i className="bi bi-people"></i>
                                        Relationship
                                    </label>

                                    <div className={EP.inputWrapper}>

                                        <i className="bi bi-people"></i>

                                        <select
                                            id="emergencyContactRelation"
                                            value={emergencyRelation}
                                            onChange={(e) =>
                                                setEmergencyRelation(e.target.value)
                                            }
                                        >

                                            <option value="">
                                                Select relationship
                                            </option>

                                            <option value="Father">Father</option>
                                            <option value="Mother">Mother</option>
                                            <option value="Spouse">Spouse</option>
                                            <option value="Sibling">Sibling</option>
                                            <option value="Brother">Brother</option>
                                            <option value="Sister">Sister</option>
                                            <option value="Child">Child</option>
                                            <option value="Son">Son</option>
                                            <option value="Daughter">Daughter</option>
                                            <option value="Grandparent">Grandparent</option>
                                            <option value="Grandfather">Grandfather</option>
                                            <option value="Grandmother">Grandmother</option>
                                            <option value="Uncle">Uncle</option>
                                            <option value="Aunt">Aunt</option>
                                            <option value="Cousin">Cousin</option>
                                            <option value="Guardian">Guardian</option>
                                            <option value="Partner">Partner</option>
                                            <option value="Friend">Friend</option>
                                            <option value="Relative">Relative</option>
                                            <option value="Caregiver">Caregiver</option>
                                            <option value="Other">Other</option>

                                        </select>

                                    </div>

                                </div>

                            </div>

                        </section>


                        {/* =================================================
                    04 — ADDITIONAL INFORMATION
                ================================================= */}

                        <section className={EP.formSection}>

                            <div className={EP.sectionHeader}>

                                <div className={EP.sectionNumber}>
                                    04
                                </div>

                                <div>

                                    <h2>
                                        Additional Information
                                    </h2>

                                    <p>
                                        Additional details that may help identify or
                                        understand the patient.
                                    </p>

                                </div>

                            </div>


                            <div className={EP.fieldsGrid}>

                                <div className={EP.inputGroup}>

                                    <label htmlFor="bloodGroup">
                                        <i className="bi bi-droplet"></i>
                                        Blood Group
                                    </label>

                                    <div className={EP.inputWrapper}>

                                        <i className="bi bi-droplet"></i>

                                        <select
                                            id="bloodGroup"
                                            value={blood}
                                            onChange={(e) =>
                                                setBlood(e.target.value)
                                            }
                                        >

                                            <option value="">
                                                Select blood group
                                            </option>

                                            <option value="A+">A+</option>
                                            <option value="A-">A-</option>
                                            <option value="B+">B+</option>
                                            <option value="B-">B-</option>
                                            <option value="AB+">AB+</option>
                                            <option value="AB-">AB-</option>
                                            <option value="O+">O+</option>
                                            <option value="O-">O-</option>
                                        </select>
                                    </div>
                                </div>


                                <div className={EP.inputGroup}>
                                    <label htmlFor="maritalStatus">
                                        <i className="bi bi-heart"></i>
                                        Marital Status
                                        <span className={EP.requiredMark}>*</span>
                                    </label>

                                    <div className={EP.inputWrapper}>
                                        <i className="bi bi-heart"></i>
                                        <select
                                            id="maritalStatus"
                                            value={marital}
                                            onChange={(e) =>
                                                setMarital(e.target.value)
                                            }
                                            required
                                        >

                                            <option value="">
                                                Select status
                                            </option>

                                            <option value="Single">Single</option>
                                            <option value="Married">Married</option>
                                            <option value="Divorced">Divorced</option>
                                            <option value="Widowed">Widowed</option>
                                            <option value="Separated">Separated</option>
                                            <option value="Engaged">Engaged</option>
                                            <option value="Domestic Partnership">
                                                Domestic Partnership
                                            </option>
                                            <option value="Other">Other</option>
                                            <option value="Prefer Not to Say">
                                                Prefer Not to Say
                                            </option>

                                        </select>

                                    </div>

                                </div>


                                <div className={EP.inputGroup}>

                                    <label htmlFor="occupation">
                                        <i className="bi bi-briefcase"></i>
                                        Occupation
                                    </label>

                                    <div className={EP.inputWrapper}>

                                        <i className="bi bi-briefcase"></i>

                                        <input
                                            type="text"
                                            id="occupation"
                                            placeholder="Enter occupation"
                                            value={occupation}
                                            onChange={(e) =>
                                                setOccupation(e.target.value)
                                            }
                                        />

                                    </div>

                                </div>


                                <div className={EP.inputGroup}>

                                    <label htmlFor="nationality">
                                        <i className="bi bi-globe2"></i>
                                        Nationality
                                    </label>

                                    <div className={EP.inputWrapper}>

                                        <i className="bi bi-globe2"></i>

                                        <input
                                            type="text"
                                            id="nationality"
                                            value={nationality}
                                            onChange={(e) =>
                                                setNationality(e.target.value)
                                            }
                                            placeholder="e.g. Ghanaian"
                                        />
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* =================================================
                    05 — IDENTIFICATION
                ================================================= */}

                        <section className={EP.formSection}>

                            <div className={EP.sectionHeader}>

                                <div className={EP.sectionNumber}>
                                    05
                                </div>

                                <div>

                                    <h2>
                                        Identification
                                    </h2>

                                    <p>
                                        Optional identification information for the patient.
                                    </p>

                                </div>

                            </div>


                            <div className={EP.fieldsGrid}>

                                <div className={EP.inputGroup}>

                                    <label htmlFor="identificationType">
                                        <i className="bi bi-card-text"></i>
                                        Identification Type
                                    </label>

                                    <div className={EP.inputWrapper}>

                                        <i className="bi bi-card-text"></i>

                                        <select
                                            id="identificationType"
                                            value={idType}
                                            onChange={(e) =>
                                                setIdType(e.target.value)
                                            }
                                        >

                                            <option value="">
                                                Select identification
                                            </option>

                                            <option value="Ghana Card">
                                                Ghana Card
                                            </option>

                                            <option value="Passport">
                                                Passport
                                            </option>

                                            <option value="Driver's License">
                                                Driver's License
                                            </option>

                                            <option value="Voter ID">
                                                Voter ID
                                            </option>

                                            <option value="NHIS Card">
                                                NHIS Card
                                            </option>

                                            <option value="SSNIT Card">
                                                SSNIT Card
                                            </option>

                                            <option value="Student ID">
                                                Student ID
                                            </option>

                                            <option value="Work ID">
                                                Work ID
                                            </option>

                                            <option value="Birth Certificate">
                                                Birth Certificate
                                            </option>

                                            <option value="National ID">
                                                National ID
                                            </option>

                                            <option value="Other">
                                                Other
                                            </option>

                                        </select>

                                    </div>

                                </div>


                                <div className={EP.inputGroup}>

                                    <label htmlFor="identificationNumber">
                                        <i className="bi bi-credit-card"></i>
                                        Identification Number
                                    </label>

                                    <div className={EP.inputWrapper}>

                                        <i className="bi bi-credit-card"></i>

                                        <input
                                            type="text"
                                            id="identificationNumber"
                                            value={idNumber}
                                            onChange={(e) =>
                                                setIdNumber(e.target.value)
                                            }
                                            placeholder="Enter identification number"
                                        />

                                    </div>

                                </div>

                            </div>

                        </section>


                        {/* =================================================
                    06 — RECORD INFORMATION
                ================================================= */}

                        <section className={EP.formSection}>

                            <div className={EP.sectionHeader}>

                                <div className={EP.sectionNumber}>
                                    06
                                </div>

                                <div>

                                    <h2>
                                        Record Information
                                    </h2>

                                    <p>
                                        Information about this patient's record.
                                    </p>

                                </div>

                            </div>


                            <div className={EP.fieldsGrid}>
                                <div className={EP.inputGroup}>
                                    <label htmlFor="status">
                                        <i className="bi bi-clipboard-check"></i>
                                        Forms Completed
                                        <span className={EP.requiredMark}>*</span>
                                    </label>

                                    <div className={EP.inputWrapper}>
                                        <i className="bi bi-circle-half"></i>

                                        <select
                                            id="status"
                                            value={registrationStatus}
                                            onChange={(e) => setRegistrationStatus(e.target.value)}
                                            required
                                        >
                                            <option value="" >
                                                Select
                                            </option>
                                            <option value="true">
                                                Completed
                                            </option>

                                            <option value="false">
                                                Incomplete
                                            </option>

                                        </select>
                                    </div>

                                    <small>
                                        Tells whether the forms is complete or incomplete.
                                    </small>
                                </div>

                                <div className={EP.inputGroup}>
                                    <label htmlFor="status">
                                        <i className="bi bi-clipboard-check"></i>
                                        Patient Status
                                    </label>

                                    <div className={EP.inputWrapper}>
                                        <i className="bi bi-circle-half"></i>

                                        <select
                                            id="status"
                                            value={isActive}
                                            onChange={(e) => setIsActive(e.target.value)}
                                            required
                                        >
                                            <option value="">
                                                Select status
                                            </option>
                                            <option value="active">
                                                active
                                            </option>

                                            <option value="inactive">
                                                inactive
                                            </option>
                                        </select>
                                    </div>
                                    <small>
                                        Shows whether the Patient is available hence  "active", otherwise "inactive"
                                    </small>
                                </div>


                                <div className={EP.inputGroup}>
                                    <label htmlFor="registrationDate">
                                        <i className="bi bi-calendar-plus"></i>
                                        Registration Date
                                    </label>

                                    <div className={EP.inputWrapper}>
                                        <i className="bi bi-calendar-event"></i>
                                        <input
                                            type="text"
                                            id="registrationDate"
                                            value={registrationDate.split("T")[0]}
                                            onChange={(e) =>
                                                setRegistrationDate(e.target.value)
                                            }
                                            placeholder="Registration date"
                                            readOnly
                                        />
                                    </div>
                                    <small>
                                        The date when this patient was first registered.
                                    </small>
                                </div>



                                <div className={EP.inputGroup}>
                                    <label htmlFor="updatedAt">
                                        <i className="bi bi-clock-history"></i>
                                        Last Updated
                                    </label>
                                    <div className={EP.inputWrapper}>
                                        <i className="bi bi-arrow-repeat"></i>
                                        <input
                                            type="text"
                                            id="updatedAt"
                                            // value={updated.split("T")[0]}
                                            value={updated && (updated.split("T")[0]) || "Not updated yet"}
                                            onChange={(e) =>
                                                setUpdated(e.target.value)
                                            }
                                            placeholder="Last updated"
                                            readOnly
                                        />
                                    </div>
                                    <small>
                                        The most recent change made to this patient.
                                    </small>
                                </div>
















                            </div>
                        </section>




                        {/* =================================================
                    FORM FOOTER
                ================================================= */}


                        {active ?
                            (
                                <>
                                    <div className={EP.incompleteNotice}>
                                        <div className={EP.incompleteIcon}>
                                            <i className="bi bi-exclamation-triangle-fill"></i>
                                        </div>

                                        <div className={EP.incompleteContent}>
                                            <h4>
                                                <i className="bi bi-shield-exclamation"></i>
                                                Incomplete Patient Information
                                            </h4>
                                            <p>
                                                Some required patient information has not yet been provided.
                                                Please review the form and complete the missing fields.
                                            </p>
                                        </div>
                                        <i className={`bi bi-x ${EP.closeWarning}`} onClick={() => setActive(false)}></i>
                                    </div>
                                </>
                            ) : (
                                <>
                                </>
                            )
                        }

                        <br></br>


                        <>
                            {
                                active2 ?
                                    (
                                        <>
                                            <div className={EP.serverErrorNotice}>
                                                <div className={EP.serverErrorIcon}>
                                                    <i className="bi bi-server"></i>
                                                </div>

                                                <div className={EP.serverErrorContent}>
                                                    <h3>
                                                        <i className="bi bi-exclamation-triangle-fill"></i>
                                                        Server Error
                                                    </h3>
                                                    <p>
                                                        Unable to register patient at this time. The server could not
                                                        process your request.
                                                    </p>
                                                    <span>
                                                        <i className="bi bi-info-circle-fill"></i>
                                                        Please check your connection and try again. If the problem
                                                        continues, contact the system administrator.
                                                    </span>
                                                </div>
                                            </div>
                                        </>
                                    )
                                    :
                                    (
                                        <>


                                        </>
                                    )
                            }
                        </>

                        <>
                            {active1 ? (<>
                                <div className={EP.successNotice}>
                                    <div className={EP.successIcon}>
                                        <i className="bi bi-check-lg"></i>
                                    </div>

                                    <div className={EP.successContent}>
                                        <h3>
                                            <i className="bi bi-check-circle-fill"></i>
                                            Patient Details Updated
                                        </h3>
                                        <p>
                                            The patient's details has been successfully updated.
                                        </p>
                                        <span>
                                            <i className="bi bi-info-circle-fill"></i>
                                            All changes have been saved successfully.
                                        </span>
                                    </div>
                                </div></>)
                                :

                                (<></>)}
                        </>

                        <section className={EP.formFooter}>
                            <div className={EP.footerMessage}>
                                <i className="bi bi-pencil-square"></i>
                                <div>
                                    <strong>
                                        Editing patient information
                                    </strong>
                                    <span>
                                        Review all changes before saving.
                                    </span>
                                </div>
                            </div>


                            <div className={EP.footerActions}>
                                <button
                                    type='button'
                                    className={EP.cancelButton}
                                    onClick={handleCancel}
                                >
                                    {
                                        active6 ? (
                                            <>
                                                <i className="bi bi-arrow-left"></i>
                                                Go Back
                                            </>
                                        ) : (
                                            <>
                                                <i className="bi bi-x-circle"></i>
                                                Cancel
                                            </>
                                        )
                                    }
                                </button>

                                <button
                                    className={`${EP.saveButtonLarge} ${active5 ? EP.updateSuccess : ""}`}
                                    type='submit'
                                >
                                    {active3 ?
                                        (
                                            <>
                                                {active4 ? (
                                                    <span >
                                                        <i className="bi bi-check-lg"></i>
                                                        &nbsp; Changes Saved
                                                    </span>
                                                ) : (
                                                    <>
                                                        <p><span className={EP.spinnerBorder}></span></p>
                                                        Saving...
                                                    </>
                                                )}
                                            </>
                                        )
                                        :
                                        (<>
                                            <i className="bi bi-check2-circle"></i>
                                            Save Changes
                                        </>)
                                    }
                                </button>
                            </div>
                        </section>
                    </form>

                </>)}

            {active001 &&
                (
                    <>
                        <div className={EP.offlineOverlay}>
                            <div className={EP.offlineOverlayIcon}>
                                <i className="bi bi-wifi-off"></i>
                            </div>

                            <div className={EP.offlineOverlayContent}>
                                <strong>No Internet Connection</strong>
                                <span>Check your connection and try again.</span>
                            </div>

                            <button
                                className={EP.offlineOverlayClose}
                                onClick={() => setActive001(false)}
                                type="button"
                                aria-label="Close notification"
                            >
                                <i className="bi bi-x-lg"></i>
                            </button>
                        </div>

                    </>
                )
            }
        </main>
    );
}

export default Editpatient;
