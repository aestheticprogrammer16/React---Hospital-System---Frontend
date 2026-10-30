import P from './Notfound.module.css'
import { NavLink } from "react-router-dom";
import { Helmet } from 'react-helmet-async'

function Notfound() {
    return (
        <div className={P.page}>
            <Helmet>
                <title>
                    Page Not Found || 404
                </title>
            </Helmet>

            <div className={P.card}>

                {/* Animated Icon */}
                <div className={P.iconWrapper}>
                    <i className="bi bi-exclamation-triangle"></i>
                </div>

                {/* Error Code */}
                <span className={P.errorCode}>404</span>

                {/* Message */}
                <h1>Page Not Found</h1>

                <p>
                    Sorry, the page you are looking for doesn't exist,
                    has been moved, or may no longer be available.
                </p>

                {/* Actions */}
                <div className={P.actions}>
                    <NavLink >
                        <button
                            type="button"
                            onClick={() => window.history.back()}
                            className={P.backButton}
                        >
                            <i className="bi bi-arrow-left"></i>
                            Go Back
                        </button>
                    </NavLink>

                    <NavLink to="/his/dashboard">
                        <a href="/his/dashboard" className={P.dashboardButton}>
                            <i className="bi bi-house-door"></i>
                            Dashboard
                        </a>
                    </NavLink>
                </div>

                {/* Small Footer */}
                <div className={P.footer}>
                    <i className="bi bi-hospital"></i>
                    <span>Hospital Management System</span>
                </div>

            </div>

        </div>
    );
}

export default Notfound;
