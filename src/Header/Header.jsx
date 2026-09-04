import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import axios from 'axios';
import H from "./Header.module.css";
const API = import.meta.env.VITE_HOSTING_API;
import UseInternetconnection from '../Internetconnection/Internetconnection.jsx'

function Header() {

    const online = UseInternetconnection();

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

    return (
        <div className={H.headerContainer}>

            <>
                {!online ? (
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
                        </div>
                    </div>
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
                        window.location.href = "/his/dashboard";
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
                        className={navClass}
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
        </div>
    );
}


export default Header;