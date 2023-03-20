import { useUser } from "../state/UserState";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { readDocuments } from "../scripts/fireStore";
import CourseItem from "../components/CourseItem";


export default function ContentPage() {
    // Global state
    const { setUid, saveUID, courseData, setCourseData,setIsTeacher, isTeacher } = useUser();
    const Navigate = useNavigate();
    const courseCollection = 'course';

    useEffect(() => {
        const loadData = async (collectionName) => {
            const data = await readDocuments(collectionName).catch(onFail);
            onSuccess(data);
        }
        loadData(courseCollection);
    }, []);

    function onSuccess(data) {
        setCourseData(data);
    }

    function onFail() {
        console.error();
    }

    function onLogout() {
        saveUID("");
        setUid("");
        setIsTeacher(false);
        Navigate("/");
    }

    const CourseItems = courseData.map((recs) => (
        <CourseItem key={recs.id} data={recs} />));

    return (
        <div>
            <h1> welcome to content page</h1>
            <div className="course-data">{
                (courseData.length > 0) ? CourseItems : <h1>No Course available.</h1>
            }</div>
            { isTeacher && <button className="addCourse-btn" onClick={() => Navigate("/addcourse")}>Add Course</button>}
            { isTeacher && <button className="manageStudent-btn" onClick={() => Navigate("/addcourse")}>Manage Student</button>}
            <button onClick={() => onLogout()}>Logout</button>
        </div>
    );
}