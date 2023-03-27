import { useNavigate } from "react-router-dom";
import { useUser } from "../state/useUser";
import CourseItem from "../components/CourseItem";
import { useCourse } from "../state/useCourse";
import { useProfile } from "../state/useProfile";
import TeacherCourse from "./TeacherCourse";

// good
export default function ContentPage() {
  const Navigate = useNavigate();
  const { saveUID, setUid, uid, setIsTeacher, saveTeacher } = useUser();
  const { status, courseData } = useCourse();
  const { profileData } = useProfile();
  const profile = profileData.find((item) => item.uid === uid);

  function onLogout() {
    // save and setUID could not be combined?
    saveUID("");
    setUid("");
    saveTeacher(false);
    setIsTeacher(false);
    Navigate("/");
  }

  const CourseItems =
    status === 1 &&
    courseData.map((recs) => (
      <CourseItem key={recs.id} data={recs} profile={profile} />
    ));

  return (
    <div id="contentpage">
      {status === 0 && <p>Loading... </p>}
      {status === 1 && (
        <div className="contentpage">
          <h1 id="contenthead"> welcome to content page</h1>
          <div className="course-data">
            {courseData.length > 0 ? (
              CourseItems
            ) : (
              <h1>No Course available.</h1>
            )}
          </div>
          <div className="btns">
            {profile.isTeacher === true && <TeacherCourse />}
            <button className="logout-btn" onClick={() => onLogout()}>
              Logout
            </button>
          </div>
        </div>
      )}
      {status === 2 && <p>Error</p>}
    </div>
  );
}
