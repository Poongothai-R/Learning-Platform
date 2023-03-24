import { Link } from "react-router-dom";

import TeacherField from "./TeacherField";


export default function CourseItem({ data, profile }) {

    const { courseName, courseImage, courseDesc } = data;

    return (
        <div className="course-card" key={data.id}> 
            <h1>{courseName}</h1>
            <img src={courseImage} alt={courseName} />
            <p>{courseDesc}</p>
            {(profile.isTeacher !== false) && <TeacherField data={data}/>}
            <Link to="/coursedetail" state={{data}} className="card-click"/>
        </div>
    );
}