import { useState, useEffect, useRef } from "react";
import S from "./Settings.module.css";
import { Helmet } from 'react-helmet-async'
import axios from "axios";

const API = import.meta.env.VITE_HOSTING_API;

function Settings() {
    const inputFocus = useRef()
    const fileInputRef = useRef(null);
    const [active1, setActive1] = useState(false)
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




    function LogoHandler(e) {
        // console.log(e.target.files[0])
        const file = e.target.files[0]
        // console.log(file)
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


    async function Submitedit() {
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

            }
            else {
                setActive10(true)
                setActive8(false)
                setActive11(false)
                alert(`HI-2`)
            }
        } catch (error) {
            alert(`catch block`)
            setActive8(false)
            setActive11(false)
            setActive10(true)
            console.log(error.message)
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

            } else {
                alert(`HI-2`)
            }
        } catch (error) {
            alert(`catch block`)
            console.log(error.message)
        }
    }

    useEffect(() => {
        fetchSettings()
    }, [])


    async function submitCredentials(e) {
        setActive1(false)
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
                setActive1(true)
                localStorage.setItem("token",)
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
                        <h1>Settings</h1>
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

                <button className={S.settingsNavItem}>
                    <a href="#profile" className={S.settingsNavItem} style={{ textDecoration: "none" }}>

                        <i className="bi bi-person-circle"></i>
                        <span>My Profile</span>
                    </a>
                </button>

                <button className={S.settingsNavItem}>
                    <a href="#security" className={S.settingsNavItem} style={{ textDecoration: "none" }}>

                        <i className="bi bi-shield-lock"></i>
                        <span>Security</span>
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
                                Upload the logo that will appear on hospital
                                reports and documents.
                            </p>
                        </div>

                        <i className="bi bi-image"></i>
                    </div>


                    <div className={S.logoUploadArea}>

                        <div className={S.logoUploadArea}>
                            <div className={S.logoPreview}>
                                <i className={`bi bi-hospital ${S.logoPlaceholder}`}></i>
                                {logo && (
                                    <img
                                        src={URL.createObjectURL(logo)}
                                        alt="Hospital Logo"
                                        className={S.displayImage}
                                    />
                                )}
                            </div>
                            <div className={S.logoUploadInfo}>
                                <strong>Hospital Logo</strong>

                                <span>
                                    Recommended size: 300 × 300px
                                </span>
                                <input
                                    type="file"
                                    accept="image/*"
                                    className={S.imageInput}
                                    ref={fileInputRef}
                                    onChange={LogoHandler}
                                />

                                <button
                                    type="button"
                                    onClick={() => {
                                        fileInputRef.current.click()
                                    }}
                                >
                                    <i className="bi bi-upload"></i>
                                    Upload Logo
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

                <br></br>
                {active10 && (
                    <>
                        <div className={S.serverErrorContainer}>
                            <div className={S.serverErrorIcon}>
                                <i className="bi bi-exclamation-triangle-fill"></i>
                            </div>

                            <div className={S.serverErrorContent}>
                                <strong>Unable to save changes</strong>
                                <span>
                                    The hospital information could not be updated at this time.
                                    Please try again.
                                </span>
                            </div>

                            <button
                                type="button"
                                className={S.serverErrorClose}
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


                    <button className={S.addUserButton}>
                        <i className="bi bi-person-plus"></i>
                        Add User
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
                            4 Users
                        </span>

                    </div>


                    <div className={S.tableWrapper}>

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


                            <tbody>

                                <tr>

                                    <td>
                                        <div className={S.userCell}>

                                            <div className={S.userAvatar}>
                                                <i className="bi bi-person"></i>
                                            </div>

                                            <div>
                                                <strong>Dr. John Mensah</strong>
                                                <span>
                                                    john@hospital.com
                                                </span>
                                            </div>

                                        </div>
                                    </td>

                                    <td>
                                        <span className={`${S.roleBadge} ${S.doctor}`}>
                                            Doctor
                                        </span>
                                    </td>

                                    <td>024 XXX XXXX</td>

                                    <td>
                                        <span className={`${S.statusBadge} ${S.activeStatus}`}>
                                            <i className="bi bi-circle-fill"></i>
                                            Active
                                        </span>
                                    </td>

                                    <td>Today, 10:24 AM</td>

                                    <td>
                                        <div className={S.tableActions}>

                                            <button title="Edit User">
                                                <i className="bi bi-pencil"></i>
                                            </button>

                                            <button title="View User">
                                                <i className="bi bi-eye"></i>
                                            </button>

                                            <button
                                                className={S.deleteAction}
                                                title="Deactivate User"
                                            >
                                                <i className="bi bi-person-x"></i>
                                            </button>

                                        </div>
                                    </td>

                                </tr>


                                <tr>

                                    <td>
                                        <div className={S.userCell}>

                                            <div className={S.userAvatar}>
                                                <i className="bi bi-person"></i>
                                            </div>

                                            <div>
                                                <strong>Mary Asante</strong>
                                                <span>
                                                    mary@hospital.com
                                                </span>
                                            </div>

                                        </div>
                                    </td>

                                    <td>
                                        <span className={`${S.roleBadge} ${S.nurse}`}>
                                            Nurse
                                        </span>
                                    </td>

                                    <td>020 XXX XXXX</td>

                                    <td>
                                        <span className={`${S.statusBadge} ${S.activeStatus}`}>
                                            <i className="bi bi-circle-fill"></i>
                                            Active
                                        </span>
                                    </td>

                                    <td>Today, 8:42 AM</td>

                                    <td>
                                        <div className={S.tableActions}>

                                            <button>
                                                <i className="bi bi-pencil"></i>
                                            </button>

                                            <button>
                                                <i className="bi bi-eye"></i>
                                            </button>

                                            <button className={S.deleteAction}>
                                                <i className="bi bi-person-x"></i>
                                            </button>

                                        </div>
                                    </td>

                                </tr>


                                <tr>

                                    <td>
                                        <div className={S.userCell}>

                                            <div className={S.userAvatar}>
                                                <i className="bi bi-person"></i>
                                            </div>

                                            <div>
                                                <strong>Michael Owusu</strong>
                                                <span>
                                                    michael@hospital.com
                                                </span>
                                            </div>

                                        </div>
                                    </td>

                                    <td>
                                        <span className={`${S.roleBadge} ${S.nurse}`}>
                                            Nurse
                                        </span>
                                    </td>

                                    <td>055 XXX XXXX</td>

                                    <td>
                                        <span className={`${S.statusBadge} ${S.inactiveStatus}`}>
                                            <i className="bi bi-circle-fill"></i>
                                            Inactive
                                        </span>
                                    </td>

                                    <td>Aug 22, 2026</td>

                                    <td>
                                        <div className={S.tableActions}>

                                            <button>
                                                <i className="bi bi-pencil"></i>
                                            </button>

                                            <button>
                                                <i className="bi bi-eye"></i>
                                            </button>

                                            <button className={S.deleteAction}>
                                                <i className="bi bi-person-x"></i>
                                            </button>

                                        </div>
                                    </td>

                                </tr>


                                <tr>

                                    <td>
                                        <div className={S.userCell}>

                                            <div className={S.userAvatar}>
                                                <i className="bi bi-person-badge"></i>
                                            </div>

                                            <div>
                                                <strong>Admin</strong>
                                                <span>
                                                    admin@hospital.com
                                                </span>
                                            </div>

                                        </div>
                                    </td>

                                    <td>
                                        <span className={`${S.roleBadge} ${S.admin}`}>
                                            Administrator
                                        </span>
                                    </td>

                                    <td>027 XXX XXXX</td>

                                    <td>
                                        <span className={`${S.statusBadge} ${S.activeStatus}`}>
                                            <i className="bi bi-circle-fill"></i>
                                            Active
                                        </span>
                                    </td>

                                    <td>Today, 11:02 AM</td>

                                    <td>
                                        <div className={S.tableActions} id="profile">

                                            <button>
                                                <i className="bi bi-pencil"></i>
                                            </button>

                                            <button>
                                                <i className="bi bi-eye"></i>
                                            </button>

                                            <button className={S.protectedAction}>
                                                <i className="bi bi-shield-check"></i>
                                            </button>

                                        </div>
                                    </td>

                                </tr>

                            </tbody>

                        </table>

                    </div>

                </div>

            </section>


            {/* =====================================================
                MY PROFILE
            ===================================================== */}

            <section className={S.settingsSection}>

                <div className={S.sectionHeader}>

                    <div>
                        <span>ACCOUNT</span>

                        <h2>My Profile</h2>

                        <p>
                            Update your personal and professional information.
                        </p>
                    </div>

                    <div className={S.sectionIcon}>
                        <i className="bi bi-person-circle"></i>
                    </div>

                </div>


                <div className={S.settingsCard}>

                    <div className={S.profileHeader}>

                        <div className={S.largeAvatar}>
                            <i className="bi bi-person"></i>
                        </div>

                        <div>
                            <h3>Administrator</h3>

                            <span>
                                System Administrator
                            </span>

                            <small>
                                <i className="bi bi-shield-check"></i>
                                Full administrative access
                            </small>
                        </div>

                    </div>


                    <div className={S.formGrid}>

                        <div className={S.formGroup}>
                            <label>First Name</label>

                            <input
                                type="text"
                                placeholder="First name"
                            />
                        </div>


                        <div className={S.formGroup}>
                            <label>Last Name</label>

                            <input
                                type="text"
                                placeholder="Last name"
                            />
                        </div>


                        <div className={S.formGroup}>
                            <label>Email Address</label>

                            <input
                                type="email"
                                placeholder="Email address"
                            />
                        </div>


                        <div className={S.formGroup}>
                            <label>Phone Number</label>

                            <input
                                type="tel"
                                placeholder="Phone number"
                            />
                        </div>


                        <div className={S.formGroup}>
                            <label>Professional Title</label>

                            <input
                                type="text"
                                placeholder="e.g. Hospital Administrator"
                            />
                        </div>


                        <div className={S.formGroup} >
                            <label>Staff ID</label>

                            <input
                                type="text"
                                value="ADM000001"
                                readOnly
                            />
                        </div>

                    </div>


                    <div className={S.cardFooter} id="security">

                        <button className={S.saveButton}>
                            <i className="bi bi-check2"></i>
                            Save Profile
                        </button>

                    </div>

                </div>

            </section>


            {/* =====================================================
                SECURITY
            ===================================================== */}

            <section className={S.settingsSection}>

                <div className={S.sectionHeader}>

                    <div>
                        <span>PROTECTION</span>

                        <h2>Security</h2>

                        <p>
                            Manage passwords and administrative protection.
                        </p>
                    </div>

                    <div className={S.sectionIcon}>
                        <i className="bi bi-shield-lock"></i>
                    </div>

                </div>


                <div className={S.securityGrid}>

                    <div className={S.securityCard}>

                        <div className={S.securityCardIcon}>
                            <i className="bi bi-key"></i>
                        </div>

                        <div>
                            <h3>Login Password</h3>

                            <p>
                                Change the password used to sign in to the
                                hospital system.
                            </p>

                            <button className={S.secondaryButton}>
                                <i className="bi bi-pencil"></i>
                                Change Password
                            </button>
                        </div>

                    </div>


                    <div className={S.securityCard}>

                        <div className={S.securityCardIcon}>
                            <i className="bi bi-lock"></i>
                        </div>

                        <div>
                            <h3>Settings Password</h3>

                            <p>
                                Extra password required before accessing
                                sensitive administrative settings.
                            </p>

                            <button className={S.secondaryButton}>
                                <i className="bi bi-shield-lock"></i>
                                Change Settings Password
                            </button>
                        </div>

                    </div>

                </div>

            </section>




            {/* =====================================================
                BOTTOM NOTE
            ===================================================== */}

            <div className={S.settingsNotice}>

                <i className="bi bi-shield-check"></i>

                <div>
                    <strong>Administrator Settings</strong>

                    <p>
                        Changes made here can affect hospital information,
                        user access and generated medical documents.
                    </p>
                </div>

            </div>
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
            )}



        </div>
    );
}

export default Settings;
