import { createContext, useState, useEffect } from "react"
import axios from "axios";

const API = import.meta.env.VITE_HOSTING_API;
export const MyContext = createContext()

function Context({ children }) {
    const [active100, setActive100] = useState(false)
    const [active01, setActive01] = useState(false)
    const [activeRR, setActiveRR] = useState(false)
    const [hospitalName, setHospitalName] = useState("");
    const [buttonPermissons, setButtonPermissons] = useState(false)

    const [fetchedNotifications, setFetchedNotifications] = useState(null)
    const [hospitalLogoUrl, setHospitalLogoUrl] = useState("");

    async function fetchSettingsOne() {
        try {
            const response = await axios.get(`${API}/login/fetchsettings`)
            const results = response.data;
            if (results.success === true) {
                const settings = results.settings;
                setHospitalName(settings.hospital_name);
                setHospitalLogoUrl(settings.hospital_logo_url)
                setButtonPermissons(settings.delete_button)
                // alert(settings.hospital_logo_url)
            } else {
                console.log(results.message)
            }
        } catch (error) {
            console.log(error.message)
        }
    }

    useEffect(() => {
        fetchSettingsOne()
    }, [])

    return (
        <MyContext.Provider
            value={
                {
                    active01,
                    setActive01,
                    active100,
                    setActive100,
                    fetchedNotifications,
                    setFetchedNotifications,
                    activeRR,
                    setActiveRR,
                    fetchSettingsOne,
                    hospitalName,
                    hospitalLogoUrl,
                    buttonPermissons
                }
            }>
            {children}
        </MyContext.Provider>
    )
}

export default Context;