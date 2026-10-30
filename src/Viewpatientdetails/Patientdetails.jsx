import axios from 'axios';
const API = import.meta.env.VITE_HOSTING_API;
import { useEffect, useState, useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import PD from './Patientdetails.module.css'
import { MyContext } from '../Mycontext';

function Patientdetails() {
    const [active, setActive] = useState(false);
    const [active1, setActive1] = useState(false);
    const navigateTo = useNavigate(-1)

    const { active100, setActive100, activeRR, setActiveRR } = useContext(MyContext)
    const [firstName, setFirstName] = useState("")
    const [middleName, setMiddleName] = useState("")
    const [lastName, setLastName] = useState("")
    const [dob, setDob] = useState("")
    const [age, setAge] = useState("")
    const [gender, setGender] = useState("")
    const [phone, setPhone] = useState("")
    const [email, setEmail] = useState("")
    const [address, setAddress] = useState("")
    const [emergencyName, setEmergencyName] = useState("")
    const [emergencyRelation, setEmergencyRelation] = useState("")
    const [emergencyPhone, setEmergencyPhone] = useState("")
    const [blood, setBlood] = useState("")
    const [marital, setMarital] = useState("")
    const [occupation, setOccupation] = useState("")
    const [nationality, setNationality] = useState("")
    const [idType, setIdType] = useState("")
    const [idNumber, setIdNumber] = useState("")
    const [registrationStatus, setRegistrationStatus] = useState("")
    const [isActive, setIsActive] = useState("")
    const [registrationDate, setRegistrationDate] = useState("")
    const [updated, setUpdated] = useState("")



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



    async function displayPatientInfo() {
        const id = localStorage.getItem("viewId");
        setActive(false)
        setActive1(false)

        try {
            const response = await axios.get(`${API}/patient/${id}/info`)
            const results = response.data;

            if (results.success === true) {
                setActive(true)
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
                setEmergencyName(results.patient.emergency_contact_name)
                setEmergencyRelation(results.patient.emergency_contact_relation)
                setEmergencyPhone(results.patient.emergency_contact_phone)
                setBlood(results.patient.blood)
                setMarital(results.patient.marital_status)
                setOccupation(results.patient.occupation)
                setNationality(results.patient.nationality)
                setIdType(results.patient.identification_type)
                setIdNumber(results.patient.identification_number)
                setRegistrationStatus(results.patient.registration_status)
                setRegistrationDate(results.patient.registration_date)
                setUpdated(results.patient.updated_at)
                console.log(results.patient.updated_at)
                setActive(true)
            } else {
                console.log(error.message)
                setActive(false)
                setActive1(true)

            }
        } catch (error) {
            console.log(error.message)
            setActive1(true)
            setActive(false)
        }
    }



    useEffect(() => {
        displayPatientInfo()
    }, [])


    useEffect(() => {
        displayPatientInfo()
    }, [activeRR])



    // function run1() {
    //     setTimeout(() => {

    //     }, 2000);
    //     run2()
    // }


    // function run2() {
    //     setTimeout(() => {

    //     }, 2000);
    //     run1()
    // }





    return (
        <>
            <main className={PD.patientFormPage}>
                <div className={PD.topBar}>
                    <Link
                        onClick={() => {
                            navigateTo(-1)
                        }}
                    >
                        <button
                            type="button"
                            className={PD.backButton}
                        >
                            <i className="bi bi-arrow-left"></i>
                            <span>Go Back</span>
                        </button>
                    </Link>

                    <div className={PD.formActions}>
                        <span className={PD.backButton} onClick={() => {
                            displayPatientInfo()
                            setActive100(true)
                            setTimeout(() => {
                                setActive100(false)
                            }, 2000);
                        }}>
                            <i className="bi bi-arrow-clockwise"></i>
                            Refresh
                        </span>
                        <span className={PD.viewOnlyBadge}>
                            <i className="bi bi-eye"></i>
                            View Only
                        </span>
                    </div>
                </div>

                {/* =====================================================
                    PAGE INTRO
                ===================================================== */}

                <section className={PD.pageIntro}>

                    <div className={PD.introIcon}>
                        <i className="bi bi-person-vcard"></i>
                    </div>

                    <div className={PD.introText}>

                        <div className={PD.introLabel}>
                            <i className="bi bi-hospital"></i>
                            PATIENT RECORD
                        </div>

                        <h1>
                            Patient Information
                        </h1>

                        <p>
                            Review the patient's registered information,
                            identification details, contact information,
                            emergency contact, and registration status.
                        </p>

                    </div>

                </section>


                {/* =====================================================
                    RECORD INFORMATION BANNER
                ===================================================== */}

                {active ?
                    (
                        <>
                            <section className={PD.statusBanner}>
                                <div className={PD.statusIcon}>
                                    <i className="bi bi-shield-check"></i>
                                </div>
                                <div className={PD.statusContent}>
                                    <strong>
                                        Patient record is available for viewing
                                    </strong>
                                    <span>
                                        This page displays the patient's saved information.
                                        Patient information on this page is read-only.
                                    </span>
                                </div>
                            </section>

                            {/* =====================================================
                    INFORMATION BOX
                ===================================================== */}

                            <section className={PD.infoBox}>

                                <div className={PD.infoBoxIcon}>
                                    <i className="bi bi-info-circle-fill"></i>
                                </div>

                                <div>

                                    <h3>
                                        Patient record information
                                    </h3>

                                    <p>
                                        <i className="bi bi-eye"></i>
                                        This page is for viewing the patient's registered
                                        information.
                                    </p>

                                    <p>
                                        <i className="bi bi-lock"></i>
                                        Patient information cannot be edited from this page.
                                    </p>

                                    <p>
                                        <i className="bi bi-folder2-open"></i>
                                        Medical records and other patient documents can be
                                        reviewed separately.
                                    </p>

                                </div>

                            </section>


                            <div className={PD.patientForm}>


                                {/* =================================================
                        SECTION 01 — BASIC INFORMATION
                    ================================================= */}

                                <section className={PD.formSection}>

                                    <div className={PD.sectionHeader}>

                                        <div className={PD.sectionNumber}>
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


                                    <div className={PD.fieldsGrid}>

                                        {/* FIRST NAME */}

                                        <div className={PD.inputGroup}>

                                            <label>
                                                <i className="bi bi-person"></i>
                                                First Name
                                            </label>

                                            <div className={PD.viewValue}>
                                                <i className="bi bi-person"></i>
                                                {firstName || "Not provided"}
                                            </div>

                                        </div>


                                        {/* MIDDLE NAME */}

                                        <div className={PD.inputGroup}>

                                            <label>
                                                <i className="bi bi-person"></i>
                                                Middle Name
                                            </label>

                                            <div className={PD.viewValue}>
                                                <i className="bi bi-person"></i>
                                                {middleName || "Not provided"}
                                            </div>

                                        </div>


                                        {/* LAST NAME */}

                                        <div className={PD.inputGroup}>

                                            <label>
                                                <i className="bi bi-person"></i>
                                                Last Name
                                            </label>

                                            <div className={PD.viewValue}>
                                                <i className="bi bi-person"></i>
                                                {lastName || "Not provided"}
                                            </div>

                                        </div>


                                        {/* AGE */}

                                        <div className={PD.inputGroup}>

                                            <label>
                                                <i className="bi bi-calendar3"></i>
                                                Age
                                            </label>

                                            <div className={PD.viewValue}>
                                                <i className="bi bi-person-badge"></i>
                                                {age || "Not provided"}
                                            </div>

                                        </div>


                                        {/* GENDER */}

                                        <div className={PD.inputGroup}>

                                            <label>
                                                <i className="bi bi-gender-ambiguous"></i>
                                                Gender
                                            </label>

                                            <div className={PD.viewValue}>
                                                <i className="bi bi-gender-ambiguous"></i>
                                                {gender || "Not provided"}
                                            </div>

                                        </div>


                                        {/* DATE OF BIRTH */}

                                        <div className={PD.inputGroup}>

                                            <label>
                                                <i className="bi bi-calendar-event"></i>
                                                Date of Birth
                                            </label>

                                            <div className={PD.viewValue}>
                                                <i className="bi bi-calendar-event"></i>
                                                {dob.split("T")[0] || "Not provided"}
                                            </div>

                                        </div>

                                    </div>

                                </section>


                                {/* =================================================
                        SECTION 02 — CONTACT INFORMATION
                    ================================================= */}

                                <section className={PD.formSection}>

                                    <div className={PD.sectionHeader}>

                                        <div className={PD.sectionNumber}>
                                            02
                                        </div>

                                        <div>

                                            <h2>
                                                Contact Information
                                            </h2>

                                            <p>
                                                Contact details provided for communication
                                                with the patient.
                                            </p>

                                        </div>

                                    </div>


                                    <div className={PD.fieldsGrid}>


                                        {/* PHONE */}

                                        <div className={PD.inputGroup}>

                                            <label>
                                                <i className="bi bi-telephone"></i>
                                                Phone Number
                                            </label>

                                            <div className={PD.viewValue}>
                                                <i className="bi bi-telephone"></i>
                                                {phone || "Not provided"}
                                            </div>

                                        </div>


                                        {/* EMAIL */}

                                        <div className={PD.inputGroup}>

                                            <label>
                                                <i className="bi bi-envelope"></i>
                                                Email Address
                                            </label>

                                            <div className={PD.viewValue}>
                                                <i className="bi bi-envelope"></i>
                                                {email || "Not provided"}
                                            </div>

                                        </div>


                                        {/* ADDRESS */}

                                        <div className={`${PD.inputGroup} ${PD.fullWidth}`}>

                                            <label>
                                                <i className="bi bi-geo-alt"></i>
                                                Residential Address
                                            </label>

                                            <div className={`${PD.viewValue} ${PD.largeValue}`}>
                                                <i className="bi bi-house"></i>
                                                {address || "Not provided"}
                                            </div>

                                        </div>

                                    </div>

                                </section>


                                {/* =================================================
                        SECTION 03 — EMERGENCY CONTACT
                    ================================================= */}

                                <section className={PD.formSection}>

                                    <div className={PD.sectionHeader}>

                                        <div className={PD.sectionNumber}>
                                            03
                                        </div>

                                        <div>

                                            <h2>
                                                Emergency Contact
                                            </h2>

                                            <p>
                                                Person to contact when the patient requires
                                                emergency assistance or notification.
                                            </p>

                                        </div>

                                    </div>


                                    <div className={PD.fieldsGrid}>


                                        {/* EMERGENCY NAME */}

                                        <div className={PD.inputGroup}>

                                            <label>
                                                <i className="bi bi-person-heart"></i>
                                                Contact Name
                                            </label>

                                            <div className={PD.viewValue}>
                                                <i className="bi bi-person-heart"></i>
                                                {emergencyName || "Not provided"}
                                            </div>

                                        </div>


                                        {/* EMERGENCY PHONE */}

                                        <div className={PD.inputGroup}>

                                            <label>
                                                <i className="bi bi-telephone-forward"></i>
                                                Contact Phone
                                            </label>

                                            <div className={PD.viewValue}>
                                                <i className="bi bi-telephone-forward"></i>
                                                {emergencyPhone || "Not provided"}
                                            </div>

                                        </div>


                                        {/* RELATIONSHIP */}

                                        <div className={PD.inputGroup}>

                                            <label>
                                                <i className="bi bi-people"></i>
                                                Relationship
                                            </label>

                                            <div className={PD.viewValue}>
                                                <i className="bi bi-people"></i>
                                                {emergencyRelation || "Not provided"}
                                            </div>

                                        </div>

                                    </div>

                                </section>


                                {/* =================================================
                        SECTION 04 — ADDITIONAL INFORMATION
                    ================================================= */}

                                <section className={PD.formSection}>

                                    <div className={PD.sectionHeader}>

                                        <div className={PD.sectionNumber}>
                                            04
                                        </div>

                                        <div>

                                            <h2>
                                                Additional Information
                                            </h2>

                                            <p>
                                                Additional personal information that may
                                                assist with patient identification and care.
                                            </p>

                                        </div>

                                    </div>


                                    <div className={PD.fieldsGrid}>


                                        {/* BLOOD GROUP */}

                                        <div className={PD.inputGroup}>

                                            <label>
                                                <i className="bi bi-droplet"></i>
                                                Blood Group
                                            </label>

                                            <div className={PD.viewValue}>
                                                <i className="bi bi-droplet"></i>
                                                {blood || "Not provided"}
                                            </div>

                                        </div>


                                        {/* MARITAL STATUS */}

                                        <div className={PD.inputGroup}>

                                            <label>
                                                <i className="bi bi-heart"></i>
                                                Marital Status
                                            </label>

                                            <div className={PD.viewValue}>
                                                <i className="bi bi-heart"></i>
                                                {marital || "Not provided"}
                                            </div>

                                        </div>


                                        {/* OCCUPATION */}

                                        <div className={PD.inputGroup}>

                                            <label>
                                                <i className="bi bi-briefcase"></i>
                                                Occupation
                                            </label>

                                            <div className={PD.viewValue}>
                                                <i className="bi bi-briefcase"></i>
                                                {occupation || "Not provided"}
                                            </div>

                                        </div>


                                        {/* NATIONALITY */}

                                        <div className={PD.inputGroup}>

                                            <label>
                                                <i className="bi bi-globe2"></i>
                                                Nationality
                                            </label>

                                            <div className={PD.viewValue}>
                                                <i className="bi bi-globe2"></i>
                                                {nationality || "Not provided"}
                                            </div>

                                        </div>

                                    </div>

                                </section>


                                {/* =================================================
                        SECTION 05 — IDENTIFICATION
                    ================================================= */}

                                <section className={PD.formSection}>

                                    <div className={PD.sectionHeader}>

                                        <div className={PD.sectionNumber}>
                                            05
                                        </div>

                                        <div>

                                            <h2>
                                                Identification
                                            </h2>

                                            <p>
                                                Identification information registered for
                                                the patient.
                                            </p>

                                        </div>

                                    </div>


                                    <div className={PD.fieldsGrid}>


                                        {/* ID TYPE */}

                                        <div className={PD.inputGroup}>

                                            <label>
                                                <i className="bi bi-card-text"></i>
                                                Identification Type
                                            </label>

                                            <div className={PD.viewValue}>
                                                <i className="bi bi-card-text"></i>
                                                {idType || "Not provided"}
                                            </div>

                                        </div>


                                        {/* ID NUMBER */}

                                        <div className={PD.inputGroup}>

                                            <label>
                                                <i className="bi bi-credit-card"></i>
                                                Identification Number
                                            </label>

                                            <div className={PD.viewValue}>
                                                <i className="bi bi-credit-card"></i>
                                                {idNumber || "Not provided"}
                                            </div>

                                        </div>

                                    </div>

                                </section>


                                {/* =================================================
                        SECTION 06 — RECORD STATUS
                    ================================================= */}

                                <section className={PD.formSection}>
                                    <div className={PD.sectionHeader}>
                                        <div className={PD.sectionNumber}>
                                            06
                                        </div>
                                        <div>
                                            <h2>
                                                Patient Record Status
                                            </h2>
                                            <p>
                                                Information about the patient's registration
                                                and current record status.
                                            </p>
                                        </div>
                                    </div>


                                    <div className={PD.fieldsGrid}>
                                        {/* FORMS COMPLETED */}
                                        <div className={PD.inputGroup}>
                                            <label>
                                                <i className="bi bi-clipboard-check"></i>
                                                Forms Completed
                                            </label>

                                            <div className={PD.viewValue}>
                                                {registrationStatus ?
                                                    (
                                                        <>
                                                            <i className="bi bi-check-lg"></i>
                                                            <p>Completed</p>
                                                        </>
                                                    ) : (
                                                        <>
                                                            <i className="bi bi-x-lg"></i>
                                                            <p>Not Completed</p>
                                                        </>
                                                    )
                                                }
                                            </div>

                                            <small>
                                                Indicates whether the patient's registration
                                                forms have been completed.
                                            </small>

                                        </div>


                                        {/* PATIENT STATUS */}

                                        <div className={PD.inputGroup}>

                                            <label>
                                                <i className="bi bi-person-check"></i>
                                                Patient Status
                                            </label>

                                            <div className={PD.viewValue}>
                                                <i className="bi bi-circle-half"></i>
                                                {isActive || "Not provided"}
                                            </div>

                                            <small>
                                                Shows whether the patient record is currently
                                                active or inactive.
                                            </small>

                                        </div>


                                        {/* REGISTRATION DATE */}

                                        <div className={PD.inputGroup}>

                                            <label>
                                                <i className="bi bi-calendar-plus"></i>
                                                Registration Date
                                            </label>

                                            <div className={PD.viewValue}>
                                                <i className="bi bi-calendar-event"></i>
                                                {registrationDate.split("T")[0] || "Not provided"}
                                            </div>

                                            <small>
                                                Date when the patient was first registered.
                                            </small>

                                        </div>


                                        {/* LAST UPDATED */}

                                        <div className={PD.inputGroup}>

                                            <label>
                                                <i className="bi bi-clock-history"></i>
                                                Last Updated
                                            </label>

                                            <div className={PD.viewValue}>
                                                <i className="bi bi-arrow-repeat"></i>
                                                {updated ? updated.split("T")[0] : "Not updated yet"}
                                            </div>

                                            <small>
                                                Most recent date associated with changes to
                                                the patient's information.
                                            </small>

                                        </div>

                                    </div>

                                </section>


                                {/* =================================================
                             PATIENT RECORD SUMMARY
                                ================================================= */}

                                <section className={PD.summarySection}>

                                    <div className={PD.summaryHeader}>

                                        <div className={PD.summaryIcon}>
                                            <i className="bi bi-clipboard2-data"></i>
                                        </div>

                                        <div>

                                            <h2>
                                                Patient Record Summary
                                            </h2>

                                            <p>
                                                Quick overview of the information available
                                                in this patient's profile.
                                            </p>

                                        </div>

                                    </div>


                                    <div className={PD.summaryGrid}>


                                        <div className={PD.summaryCard}>
                                            <i className="bi bi-person-vcard"></i>

                                            <div>
                                                <strong>
                                                    Personal Information
                                                </strong>

                                                <span>
                                                    {firstName[0].toUpperCase() + firstName.slice(1).toLowerCase(0)}  {lastName[0].toUpperCase() + lastName.slice(1).toLowerCase(0)}  - {gender} - {age} years - {dob.split("T")[0]}
                                                </span>
                                            </div>
                                        </div>


                                        <div className={PD.summaryCard}>
                                            <i className="bi bi-telephone"></i>

                                            <div>
                                                <strong>
                                                    Contact Details
                                                </strong>
                                                <span>
                                                    {phone} - {email} - {address}
                                                </span>
                                            </div>
                                        </div>

                                        <div className={PD.summaryCard}>
                                            <i className="bi bi-person-heart"></i>
                                            <div>
                                                <strong>
                                                    Emergency Contact

                                                </strong>
                                                <span>
                                                    {emergencyName} - {emergencyRelation} -  {emergencyPhone}
                                                </span>
                                            </div>
                                        </div>


                                        <div className={PD.summaryCard}>

                                            <i className="bi bi-card-text"></i>

                                            <div>

                                                <strong>
                                                    Identification
                                                </strong>

                                                <span>
                                                    {idType} - Card number: {idNumber}
                                                </span>

                                            </div>

                                        </div>

                                    </div>

                                </section>


                                {/* =================================================
                                     VIEW-ONLY NOTICE
                                  ==   ============================================== */}

                                <section className={PD.formFooter}>

                                    <div className={PD.footerMessage}>

                                        <i className="bi bi-shield-lock"></i>

                                        <div>

                                            <strong>
                                                View-only patient record
                                            </strong>

                                            <span>
                                                The information displayed on this page is
                                                available for review only.
                                            </span>
                                        </div>
                                    </div>

                                    <div className={PD.footerActions}>
                                        <Link
                                            onClick={() => {
                                                navigateTo(-1)
                                            }}
                                        >
                                            <button
                                                type="button"
                                                className={PD.cancelButton}
                                            >
                                                <i className="bi bi-arrow-left"></i>
                                                Go Back
                                            </button>
                                        </Link>
                                    </div>
                                </section>

                            </div>




                        </>
                    )
                    :
                    (
                        <>
                            {active1 ?
                                (<>


                                    <section className={PD.recordError}>

                                        <div className={PD.recordErrorIcon}>
                                            <i className="bi bi-server"></i>
                                        </div>

                                        <div className={PD.recordErrorContent}>

                                            <span className={PD.recordErrorLabel}>
                                                <i className="bi bi-exclamation-triangle"></i>
                                                <h3>
                                                    INTERNAL SERVER ERROR
                                                </h3>
                                            </span>

                                            <h2>
                                                <h5>
                                                    Unable to access patient credentials
                                                </h5>
                                            </h2>

                                            <p>
                                                We couldn't retrieve this patient's credentials from the
                                                server at the moment. An unexpected server error occurred
                                                while processing your request.
                                            </p>

                                            <p>
                                                Please try accessing the patient's credentials again.
                                                If the problem continues, contact the system administrator.
                                            </p>

                                            <div className={PD.recordErrorActions}>
                                                <Link to="/his/patients">
                                                    <button
                                                        type="button"
                                                        className={PD.errorBackButton}

                                                    >
                                                        <i className="bi bi-arrow-left"></i>
                                                        Back to Patients
                                                    </button>
                                                </Link>
                                            </div>
                                        </div>
                                    </section>
                                </>)
                                :
                                (<>
                                    <>

                                        <div className={PD.loadingOverlay}>
                                            <div className={PD.loadingBox}>
                                                <div className={PD.loadingSpinner}></div>

                                                <div className={PD.loadingText}>
                                                    <h3>Processing...</h3>
                                                    <p>Please wait while we complete your request.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </>
                                </>)}
                        </>

                    )
                }
                {/* {active1 && (
                  
                )} */}
                {/* =====================================================
                    PATIENT DETAILS
                ===================================================== */}
            </main >
        </>
    )
}

export default Patientdetails