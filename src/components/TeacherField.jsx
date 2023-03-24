import {RiDeleteBinLine, RiFileEditLine} from "react-icons/ri";
import {Link, useNavigate} from "react-router-dom";
import {deleteAction} from "../scripts/deleteAction";
import {useCourse} from "../state/useCourse";


export default function TeacherField({data}){

    const { courseData, setCourseData } = useCourse();
    const Navigate = useNavigate();

    async function deleteCourse(id) {
        await deleteAction(data,id);
        const newDataSet = courseData.filter((recs) => recs.id !== id);
        setCourseData(newDataSet);
        Navigate("/contentpage");
    }

    return(
        <div>
            <button className="deleteCourse-btn" onClick={() => deleteCourse(data.id)} >
                <RiDeleteBinLine className="reacticons" />
            </button>
            <Link className="updateCourse-btn" to="/updatecourse" state={{ data }}>
                <RiFileEditLine className="reacticons" />
            </Link>
        </div>
    );
}