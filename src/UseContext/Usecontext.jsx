import { createContext, useState } from "react";

export const Hospitalsystemcontext = createContext();

function Hospitalprovider({ children }) {

    const [refreshPatientFolders, setRefreshPatientFolders] = useState(null);

    return (
        <Hospitalsystemcontext.Provider
            value={{
                refreshPatientFolders,
                setRefreshPatientFolders
            }}
        >
            {children}
        </Hospitalsystemcontext.Provider>

    )

}
export default Hospitalprovider;