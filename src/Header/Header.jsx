import { useState, useContext, useEffect } from "react";
import { NavLink, useNavigate, useLocation } from "react-router-dom";
import H from "./Header.module.css";
import axios from 'axios'
const API = import.meta.env.VITE_HOSTING_API;
import UseInternetconnection from '../Internetconnection/Internetconnection.jsx'
import Refreshpage from "../Refreshpage/Refreshpage.jsx";
import { MyContext } from "../Mycontext.jsx";

function Header() {

    const online = UseInternetconnection();
    const { activeRR, setActiveRR, active100, setActive100, active01, setActive01, fetchedNotifications, setFetchedNotifications } = useContext(MyContext);

    const [notificationOpen, setNotificationOpen] = useState(false);
    const [notificationExpanded, setNotificationExpanded] = useState(false);

    const [notificationArray, setNotificationArray] = useState([])
    const [numberUnRead, setNumberUnRead] = useState(0)

    const [active1, setActive1] = useState(false)
    const [active2, setActive2] = useState(true)
    const [active3, setActive3] = useState(false)
    const [active4, setActive4] = useState(false)




    const [menuOpen, setMenuOpen] = useState(false);
    const navigate = useNavigate();
    const token = localStorage.getItem("token");

    function closeMenu() {
        setMenuOpen(false);
        if (!token) {
            localStorage.removeItem("token");
            window.location.href = "/login"
        }
    }

    function toggleMenu() {
        setMenuOpen(prev => !prev);
    }

    function logout() {
        setMenuOpen(false);
        navigate("/login");
        localStorage.removeItem("token");
    }

    function navClass({ isActive }) {
        return isActive
            ? `${H.navItem} ${H.active}`
            : H.navItem;
    }


    async function fetchNotification() {
        setActive3(false)

        try {
            const response = await axios.get(`${API}/patient/notifications`)
            const results = response.data

            if (results.success && results.count) {
                console.log(results.patients)
                setNotificationArray(results.patients)
                setNumberUnRead(results.patients.filter((d) => {
                    return d.read === false;
                }).length)
                setActive3(true)
            } else if (results.success && !results.count) {
                setActive3(false)
                console.log(results.message)

            } else {
                setActive3(false)
                console.log(results.message)
            }

        } catch (error) {
            setActive3(false)
            console.log(error);
        }
    }


    useEffect(() => {
        fetchNotification()
        setFetchedNotifications(() => fetchNotification);
    }, [])



    // useEffect(() => {
    //     fetchNotification()
    //     setFetchedNotifications(() => {
    //         fetchNotification();
    //     });
    // }, [])





    // function run1() {
    //     setTimeout(() => {
    //         fetchNotification()
    //         run2()
    //     }, 2000);
    // }


    // function run2() {
    //     setTimeout(() => {
    //         fetchNotification()
    //         run1()
    //     }, 2000);
    // }


    // markId
    async function markAsRead() {
        const id = localStorage.getItem("markId")

        try {
            const response = await axios.patch(`${API}/patient/mark/${id}`)
            const results = response.data

            if (!results.success) {
                console.log(results.message)
            } else {
                fetchNotification()
            }

        } catch (error) {
            console.log(error.message)
        }
    }


    async function markAllRead() {
        try {
            const response = await axios.patch(`${API}/patient/mark-all-read`)
            const results = response.data
            if (results.success) {
                fetchNotification()
            } else {
                console.log(results.message)
            }

        } catch (error) {
            console.log(error.message)
        }
    }




    async function clearNotification() {

        try {
            const response = await axios.delete(`${API}/patient/clear-all-notifications`)
            const results = response.data

            if (results.success) {
                fetchNotification()

            } else {
                console.log(results.message)

                alert(`Failed - 1`)
            }

        } catch (error) {
            alert(`Failed - 2 `)

            console.log(error.message)
        }
    }

    function viewNotification() { }
    async function saveId(idd, tablee) {
        const id = idd;
        const table = tablee
        if (table === "patients") {
            localStorage.setItem("viewId", id)
            navigate("/his/patients-info")
            setActive1(false)
            setActiveRR(!activeRR)
        }
    }


    function timeAgo(timestamp) {
        const now = new Date();
        const date = new Date(timestamp);

        const seconds = Math.floor((now - date) / 1000);

        if (seconds < 60) {
            return `${seconds} sec${seconds !== 1 ? "s" : ""} ago`;
        }

        const minutes = Math.floor(seconds / 60);

        if (minutes < 60) {
            return `${minutes} min${minutes !== 1 ? "s" : ""} ago`;
        }

        const hours = Math.floor(minutes / 60);

        if (hours < 24) {
            return `${hours} hour${hours !== 1 ? "s" : ""} ago`;
        }

        const days = Math.floor(hours / 24);

        if (days < 30) {
            return `${days} day${days !== 1 ? "s" : ""} ago`;
        }

        const months = Math.floor(days / 30);

        if (months < 12) {
            return `${months} month${months !== 1 ? "s" : ""} ago`;
        }

        const years = Math.floor(months / 12);

        return `${years} year${years !== 1 ? "s" : ""} ago`;
    }



    // function unReadNotifications() {

    // }


    return (
        <div className={`${H.headerContainer} ${active01 ? H.hide : ""}`}>

            {active100 ? (<><Refreshpage /></>) : (<></>)}

            <>
                {!online ?
                    (
                        <>
                            {
                                active2 && (
                                    <>
                                        <div className={H.connectionWarning}>

                                            <div className={H.connectionWarningIcon}>
                                                <i className="bi bi-wifi-off"></i>
                                            </div>

                                            <div className={H.connectionWarningContent}>

                                                <h3>No Internet Connection</h3>

                                                <p>
                                                    Your device is currently offline. Some hospital system
                                                    features may not be available.
                                                </p>

                                                <span>
                                                    <i className="bi bi-arrow-repeat"></i>
                                                    Waiting for connection to be restored...
                                                </span>

                                                <button
                                                    className={H.connectionWarningCloseButton}
                                                    onClick={() => {
                                                        setActive2(false)
                                                    }}
                                                >
                                                    <i className="bi bi-x-lg"></i>
                                                    Dismiss
                                                </button>
                                            </div>
                                        </div>
                                    </>
                                )
                            }
                        </>
                    ) :
                    <>
                    </>}
            </>

            <header
                className={`${H.header} ${menuOpen ? H.headerOpen : ""}`}
            >

                {/* =================================================
                    BRAND
                ================================================= */}

                <NavLink
                    to="/his/dashboard"
                    className={H.brand}
                    onClick={() => {
                        closeMenu();
                        // window.location.href = "/his/dashboard";
                        navigate("/his/dashboard")
                    }}
                >
                    <div className={H.brandIcon}>
                        <i className="bi bi-hospital"></i>
                    </div>

                    <div className={H.brandText}>
                        <strong>Hospital</strong>
                        <span>
                            Management System
                        </span>
                    </div>
                </NavLink>


                {/* =================================================
                    MOBILE MENU BUTTON
                ================================================= */}

                <button
                    type="button"
                    className={`${H.menuButton} ${menuOpen ? H.menuButtonOpen : ""}`}

                    onClick={() => {
                        toggleMenu();
                    }}
                    aria-label={
                        menuOpen
                            ? "Close navigation menu"
                            : "Open navigation menu"
                    }
                    aria-expanded={menuOpen}
                >
                    <i
                        className={
                            menuOpen
                                ? "bi bi-x-lg"
                                : "bi bi-list"
                        }
                    ></i>
                </button>


                {/* =================================================
                    NAVIGATION
                ================================================= */}

                <nav
                    className={`${H.navigation} ${menuOpen
                        ? H.navigationOpen
                        : ""
                        }`}
                >

                    {/* DASHBOARD */}

                    <NavLink
                        to="/his/dashboard"

                        onClick={() => {
                            closeMenu();
                        }}
                        className={navClass}
                    >
                        <i className="bi bi-grid-1x2"></i>
                        <span>
                            Dashboard
                        </span>
                    </NavLink>


                    {/* PATIENTS */}

                    <NavLink
                        to="/his/patients"

                        onClick={() => {
                            closeMenu();
                        }}
                        className={({ isActive }) => {
                            const patientRoutes = [
                                "/his/patients",
                                "/his/fill-forms",
                                "/his/patients-info",
                                "/his/edit-patient-forms"
                            ];

                            const isPatientPage =
                                isActive ||
                                patientRoutes.includes(location.pathname);

                            return isPatientPage
                                ? `${H.navItem} ${H.active}`
                                : H.navItem;
                        }}
                    >
                        <i className="bi bi-people"></i>
                        <span>
                            Patients
                        </span>
                    </NavLink>


                    {/* MEDICAL RECORDS */}

                    <NavLink
                        to="/his/medical-records"
                        onClick={() => {
                            closeMenu();
                        }}
                        className={navClass}
                    >
                        <i className="bi bi-file-earmark-medical"></i>
                        <span>
                            Medical Records
                        </span>
                    </NavLink>


                    {/* REPORTS */}

                    <NavLink
                        to="/his/reports"
                        onClick={() => {
                            closeMenu();
                        }}
                        className={navClass}
                    >
                        <i className="bi bi-bar-chart-line"></i>
                        <span>
                            Reports
                        </span>
                    </NavLink>


                    {/* RECYCLE BIN */}

                    <NavLink
                        to="/his/recycle-bin"
                        onClick={() => {
                            closeMenu();
                        }}
                        className={navClass}
                    >
                        <i className="bi bi-trash3"></i>
                        <span>
                            Recycle Bin
                        </span>
                    </NavLink>


                    {/* SETTINGS */}

                    <NavLink
                        to="/his/settings"
                        onClick={() => {
                            closeMenu();
                        }}
                        className={navClass}
                    >
                        <i className="bi bi-gear"></i>
                        <span>
                            Settings
                        </span>
                    </NavLink>
                </nav>


                {/* =================================================
                    HEADER ACTIONS
                ================================================= */}

                <div className={H.headerActions}>

                    {/* =================================================
                        NOTIFICATIONS
                    ================================================= */}

                    <button
                        type="button"
                        className={H.notificationButton}
                        aria-label="Notifications"
                        onClick={() => {
                            setNotificationOpen(!notificationOpen);
                            setActive1(!active1)

                        }}
                    >
                        <i className="bi bi-bell"></i>
                        {active3 ?
                            (
                                <>
                                    {numberUnRead > 0 ?
                                        (
                                            <>
                                                <span className={H.notificationBadge}>
                                                    {numberUnRead}
                                                </span>
                                            </>
                                        )
                                        :
                                        (
                                            <>
                                            </>
                                        )
                                    }
                                </>
                            )
                            :
                            (
                                <>
                                </>
                            )}

                    </button>

                    {/* =================================================
                        ADMIN PROFILE
                    ================================================= */}

                    <button
                        type="button"
                        className={H.adminProfile}
                        aria-label="Admin profile"
                    >
                        <div className={H.adminAvatar}>
                            <i className="bi bi-person"></i>
                        </div>
                        <div className={H.adminInfo}>
                            <strong>
                                Profile
                            </strong>
                        </div>
                    </button>

                </div>


                {/* =================================================
                    LOGOUT
                ================================================= */}

                <button
                    type="button"
                    className={H.logoutButton}
                    onClick={() => {
                        logout();
                    }}
                >
                    <i className="bi bi-box-arrow-right"></i>
                    <span>
                        Logout
                    </span>
                </button>
            </header>


            {
                active1 && (
                    <div
                        className={`${H.notificationOverlay} ${notificationExpanded
                            ? H.notificationOverlayExpanded
                            : ""
                            }`}
                    >

                        {/* =================================================
            NOTIFICATION HEADER
        ================================================= */}

                        <div className={H.notificationHeader}>

                            <div className={H.notificationHeading}>

                                <div className={H.notificationHeadingIcon}>
                                    <i className="bi bi-bell"></i>
                                </div>

                                <div>
                                    <h3>
                                        Notifications
                                    </h3>
                                    {active3 ?
                                        (
                                            <>
                                                {numberUnRead > 0 ?
                                                    (<>
                                                        <span >
                                                            {numberUnRead} unread notifications
                                                        </span>
                                                    </>)
                                                    :
                                                    (<>
                                                        <span>You have no unread notifications</span>
                                                    </>
                                                    )}

                                            </>
                                        )
                                        :
                                        (
                                            <>
                                                <span >
                                                </span>
                                            </>
                                        )}

                                </div>
                            </div>



                            <div className={H.notificationHeaderActions}>
                                <button
                                    type="button"
                                    className={H.notificationToolButton}
                                    aria-label={
                                        notificationExpanded
                                            ? "Reduce notifications"
                                            : "Expand notifications"
                                    }
                                    onClick={() => {
                                        setNotificationExpanded(
                                            !notificationExpanded
                                        );
                                    }}
                                >
                                    <i
                                        className={
                                            notificationExpanded
                                                ? "bi bi-arrows-angle-contract"
                                                : "bi bi-arrows-angle-expand"
                                        }
                                    ></i>
                                </button>

                                <button
                                    type="button"
                                    className={`${H.notificationToolButton} ${H.notificationCloseButton}`}
                                    aria-label="Close notifications"
                                    onClick={() => {
                                        setNotificationOpen(false);
                                        setActive1(false)
                                    }}
                                >
                                    <i className="bi bi-x-lg"></i>
                                </button>
                            </div>
                        </div>

                        <div className={H.notificationBody}>
                            {active3 ?
                                (
                                    <>
                                        {notificationArray.map((n) => (<>

                                            <div
                                                className={`${H.notificationItem} ${H.notificationUnread} ${!n.read ? H.bd : ""}`}
                                            >
                                                <div className={H.notificationItemIcon}>
                                                    <i className="bi bi-person-plus"></i>
                                                </div>

                                                <div className={H.notificationItemContent}>

                                                    <div className={H.notificationItemTop}>

                                                        <div>
                                                            <h4>
                                                                {n.title}
                                                            </h4>

                                                            {n.read ? (
                                                                <>
                                                                    <span className={H.notificationStatus}>
                                                                        Read  &nbsp;<i className="bi bi-check2"></i>
                                                                    </span>

                                                                </>) : (
                                                                <>
                                                                    <span className={H.notificationStatus}>
                                                                        Unread
                                                                    </span>
                                                                </>
                                                            )}
                                                        </div>

                                                        <span className={H.notificationTime}>
                                                            {timeAgo(n.created_at)}
                                                        </span>

                                                    </div>
                                                    <p>
                                                        {n.messages}
                                                        <p>{n.name}</p>
                                                    </p>

                                                    <div className={H.notificationItemFooter}>

                                                        <button
                                                            type="button"
                                                            className={H.notificationAction}
                                                            onClick={() => {
                                                                viewNotification()
                                                                saveId(n.individual_id, n.source_table)
                                                                localStorage.setItem("markId", n.id);
                                                                markAsRead()
                                                            }}
                                                        >
                                                            <i className="bi bi-eye"></i>
                                                            View
                                                        </button>
                                                        <button
                                                            type="button"
                                                            className={H.notificationAction}
                                                            onClick={() => {
                                                                localStorage.setItem("markId", n.id);
                                                                markAsRead()
                                                            }}
                                                        >
                                                            {n.read ?
                                                                (
                                                                    <>
                                                                        <span>
                                                                            <i className="bi bi-check2-all"></i>
                                                                            &nbsp; Read
                                                                        </span>
                                                                    </>
                                                                )
                                                                :
                                                                (
                                                                    <>
                                                                        <i className="bi bi-check2"></i>
                                                                        Mark as read

                                                                    </>
                                                                )}
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>

                                        </>))}
                                    </>
                                )
                                :
                                (
                                    <>

                                        <div className={H.notificationEmpty}>
                                            <i className="bi bi-bell-slash"></i>
                                            <h4>No notifications yet</h4>

                                            <p>
                                                You're all caught up. New notifications will appear here.
                                            </p>
                                        </div>


                                    </>)}
                        </div>



                        <div className={H.notificationFooter}>
                            {active3 ?

                                (
                                    <>
                                        <button
                                            type="button"
                                            className={H.notificationFooterButton}
                                            onClick={markAllRead}
                                        >
                                            <i className="bi bi-check2-all"></i>
                                            Mark all as read
                                        </button>

                                        <button
                                            type="button"
                                            className={H.notificationFooterButton}
                                            onClick={clearNotification}
                                        >
                                            <i className="bi bi-x"></i>
                                            Clear all
                                        </button>
                                    </>
                                )
                                :
                                (
                                    <>

                                    </>
                                )
                            }

                        </div>

                    </div>
                )
            }
        </div >
    );
}


export default Header;
