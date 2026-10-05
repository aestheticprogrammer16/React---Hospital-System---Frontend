import React from "react";
import H from "./Landingpage.module.css";
import { Helmet } from 'react-helmet-async'
function Landingpage() {
    function login() {
        window.location.href = "/login";
    }

    return (
        <div className={H.landingPage}>

            <Helmet>
                <title>
                    HMS || Private Hospitals
                </title>
            </Helmet>
            {/* =====================================================
                TOP NAVIGATION
            ===================================================== */}

            <header className={H.navbar}>

                <div className={H.logoArea}>
                    <div className={H.logoIcon}>
                        <i className="bi bi-heart-pulse-fill"></i>
                    </div>

                    <div>
                        <h2>Aurelia Care</h2>
                        <span>Hospital Management System</span>
                    </div>
                </div>

                <button className={H.loginButton} onClick={login}>
                    <i className="bi bi-box-arrow-in-right"></i>
                    Login
                </button>

            </header>


            {/* =====================================================
                HERO SECTION
            ===================================================== */}

            <main>

                <section className={H.heroSection}>

                    <div className={H.heroContent}>

                        <div className={H.heroBadge}>
                            <span className={H.badgeDot}></span>
                            Modern Healthcare Management
                        </div>

                        <h1>
                            Smarter Hospital
                            <span> Management.</span>
                        </h1>

                        <p className={H.heroDescription}>
                            Aurelia Care Hospital Management System helps hospitals
                            organize patients, medical records, doctors, nurses,
                            appointments and everyday healthcare operations in one
                            simple and secure platform.
                        </p>

                        <div className={H.heroButtons}>

                            <button className={H.primaryButton} onClick={(e) => (window.location.href = "/pricing")}>
                                Get Started
                                <i className="bi bi-arrow-right"></i>
                            </button>

                            <div className={H.heroTrust}>
                                <div className={H.trustIcons}>
                                    <i className="bi bi-shield-check"></i>
                                </div>

                                <div>
                                    <strong>Designed for healthcare</strong>
                                    <small>Simple • Secure • Organized</small>
                                </div>
                            </div>

                        </div>

                        <div className={H.heroStats}>

                            <div className={H.stat}>
                                <strong>01</strong>
                                <span>Centralized<br />Records</span>
                            </div>

                            <div className={H.stat}>
                                <strong>02</strong>
                                <span>Better<br />Organization</span>
                            </div>

                            <div className={H.stat}>
                                <strong>03</strong>
                                <span>Faster<br />Workflows</span>
                            </div>

                        </div>

                    </div>


                    {/* =================================================
                        HERO VISUAL
                    ================================================= */}

                    <div className={H.heroVisual}>

                        <div className={H.glowCircle}></div>

                        <div className={H.dashboardCard}>

                            <div className={H.dashboardTop}>

                                <div>
                                    <span>Hospital Overview</span>
                                    <h3>Today's Activity</h3>
                                </div>

                                <div className={H.dashboardMenu}>
                                    <i className="bi bi-three-dots"></i>
                                </div>

                            </div>


                            <div className={H.dashboardNumbers}>

                                <div className={H.numberCard}>
                                    <div className={H.numberIcon}>
                                        <i className="bi bi-people-fill"></i>
                                    </div>

                                    <div>
                                        <strong>128</strong>
                                        <span>Patients</span>
                                    </div>
                                </div>


                                <div className={H.numberCard}>
                                    <div className={H.numberIcon}>
                                        <i className="bi bi-person-badge-fill"></i>
                                    </div>

                                    <div>
                                        <strong>24</strong>
                                        <span>Doctors</span>
                                    </div>
                                </div>

                            </div>


                            <div className={H.activityBox}>

                                <div className={H.activityHeader}>
                                    <span>Patient Activity</span>
                                    <small>Today</small>
                                </div>

                                <div className={H.activityBars}>

                                    <div className={H.barOne}></div>
                                    <div className={H.barTwo}></div>
                                    <div className={H.barThree}></div>
                                    <div className={H.barFour}></div>
                                    <div className={H.barFive}></div>
                                    <div className={H.barSix}></div>
                                    <div className={H.barSeven}></div>
                                </div>
                                <div className={H.activityDays}>
                                    <span>Mon</span>
                                    <span>Tue</span>
                                    <span>Wed</span>
                                    <span>Thu</span>
                                    <span>Fri</span>
                                    <span>Sat</span>
                                    <span>Sun</span>
                                </div>
                            </div>
                            <div className={H.dashboardFooter}>
                                <div className={H.onlineStatus}>
                                    <span></span>
                                    System Operational
                                </div>
                                <span>Updated just now</span>
                            </div>
                        </div>

                        <div className={H.floatingCardOne}>

                            <div className={H.floatingIcon}>
                                <i className="bi bi-heart-pulse"></i>
                            </div>

                            <div>
                                <strong>Patient Care</strong>
                                <span>Organized & Connected</span>
                            </div>

                        </div>


                        <div className={H.floatingCardTwo}>

                            <i className="bi bi-shield-lock-fill"></i>

                            <div>
                                <strong>Secure Records</strong>
                                <span>Protected information</span>
                            </div>

                        </div>

                    </div>

                </section>


                {/* =====================================================
                    INTRODUCTION
                ===================================================== */}

                <section className={H.introduction}>

                    <div className={H.sectionHeading}>

                        <span className={H.sectionLabel}>
                            ABOUT THE SYSTEM
                        </span>

                        <h2>
                            Everything your hospital needs,
                            <span> in one place.</span>
                        </h2>

                        <p>
                            Managing a hospital involves many moving parts. From
                            patient registration and medical records to staff
                            management and daily activities, Aurelia Care brings
                            important hospital information together into one
                            organized system.
                        </p>

                    </div>


                    <div className={H.featureGrid}>

                        <div className={H.featureCard}>

                            <div className={H.featureIcon}>
                                <i className="bi bi-person-vcard-fill"></i>
                            </div>

                            <h3>Patient Management</h3>

                            <p>
                                Keep patient information organized and easily
                                accessible. Manage patient profiles, registration
                                details and important information efficiently.
                            </p>

                            <span className={H.featureNumber}>01</span>

                        </div>


                        <div className={H.featureCard}>

                            <div className={H.featureIcon}>
                                <i className="bi bi-file-medical-fill"></i>
                            </div>

                            <h3>Medical Records</h3>

                            <p>
                                Keep medical information structured and available
                                to authorized healthcare staff when it is needed.
                            </p>

                            <span className={H.featureNumber}>02</span>

                        </div>


                        <div className={H.featureCard}>

                            <div className={H.featureIcon}>
                                <i className="bi bi-person-workspace"></i>
                            </div>

                            <h3>Staff Management</h3>

                            <p>
                                Organize doctors, nurses and other hospital staff
                                while keeping responsibilities and information
                                easier to manage.
                            </p>

                            <span className={H.featureNumber}>03</span>

                        </div>


                        <div className={H.featureCard}>

                            <div className={H.featureIcon}>
                                <i className="bi bi-calendar2-check-fill"></i>
                            </div>

                            <h3>Appointments</h3>

                            <p>
                                Help your hospital keep track of appointments and
                                daily patient activities in a more organized way.
                            </p>

                            <span className={H.featureNumber}>04</span>

                        </div>


                        <div className={H.featureCard}>

                            <div className={H.featureIcon}>
                                <i className="bi bi-bar-chart-fill"></i>
                            </div>

                            <h3>Hospital Overview</h3>

                            <p>
                                Get a clearer picture of hospital activities with
                                useful information presented in an easy-to-understand
                                format.
                            </p>

                            <span className={H.featureNumber}>05</span>

                        </div>


                        <div className={H.featureCard}>

                            <div className={H.featureIcon}>
                                <i className="bi bi-gear-wide-connected"></i>
                            </div>

                            <h3>Simple Administration</h3>

                            <p>
                                Give administrators the tools they need to manage
                                important hospital operations from one system.
                            </p>

                            <span className={H.featureNumber}>06</span>

                        </div>

                    </div>

                </section>


                {/* =====================================================
                    WHY AURELIA CARE
                ===================================================== */}

                <section className={H.whySection}>

                    <div className={H.whyVisual}>

                        <div className={H.bigCircle}></div>

                        <div className={H.medicalCard}>

                            <div className={H.medicalCardTop}>
                                <span>Healthcare</span>

                                <i className="bi bi-heart-pulse-fill"></i>
                            </div>

                            <div className={H.heartbeat}>
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>

                            <div className={H.medicalBottom}>
                                <strong>Care at the center</strong>
                                <small>Technology supporting people</small>
                            </div>

                        </div>

                    </div>


                    <div className={H.whyContent}>

                        <span className={H.sectionLabel}>
                            WHY AURELIA CARE?
                        </span>

                        <h2>
                            Technology that makes
                            <span> hospital work simpler.</span>
                        </h2>

                        <p>
                            A hospital management system should not make healthcare
                            workers' jobs more complicated. Aurelia Care focuses on
                            providing a clean and understandable environment where
                            important information can be managed efficiently.
                        </p>


                        <div className={H.benefits}>

                            <div className={H.benefit}>

                                <div className={H.check}>
                                    <i className="bi bi-check-lg"></i>
                                </div>

                                <div>
                                    <h4>Easy to Understand</h4>
                                    <p>
                                        A clean interface designed to make everyday
                                        hospital activities easier to manage.
                                    </p>
                                </div>

                            </div>


                            <div className={H.benefit}>

                                <div className={H.check}>
                                    <i className="bi bi-check-lg"></i>
                                </div>

                                <div>
                                    <h4>Organized Information</h4>
                                    <p>
                                        Important hospital information is kept in
                                        structured sections for easier access.
                                    </p>
                                </div>

                            </div>


                            <div className={H.benefit}>

                                <div className={H.check}>
                                    <i className="bi bi-check-lg"></i>
                                </div>

                                <div>
                                    <h4>Built Around Patient Care</h4>
                                    <p>
                                        The system is designed around the information
                                        and activities that support patient care.
                                    </p>
                                </div>

                            </div>

                        </div>

                    </div>

                </section>


                {/* =====================================================
                    USERS SECTION
                ===================================================== */}

                <section className={H.usersSection}>

                    <div className={H.usersHeading}>

                        <span className={H.sectionLabel}>
                            MADE FOR YOUR TEAM
                        </span>

                        <h2>
                            One system.
                            <span> Different responsibilities.</span>
                        </h2>

                        <p>
                            Different members of the hospital team can work with
                            the information they need while keeping hospital
                            operations organized.
                        </p>

                    </div>


                    <div className={H.userCards}>

                        <div className={H.userCard}>

                            <div className={H.userCardIcon}>
                                <i className="bi bi-person-fill-gear"></i>
                            </div>

                            <h3>Administrators</h3>

                            <p>
                                Manage hospital operations, staff information,
                                patient information and system settings.
                            </p>

                            <div className={H.userLine}></div>

                            <span>Management & Control</span>

                        </div>


                        <div className={H.userCard}>

                            <div className={H.userCardIcon}>
                                <i className="bi bi-person-badge-fill"></i>
                            </div>

                            <h3>Doctors</h3>

                            <p>
                                Access relevant patient information and work with
                                medical records to support patient care.
                            </p>

                            <div className={H.userLine}></div>

                            <span>Medical Care</span>

                        </div>


                        <div className={H.userCard}>

                            <div className={H.userCardIcon}>
                                <i className="bi bi-heart-pulse-fill"></i>
                            </div>

                            <h3>Nurses</h3>

                            <p>
                                Support daily patient care while accessing the
                                information required for their responsibilities.
                            </p>

                            <div className={H.userLine}></div>

                            <span>Patient Support</span>

                        </div>

                    </div>

                </section>


                {/* =====================================================
                    SIMPLE WORKFLOW
                ===================================================== */}

                <section className={H.workflowSection}>

                    <div className={H.workflowHeading}>

                        <span className={H.sectionLabel}>
                            SIMPLE WORKFLOW
                        </span>

                        <h2>
                            From patient arrival
                            <span> to organized care.</span>
                        </h2>

                    </div>


                    <div className={H.workflow}>

                        <div className={H.workflowItem}>

                            <div className={H.workflowNumber}>01</div>

                            <i className="bi bi-person-plus-fill"></i>

                            <h3>Register</h3>

                            <p>
                                Patient information can be recorded and organized
                                from the beginning of their hospital journey.
                            </p>

                        </div>


                        <div className={H.workflowConnector}></div>


                        <div className={H.workflowItem}>

                            <div className={H.workflowNumber}>02</div>

                            <i className="bi bi-clipboard2-pulse-fill"></i>

                            <h3>Assess</h3>

                            <p>
                                Healthcare staff can work with the information
                                required to understand the patient's needs.
                            </p>

                        </div>


                        <div className={H.workflowConnector}></div>


                        <div className={H.workflowItem}>

                            <div className={H.workflowNumber}>03</div>

                            <i className="bi bi-file-earmark-medical-fill"></i>

                            <h3>Record</h3>

                            <p>
                                Relevant medical information can be documented
                                in a structured and organized manner.
                            </p>

                        </div>


                        <div className={H.workflowConnector}></div>


                        <div className={H.workflowItem}>

                            <div className={H.workflowNumber}>04</div>

                            <i className="bi bi-check-circle-fill"></i>

                            <h3>Manage</h3>

                            <p>
                                Hospital teams can continue managing activities
                                while keeping important information organized.
                            </p>

                        </div>

                    </div>

                </section>


                {/* =====================================================
                    INFORMATION SECTION
                ===================================================== */}

                <section className={H.infoSection}>

                    <div className={H.infoContent}>

                        <span className={H.sectionLabel}>
                            HEALTHCARE + TECHNOLOGY
                        </span>

                        <h2>
                            Better organization means
                            <span> better workflows.</span>
                        </h2>

                        <p>
                            Aurelia Care is designed to bring different areas of
                            hospital management together. Instead of relying on
                            scattered information, staff can work within one
                            structured environment.
                        </p>

                        <p>
                            From administrators managing hospital operations to
                            doctors and nurses supporting patients, every part of
                            the system is designed with simplicity and organization
                            in mind.
                        </p>

                        <div className={H.infoHighlights}>

                            <div>
                                <strong>
                                    <i className="bi bi-shield-check"></i>
                                </strong>
                                <span>Secure Environment</span>
                            </div>

                            <div>
                                <strong>
                                    <i className="bi bi-grid-1x2-fill"></i>
                                </strong>
                                <span>Organized Workspace</span>
                            </div>

                            <div>
                                <strong>
                                    <i className="bi bi-lightning-charge-fill"></i>
                                </strong>
                                <span>Efficient Workflow</span>
                            </div>

                        </div>

                    </div>


                    <div className={H.infoPanel}>

                        <div className={H.panelHeader}>
                            <span>Hospital Environment</span>
                            <i className="bi bi-activity"></i>
                        </div>

                        <div className={H.panelRow}>
                            <div className={H.panelIcon}>
                                <i className="bi bi-people"></i>
                            </div>

                            <div>
                                <strong>Patients</strong>
                                <span>Information organized</span>
                            </div>

                            <i className="bi bi-check-circle-fill"></i>
                        </div>


                        <div className={H.panelRow}>
                            <div className={H.panelIcon}>
                                <i className="bi bi-person-badge"></i>
                            </div>

                            <div>
                                <strong>Medical Staff</strong>
                                <span>Connected to workflows</span>
                            </div>

                            <i className="bi bi-check-circle-fill"></i>
                        </div>


                        <div className={H.panelRow}>
                            <div className={H.panelIcon}>
                                <i className="bi bi-file-medical"></i>
                            </div>

                            <div>
                                <strong>Medical Records</strong>
                                <span>Structured information</span>
                            </div>

                            <i className="bi bi-check-circle-fill"></i>
                        </div>


                        <div className={H.panelRow}>
                            <div className={H.panelIcon}>
                                <i className="bi bi-calendar-check"></i>
                            </div>

                            <div>
                                <strong>Appointments</strong>
                                <span>Daily activities managed</span>
                            </div>

                            <i className="bi bi-check-circle-fill"></i>
                        </div>

                    </div>

                </section>


                {/* =====================================================
                    CTA
                ===================================================== */}

                <section className={H.ctaSection}>

                    <div className={H.ctaGlow}></div>

                    <div className={H.ctaContent}>

                        <span className={H.ctaLabel}>
                            GET STARTED WITH AURELIA CARE
                        </span>

                        <h2>
                            Ready to bring your
                            <span> hospital together?</span>
                        </h2>

                        <p>
                            Explore the plans available for your hospital and
                            discover a simpler way to manage everyday healthcare
                            operations.
                        </p>

                        <button className={H.ctaButton} onClick={() => (window.location.href = "/pricing")}>
                            Get Started
                            <i className="bi bi-arrow-right"></i>
                        </button>

                    </div>

                </section>

            </main>


            {/* =====================================================
                FOOTER
            ===================================================== */}

            <footer className={H.footer}>

                <div className={H.footerBrand}>

                    <div className={H.logoArea}>

                        <div className={H.logoIcon}>
                            <i className="bi bi-heart-pulse-fill"></i>
                        </div>

                        <div>
                            <h2>Aurelia Care</h2>
                            <span>Hospital Management System</span>
                        </div>

                    </div>

                    <p>
                        Simple technology for better organized healthcare.
                    </p>

                </div>


                <div className={H.footerInfo}>

                    <span>
                        <i className="bi bi-shield-check"></i>
                        Secure Hospital Management
                    </span>

                    <span>
                        <i className="bi bi-heart-pulse"></i>
                        Built for Better Care
                    </span>

                </div>


                <div className={H.footerBottom}>

                    <span>
                        © 2026 Aurelia Care Hospital.
                        All rights reserved.
                    </span>

                    <span>
                        Hospital Management System
                    </span>

                </div>

            </footer>

        </div>
    );
}

export default Landingpage;