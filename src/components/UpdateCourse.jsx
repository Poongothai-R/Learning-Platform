import { useState, useEffect } from "react";
import  FormGeneratorData from "../data/course.json";
import FormFieldGenerator from "./FormFieldGenerator";
import { useLocation } from "react-router-dom";
import { useUser } from "../state/UserState";
import { useNavigate } from "react-router-dom";
import {updateCourse} from "../scripts/updateCourse";

export default function UpdateCourse() {
    const [form, setForm] = useState({ courseName: "", courseDesc: "",
        courseImage: null, docFiles: null, videoFiles: null });
    const location = useLocation();
    const data = location.state.data;
    const {courseData, setCourseData } = useUser();
    const Navigate = useNavigate();

    useEffect(() => {
        setForm({ courseName: data.courseName, courseDesc: data.courseDesc,
            courseImage: null, docFiles: null, videoFiles: null })
    }, []);

    async function onSubmit(event) {
        event.preventDefault();
        document.getElementById("updateCourse-submit").disabled = true;
       const result= await updateCourse({form},data,courseData);
       setCourseData(result);
        document.getElementById("updateCourse-submit").disabled = false;
        Navigate("/contentpage");
    }


    return (
        <div id="updatecourse">
            <h1>Welcome to update course form.</h1>
            <form className="updatecourse-form" onSubmit={(event) => onSubmit(event)}>
                <FormFieldGenerator data={FormGeneratorData} state={[form, setForm]} />
                <button className="course-update-btn" id="updateCourse-submit" >submit</button>
            </form>
        </div>
    )
}