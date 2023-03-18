import { useState } from "react";
import FormFieldGenerator from "./FormFieldGenerator";
import courseData from "../data/course.json";
import { ImageProcess } from "../scripts/imageProcess";
import { uploadResumableFile } from "../scripts/cloudStorage"

export default function AddCourse() {
    const [form, setForm] = useState({ courseName: "", courseDesc: "", courseImage: null, docFiles: null, videoFiles: null });
    const courseImageFolder = 'courseImages';
    const courseDocFileFolder = 'docFiles';
    const courseVideoFileFolder = 'videoFiles';
    // let keepImage = true;
    let image;

    async function onSubmit(event) {
        event.preventDefault();
        console.log(form);

        if ((form.courseImage !== undefined) && (form.courseImage !== null)) {
            console.log(form.courseImage[0]);
            image = await ImageProcess(form.courseImage[0], courseImageFolder);
            // keepImage = false;   
        }

        if ((form.docFiles !== undefined) && (form.docFiles !== null)) {
            for (let i = 0; i < form.docFiles.length; i++) {
                const filePath = `${courseDocFileFolder}/${Date.now()}_${form.docFiles[i].name}`;
                const docFileURL = await uploadResumableFile(form.docFiles[i], filePath);
            }
        }

        if ((form.videoFiles !== undefined) && (form.videoFiles !== null)) {
            for (let i = 0; i < form.videoFiles.length; i++) {
                const filePath = `${courseVideoFileFolder}/${Date.now()}_${form.videoFiles[i].name}`;
                const videoFileURL = await uploadResumableFile(form.videoFiles[i], filePath);
            }
        }
        event.target.reset();
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