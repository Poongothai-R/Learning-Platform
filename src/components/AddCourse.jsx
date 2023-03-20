import { useState } from "react";
import FormFieldGenerator from "./FormFieldGenerator";
import courseData from "../data/course.json";
import { useNavigate } from "react-router-dom";
import {updateCourse} from "../scripts/updateCourse";

export default function AddCourse() {
    const [form, setForm] = useState({ courseName: "", courseDesc: "",
        courseImage: null, docFiles: null, videoFiles: null });
    const Navigate = useNavigate();


    async function onSubmit(event) {
        event.preventDefault();
        document.getElementById("addCourse-submit").disabled=true;
        const result = await updateCourse({form},null,null);
        document.getElementById("addCourse-submit").disabled=false;
        // setForm({ courseName: "", courseDesc: "", courseImage: "", docFiles: "", videoFiles: "" });
        Navigate("/contentpage");
    }



    return (
        <div id="addcourse">
            <h1>Welcome to add course form.</h1>
            <form className="addcourse-form" onSubmit={(event) => onSubmit(event)}>
                <FormFieldGenerator data={courseData} state={[form, setForm]} />
                <button className="course-submit-btn" id="addCourse-submit" >submit</button>
            </form>
        </div>
    )
}