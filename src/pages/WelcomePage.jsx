import { Link } from "react-router-dom";
import FocusImage from "../assets/focus-title.jpg";

export default function WelcomePage() {
    return (
        <div id="welcomepage" >
            <div className="welcome-page">
                <div className="welcome-container">
                    <h1>Take control of yourself</h1>
                    <p>Build in-demand skills in everything from cybersecurity to software development. And then use those skills to confidently
                        take your career—and your take-home pay—to the next level.</p>

                </div>
                <img src={FocusImage} alt="Focus title" />
                <div className="link-btn">
                    <Link to="/login">LogIn</Link>
                    <Link to="/signup">SignUp</Link>
                </div>
            </div>
        </div>
    );
}