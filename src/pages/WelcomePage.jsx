import FocusImage from "../assets/focus-title.jpg";
import { Link } from "react-router-dom";
import { useProfile } from "../state/useProfile";

export default function WelcomePage() {
  const { profileData, status } = useProfile();

  return (
    // id welcomepage and class welcome-page can lead to confusion
    // pick better names
    <div id="welcomepage">
      {status === 0 && <p className="loading">Loading... </p>}
      {status === 1 && (
        <div>
          <div className="welcome-page">
            <div className="welcome-container">
              <h1>Looking for a change? </h1>
              <p>
                It’s never a bad time to up skill yourself on something that
                your heart desires. You got passion, we got the courses for you
                to train and excel at your phase. It’s there for you 24/7..
                Welcome to you next learning journey!
              </p>
            </div>
            <img src={FocusImage} alt="Focus title" />
          </div>
          <div className="link-btn">
            <Link to={"/login"} state={{ profileData }}>
              LogIn
            </Link>
            <Link to={"/signup"} state={{ profileData }}>
              SignUp
            </Link>
          </div>
        </div>
      )}
      {status === 2 && <p>Error</p>}
    </div>
  );
}
