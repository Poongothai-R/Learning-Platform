import {AiOutlineFileAdd} from "react-icons/ai";
import {useNavigate} from "react-router-dom";


export default function TeacherCourse(){

    const Navigate = useNavigate();

    return(
      <div>
          <button className="addCourse-btn" onClick={() => Navigate("/addcourse")}>
              <AiOutlineFileAdd className="react-icon" />
              <span>Add Course</span>
          </button>}
          <button className="manageStudent-btn" onClick={() => Navigate("/managestudent")}>
              Manage Student
          </button>
      </div>
    );
}