// Project files
import { useUser } from "../state/UserState";
import { useNavigate } from "react-router-dom";


export default function ContentPage() {
    // Global state
    const { setUid, saveUID } = useUser();
    const Navigate = useNavigate();

    // Method
    function onLogout() {
        saveUID("");
        setUid("");
        Navigate("/");
    }

    return (
        <div>
            <h1> welcome to content page</h1>
            <button className="addCourse-btn" onClick={()=>Navigate("/addcourse")}>Add Course</button>
            <button onClick={() => onLogout()}>Logout</button>
        </div>
    );
}