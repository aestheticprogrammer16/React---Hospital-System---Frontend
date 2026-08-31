import React from "react";
import S from "./Settings.module.css";
import { Helmet } from 'react-helmet-async'

function Settings() {
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
                            ADMINISTRATION
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
                    <i className="bi bi-people"></i>
                    <span>Users & Staff</span>
                </button>

                <button className={S.settingsNavItem}>
                    <i className="bi bi-person-circle"></i>
                    <span>My Profile</span>
                </button>

                <button className={S.settingsNavItem}>
                    <i className="bi bi-shield-lock"></i>
                    <span>Security</span>
                </button>

                <button className={S.settingsNavItem}>
                    <i className="bi bi-sliders"></i>
                    <span>System Preferences</span>
                </button>

            </div>


            {/* =====================================================
                HOSPITAL INFORMATION
            ===================================================== */}

            <section className={S.settingsSection}>

                <div className={S.sectionHeader}>

                    <div>
                        <span>HOSPITAL PROFILE</span>
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
                                placeholder="Enter hospital name"
                            />
                        </div>


                        <div className={S.formGroup}>
                            <label>Hospital Registration Number</label>

                            <input
                                type="text"
                                placeholder="Enter registration number"
                            />
                        </div>


                        <div className={S.formGroup}>
                            <label>Hospital Type</label>

                            <select>
                                <option value="">
                                    Select hospital type
                                </option>

                                <option>Private Hospital</option>
                                <option>Clinic</option>
                                <option>Medical Centre</option>
                            </select>
                        </div>


                        <div className={S.formGroup}>
                            <label>Year Established</label>

                            <input
                                type="number"
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
                                placeholder="+233 XX XXX XXXX"
                            />
                        </div>


                        <div className={S.formGroup}>
                            <label>Alternative Phone</label>

                            <input
                                type="tel"
                                placeholder="Alternative contact number"
                            />
                        </div>


                        <div className={S.formGroup}>
                            <label>Email Address</label>

                            <input
                                type="email"
                                placeholder="hospital@example.com"
                            />
                        </div>


                        <div className={S.formGroup}>
                            <label>Website</label>

                            <input
                                type="url"
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
                                placeholder="Street / house address"
                            />
                        </div>


                        <div className={S.formGroup}>
                            <label>City / Town</label>

                            <input
                                type="text"
                                placeholder="Enter city or town"
                            />
                        </div>


                        <div className={S.formGroup}>
                            <label>Region</label>

                            <input
                                type="text"
                                placeholder="Enter region"
                            />
                        </div>


                        <div className={S.formGroup}>
                            <label>Country</label>

                            <input
                                type="text"
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

                            <input
                                type="text"
                                placeholder="Hospital name / report heading"
                            />
                        </div>


                        <div className={S.formGroup}>
                            <label>Report Footer</label>

                            <input
                                type="text"
                                placeholder="Confidential medical document"
                            />
                        </div>


                        <div className={`${S.formGroup} ${S.fullWidth}`}>
                            <label>Report Address</label>

                            <textarea
                                rows="3"
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

                        <div className={S.logoPreview}>
                            <i className="bi bi-hospital"></i>
                        </div>

                        <div className={S.logoUploadInfo}>
                            <strong>Hospital Logo</strong>

                            <span>
                                Recommended size: 300 × 300px
                            </span>

                            <button type="button">
                                <i className="bi bi-upload"></i>
                                Upload Logo
                            </button>
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

                    <button className={S.saveButton}>
                        <i className="bi bi-check2"></i>
                        Save Hospital Information
                    </button>

                </div>

            </section>


            {/* =====================================================
                USERS & STAFF
            ===================================================== */}

            <section className={S.settingsSection}>

                <div className={S.sectionHeader}>

                    <div>
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
                                        <div className={S.tableActions}>

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


                        <div className={S.formGroup}>
                            <label>Staff ID</label>

                            <input
                                type="text"
                                value="ADM000001"
                                readOnly
                            />
                        </div>

                    </div>


                    <div className={S.cardFooter}>

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
                SYSTEM PREFERENCES
            ===================================================== */}

            <section className={S.settingsSection}>

                <div className={S.sectionHeader}>

                    <div>
                        <span>SYSTEM</span>

                        <h2>System Preferences</h2>

                        <p>
                            Configure general behavior of the hospital system.
                        </p>
                    </div>

                    <div className={S.sectionIcon}>
                        <i className="bi bi-sliders"></i>
                    </div>

                </div>


                <div className={S.settingsCard}>

                    <div className={S.preferenceRow}>

                        <div className={S.preferenceIcon}>
                            <i className="bi bi-calendar3"></i>
                        </div>

                        <div className={S.preferenceText}>
                            <h3>Date Format</h3>

                            <p>
                                Choose how dates are displayed throughout
                                the system.
                            </p>
                        </div>
                        {/* 
                        <select>
                            <option>DD/MM/YYYY</option>
                            <option>MM/DD/YYYY</option>
                            <option>YYYY-MM-DD</option>
                        </select> */}

                    </div>


                    <div className={S.preferenceRow}>

                        <div className={S.preferenceIcon}>
                            <i className="bi bi-file-earmark-text"></i>
                        </div>

                        <div className={S.preferenceText}>
                            <h3>Report Format</h3>

                            <p>
                                Default format used when preparing
                                printable medical reports.
                            </p>
                        </div>
                        {/* 
                        <select>
                            <option>A4</option>
                            <option>Letter</option>
                        </select> */}

                    </div>


                    <div className={S.preferenceRow}>

                        <div className={S.preferenceIcon}>
                            <i className="bi bi-clock-history"></i>
                        </div>

                        <div className={S.preferenceText}>
                            <h3>Record Time Display</h3>

                            <p>
                                Display the time when a medical record was
                                created or last updated.
                            </p>
                        </div>

                        <label className={S.switch}>
                            <input
                                type="checkbox"
                                defaultChecked
                            />

                            <span></span>
                        </label>

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

        </div>
    );
}

export default Settings;