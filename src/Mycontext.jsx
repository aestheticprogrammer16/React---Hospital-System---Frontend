import { createContext, useState } from "react"
export const MyContext = createContext()

function Context({ children }) {
    const [active100, setActive100] = useState(false)
    const [active01, setActive01] = useState(false)
    const [activeRR, setActiveRR] = useState(false)

    const [fetchedNotifications, setFetchedNotifications] = useState(null)

    return (
        <MyContext.Provider value={{ active01, setActive01, active100, setActive100, fetchedNotifications, setFetchedNotifications, activeRR, setActiveRR }}>
            {children}
        </MyContext.Provider>
    )
}

export default Context;