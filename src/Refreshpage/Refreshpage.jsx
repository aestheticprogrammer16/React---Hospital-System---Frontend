import RFP from "./Refreshpage.module.css";

function Refreshpage() {
    
    return (
        <div className={RFP.refreshNotice}>
            <div className={RFP.icon}>
                <i className="bi bi-check-circle-fill"></i>
            </div>
            <div className={RFP.content}>
                <strong>Page reloaded</strong>
                <span>The page has been refreshed successfully.</span>
            </div>
        </div>
    );
}

export default Refreshpage;
