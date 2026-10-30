import { useState, useEffect, useContext } from "react";
import L from "./Login.module.css";
import { Helmet } from 'react-helmet-async'
import { useNavigate } from "react-router-dom";
import loginIcon from "../assets/login_icon.png";
import axios from "axios";
const API = import.meta.env.VITE_HOSTING_API;





function Login() {
    const [active, setActive] = useState(false);
    const [active1, setActive1] = useState(false);
    const [active2, setActive2] = useState(false);
    const [active3, setActive3] = useState(false);

    const [hospitalName, setHospitalName] = useState("");
    const [hospitalLogoUrl, setHospitalLogoUrl] = useState("");


    const [inuptType, setInputType] = useState("password");
    const NavigateTO = useNavigate();


    function landingpage() {
        window.location.href = "/";
    }


    async function fetchSettingsOne() {
        try {
            const response = await axios.get(`${API}/login/fetchsettings`)
            const results = response.data;
            if (results.success === true) {
                const settings = results.settings;
                setHospitalName(settings.hospital_name);
                setHospitalLogoUrl(settings.hospital_logo_url)

            } else {
                console.log(results.message)
            }
        } catch (error) {
            console.log(error.message)
        }
    }

    useEffect(() => {
        fetchSettingsOne()
    })


    function passwordVisibilty() {
        if (inuptType === "password") {
            setInputType("text");
            setActive2(true)
        } else {
            setInputType("password");
            setActive2(false)
        }
    }


    let [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [feedback, setFeedBack] = useState("")

    async function submit(e) {
        e.preventDefault();
        email = email.trim();
        setActive(true)
        setActive1(false)
        setActive3(true)
        setFeedBack("")
        console.log(API)
        try {
            const respoonse = await axios.post(`${API}/login/`,
                {
                    email: email,
                    password: password
                }
            )

            const results = respoonse.data;
            if (results.success === true) {
                setActive(false);
                setActive1(false);
                setActive3(false)
                NavigateTO("/his/dashboard");
                console.log(results.token)
                localStorage.setItem("token", results.token);
            } else {
                setActive(false);
                setActive3(false)
                setActive1(true);
                setFeedBack(results.message)
            }

        } catch (error) {
            setActive3(false)
            console.log(error.message);
            setActive(false);
            setActive1(true);
            setFeedBack("Server error, try again later.")
            if (!navigator.onLine) {
                setFeedBack("No internet connection");
            }
        }
    }


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

    return (
        <div className={L.loginPage}>
            <Helmet>
                <title>
                    Login
                </title>
            </Helmet>
            <link rel="icon" type="image/png" href={loginIcon} />
            <div className={L.loginContainer}>

                {/* LEFT SIDE */}
                <section className={L.leftSection}>

                    <div className={L.imageOverlay}></div>

                    <img
                        src="https://images.unsplash.com/photo-1586773860418-d37222d8fce3?auto=format&fit=crop&w=1200&q=85"
                        alt="Hospital"
                        className={L.backgroundImage}
                    />

                    <div className={L.leftContent}>

                        {/* Logo */}
                        <div className={L.logoArea} onClick={landingpage}>

                            <div className={L.logo}>
                                {hospitalLogoUrl ? (
                                    <img
                                        src={hospitalLogoUrl}
                                        alt="Hospital Logo"
                                        className={L.logoImage}
                                    />
                                ) : (
                                    <i className="bi bi-heart-pulse-fill"></i>
                                )}
                            </div>

                            <div>
                                <h2>{hospitalName}</h2>
                                <span>Patient Records System</span>
                            </div>
                        </div>

                        {/* Main Message */}
                        <div className={L.heroContent} onClick={landingpage}>
                            <span className={L.smallHeading}>
                                <i className="bi bi-shield-check"></i>
                                Secure Medical Records
                            </span>

                            <h1>
                                Better records.
                                <br />
                                Better patient care.
                            </h1>

                            <p>
                                A simple and secure platform for managing
                                patient information and medical records
                                efficiently.
                            </p>
                        </div>

                        {/* Bottom Information */}
                        <div className={L.leftFooter}>
                            <div>
                                <i className="bi bi-lock-fill"></i>
                                <span>Confidential & Secure</span>
                            </div>
                            <div>
                                <i className="bi bi-clipboard2-pulse"></i>
                                <span>Patient Records</span>
                            </div>
                        </div>
                    </div>
                </section>

                {/* RIGHT SIDE */}
                <section className={L.rightSection}>
                    <form onSubmit={submit}>
                        <div className={L.loginBox}>
                            {/* Mobile Logo */}
                            <div className={L.mobileLogo} onClick={landingpage}>

                                <div className={L.mobileLogoIcon}>
                                    {hospitalLogoUrl ? (
                                        <img
                                            src={hospitalLogoUrl}
                                            alt="Hospital Logo"
                                            className={L.logoImage}
                                        />
                                    ) : (
                                        <i className="bi bi-heart-pulse-fill"></i>
                                    )}
                                </div>

                                <div>

                                    <strong>{hospitalName}</strong>
                                    <span>Patient Records System</span>
                                </div>
                            </div>


                            {/* Heading */}
                            <div className={L.loginHeading}>

                                <span className={L.welcomeText}>
                                    Welcome back
                                </span>

                                <h2>
                                    Sign in to your account
                                </h2>

                                <p>
                                    Enter your credentials to access the
                                    hospital records system.
                                </p>

                            </div>


                            {/* FORM */}


                            {/* Username */}
                            <div className={L.inputGroup}>

                                <label htmlFor="username"> Staff Username</label>
                                <div className={L.inputWrapper}>
                                    <i className={`bi bi-person ${L.inputIcon}`}></i>
                                    <input
                                        type="email"
                                        placeholder="Enter your email"
                                        required
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                </div>
                            </div>


                            {/* Password */}
                            <div className={L.inputGroup}>
                                <div className={L.labelRow}>
                                    <label htmlFor="password">
                                        Password
                                    </label>

                                    <button
                                        className={L.forgotPassword}
                                    >
                                        Forgot password?
                                    </button>
                                </div>

                                <div className={L.inputWrapper}>
                                    <i className={`bi bi-lock ${L.inputIcon}`}></i>
                                    <input
                                        id="password"
                                        type={inuptType}
                                        placeholder="Enter your password"
                                        required
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                    />
                                    <button
                                        type="button"

                                        className={L.showPassword}
                                        onClick={passwordVisibilty}
                                    >
                                        {active2 ?
                                            (
                                                <>
                                                    <i className="bi bi-eye"></i>
                                                </>
                                            ) : (
                                                <>
                                                    <i className="bi bi-eye-slash"></i>
                                                </>
                                            )
                                        }
                                    </button>
                                </div>
                            </div>


                            {/* Remember Me */}
                            <div className={L.formOptions}>
                                <label className={L.rememberMe}>
                                    <input
                                        type="checkbox"
                                    />
                                    <span>
                                        Remember me
                                    </span>
                                </label>
                            </div>
                            {active1 ?
                                (
                                    <>
                                        <div className={`${L.messageWrapper} ${L.messageWrapperOff}`}>
                                            <center><p className={L.messageT}>{feedback}</p></center>
                                        </div>
                                    </>
                                ) :
                                (
                                    <>
                                        <div className={L.messageWrapper}>
                                        </div>
                                    </>
                                )
                            }


                            <br></br>

                            {/* Login Button */}
                            <button
                                className={L.loginButton}
                                disabled={active3}
                            >
                                {active ? (
                                    <>
                                        <div className={L.spinner}></div>
                                        <span>Signing in . . .</span>
                                    </>
                                ) : (
                                    <>
                                        <span>Sign In</span>
                                        <i className="bi bi-arrow-right"></i>
                                    </>
                                )}
                            </button>
                            {/* Security Notice */}
                            <div className={L.securityNotice}>
                                <div className={L.securityIcon}>
                                    <i className="bi bi-shield-lock"></i>
                                </div>
                                <div>
                                    <strong>Authorized personnel only</strong>
                                    <p>
                                        Patient information is confidential
                                        and should only be accessed by
                                        authorized hospital staff.
                                    </p>
                                </div>
                            </div>


                            {/* Footer */}
                            <div className={L.loginFooter}>

                                <span>
                                    Hospital Records System
                                </span>

                                <span className={L.footerDot}>
                                    •
                                </span>

                                <span>
                                    Secure Access
                                </span>

                            </div>

                        </div>
                    </form>
                </section>

            </div>

        </div>
    );
}

export default Login;