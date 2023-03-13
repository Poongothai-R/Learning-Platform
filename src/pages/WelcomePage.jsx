import HeroImage from "../assets/welcomescreen_img1.jpg"
import { Link } from "react-router-dom";

export default function WelcomePage() {
    return (
        <div id="welcomescreen" className="welcome-page">
            <h1>Welcome to Career Growth</h1>
            <div className="welcome-container">
                <img src={HeroImage} alt="study" />
                <div className="desc-section">
                    <h2>Take control of your career</h2>
                    <p>Build in-demand skills in everything from cybersecurity to software development. And then use those skills
                        to confidently take your career—and your take-home pay—to the next level.</p>
                </div>
            </div>
            <div className="link-btn">
                <Link to="/">Login</Link>
                <Link to="/">SignUp</Link>
            </div>
        </div>
    )
}