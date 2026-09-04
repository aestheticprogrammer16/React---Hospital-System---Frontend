import React, { useState } from "react";
import P from "./Recyclebin.module.css";

function Recyclebin() {

    const [searchPatient, setSearchPatient] = useState("");
    const [searchRecord, setSearchRecord] = useState("");

    return (
        <div className={P.recycleBinPage}>
            <div>
                <br className={P.b1}></br>
                <br className={P.b2}></br>
                <br className={P.b3}></br>
                <br className={P.b4}></br>
                <br className={P.b5}></br>
            </div>
            {/* =========================
                PAGE HEADER
            ========================= */}

            <div className={P.pageHeader}>
                <div className={P.headerIcon}>
                    <i className="bi bi-trash3"></i>
                </div>
                <div>
                    <h2>Recycle Bin</h2>

                    <p>
                        View, restore, or permanently remove deleted items.
                    </p>
                </div>

            </div>

            {/* =========================
                DELETED PATIENTS
            ========================= */}

            <section className={P.recycleSection}>
                <div className={P.sectionHeader}>
                    <div className={P.sectionTitle}>
                        <div className={P.sectionIcon}>
                            <i className="bi bi-person-x"></i>
                        </div>
                        <div>
                            <h3>Deleted Patient Folders</h3>
                            <p>
                                Patient folders moved to the recycle bin.
                            </p>
                        </div>
                    </div>

                    <span className={P.itemCount}>
                        0 Patients
                    </span>
                </div>

                {/* Patient Search */}

                <div className={P.searchContainer}>
                    <i className="bi bi-search"></i>
                    <input
                        type="text"
                        placeholder="Search deleted patients..."
                        value={searchPatient}
                        onChange={(e) => setSearchPatient(e.target.value)}
                    />
                </div>


                {/* Patient Items */}

                <div className={P.itemsContainer}>
                    <div className={P.emptyRecycle}>
                        <div className={P.emptyIcon}>
                            <i className="bi bi-person-check"></i>
                        </div>
                        <h4>No Deleted Patients</h4>
                        <p>
                            Patient folders moved to the recycle bin will
                            appear here.
                        </p>
                    </div>
                </div>
            </section>


            {/* =========================
                DELETED MEDICAL RECORDS
            ========================= */}

            <section className={P.recycleSection}>
                <div className={P.sectionHeader}>
                    <div className={P.sectionTitle}>
                        <div className={P.sectionIcon}>
                            <i className="bi bi-file-earmark-medical"></i>
                        </div>
                        <div>
                            <h3>Deleted Medical Records</h3>
                            <p>
                                Medical records moved to the recycle bin.
                            </p>
                        </div>
                    </div>
                    <span className={P.itemCount}>
                        0 Records
                    </span>
                </div>

                {/* Medical Record Search */}

                <div className={P.searchContainer}>
                    <i className="bi bi-search"></i>
                    <input
                        type="text"
                        placeholder="Search deleted medical records..."
                        value={searchRecord}
                        onChange={(e) => setSearchRecord(e.target.value)}
                    />
                </div>

                {/* Medical Record Items */}
                <div className={P.itemsContainer}>
                    <div className={P.emptyRecycle}>
                        <div className={P.emptyIcon}>
                            <i className="bi bi-file-earmark-check"></i>
                        </div>
                        <h4>No Deleted Medical Records</h4>
                        <p>
                            Medical records moved to the recycle bin will
                            appear here.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Recyclebin;