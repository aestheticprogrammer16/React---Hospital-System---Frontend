import React, { useState, useEffect, useContext } from "react";
import { Hospitalsystemcontext } from "../UseContext/Usecontext";
import { useNavigate } from "react-router-dom";
import F from "./Patientforms.module.css";
import axios from 'axios'
const API = import.meta.env.VITE_HOSTING_API;

function Patientforms() {

    const [active, setActive] = useState(false);
    const [active1, setActive1] = useState(false);
    const [active2, setActive2] = useState(false);
    const [active3, setActive3] = useState(false);
    const [active4, setActive4] = useState(false);
    const [active5, setActive5] = useState(false);
    const [active6, setActive6] = useState(false);

    const [feedBack, setFeedBack] = useState("");
    const [feedBack1, setFeedBack1] = useState("");
    const [feedBack2, setFeedBack2] = useState("");

    const [firstName, setFirstName] = useState("");
    const [middleName, setMiddleName] = useState("");
    const [lastName, setLastName] = useState("");
    const [dob, setDob] = useState("");
    const [age, setAge] = useState(null);
    const [gender, setGender] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [address, setAddress] = useState("");
    const [isActive, setIsActive] = useState("");
    const [emergencyName, setEmergencyName] = useState("");
    const [emergencyRelation, setEmergencyRelation] = useState("");
    const [emergencyPhone, setEmergencyPhone] = useState("");
    const [blood, setBlood] = useState("");
    const [marital, setMarital] = useState("");
    const [occupation, setOccupation] = useState("");
    const [nationality, setNationality] = useState("");
    const [idType, setIdType] = useState("");
    const [idNumber, setIdNumber] = useState("");
    const [registrationStatus, setRegistrationStatus] = useState();
    const [registrationDate, setRegistrationDate] = useState("");
    const [updated, setUpdated] = useState("");

    useEffect(() => {
        let currentDate = new Date().toISOString().split("T")[0];
        setRegistrationDate(currentDate);
        setUpdated(currentDate);
    })




    const { refreshPatientFolders } = useContext(Hospitalsystemcontext);

    async function Submit(e) {
        e.preventDefault();
        console.log(registrationDate);
        console.log(updated);
        setActive6(false) /// off - patient already exists
        setActive3(false) // -off -patient egustere succesfllut message
        setActive(true); // spining - on
        setActive4(false) //Finished - Requiring fields - off
        // alert(`clicked`) 

        firstName.trim(),
            middleName.trim(),
            lastName.trim(),
            dob.trim(),
            gender.trim(),
            phone.trim(),
            email.trim(),
            address.trim(),
            isActive.trim(),
            emergencyName.trim(),
            emergencyRelation.trim(),
            emergencyPhone.trim(),
            blood.trim(),
            marital.trim(),
            occupation.trim(),
            nationality.trim(),
            idType.trim(),
            registrationDate.trim(),
            updated.trim();

        if (
            firstName.trim() === "" ||
            lastName.trim() === "" ||
            age.trim() === "" ||
            gender.trim() === "" ||
            dob.trim() === "" ||
            phone.trim() === "" ||
            address.trim() === "" ||
            marital.trim() === "" ||
            registrationStatus === ""
        ) {
            setActive(false); // spining - off
            return setActive4(true)
        }


        try {
            const response = await axios.post(`${API}/patient/add-new-patient`, {
                firstName: firstName,
                middleName: middleName,
                lastName: lastName,
                dob: dob,
                age: age,
                gender: gender,
                phone: phone,
                email: email,
                address: address,
                isActive: isActive,
                emergencyName: emergencyName,
                emergencyRelation: emergencyRelation,
                emergencyPhone: emergencyPhone,
                blood: blood,
                marital: marital,
                occupation: occupation,
                nationality: nationality,
                idType: idType,
                idNumber: idNumber,
                registrationStatus: registrationStatus,
                registrationDate: registrationDate,
                updated: updated
            });

            const results = response.data;
            console.log(`ss`)
            // alert(`DD`)
            if (results.success === true && results.forms === true) {
                // alert("aa")
                setActive5(true); //registered ✅
                setActive3(true)
                setActive2(true)
                setActive3(true)
                return setActive4(true)
            } else if (results.success === true && results.forms === false) {
                return setActive6(true)
            }
            else if (results.success === false && results.forms === false) {
                setActive(false)  // spinning off
                return setActive4(true)
            } else if (results.success === false && results.forms === true) {
                setActive(false)  // spinning off
                return setActive1(true) //Server error
            } else if (results.success === false && results.forms === null) {
                setActive(false)  // spinning off
                return setActive1(true) //Server error
            }
        } catch {
            setActive(false)  // spinning off
            return setActive1(true) //Server error

        } finally {
            setActive(false)  // spinning off
            setTimeout(() => {
                setActive1(false)
            }, 2500);
            setTimeout(() => {
                setActive(false)
            }, 5000);
        }
    }

    // const navigate = useNavigate();




    const [isEditing, setIsEditing] = useState(true);
    const [saved, setSaved] = useState(true);



    function goBack() {
        window.history.back();
    }

    return (
        <main className={F.patientFormPage}>

            <div className={F.topBar}>
                <button
                    type="button"
                    className={F.backButton}
                    onClick={goBack}
                >
                    <i className="bi bi-arrow-left"></i>
                    <span>Back to Patients</span>
                </button>

                <div className={F.formActions}>
                    {!isEditing && (
                        <button
                            type="button"
                            className={F.editButton}
                            onClick={handleEdit}
                        >
                            <i className="bi bi-pencil-square"></i>
                            Edit Patient
                        </button>
                    )}
                </div>
            </div>

            <section className={F.pageIntro}>
                <div className={F.introIcon}>
                    <i className="bi bi-person-vcard"></i>
                </div>

                <div className={F.introText}>
                    <div className={F.introLabel}>
                        <i className="bi bi-hospital" ></i>
                        PATIENT REGISTRATION
                    </div>
                    <h1>
                        {isEditing
                            ? "Patient Information"
                            : "Patient Details"}
                    </h1>

                    <p>
                        {isEditing
                            ? "Enter the patient's information below. You can save the form and continue completing it later."
                            : "Review the patient's saved information. Select edit if you need to make changes."
                        }
                    </p>
                </div>
            </section>



            <section className={F.infoBox}>
                <div className={F.infoBoxIcon}>
                    <i className="bi bi-info-circle-fill"></i>
                </div>

                <div>
                    <h3>Important information</h3>

                    <p>
                        Fields marked with
                        &nbsp; <span className={F.requiredMark}>*</span>&nbsp;
                        are required.
                    </p>

                    <p>
                        If you do not have all the patient's information,
                        you can save the form and complete it later.
                    </p>

                    <p>
                        Please make sure the patient's information is
                        accurate before saving.
                    </p>
                </div>
            </section>

            <form
                id="patientForm"
                className={F.patientForm}
                onSubmit={Submit}
            >

                <section className={F.formSection}>
                    <div className={F.sectionHeader}>
                        <div className={F.sectionNumber}>01</div>
                        <div>
                            <h2>Patient Information</h2>
                            <p>
                                Basic information used to identify the patient.
                            </p>
                        </div>
                    </div>

                    <div className={F.fieldsGrid}>
                        <div className={F.inputGroup}>
                            <label htmlFor="firstName">
                                <i className="bi bi-person"></i>
                                First Name
                                <span className={F.requiredMark}>*</span>
                            </label>

                            <div className={F.inputWrapper}>
                                <i className="bi bi-person"></i>
                                <input
                                    type="text"
                                    id="firstName"
                                    value={firstName}
                                    onChange={(e) => setFirstName(e.target.value)}
                                    placeholder="Enter first name"
                                    required

                                />
                            </div>
                        </div>

                        <div className={F.inputGroup}>
                            <label htmlFor="middleName">
                                <i className="bi bi-person"></i>
                                Middle Name
                            </label>

                            <div className={F.inputWrapper}>
                                <i className="bi bi-person"></i>
                                <input
                                    type="text"
                                    id="middleName"
                                    value={middleName}
                                    onChange={(e) => setMiddleName(e.target.value)}
                                    placeholder="Enter middle name"

                                />
                            </div>
                        </div>

                        <div className={F.inputGroup}>
                            <label htmlFor="lastName">
                                <i className="bi bi-person"></i>
                                Last Name
                                <span className={F.requiredMark}>*</span>
                            </label>

                            <div className={F.inputWrapper}>
                                <i className="bi bi-person"></i>

                                <input
                                    type="text"
                                    id="lastName"
                                    value={lastName}
                                    onChange={(e) => setLastName(e.target.value)}
                                    placeholder="Enter last name"
                                    required
                                />
                            </div>
                        </div>

                        <div className={F.inputGroup}>
                            <label htmlFor="age">
                                <i className="bi bi-calendar3"></i>
                                Age
                                <span className={F.requiredMark}>*</span>
                            </label>

                            <div className={F.inputWrapper}>
                                <i className="bi bi-person"></i>
                                <input
                                    type="number"
                                    id="age"
                                    value={age}
                                    onChange={(e) => setAge(e.target.value)}
                                    required
                                />
                            </div>
                        </div>


                        <div className={F.inputGroup}>
                            <label htmlFor="gender">
                                <i className="bi bi-gender-ambiguous"></i>
                                Gender
                                <span className={F.requiredMark}>*</span>
                            </label>

                            <div className={F.inputWrapper}>
                                <i className="bi bi-gender-ambiguous"></i>
                                <select
                                    id="gender"
                                    required
                                    value={gender}
                                    onChange={(e) => setGender(e.target.value)}
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


                        <div className={F.inputGroup}>
                            <label htmlFor="dateOfBirth">
                                <i className="bi bi-calendar3"></i>
                                Date of Birth
                                <span className={F.requiredMark}>*</span>
                            </label>

                            <div className={F.inputWrapper}>
                                <i className="bi bi-calendar-event"></i>
                                <input
                                    type="date"
                                    id="dateOfBirth"
                                    value={dob}
                                    onChange={(e) => setDob(e.target.value)}
                                    required

                                />
                            </div>
                        </div>
                    </div>
                </section>

                <section className={F.formSection}>
                    <div className={F.sectionHeader}>
                        <div className={F.sectionNumber}>02</div>

                        <div>
                            <h2>Contact Information</h2>
                            <p>
                                How the hospital can contact the patient.
                            </p>
                        </div>
                    </div>

                    <div className={F.fieldsGrid}>

                        <div className={F.inputGroup}>
                            <label htmlFor="phone">
                                <i className="bi bi-telephone"></i>
                                Phone Number
                                <span className={F.requiredMark}>*</span>
                            </label>

                            <div className={F.inputWrapper}>
                                <i className="bi bi-telephone"></i>

                                <input
                                    type="number"
                                    id="phone"
                                    placeholder="e.g. 0240030600"
                                    value={phone}
                                    onChange={(e) => setPhone(e.target.value)}
                                    required
                                />
                            </div>
                        </div>

                        <div className={F.inputGroup}>
                            <label htmlFor="email">
                                <i className="bi bi-envelope"></i>

                                Email Address
                            </label>

                            <div className={F.inputWrapper}>
                                <i className="bi bi-envelope"></i>

                                <input
                                    type="email"
                                    id="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="patient@example.com"
                                />
                            </div>
                        </div>

                        <div className={`${F.inputGroup} ${F.fullWidth}`}>
                            <label htmlFor="address">
                                <i className="bi bi-geo-alt"></i>
                                Address
                                <span className={F.requiredMark}>*</span>
                            </label>

                            <div
                                className={`${F.inputWrapper} ${F.textareaWrapper}`}
                            >
                                <i className="bi bi-house"></i>
                                <textarea
                                    id="address"
                                    value={address}
                                    onChange={(e) => setAddress(e.target.value)}
                                    placeholder="Enter patient's residential address"
                                    rows="1"
                                    required

                                ></textarea>
                            </div>
                        </div>
                    </div>
                </section>


                <section className={F.formSection}>
                    <div className={F.sectionHeader}>
                        <div className={F.sectionNumber}>03</div>
                        <div>
                            <h2>Emergency Contact</h2>
                            <p>
                                Someone the hospital can contact in an emergency.
                            </p>
                        </div>
                    </div>

                    <div className={F.fieldsGrid}>
                        <div className={F.inputGroup}>
                            <label htmlFor="emergencyContactName">
                                <i className="bi bi-person-heart"></i>
                                Contact Name
                            </label>

                            <div className={F.inputWrapper}>
                                <i className="bi bi-person-heart"></i>

                                <input
                                    type="text"
                                    id="emergencyContactName"
                                    value={emergencyName}
                                    onChange={(e) => setEmergencyName(e.target.value)}
                                    placeholder="Enter emergency contact"

                                />
                            </div>
                        </div>

                        <div className={F.inputGroup}>
                            <label htmlFor="emergencyContactPhone">
                                <i className="bi bi-telephone-forward"></i>
                                Contact Phone
                            </label>

                            <div className={F.inputWrapper}>
                                <i className="bi bi-telephone-forward"></i>

                                <input
                                    type="tel"
                                    id="emergencyContactPhone"
                                    value={emergencyPhone}
                                    onChange={(e) => setEmergencyPhone(e.target.value)}
                                    placeholder="Enter contact number"

                                />
                            </div>
                        </div>

                        <div className={F.inputGroup}>
                            <label htmlFor="emergencyContactRelation">
                                <i className="bi bi-people"></i>
                                Relationship
                            </label>

                            <div className={F.inputWrapper}>
                                <i className="bi bi-people"></i>

                                <select
                                    id="emergencyContactRelation"
                                    value={emergencyRelation}
                                    onChange={(e) => setEmergencyRelation(e.target.value)}
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

                <section className={F.formSection}>
                    <div className={F.sectionHeader}>
                        <div className={F.sectionNumber}>04</div>
                        <div>
                            <h2>Additional Information</h2>
                            <p>
                                Additional details that may help identify or
                                understand the patient.
                            </p>
                        </div>
                    </div>

                    <div className={F.fieldsGrid}>
                        <div className={F.inputGroup}>
                            <label htmlFor="bloodGroup">
                                <i className="bi bi-droplet"></i>
                                Blood Group
                            </label>
                            <div className={F.inputWrapper}>
                                <i className="bi bi-droplet"></i>
                                <select
                                    id="bloodGroup"
                                    value={blood}
                                    onChange={(e) => setBlood(e.target.value)}
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

                        <div className={F.inputGroup}>
                            <label htmlFor="maritalStatus">
                                <i className="bi bi-heart"></i>
                                Marital Status
                                <span className={F.requiredMark}>*</span>
                            </label>

                            <div className={F.inputWrapper}>
                                <i className="bi bi-heart"></i>

                                <select
                                    id="maritalStatus"
                                    value={marital}
                                    required
                                    onChange={(e) => setMarital(e.target.value)}
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
                                    <option value="Domestic Partnership">Domestic Partnership</option>
                                    <option value="Other">Other</option>
                                    <option value="Prefer Not to Say">Prefer Not to Say</option>
                                </select>
                            </div>
                        </div>

                        <div className={F.inputGroup}>
                            <label htmlFor="occupation">
                                <i className="bi bi-briefcase"></i>
                                Occupation
                            </label>

                            <div className={F.inputWrapper}>
                                <i className="bi bi-briefcase"></i>

                                <input
                                    type="text"
                                    id="occupation"
                                    placeholder="Enter occupation"
                                    value={occupation}
                                    onChange={(e) => setOccupation(e.target.value)}

                                />
                            </div>
                        </div>

                        <div className={F.inputGroup}>
                            <label htmlFor="nationality">
                                <i className="bi bi-globe2"></i>
                                Nationality
                            </label>

                            <div className={F.inputWrapper}>
                                <i className="bi bi-globe2"></i>

                                <input
                                    type="text"
                                    id="nationality"
                                    value={nationality}
                                    onChange={(e) => setNationality(e.target.value)}
                                    placeholder="e.g. Ghanaian"

                                />
                            </div>
                        </div>
                    </div>
                </section>

                <section className={F.formSection}>
                    <div className={F.sectionHeader}>
                        <div className={F.sectionNumber}>05</div>

                        <div>
                            <h2>Identification</h2>
                            <p>
                                Optional identification information for the patient.
                            </p>
                        </div>
                    </div>

                    <div className={F.fieldsGrid}>
                        <div className={F.inputGroup}>
                            <label htmlFor="identificationType">
                                <i className="bi bi-card-text"></i>
                                Identification Type
                            </label>
                            <div className={F.inputWrapper}>
                                <i className="bi bi-card-text"></i>
                                <select
                                    id="identificationType"
                                    value={idType}
                                    onChange={(e) => setIdType(e.target.value)}
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

                        <div className={F.inputGroup}>
                            <label htmlFor="identificationNumber">
                                <i className="bi bi-credit-card"></i>
                                Identification Number
                            </label>

                            <div className={F.inputWrapper}>
                                <i className="bi bi-credit-card"></i>

                                <input
                                    type="text"
                                    id="identificationNumber"
                                    value={idNumber}
                                    onChange={(e) => setIdNumber(e.target.value)}
                                    placeholder="Enter identification number"

                                />
                            </div>
                        </div>
                    </div>
                </section>
                {/* =====================================================
                    PATIENT RECORD STATUS
                    ===================================================== */}

                <section className={F.formSection}>


                    <div className={F.fieldsGrid}>

                        {/* STATUS */}

                        <div className={F.inputGroup}>
                            <label htmlFor="status">
                                <i className="bi bi-clipboard-check"></i>
                                Forms Completed
                                <span className={F.requiredMark}>*</span>
                            </label>

                            <div className={F.inputWrapper}>
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

                        <div className={F.inputGroup}>
                            <label htmlFor="status">
                                <i className="bi bi-clipboard-check"></i>
                                Patient Status
                            </label>

                            <div className={F.inputWrapper}>
                                <i className="bi bi-circle-half"></i>

                                <select
                                    id="status"
                                    value={isActive}
                                    onChange={(e) => setIsActive(e.target.value)}
                                    required
                                >
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


                        {/* REGISTRATION DATE */}

                        <div className={F.inputGroup}>
                            <label htmlFor="registrationDate">
                                <i className="bi bi-calendar-plus"></i>
                                Registration Date
                            </label>

                            <div className={F.inputWrapper}>
                                <i className="bi bi-calendar-event"></i>
                                <input
                                    type="text"
                                    id="registrationDate"
                                    value={registrationDate}
                                    onChange={(e) => setRegistrationDate(e.target.value)}
                                    disabled
                                    readOnly
                                />
                            </div>

                            <small>
                                The date when this patient was first registered.
                            </small>
                        </div>

                        {/* LAST UPDATED */}
                        <div className={F.inputGroup}>
                            <label htmlFor="updatedAt">
                                <i className="bi bi-clock-history"></i>
                                Last Updated
                            </label>
                            <div className={F.inputWrapper}>
                                <i className="bi bi-arrow-repeat"></i>
                                <input
                                    type="text"
                                    id="updatedAt"
                                    value={updated}
                                    onChange={(e) => setUpdated(e.target.value)}
                                    disabled
                                    readOnly
                                />
                            </div>
                            <small>
                                Automatically records the most recent change made to this patient.
                            </small>
                        </div>
                    </div>
                </section>
                {active3 ?
                    (
                        <>
                            <p className={F.successMessage}>
                                <i className="bi bi-check-circle-fill"></i>
                                Patient successfully registered. The patient's information has been
                                saved securely and is now available in the patient records.
                            </p>
                        </>
                    )
                    :
                    (
                        <>
                            {active4 ?
                                (
                                    <>
                                        <p className={`${F.successMessage} ${F.red}`}>
                                            <i className="bi bi-exclamation-triangle-fill"></i>
                                            Some required information is missing. Please complete all fields marked
                                            with an asterisk (*) to continue registering the patient.
                                        </p>
                                    </>
                                )
                                :
                                (
                                    <>
                                    </>
                                )
                            }

                        </>
                    )}

                <>
                    {
                        active6 ?
                            (
                                <><div className={F.patientExistsWarningBox}>
                                    <div className={F.patientExistsWarningIcon}>
                                        <i className="bi bi-exclamation-triangle-fill"></i>
                                    </div>

                                    <div className={F.patientExistsWarningContent}>
                                        <h4>
                                            <i className="bi bi-person-exclamation"></i>
                                            Patient Already Exists
                                        </h4>

                                        <p>
                                            A patient with the number you entered is
                                            already registered in the system. Please verify
                                            the patient number and ensure that you are not
                                            creating a duplicate patient record. If this is
                                            an existing patient, kindly search for their
                                            record and update it instead of registering them again.
                                        </p>
                                    </div>
                                </div>
                                </>
                            ) :
                            (
                                <>

                                </>
                            )
                    }
                </>

                <section className={F.formFooter}>
                    <div className={F.footerMessage}>
                        <i className="bi bi-shield-check"></i>
                        <div>
                            <strong>Patient information</strong>
                            <span>
                                Make sure the information is accurate before saving.
                            </span>
                        </div>
                    </div>

                    <div className={F.footerActions}>
                        <button
                            type="button"
                            className={F.cancelButton}
                            onClick={goBack}
                        >
                            <i className="bi bi-x-circle"></i>
                            Cancel
                        </button>

                        <button
                            className={`${F.saveButtonLarge} ${active ? F.green : ""}`}
                        >
                            {
                                active ?
                                    (
                                        <>
                                            {
                                                active5 ?
                                                    (
                                                        <>
                                                            <i className="bi bi-check-lg"></i>
                                                            Patient Registered
                                                        </>
                                                    )
                                                    :
                                                    (
                                                        <>
                                                            <p><i className="bi bi-arrow-repeat qwer"></i></p>
                                                            Saving Patient...
                                                        </>
                                                    )
                                            }
                                        </>
                                    )
                                    :
                                    (
                                        <>
                                            <i className="bi bi-person-plus"></i>
                                            Save Patient
                                        </>

                                    )
                            }
                        </button>
                    </div>
                </section>
            </form>
            {active1 ? (
                <div className={F.saveErrorOverlay}>
                    <div className={F.saveErrorBox}>

                        <div className={F.saveErrorIcon}>
                            <i className="bi bi-exclamation-triangle-fill"></i>
                        </div>

                        <div className={F.saveErrorContent}>
                            <h3>Server Error</h3>
                            <p>
                                Unable to register patient
                            </p>
                        </div>

                    </div>
                </div>
            ) : null}
        </main>
    );
}

export default Patientforms;