import { useState, useEffect, useRef, useContext } from "react";
import S from "./Settings.module.css";
import { Helmet } from 'react-helmet-async'
import axios from "axios";
import { MyContext } from "../Mycontext";

const API = import.meta.env.VITE_HOSTING_API;

function Settings() {
    const { fetchSettingsOne } = useContext(MyContext)
    const inputFocus = useRef()
    const fileInputRef = useRef(null);
    const [active, setActive] = useState(false)
    const [active1, setActive1] = useState(true)
    const [active2, setActive2] = useState(false)
    const [active3, setActive3] = useState(false)
    const [active4, setActive4] = useState(false)
    const [active5, setActive5] = useState(false)
    const [active6, setActive6] = useState(false)
    const [active7, setActive7] = useState(false)
    const [active8, setActive8] = useState(false)
    const [active9, setActive9] = useState(false)
    const [active10, setActive10] = useState(false)
    const [active11, setActive11] = useState(false)
    const [active12, setActive12] = useState(false)
    const [active13, setActive13] = useState(false)
    const [active14, setActive14] = useState(false)
    const [active15, setActive15] = useState(false)
    const [active16, setActive16] = useState(false)
    const [active17, setActive17] = useState(false)
    const [active18, setActive18] = useState(false)
    const [active19, setActive19] = useState(false)
    const [active20, setActive20] = useState(false)
    const [active21, setActive21] = useState(false)
    const [active22, setActive22] = useState(false)
    const [active23, setActive23] = useState(false)
    const [active24, setActive24] = useState(false)
    const [active25, setActive25] = useState(false)


    const [allUsers, setAllUsers] = useState([])
    const [filterUsers, setFilterUsers] = useState([])

    const [usersDetails, setUsersDetails] = useState("")

    function closeoverlay() {
        setActive18(false)
        setActive19(false)
    }



    // function emptyUserInputs() {
    //     setUserFirstName("");
    //     setUserSecondName("");
    //     setUserEmail("");
    //     setUserPhoneNumber("");
    //     setUserPassword("");
    //     setUserConfirmPassword("");
    //     setInputType("password");
    //     setUserRole("");
    //     setUserStatus("");
    // }
    // function emptyUserInput1() {
    //     setUserFirstName1("")
    //     setUserSecondName1("")
    //     setUserEmail1("")
    //     setUserPhoneNumber1("")
    //     setUserRole1("")
    //     setUserRole1("")
    //     setUserStatus1("")
    // }

    const [feedBack, setFeedBack] = useState("")
    const [feedBack1, setFeedBack1] = useState("")
    let [userFirstName, setUserFirstName] = useState("");
    let [userSecondName, setUserSecondName] = useState("");
    let [userEmail, setUserEmail] = useState("");
    let [userPhoneNumber, setUserPhoneNumber] = useState("");
    let [userPassword, setUserPassword] = useState("");
    let [userConfirmPassowrd, setUserConfirmPassword] = useState("");
    let [inputType, setInputType] = useState("password");
    let [userRole, setUserRole] = useState("");
    let [userStatus, setUserStatus] = useState("");



    let [userFirstName2, setUserFirstName2] = useState("");
    let [userSecondName2, setUserSecondName2] = useState("");
    let [userEmail2, setUserEmail2] = useState("");
    let [userPhoneNumber2, setUserPhoneNumber2] = useState("");
    let [userRole2, setUserRole2] = useState("");
    let [userStatus2, setUserStatus2] = useState("");
    let [userPassword2, setUserPassword2] = useState("");
    let [userConfirmPassword2, setUserConfirmPassword2] = useState("");


    const [userFirstName1, setUserFirstName1] = useState("");
    const [userSecondName1, setUserSecondName1] = useState("");
    const [userEmail1, setUserEmail1] = useState("");
    const [userPhoneNumber1, setUserPhoneNumber1] = useState("");
    const [userRole1, setUserRole1] = useState("");
    const [userStatus1, setUserStatus1] = useState("");



    const [eyeIcon, setEyeIcon] = useState("bi bi-eye-slash")

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [activateInput, setActivateInput] = useState(!false)
    const [logo, setLogo] = useState("")


    const [hospitalName, setHospitalName] = useState("");
    const [hospitalType, setHospitalType] = useState("private");
    const [yearEstablished, setYearEstablished] = useState("");
    const [tel, setTel] = useState("");
    const [alternativeTel, setAlternativeTel] = useState("");
    const [hospitalEmail, setHospitalEmail] = useState("");
    const [hospitalAddress, setHospitalAddress] = useState("");
    const [town, setTown] = useState("");
    const [region, setRegion] = useState("");
    const [country, setCountry] = useState("");
    const [reportHeader, setReportHeader] = useState("");
    const [reportFooter, setReportFooter] = useState("");
    const [reportAddress, setReportAddress] = useState("");
    const [websiteDomain, setWebsiteDomain] = useState("")

    const [hospitalLogoUrl, setHospitalLogoUrl] = useState("");



    function inputChangeType() {
        // alert(`HI`)
        if (inputType === "password") {
            setInputType("text")
            setEyeIcon("bi bi-eye-slash")
        } else {
            setInputType("password")
            setEyeIcon("bi bi-eye")
        }
    }



    function LogoHandler(e) {
        const file = e.target.files[0]
        setLogo(file)
        console.log(e.target.files[0])
    }


    function focusInput() {
        inputFocus.current.focus()
    }

    function editMode() {
        setActive6(true)
        setActivateInput(false);
        focusInput()
        setActive7(true)
    }

    function OffEditMode() {
        setActive6(false)
        setActive7(false)
        setActivateInput(true);
    }

    useEffect(() => {
        fetchAllUsers()
    }, [])



    function filtering(value) {
        const e = value.trim()
        if (!e) {
            return setAllUsers(filterUsers)
        }

        const results = filterUsers.filter((fu) => {
            return (fu.full_name.split(" ")[0]).toLowerCase().includes(e.toLowerCase()) || (fu.full_name.split(" ")[1]).toLowerCase().includes(e.toLowerCase())
        })
        console.log(results)
        setAllUsers(results)

    }




    async function fetchUserCredentials(id) {
        setFeedBack("")
        setActive24(false)
        setActive25(false)
        const token = localStorage.getItem("token")
        try {
            const response = await axios.get(`${API}/login/UserCredentials/${id}`,
                {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }

            )
            const results = response.data;
            if (results.success === true) {
                setActive21(true)
                setUserFirstName2(results.users.full_name.trim().split(" ")[0]);
                setUserSecondName2(results.users.full_name.trim().split(" ")[1]);
                setUserEmail2(results.users.email);
                setUserPhoneNumber2(results.users.telephone);
                setUserRole2(results.users.role);
                setUserStatus2(results.users.status);
                setUserPassword2(results.users.password);
                setUserConfirmPassword2(results.users.password);
            } else {
                setActive20(true)
                setActive21(false)
                setActive22(false)
                console.log(results.message)

            }
        } catch (error) {
            setActive21(false)
            setActive22(false)
            console.log(error.message)
            if (error.response?.status === 401) {
                setActive12(true)
            } else {
                setActive20(true)
            }
        }
    }

    async function submitUserEdit(e) {
        e.preventDefault()
        setActive23(true)
        const id = localStorage.getItem("editUserId")
        const token = localStorage.getItem("token")

        try {
            const response = await axios.put(`${API}/login/editUserCredentials/${id}`,
                {
                    userFirstName2: userFirstName2,
                    userSecondName2: userSecondName2,
                    userEmail2: userEmail2,
                    userRole2: userRole2,
                    userPhoneNumber2: userPhoneNumber2,
                    userPassword2: userPassword2,
                    userStatus2: userStatus2,
                    userPassword2: userPassword2
                },
                {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }

            )

            const results = response.data;

            if (results.success === true) {
                setActive24(false)
                setActive25(true)
                setActive24(true)
                setActive23(false)
                setFeedBack('Credentials has been updated successfully')
                fetchAllUsers()


            } else {
                // setActive23(false)
                // setActive24(true)
                // setFeedBack(results.message)

            }
        } catch (error) {
            setActive24(true)
            setActive23(false)
            console.log(error.message)
            console.log(error.name)
            if (error.response?.status === 401) {
                setActive12(true)
            } else {
                setFeedBack("Server error: Please try again later")
            }

        }
    }



    async function fetchAllUsers() {
        try {
            const response = await axios.get(`${API}/login/fetchUsers`)
            const results = response.data;
            if (results.success === true && !results.empty) {
                setAllUsers(results.users)
                setFilterUsers(results.users)
                console.log(results.users[0])

            } else if (results.success === true && results.empty) {
                setAllUsers([])

            } else {
                setActive20(true)
            }
        } catch (error) {
            setActive20(true)
            console.log(error.message)
        }
    }

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

    async function viewUsersDetails(id) {

        setUserFirstName1("")
        setUserSecondName1("")
        setUserEmail1("")
        setUserPhoneNumber1("")
        setUserRole1("")
        setUserStatus1("")
        const token = localStorage.getItem("token")

        try {
            const response = await axios.get(`${API}/login/users/${id}`,
                {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }
            )
            const results = response.data
            if (results.success === true) {
                setActive18(true)
                setActive19(false)
                console.log(results.users)
                setUserFirstName1(results.users.full_name.split(" ")[0])
                setUserSecondName1(results.users.full_name.split(" ")[1])
                setUserEmail1(results.users.email)
                setUserPhoneNumber1(results.users.telephone)
                setUserRole1(results.users.role)
                setUserStatus1(results.users.status)
            } else {
                setActive20(true)
                setActive18(false)
                setActive19(false)
            }

        } catch (error) {
            setActive18(false)
            setActive19(false)
            if (error.response?.status === 401) {
                setActive12(true)
            } else {
                setActive20(true)
            }
        }
    }

    function closeAddNewUserOverlay() {
        setFeedBack1("")
        setActive16(false)
        setActive15(false)
        setActive(false)
        setUserFirstName("")
        setUserSecondName("")
        setUserEmail("")
        setUserPhoneNumber("")
        setUserPassword("")
        setUserConfirmPassword("")
        setUserRole("")
        setUserStatus("")
    }
    async function SubmitNewUser(e) {
        e.preventDefault()
        setActive(true)
        setFeedBack("")
        setFeedBack1("")
        setActive16(false)
        setActive17(false)



        userFirstName = userFirstName.trim()
        userSecondName = userSecondName.trim()
        userEmail = userEmail.trim()
        userRole = userRole.trim()
        userPhoneNumber = userPhoneNumber.trim()
        userStatus = userStatus.trim()
        userPassword = userPassword.trim()
        // let userConfirmPassword = userConfirmPassowrd.trim()

        if (userPassword.length < 8) {
            setActive16(true)
            setActive(false)
            return setFeedBack1("Password should not be less than 8 characters")
        }

        if (userPassword !== userConfirmPassowrd) {
            setActive16(true)
            setActive(false)
            return setFeedBack1("Passwords do not match")
        }


        if (
            !userFirstName?.trim() ||
            !userSecondName?.trim() ||
            !userEmail?.trim() ||
            !userRole ||
            !userPhoneNumber?.trim() ||
            !userStatus ||
            !userPassword
        ) {
            return setFeedBack1("Complete the forms")
        }

        if (userPassword !== userConfirmPassowrd) {
            setActive16(true)
            return setFeedBack1("Passwords do no match")
        }

        try {

            const response = await axios.post(`${API}/login/registerUser`,
                {
                    userFirstName: userFirstName,
                    userSecondName: userSecondName,
                    userEmail: userEmail,
                    userRole: userRole,
                    userPhoneNumber: userPhoneNumber,
                    userStatus: userStatus,
                    userPassword: userPassword
                }
            )

            const results = response.data
            if (results.success === true) {
                setActive17(true)
                setActive(false)
                fetchAllUsers()
                setFeedBack1("This new user was successfully registered")
                setActive16(true)
            } else {
                setFeedBack1(results.message)
                setActive(false)
                setActive16(true)
            }

        } catch (error) {
            setActive(false)
            setActive16(true)
            setFeedBack1("Server error ⚠️ : Please try again later")
            console.log(error.message)
        }

    }







    async function submitLogo() {
        setActive10(false)
        setActive13(false)
        const formData = new FormData()
        formData.append("hospitalLogo", logo)

        try {
            const response = await axios.put(`${API}/login/upload-logo`, formData)

            const results = response.data;
            if (results.success === true && !results.server) {
                setActive13(true)
            } else if (results.success === false && !results.server) {
                console.log(results.message)
            } else {
                setActive10(true)
                throw new Error
            }

        } catch (error) {
            console.log(error.message)
            setActive10(true)
            throw error;
        }
    }

    async function Submitedit() {
        setActive10(false)
        await submitLogo()
        const token = localStorage.getItem("token")
        setActive8(true)
        setActive11(false)

        try {
            const response = await axios.put(`${API}/login/updatehospitalsettings`,
                {
                    hospitalName: hospitalName,
                    hospitalType: hospitalType,
                    yearEstablished: yearEstablished,
                    tel: tel,
                    alternativeTel: alternativeTel,
                    hospitalEmail: hospitalEmail,
                    hospitalAddress: hospitalAddress,
                    town: town,
                    region: region,
                    country: country,
                    reportHeader: reportHeader,
                    reportFooter: reportFooter,
                    reportAddress: reportAddress,
                    websiteDomain: websiteDomain
                },
                {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }

            )
            const results = response.data;

            if (results.success === true) {
                setActive8(false)
                setActive9(true)
                setActive10(false)
                setActive11(true)

                setTimeout(() => {
                    setActive6(false)
                    setActive7(false)
                    setActivateInput(true);
                }, 800);
                fetchSettingsOne()
            }
            else {
                setActive10(true)
                setActive8(false)
                setActive11(false)
            }
        } catch (error) {
            setActive8(false)
            setActive11(false)
            console.log(error.message)
            if (error.response?.status === 401) {
                setActive12(true)
            } else {
                setActive10(true)
            }
        }
    }


    async function fetchSettings() {
        try {
            const response = await axios.get(`${API}/login/fetchsettings`)
            const results = response.data;
            if (results.success === true) {
                const settings = results.settings;
                setHospitalName(settings.hospital_name);
                setHospitalType(settings.hospital_type);
                console.log(settings.hospitalType)
                setYearEstablished(settings.year_established);
                setTel(settings.tel);
                setAlternativeTel(settings.alternative_tel);
                setHospitalEmail(settings.hospital_email);
                setHospitalAddress(settings.hospital_address);
                setTown(settings.town);
                setRegion(settings.region);
                setCountry(settings.country);
                setReportHeader(settings.report_header);
                setReportFooter(settings.report_footer);
                setReportAddress(settings.report_address);
                setHospitalLogoUrl(settings.hospital_logo_url);
                setWebsiteDomain(settings.hospital_domain)
                console.log(settings.hospital_logo_url)

            } else {
                setActive20(true)
                console.log(results.message)
            }
        } catch (error) {

            setActive20(true)
            console.log(error.message)
            setActive14(true)
        }
    }

    useEffect(() => {
        fetchSettings()
    }, [])



    async function submitCredentials(e) {
        setActive1(true)
        setActive2(false)
        setActive3(false)
        setActive4(false)
        setActive5(true)
        e.preventDefault()

        try {
            const response = await axios.post(`${API}/login/mastercredentials`,
                {
                    email: email,
                    password: password
                }
            )

            const results = response.data

            if (results.success === true && results.complete === true) {
                setActive5(false)
                setActive1(false)
                localStorage.setItem("token", results.token)
            } else if (results.success === true && results.complete === false) {
                setActive5(false)
                setActive2(true)

            }
            else if (results.success === false && results.complete === true) {
                setActive5(false)
                setActive3(true)

            } else {
                setActive5(false)
                setActive4(true)
            }

        } catch (error) {
            setActive5(false)
            setActive4(true)
            console.log(error.message)
        }
    }


    return (
        <div className={S.settingsPage}>
            <Helmet>
                <title>
                    Settings || ⚙️
                </title>
            </Helmet>

            {/* =====================================================
                PAGE HEADER
            ===================================================== */}
            <div>
                <br className={S.b1}></br>
                <br className={S.b2}></br>
                <br className={S.b3}></br>
                <br className={S.b4}></br>
                <br className={S.b5}></br>
            </div>

            <div className={S.pageHeader}>
                <div className={S.headerContent}>
                    <div className={S.headerIcon}>
                        <i className="bi bi-gear"></i>
                    </div>

                    <div>
                        <span className={S.headerLabel}>
                            ADMINISTRATIONss
                        </span>
                        <h1 onClick={fetchSettingsOne}>Settings</h1>
                        <p>
                            Manage hospital information, staff accounts,
                            profile details and system preferences.
                        </p>
                    </div>
                </div>
            </div>

            {/* =====================================================
                SETTINGS NAVIGATION
            ===================================================== */}
            <div className={S.settingsNavigation}>

                <button className={`${S.settingsNavItem} ${S.active}`}>
                    <i className="bi bi-building"></i>
                    <span>Hospital Information</span>
                </button>

                <button className={S.settingsNavItem}>
                    <a href="#usersandstaffs" className={S.settingsNavItem} style={{ textDecoration: "none" }}>

                        <i className="bi bi-people"></i>
                        <span>Users & Staff</span>
                    </a>
                </button>
            </div>


            {/* =====================================================
                HOSPITAL INFORMATION
            ===================================================== */}

            {active6 ? (

                <div className={S.editModeActiveControl}>
                    <div className={S.editModeActiveIcon}>
                        <i className="bi bi-pencil-fill"></i>
                    </div>

                    <div className={S.editModeActiveText}>
                        <strong>Editing Enabled</strong>
                        <span>Hospital information is now editable. Changes can be made to the available fields.</span>
                    </div>

                    <div className={S.activeIndicator}>
                        <span></span>
                        EDITING
                    </div>

                    <button
                        type="button"
                        className={S.doneEditingButton}
                        onClick={OffEditMode}
                    >
                        {active11 ? (
                            <>
                                <i className="bi bi-power"></i>
                                Turn Off Editing
                            </>
                        ) : (
                            <>
                                <i className="bi bi-x-lg"></i>
                                Cancel
                            </>
                        )}
                    </button>
                </div>
            ) : (
                <div className={S.editModeControl}>
                    <div className={S.editModeInfo}>
                        <div className={S.editModeIcon}>
                            <i className="bi bi-pencil-square"></i>
                        </div>

                        <div>
                            <strong>Editing Disabled</strong>
                            <span>Hospital information is currently read-only. Enable editing to make changes.</span>
                        </div>
                    </div>

                    <button
                        type="button"
                        className={S.editModeButton}
                        onClick={editMode}

                    >
                        <i className="bi bi-pencil"></i>
                        Enable Editing
                    </button>
                </div>
            )}



            <section className={S.settingsSection}>

                <div className={S.sectionHeader}>

                    <div>
                        <span >HOSPITAL PROFILE</span>
                        <h2>Hospital Information</h2>

                        <p>
                            These details are used throughout the hospital
                            system and on printed medical reports.
                        </p>
                    </div>

                    <div className={S.sectionIcon}>
                        <i className="bi bi-hospital"></i>
                    </div>

                </div>


                {/* Hospital Identity */}

                <div className={S.settingsCard}>

                    <div className={S.cardTitle}>
                        <div>
                            <h3>Hospital Identity</h3>

                            <p>
                                Basic information that identifies the hospital.
                            </p>
                        </div>

                        <i className="bi bi-building"></i>
                    </div>


                    <div className={S.formGrid}>

                        <div className={S.formGroup}>
                            <label>Hospital Name</label>

                            <input
                                type="text"
                                value={hospitalName}
                                onChange={(e) => setHospitalName(e.target.value)}
                                readOnly={activateInput}
                                ref={inputFocus}
                                placeholder="Enter hospital name"
                            />
                        </div>

                        <div className={S.formGroup}>
                            <label>Hospital Type</label>

                            <select value={hospitalType} onChange={(e) => setHospitalType(e.target.value)}
                                disabled={activateInput} >
                                <option value="">Select hospital type</option>
                                <option value="Private Hospital">Private Hospital</option>
                                <option value="Public Hospital">Public Hospital</option>
                                <option value="Medical Centre">Medical Centre</option>
                                <option value="Clinic">Clinic</option>
                            </select>
                        </div>


                        <div className={S.formGroup}>
                            <label>Year Established</label>

                            <input
                                type="number"
                                value={yearEstablished}
                                readOnly={activateInput}
                                onChange={(e) => setYearEstablished(e.target.value)}
                                placeholder="e.g. 2020"
                            />
                        </div>

                    </div>

                </div>


                {/* Contact Information */}

                <div className={S.settingsCard}>

                    <div className={S.cardTitle}>
                        <div>
                            <h3>Contact Information</h3>
                            <p>
                                Contact details displayed to patients and on
                                hospital documents.
                            </p>
                        </div>

                        <i className="bi bi-telephone"></i>
                    </div>


                    <div className={S.formGrid}>

                        <div className={S.formGroup}>
                            <label>Phone Number</label>

                            <input
                                type="tel"
                                value={tel}
                                onChange={(e) => setTel(e.target.value)}
                                readOnly={activateInput}
                                placeholder="+233 XX XXX XXXX"
                            />
                        </div>


                        <div className={S.formGroup}>
                            <label>Alternative Phone</label>

                            <input
                                type="tel"
                                value={alternativeTel}
                                onChange={(e) => setAlternativeTel(e.target.value)}
                                readOnly={activateInput}
                                placeholder="Alternative contact number"
                            />
                        </div>


                        <div className={S.formGroup}>
                            <label>Email Address</label>

                            <input
                                type="email"
                                value={hospitalEmail}
                                onChange={(e) => setHospitalEmail(e.target.value)}
                                readOnly={activateInput}
                                placeholder="hospital@example.com"
                            />
                        </div>


                        <div className={S.formGroup}>
                            <label>Website</label>

                            <input
                                type="url"
                                value={websiteDomain}
                                onChange={(e) => setWebsiteDomain(e.target.value)}
                                readOnly={activateInput}
                                placeholder="https://example.com"
                            />
                        </div>
                    </div>
                </div>


                {/* Address */}

                <div className={S.settingsCard}>

                    <div className={S.cardTitle}>
                        <div>
                            <h3>Hospital Address</h3>
                            <p>
                                The physical location of the hospital.
                            </p>
                        </div>

                        <i className="bi bi-geo-alt"></i>
                    </div>


                    <div className={S.formGrid}>

                        <div className={S.formGroup}>
                            <label>Address</label>

                            <input
                                type="text"
                                value={hospitalAddress}
                                onChange={(e) => setHospitalAddress(e.target.value)}
                                readOnly={activateInput}
                                placeholder="Street / house address"
                            />
                        </div>


                        <div className={S.formGroup}>
                            <label>City / Town</label>

                            <input
                                type="text"
                                value={town}
                                readOnly={activateInput}
                                placeholder="Enter city or town"
                            />
                        </div>


                        <div className={S.formGroup}>
                            <label>Region</label>

                            <input
                                type="text"
                                value={region}
                                onChange={(e) => setRegion(e.target.value)}
                                readOnly={activateInput}
                                placeholder="Enter region"
                            />
                        </div>

                        <div className={S.formGroup}>
                            <label>Country</label>
                            <input
                                type="text"
                                value={country}
                                onChange={(e) => setCountry(e.target.value)}
                                readOnly={activateInput}
                                placeholder="Enter country"
                            />
                        </div>

                    </div>
                </div>


                {/* Report Information */}

                <div className={S.settingsCard}>

                    <div className={S.cardTitle}>
                        <div>
                            <h3>Medical Report Information</h3>
                            <p>
                                Information that appears on generated
                                medical reports.
                            </p>
                        </div>

                        <i className="bi bi-file-earmark-medical"></i>
                    </div>


                    <div className={S.formGrid}>

                        <div className={S.formGroup}>
                            <label>Report Header</label>

                            <textarea
                                type="text"
                                value={reportHeader}
                                onChange={(e) => setReportAddress(e.target.value)}
                                readOnly={activateInput}
                                placeholder="Hospital name / report heading"
                            />
                        </div>


                        <div className={S.formGroup}>
                            <label>Report Footer</label>

                            <textarea
                                type="text"
                                value={reportFooter}
                                onChange={(e) => setReportFooter(e.target.value)}
                                readOnly={activateInput}
                                placeholder="Confidential medical document"
                            />
                        </div>

                        <div className={`${S.formGroup} ${S.fullWidth}`}>
                            <label>Report Address</label>

                            <textarea
                                rows="3"
                                value={reportAddress}
                                onChange={(e) => setReportAddress(e.target.value)}
                                readOnly={activateInput}
                                placeholder="Address displayed on medical reports"
                            ></textarea>
                        </div>

                    </div>

                </div>


                {/* Hospital Logo */}
                <div className={S.settingsCard}>

                    <div className={S.cardTitle}>
                        <div>
                            <h3>Hospital Logo</h3>
                            <p>
                                Upload the logo that will appear on hospital reports and documents.
                            </p>
                        </div>

                        <i className="bi bi-image"></i>
                    </div>

                    <div className={S.logoUploadArea}>

                        <div className={S.logoPreview}>
                            {logo ? (
                                <img
                                    src={URL.createObjectURL(logo)}
                                    alt="Hospital Logo"
                                    className={S.displayImage}
                                />
                            ) : hospitalLogoUrl ? (<>
                                <img src={`${API}/${hospitalLogoUrl}`}
                                    alt="Hospital Logo"
                                    className={S.displayImage}
                                />
                            </>) : (
                                <i className={`bi bi-hospital ${S.logoPlaceholder}`}></i>
                            )}
                        </div>

                        <div className={S.logoUploadInfo}>


                            <div className={S.logoUploadText}>
                                <strong>Hospital Logo</strong>

                                <span>
                                    Choose a clear image to use as your hospital logo.
                                </span>

                                <small>
                                    Recommended size: 300 × 300px
                                </small>
                            </div>

                            <input
                                type="file"
                                accept="image/*"
                                className={S.imageInput}
                                ref={fileInputRef}
                                onChange={LogoHandler}
                                required
                            />
                            {active13 && (<small style={{ color: "rgba(13, 0, 255, 0.87)" }}>Logo uploaded <i className="bi bi-check2"   ></i></small>)}
                            <small></small>
                            <div className={S.logoActions}>
                                <button
                                    type="button"
                                    className={S.uploadLogoButton}
                                    onClick={() => {
                                        fileInputRef.current.click();
                                    }}
                                    disabled={activateInput}
                                    style={{
                                        cursor: activateInput ? "no-drop" : "",
                                        opacity: activateInput ? "0.4" : ""
                                        //  cursor: "no-drop", opacity: 0.4 
                                    }}
                                >
                                    <i className="bi bi-upload"></i>
                                    Choose Logo
                                </button>
                            </div>
                        </div>
                    </div>
                </div>


                {/* Save Hospital Information */}

                <div className={S.saveArea}>

                    <div>
                        <i className="bi bi-info-circle"></i>

                        <span>
                            Hospital information will be used throughout
                            the system and on medical reports.
                        </span>
                    </div>

                    <button className={`${S.saveButton} ${S.savebutton1}`} id="usersandstaffs"
                        onClick={Submitedit}
                        disabled={!active7}
                    >
                        {active8 ? (
                            <>
                                <span className={S.saveButtonSpinner}></span>
                                Saving...
                            </>
                        ) : active9 ? (
                            <>
                                <i className="bi bi-check-circle-fill"></i>
                                Saved Successfully
                            </>
                        ) : (
                            <>
                                <i className="bi bi-check2"></i>
                                Save Hospital Information
                            </>
                        )}
                    </button>

                </div>
                {active10 && (
                    <>
                        <div className={S.hospitalSaveErrorAlert}>
                            <div className={S.hospitalSaveErrorIcon}>
                                <i className="bi bi-exclamation-triangle-fill"></i>
                            </div>

                            <div className={S.hospitalSaveErrorContent}>
                                <strong>Server error, unable to save changes</strong>
                                <span>
                                    The hospital information could not be updated at this time.
                                    Please try again later.
                                </span>
                            </div>

                            <button
                                type="button"
                                className={S.hospitalSaveErrorClose}
                                onClick={() => setActive10(false)}
                                aria-label="Close error message"
                            >
                                <i className="bi bi-x"></i>
                            </button>
                        </div>

                    </>
                )}
            </section>



            {/* =====================================================
                USERS & STAFF
            ===================================================== */}

            <section className={S.settingsSection}>

                <div className={S.sectionHeader}>

                    <div >
                        <span>STAFF MANAGEMENT</span>

                        <h2>Users & Staff</h2>

                        <p>
                            Manage doctors, nurses and other authorized
                            hospital users.
                        </p>
                    </div>

                    <div className={S.sectionIcon}>
                        <i className="bi bi-people"></i>
                    </div>

                </div>


                {/* User Actions */}

                <div className={S.userToolbar}>

                    <div className={S.userSearch}>
                        <i className="bi bi-search"></i>

                        <input
                            type="text"
                            onChange={(e) => filtering(e.target.value)}
                            placeholder="Search users by name or email..."
                        />
                    </div>


                    <div className={S.userFilters}>

                        <select>
                            <option>All Roles</option>
                            <option>Admin</option>
                            <option>Doctor</option>
                            <option>Nurse</option>
                        </select>

                        <select>
                            <option>All Status</option>
                            <option>Active</option>
                            <option>Inactive</option>
                        </select>

                    </div>


                    <button className={S.addUserButton}
                        onClick={() => {
                            setActive15(true);
                        }}>

                        <>
                            <i className="bi bi-person-plus"></i>
                            Add User
                        </>
                    </button>

                </div>


                {/* Users Table */}

                <div className={S.usersTableCard}>

                    <div className={S.tableHeader}>

                        <div>
                            <h3>Hospital Users</h3>

                            <p>
                                Authorized people who can access the system.
                            </p>
                        </div>

                        <span className={S.userCount}>
                            {`${allUsers.length} Users` || "No user exist"}
                        </span>

                    </div>

                    <div className={S.tableWrapper}>

                        {allUsers.length > 0 ? (<>
                            <table>
                                <thead>
                                    <tr>
                                        <th>User</th>
                                        <th>Role</th>
                                        <th>Phone</th>
                                        <th>Status</th>
                                        <th>Last Login</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                {allUsers.map((au) => (<>

                                    <tr>
                                        <td>
                                            <div className={S.userCell}>
                                                <div className={S.userAvatar}>
                                                    {/* <i className="bi bi-person"></i> */}
                                                    {`${au.full_name[0]}${au.full_name.split(" ")[1][0]}`}
                                                </div>
                                                <div>
                                                    <strong>{au.full_name}</strong>
                                                    <span>
                                                        {au.email}
                                                    </span>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            <span className={`${S.roleBadge} ${S.doctor}`}>
                                                {au.role}
                                            </span>
                                        </td>
                                        <td>{au.telephone}</td>

                                        <td>

                                            <span className={`${S.statusBadge} 
                                        ${S.activeStatus}`}
                                                style={{ color: `${au.status === "active" || au.status === "Active" ? "blue" : "red"}` }}>
                                                <i className="bi bi-circle-fill"></i>
                                                {au.status}
                                            </span>
                                        </td>

                                        <td>{dateName(au.last_login) || "Never logged in"}</td>
                                        <td>
                                            <div className={S.tableActions}>
                                                <button title="Edit User" onClick={() => {
                                                    setActive22(true);
                                                    localStorage.setItem("editUserId", au.id)
                                                    fetchUserCredentials(au.id)
                                                }}
                                                >
                                                    <i className="bi bi-pencil"></i>
                                                </button>
                                                &nbsp;&nbsp;
                                                <button title="View User" onClick={() => {
                                                    setActive19(true)
                                                    viewUsersDetails(au.id);
                                                }}>
                                                    <i className="bi bi-eye"></i>
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                </>))}

                            </table>
                        </>) : (<>
                            <div className={S.noUsers}>
                                <i className="bi bi-people"></i>
                                <h3>No Users Yet</h3>
                                <p>
                                    There are no users to display at the moment.
                                    New users will appear here once they have been added.
                                </p>
                            </div>
                        </>)}

                    </div>
                </div>
            </section >

            {/* =====================================================
                BOTTOM NOTE
            ===================================================== */}

            < div className={S.settingsNotice} >

                <i className="bi bi-shield-check"></i>

                <div>
                    <strong>Administrator Settings</strong>

                    <p>
                        Changes made here can affect hospital information,
                        user access and generated medical documents.
                    </p>
                </div>

            </div >
            {active1 && (
                <>

                    <div className={S.passwordOverlay}>

                        <div className={S.passwordBox}>

                            <div className={S.passwordIcon}>
                                <i className="bi bi-shield-lock"></i>
                            </div>

                            <h2>Settings Protected</h2>

                            <p>
                                Enter your administrator credentials to continue.
                            </p>

                            <form onSubmit={submitCredentials}>
                                {/* <form > */}

                                <div className={S.passwordInput}>
                                    <i className="bi bi-envelope"></i>

                                    <input
                                        type="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        placeholder="Enter email"
                                    />
                                </div>

                                <div className={S.passwordInput}>
                                    <i className="bi bi-lock"></i>

                                    <input
                                        type="password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        placeholder="Enter password"
                                    />
                                </div>

                                {active2 ? (
                                    <span className={S.passwordError}>
                                        <i className="bi bi-exclamation-circle"></i>

                                        <span>
                                            Incorrect email or password. Please try again.
                                        </span>
                                    </span>
                                )
                                    :
                                    (
                                        <>
                                        </>
                                    )}

                                {active3 ? (
                                    <span className={S.passwordError}>
                                        <i className="bi bi-shield-exclamation"></i>
                                        <span>
                                            The credentials entered are not valid. Please try again.
                                        </span>
                                    </span>
                                )
                                    :
                                    (
                                        <>
                                        </>
                                    )}

                                {active4 ? (
                                    <span className={S.passwordError}>
                                        <i className="bi bi-exclamation-triangle"></i>
                                        <span>
                                            Something went wrong on the server. Please try again.
                                        </span>
                                    </span>
                                )
                                    :
                                    (
                                        <>
                                        </>
                                    )}

                                <button
                                    type="submit"
                                    className={S.continueButton}
                                    onClick={submitCredentials}
                                    disable={active5}
                                >
                                    {active5 ? (
                                        <>
                                            <span className={S.buttonSpinner}></span>
                                            Verifying...
                                        </>
                                    ) : (
                                        <>
                                            <i className="bi bi-arrow-right"></i>
                                            Continue
                                        </>
                                    )}
                                </button>

                            </form>

                            <button
                                type="button"
                                className={S.backButton}
                                onClick={(e) => { window.history.back() }}
                            >
                                <i className="bi bi-arrow-left"></i>
                                Go Back
                            </button>
                        </div>
                    </div>
                </>
            )
            }


            {
                active12 && (
                    <div className={S.securityOverlay}>
                        <div className={S.securityOverlayBox}>

                            <button
                                className={S.securityOverlayClose}
                                onClick={() => setActive12(false)}
                            >
                                <i className="bi bi-x-lg"></i>
                            </button>

                            <div className={S.securityOverlayIcon}>
                                <i className="bi bi-shield-lock"></i>
                            </div>

                            <div className={S.securityOverlayContent}>
                                <h3>Access Denied</h3>

                                <p>
                                    You do not have permission to perform this action.
                                </p>
                            </div>

                            <button
                                className={S.securityOverlayButton}
                                onClick={() => setActive12(false)}
                            >
                                <i className="bi bi-check2"></i>
                                Okay
                            </button>

                        </div>
                    </div>
                )
            }

            {
                active15 && (
                    <div className={S.addUserOverlay}>
                        <div className={S.addUserModal}>

                            {/* Header */}
                            <div className={S.addUserHeader}>
                                <div className={S.addUserTitleArea}>
                                    <div className={S.addUserMainIcon}>
                                        <i className="bi bi-person-plus"></i>
                                    </div>

                                    <div>
                                        <h3>Add New User</h3>
                                        <p>Create a user account for your HMS</p>
                                    </div>
                                </div>

                                <i
                                    className={`bi bi-x-lg ${S.addUserClose}`}
                                    onClick={() => closeAddNewUserOverlay()}
                                ></i>
                            </div>

                            {/* Form */}
                            <form
                                className={S.addUserForm}
                                onSubmit={SubmitNewUser}
                            >

                                {/* First Name and Second Name */}
                                <div className={S.addUserRow}>
                                    <div className={S.addUserField}>
                                        <label>
                                            <i className="bi bi-person"></i>
                                            First Name
                                        </label>

                                        <div className={S.addUserInput}>
                                            <i className="bi bi-person"></i>
                                            <input
                                                type="text"
                                                required
                                                autoComplete="given-name"
                                                placeholder="Enter first name"
                                                value={userFirstName}
                                                onChange={(e) => setUserFirstName(e.target.value)}
                                            />
                                        </div>
                                    </div>

                                    <div className={S.addUserField}>
                                        <label>
                                            <i className="bi bi-person"></i>
                                            Second Name
                                        </label>

                                        <div className={S.addUserInput}>
                                            <i className="bi bi-person"></i>
                                            <input
                                                type="text"
                                                required
                                                autoComplete="family-name"
                                                placeholder="Enter second name"
                                                value={userSecondName}
                                                onChange={(e) => setUserSecondName(e.target.value)}
                                            />
                                        </div>
                                    </div>
                                </div>

                                {/* Email and Phone */}
                                <div className={S.addUserRow}>
                                    <div className={S.addUserField}>
                                        <label>
                                            <i className="bi bi-envelope"></i>
                                            Email Address
                                        </label>

                                        <div className={S.addUserInput}>
                                            <i className="bi bi-envelope"></i>
                                            <input
                                                type="email"
                                                required
                                                autoComplete="email"
                                                placeholder="Enter email address"
                                                value={userEmail}
                                                onChange={(e) => setUserEmail(e.target.value)}
                                            />
                                        </div>
                                    </div>

                                    <div className={S.addUserField}>
                                        <label>
                                            <i className="bi bi-telephone"></i>
                                            Phone Number
                                        </label>

                                        <div className={S.addUserInput}>
                                            <i className="bi bi-telephone"></i>
                                            <input
                                                type="tel"
                                                required
                                                autoComplete="tel"
                                                placeholder="Enter phone number"
                                                value={userPhoneNumber}
                                                onChange={(e) => setUserPhoneNumber(e.target.value)}
                                            />
                                        </div>
                                    </div>
                                </div>

                                {/* Password */}
                                <div className={S.addUserField}>

                                    <label>
                                        <i className="bi bi-lock"></i>
                                        Password
                                    </label>

                                    <div className={S.addUserInput}>
                                        <i className="bi bi-key"></i>
                                        <input
                                            type={inputType}
                                            required
                                            autoComplete="new-password"
                                            placeholder="Set password"
                                            value={userPassword}
                                            onChange={(e) => setUserPassword(e.target.value)}
                                        />
                                        <i className={`${eyeIcon} ${S.addUserPasswordToggle}`} onClick={inputChangeType}></i>
                                    </div>
                                </div>

                                {/* Confirm Password */}
                                <div className={S.addUserField}>
                                    <label>
                                        <i className="bi bi-lock"></i>
                                        Confirm Password
                                    </label>

                                    <div className={S.addUserInput}>
                                        <i className="bi bi-key"></i>
                                        <input
                                            type={inputType}
                                            required
                                            autoComplete="new-password"
                                            placeholder="Confirm password"
                                            value={userConfirmPassowrd}
                                            onChange={(e) => setUserConfirmPassword(e.target.value)}
                                        />
                                        <i className={`${eyeIcon} ${S.addUserPasswordToggle}`} onClick={inputChangeType}></i>
                                    </div>
                                </div>

                                {/* Role and Status */}
                                <div className={S.addUserRow}>
                                    <div className={S.addUserField}>
                                        <label>
                                            <i className="bi bi-person-badge"></i>
                                            Role
                                        </label>

                                        <div className={S.addUserInput}>
                                            <i className="bi bi-person-badge"></i>

                                            <select
                                                required
                                                id="role"
                                                value={userRole}
                                                onChange={(e) => setUserRole(e.target.value)}
                                            >
                                                <option value="" >Select role</option>
                                                <option value="Admin">Admin</option>
                                                <option value="Doctor">Doctor</option>
                                                <option value="Nurse">Nurse</option>
                                            </select>
                                            <i className="bi bi-caret-down-fill">
                                            </i>
                                        </div>
                                    </div>

                                    <div className={S.addUserField}>
                                        <label>
                                            <i className="bi bi-circle-half"></i>
                                            Status
                                        </label>

                                        <div className={S.addUserInput}>
                                            <i className="bi bi-circle-half"></i>

                                            <select
                                                required
                                                value={userStatus}
                                                onChange={(e) => setUserStatus(e.target.value)}
                                            >
                                                <option value="">Select status</option>
                                                <option value="Active">Active</option>
                                                <option value="Inactive">Inactive</option>
                                            </select>
                                            <i className="bi bi-caret-down-fill"></i>
                                        </div>
                                    </div>
                                </div>

                                <br></br>
                                {/* Information */}
                                <div className={S.addUserInfo}>
                                    <i className="bi bi-info-circle"></i>
                                    <span>
                                        The user will be able to access the HMS based on
                                        the role assigned to them.
                                    </span>
                                </div>

                                {/* Feedback */}

                                {active16 && (<>
                                    <div className={S.addUserFeedback}>
                                        <i className="bi bi-info-circle"></i>
                                        <p>{feedBack1}</p>
                                    </div>
                                </>)}

                                {/* Actions */}
                                <div className={S.addUserActions}>
                                    <button
                                        type="button"
                                        className={S.addUserCancel}
                                        onClick={() => closeAddNewUserOverlay()}
                                    >
                                        {active17 ? (<>
                                            <i className="bi bi-arrow-left"></i>
                                            Go Back</>)
                                            :
                                            (<>
                                                <i className="bi bi-x-circle"></i>
                                                Cancel
                                            </>)}
                                    </button>

                                    <button
                                        className={S.addUserSubmit}
                                    >
                                        {active ? (
                                            <>
                                                <span className={S.spinner}></span>
                                                Processing...
                                            </>
                                        ) : (
                                            <>
                                                <i className="bi bi-person-plus"></i>
                                                Add User
                                            </>
                                        )}

                                    </button>
                                </div>
                            </form>
                        </div>
                    </div >
                )
            }


            {
                active18 ? (
                    <>
                        <div className={S.viewCredentialsOverlay}>
                            <div className={S.viewCredentialsModal}>

                                {/* Header */}
                                <div className={S.viewCredentialsHeader}>
                                    <div className={S.viewCredentialsTitleArea}>
                                        <div className={S.viewCredentialsMainIcon}>
                                            <i className="bi bi-person-vcard"></i>
                                        </div>

                                        <div>
                                            <h3>User Credentials</h3>
                                            <p>View account information and access details</p>
                                        </div>
                                    </div>

                                    <i
                                        className={`bi bi-x-lg ${S.viewCredentialsClose}`}
                                        onClick={() => { closeoverlay() }}
                                    ></i>
                                </div>

                                {/* User Information */}
                                <div className={S.viewCredentialsSection}>
                                    <div className={S.viewCredentialsSectionTitle}>
                                        <i className="bi bi-person-circle"></i>
                                        <span>Personal Information</span>
                                    </div>

                                    <div className={S.viewCredentialsGrid}>
                                        <div className={S.viewCredentialsField}>
                                            <label>First Name</label>
                                            <div className={S.viewCredentialsValue}>
                                                {userFirstName1}
                                            </div>
                                        </div>

                                        <div className={S.viewCredentialsField}>
                                            <label>Second Name</label>
                                            <div className={S.viewCredentialsValue}>
                                                {userSecondName1}
                                            </div>
                                        </div>

                                        <div className={S.viewCredentialsField}>
                                            <label>Email Address</label>
                                            <div className={S.viewCredentialsValue}>
                                                {userEmail1}
                                            </div>
                                        </div>

                                        <div className={S.viewCredentialsField}>
                                            <label>Phone Number</label>
                                            <div className={S.viewCredentialsValue}>
                                                {userPhoneNumber1}
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Account Information */}
                                <div className={S.viewCredentialsSection}>
                                    <div className={S.viewCredentialsSectionTitle}>
                                        <i className="bi bi-shield-check"></i>
                                        <span>Account Information</span>
                                    </div>

                                    <div className={S.viewCredentialsGrid}>
                                        <div className={S.viewCredentialsField}>
                                            <label>Assigned Role</label>
                                            <div className={S.viewCredentialsValue}>
                                                <span className={S.viewCredentialsRole}>
                                                    <i className="bi bi-person-badge"></i>
                                                    {userRole1}
                                                </span>
                                            </div>
                                        </div>

                                        <div className={S.viewCredentialsField}>
                                            <label>Account Status</label>
                                            <div className={S.viewCredentialsValue}>
                                                <span className={S.viewCredentialsStatus}>

                                                    <span className={S.viewCredentialsStatusDot}></span>
                                                    {userStatus1}
                                                </span>
                                            </div>
                                        </div>

                                    </div>
                                </div>

                                {/* Security Information */}
                                <div className={S.viewCredentialsSecurity}>
                                    <i className="bi bi-lock-fill"></i>

                                    <div>
                                        <strong>Security Information</strong>
                                        <p>
                                            Passwords are confidential and should not be displayed
                                            in plain text. Account credentials should be handled securely.
                                        </p>
                                    </div>
                                </div>

                                {/* Footer */}
                                <div className={S.viewCredentialsFooter}>
                                    <span>
                                        <i className="bi bi-eye"></i>
                                        View-only mode
                                    </span>

                                    <button
                                        type="button"
                                        className={S.viewCredentialsCloseButton}
                                        onClick={() => closeoverlay()}
                                    >
                                        <i className="bi bi-x-lg"></i>
                                        Close
                                    </button>
                                </div>

                            </div>
                        </div>
                    </>
                ) : (<>
                    {active19 ?
                        (
                            <>
                                <div className={S.loadingOverlay}>
                                    <div className={S.loadingContent}>
                                        <div className={S.loadingSpinner}></div>
                                        <p>Loading...</p>
                                    </div>
                                </div>
                            </>)
                        :
                        (
                            <>

                            </>
                        )
                    }
                </>)
            }

            {
                active20 && (<>
                    <div className={S.serverErrorOverlay}>
                        <div className={S.serverErrorContent}>
                            <button
                                className={S.serverErrorClose}
                                onClick={() => setActive20(false)}
                                aria-label="Close server error"
                            >
                                <i className="bi bi-x-lg"></i>
                            </button>

                            <div className={S.serverErrorIcon}>
                                <i className="bi bi-exclamation-triangle"></i>
                            </div>

                            <h3>Server Error</h3>

                            <p>
                                Something went wrong while communicating with the server.
                                Please try again later.
                            </p>

                            <button
                                className={S.serverErrorButton}
                                onClick={() => setActive20(false)}
                            >
                                <i className="bi bi-check2"></i>
                                Okay, Close
                            </button>
                        </div>
                    </div>
                </>)
            }

            {
                active21 ? (<>
                    {/* <form> */}
                    <form onSubmit={submitUserEdit}>

                        <div className={S.viewCredentialsOverlay}>
                            <div className={S.viewCredentialsModal}>

                                {/* Header */}
                                <div className={S.viewCredentialsHeader}>
                                    <div className={S.viewCredentialsTitleArea}>
                                        <div className={S.viewCredentialsMainIcon}>
                                            <i className="bi bi-person-gear"></i>
                                        </div>
                                        <div>
                                            <h3>Edit User Information</h3>
                                            <p>Update personal details and account settings</p>
                                        </div>
                                    </div>

                                    <i className={`bi bi-x-lg ${S.viewCredentialsClose}`} onClick={() => { setActive21(false); setActive22(false); localStorage.removeItem("editUserId") }}></i>
                                </div>

                                {/* Editing Notice */}
                                <div className={S.editUserNotice}>
                                    <i className="bi bi-info-circle-fill"></i>
                                    <div>
                                        <strong>Editing User Account</strong>
                                        <p>
                                            Update this user's personal information, login credentials,
                                            role, and account status. Review all changes carefully before saving.
                                        </p>
                                    </div>
                                </div>

                                {/* Personal Information */}
                                <div className={S.viewCredentialsSection}>
                                    <div className={S.viewCredentialsSectionTitle}>
                                        <i className="bi bi-person-circle"></i>
                                        <span>Personal Information</span>
                                    </div>

                                    <div className={S.viewCredentialsGrid}>
                                        <div className={S.viewCredentialsField}>
                                            <label>First Name</label>
                                            <input
                                                type="text"
                                                value={userFirstName2}
                                                required
                                                onChange={(e) => setUserFirstName2(e.target.value)}
                                                placeholder="Enter first name"
                                            />
                                        </div>

                                        <div className={S.viewCredentialsField}>
                                            <label>Second Name</label>
                                            <input
                                                type="text"
                                                required
                                                value={userSecondName2}
                                                onChange={(e) => setUserSecondName2(e.target.value)}
                                                placeholder="Enter second name"
                                            />
                                        </div>

                                        <div className={S.viewCredentialsField}>
                                            <label>Email Address</label>
                                            <input
                                                type="email"
                                                value={userEmail2}
                                                onChange={(e) => setUserEmail2(e.target.value)}
                                                required
                                                placeholder="Enter email address"
                                            />
                                        </div>

                                        <div className={S.viewCredentialsField}>
                                            <label>Phone Number</label>
                                            <input
                                                type="tel"
                                                required
                                                value={userPhoneNumber2}
                                                onChange={(e) => setUserPhoneNumber2(e.target.value)}
                                                placeholder="Enter phone number"
                                            />
                                        </div>
                                    </div>
                                </div>

                                {/* Account Information */}
                                <div className={S.viewCredentialsSection}>
                                    <div className={S.viewCredentialsSectionTitle}>
                                        <i className="bi bi-shield-check"></i>
                                        <span>Account Information</span>
                                    </div>

                                    <div className={S.viewCredentialsGrid}>
                                        <div className={S.viewCredentialsField}>
                                            <label>Assigned Role</label>
                                            <select
                                                value={userRole2}
                                                required
                                                onChange={(e) => setUserRole2(e.target.value)}
                                            >
                                                <option value="">Select role</option>
                                                <option value="Admin">Admin</option>
                                                <option value="Doctor">Doctor</option>
                                                <option value="Nurse">Nurse</option>
                                            </select>
                                        </div>

                                        <div className={S.viewCredentialsField}>
                                            <label>Account Status</label>
                                            <select
                                                value={userStatus2}
                                                required
                                                onChange={(e) => setUserStatus2(e.target.value)}
                                            >
                                                <option value="">Select status</option>
                                                <option value="Active">Active</option>
                                                <option value="Inactive">Inactive</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>

                                {/* Password Information */}
                                <div className={S.viewCredentialsSection}>
                                    <div className={S.viewCredentialsSectionTitle}>
                                        <i className="bi bi-shield-lock"></i>
                                        <span>Password & Security</span>
                                    </div>

                                    <div className={S.editUserPasswordNotice}>
                                        <i className="bi bi-info-circle"></i>
                                        <p>
                                            Leave both password fields empty if you do not want to
                                            change the user's current password.
                                        </p>
                                    </div>

                                    <div className={S.viewCredentialsGrid}>
                                        <div className={S.viewCredentialsField}>
                                            <label>New Password</label>

                                            <div className={S.viewCredentialsInputWrapper}>
                                                <input
                                                    type={inputType}
                                                    value={userPassword2}
                                                    required
                                                    onChange={(e) => setUserPassword2(e.target.value)}
                                                    placeholder="Enter new password"
                                                    autoComplete="new-password"
                                                />

                                                <i
                                                    className={`${eyeIcon} ${S.addUserPasswordToggle}`}
                                                    onClick={inputChangeType}
                                                ></i>
                                            </div>
                                        </div>

                                        <div className={S.viewCredentialsField}>
                                            <label>Confirm New Password</label>

                                            <div className={S.viewCredentialsInputWrapper}>
                                                <input
                                                    type={inputType}
                                                    value={userConfirmPassword2}
                                                    required
                                                    onChange={(e) => setUserConfirmPassword2(e.target.value)}
                                                    placeholder="Confirm new password"
                                                    autoComplete="new-password"
                                                />

                                                <i
                                                    className={`${eyeIcon} ${S.addUserPasswordToggle}`}
                                                    onClick={inputChangeType}
                                                ></i>
                                            </div>
                                        </div>
                                    </div>

                                </div>

                                {/* Important Reminder */}
                                <div className={S.viewCredentialsSecurity}>
                                    <i className="bi bi-shield-lock-fill"></i>

                                    <div>
                                        <strong>Important Reminder</strong>
                                        <p>
                                            Changes to a user's role, account status, or password may
                                            affect their access to the hospital management system.
                                            Ensure all updated information is correct before saving.
                                        </p>
                                    </div>
                                </div>


                                {active24 && (<>
                                    <div style={{ padding: "0 3.2%" }}>

                                        <div className={S.messageContainer}>
                                            <i className="bi bi-info-circle"></i>
                                            <p>{feedBack}</p>
                                        </div>
                                    </div>
                                </>)}

                                {/* Footer */}
                                <div className={S.viewCredentialsFooter} style={{ marginTop: "0.5em" }}>
                                    <span>
                                        <i className="bi bi-pencil-square"></i>
                                        Editing mode
                                    </span>

                                    <div className={S.editUserActions}>
                                        <button
                                            type="button"
                                            className={S.viewCredentialsCloseButton}
                                            onClick={() => { setActive21(false); setActive22(false); localStorage.removeItem("editUserId") }}
                                        >
                                            {active25 ? (<>
                                                <i className="bi bi-arrow-left"></i>
                                                Go back
                                            </>) : (<>
                                                <i className="bi bi-x-circle"></i>
                                                Cancel
                                            </>)}
                                        </button>

                                        <button
                                            className={S.editUserSaveButton}
                                            onClick={() => { submitUserEdit() }}
                                        >

                                            {active23 ? (
                                                <>
                                                    <span className={S.spinner}></span>
                                                    Processing...
                                                </>
                                            ) : (
                                                <>
                                                    <i className="bi bi-check2-circle"></i>
                                                    Save Changes
                                                </>
                                            )}


                                        </button>
                                    </div>
                                </div>

                            </div>
                        </div>

                    </form>

                </>) : (<>
                    {active22 ? (<>
                        <div className={S.loadingOverlay}>
                            <div className={S.loadingContent}>
                                <div className={S.loadingSpinner}></div>
                                <p>Loading...</p>
                            </div>
                        </div>
                    </>) : (
                        <>
                        </>
                    )}
                </>)
            }
        </div >

    );
}

export default Settings;
