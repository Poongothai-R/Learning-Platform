// Node modules
import { createContext, useContext, useState, } from "react";

// Properties
const Context = createContext();

export function UserProvider({ children, storageKey }) {
    // Local state
    const [uid, setUid] = useState(loadUID(storageKey));
    const [profileData, setProfileData] = useState([]);
    const [courseData, setCourseData] = useState([]);
    const [isTeacher, setIsTeacher] = useState(false);
    // Properties
    const value = { uid, setUid, saveUID, profileData, setProfileData, courseData, setCourseData, isTeacher, setIsTeacher };

    // Pure
    function loadUID(storageKey) {
        const data = localStorage.getItem(storageKey);

        // console.log("loadUID storageKey", storageKey);
        // console.log("loadUID data", data);

        return data;
    }

    // Impure
    function saveUID(uid) {
        // console.log("saveUID storageKey", storageKey);
        // console.log("saveUID uid", uid);
        localStorage.setItem(storageKey, uid);
    }

    return <Context.Provider value={value}>{children}</Context.Provider>;
}

export function useUser() {
    // Properties
    const context = useContext(Context);

    // Safeguard
    if (!context) throw new Error("useUser() must be used within <UserProvider>");

    return context;
}
