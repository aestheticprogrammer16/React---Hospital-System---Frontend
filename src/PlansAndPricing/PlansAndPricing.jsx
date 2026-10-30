import React from "react";
import P from "./PlansAndPricing.module.css";
import { Helmet } from 'react-helmet-async'
function PlansAndPricing() {
    return (
        <div className={P.plansPage}>
            <Helmet>
                <title>
                    Plans and Pricing || 💰
                </title>
            </Helmet>
            {/* =====================================================
                PAGE HEADER
            ===================================================== */}
            <section className={P.pageHeader}>

                <div className={P.headerIcon} onClick={() => (window.location.href = "/")}>
                    <i className="bi bi-credit-card-2-front"></i>
                </div>

                <div>
                    <span className={P.pageLabel}>
                        <i className="bi bi-stars"></i>
                        SIMPLE & TRANSPARENT
                    </span>

                    <h1>Plans & Pricing</h1>

                    <p>
                        Everything your hospital needs to manage patients,
                        medical records, reports, users, and daily operations
                        in one simple system.
                    </p>
                </div>
            </section>


            {/* =====================================================
                PRICING SECTION
            ===================================================== */}

            <section className={P.pricingSection}>

                <div className={P.pricingIntro}>
                    <span>
                        <i className="bi bi-shield-check"></i>
                        One complete plan
                    </span>

                    <h2>
                        Simple pricing for your hospital
                    </h2>

                    <p>
                        No confusing packages or unnecessary features.
                        You get the complete hospital management system
                        in one plan.
                    </p>
                </div>


                {/* =================================================
                    SINGLE PLAN
                ================================================= */}

                <div className={P.planWrapper}>

                    <div className={P.planCard}>

                        <div className={P.planGlow}></div>

                        {/* PLAN TOP */}

                        <div className={P.planTop}>

                            <div className={P.planIcon}>
                                <i className="bi bi-hospital"></i>
                            </div>

                            <div className={P.planName}>
                                <span>COMPLETE ACCESS</span>

                                <h3>
                                    Hospital Management Plan
                                </h3>
                            </div>

                            <div className={P.popularBadge}>
                                <i className="bi bi-check-circle-fill"></i>
                                Full Plan
                            </div>

                        </div>


                        {/* PRICE */}

                        <div className={P.priceArea}>

                            <span className={P.priceLabel}>
                                Starting at
                            </span>

                            <div className={P.price}>
                                <span className={P.currency}>
                                    GH₵
                                </span>

                                <strong>
                                    120.00
                                </strong>

                                <span className={P.pricePeriod}>
                                    / month
                                </span>
                            </div>

                            <p className={P.priceNote}>
                                Contact the hospital administrator
                                for your actual subscription arrangement.
                            </p>

                        </div>


                        {/* DESCRIPTION */}

                        <div className={P.planDescription}>

                            <h4>
                                Everything included
                            </h4>

                            <p>
                                Your hospital gets access to the complete
                                system without having to choose between
                                different feature packages.
                            </p>

                        </div>


                        {/* FEATURES */}

                        <div className={P.featuresGrid}>

                            <div className={P.featureItem}>
                                <div className={P.featureIcon}>
                                    <i className="bi bi-speedometer2"></i>
                                </div>

                                <div>
                                    <strong>Dashboard</strong>
                                    <span>
                                        Overview of hospital activities
                                    </span>
                                </div>
                            </div>


                            <div className={P.featureItem}>
                                <div className={P.featureIcon}>
                                    <i className="bi bi-people"></i>
                                </div>

                                <div>
                                    <strong>Patient Management</strong>
                                    <span>
                                        Add, update and manage patients
                                    </span>
                                </div>
                            </div>


                            <div className={P.featureItem}>
                                <div className={P.featureIcon}>
                                    <i className="bi bi-file-medical"></i>
                                </div>

                                <div>
                                    <strong>Medical Records</strong>
                                    <span>
                                        Keep organized patient records
                                    </span>
                                </div>
                            </div>


                            <div className={P.featureItem}>
                                <div className={P.featureIcon}>
                                    <i className="bi bi-file-earmark-text"></i>
                                </div>

                                <div>
                                    <strong>Reports</strong>
                                    <span>
                                        Prepare and print patient reports
                                    </span>
                                </div>
                            </div>


                            <div className={P.featureItem}>
                                <div className={P.featureIcon}>
                                    <i className="bi bi-person-badge"></i>
                                </div>

                                <div>
                                    <strong>User Management</strong>
                                    <span>
                                        Manage doctors, nurses and users
                                    </span>
                                </div>
                            </div>


                            <div className={P.featureItem}>
                                <div className={P.featureIcon}>
                                    <i className="bi bi-gear"></i>
                                </div>

                                <div>
                                    <strong>Hospital Settings</strong>
                                    <span>
                                        Manage hospital information
                                    </span>
                                </div>
                            </div>


                            <div className={P.featureItem}>
                                <div className={P.featureIcon}>
                                    <i className="bi bi-search"></i>
                                </div>

                                <div>
                                    <strong>Quick Search</strong>
                                    <span>
                                        Quickly find patient information
                                    </span>
                                </div>
                            </div>


                            <div className={P.featureItem}>
                                <div className={P.featureIcon}>
                                    <i className="bi bi-shield-lock"></i>
                                </div>

                                <div>
                                    <strong>Secure Access</strong>
                                    <span>
                                        Controlled access for hospital users
                                    </span>
                                </div>
                            </div>

                        </div>


                        {/* PLAN ACTION */}

                        <div className={P.planAction}>


                            <p>
                                <i className="bi bi-info-circle"></i>

                                Talk to your administrator about
                                activating this plan.
                            </p>

                        </div>

                    </div>

                </div>

            </section>


            {/* =====================================================
                WHY ONE PLAN
            ===================================================== */}

            <section className={P.whySection}>

                <div className={P.whyHeader}>

                    <span>
                        <i className="bi bi-lightbulb"></i>
                        WHY ONE PLAN?
                    </span>

                    <h2>
                        Everything your hospital needs,
                        without the confusion.
                    </h2>

                    <p>
                        Instead of separating important hospital
                        functions into different packages, the system
                        keeps the essential tools together.
                    </p>

                </div>


                <div className={P.whyGrid}>

                    <div className={P.whyCard}>

                        <i className="bi bi-check2-all"></i>

                        <h3>
                            Complete system
                        </h3>

                        <p>
                            All major hospital management features
                            are available within one system.
                        </p>

                    </div>


                    <div className={P.whyCard}>

                        <i className="bi bi-layout-text-window-reverse"></i>

                        <h3>
                            Easy to understand
                        </h3>

                        <p>
                            Staff can quickly find the tools and
                            information they need.
                        </p>

                    </div>


                    <div className={P.whyCard}>

                        <i className="bi bi-arrow-repeat"></i>

                        <h3>
                            Easy to manage
                        </h3>

                        <p>
                            Hospital administrators can manage
                            important system information from one place.
                        </p>

                    </div>

                </div>

            </section>


            {/* =====================================================
                BOTTOM CTA
            ===================================================== */}

            <section className={P.bottomCta}>

                <div className={P.bottomCtaIcon}>
                    <i className="bi bi-hospital"></i>
                </div>
                <h2>
                    Ready to manage your hospital better?
                </h2>
                <p>
                    Get your hospital started with a simple,
                    organized and easy-to-use management system.
                </p>
                <button className={P.bottomButton} onClick={() => (window.location.href = "/login")}>
                    Login
                    <i className="bi bi-arrow-right"></i>
                </button>
            </section>
        </div>
    );
}

export default PlansAndPricing;