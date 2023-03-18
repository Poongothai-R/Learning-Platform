import { useRef } from "react";
import form from "../data/form-fields.json";
import LoginImage from "../assets/login-hero.png";
import InputField from "../components/InputField";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../scripts/auth";
import { useUser } from "../state/UserState";



export default function Login() {
    const navigate = useNavigate();
    const formRef = useRef(null);
    const { setUid, profileData } = useUser();
    async function onSubmit(event) {
        event.preventDefault();
        const email = formRef.current[0].value;
        const password = formRef.current[1].value;
        const result = await login(email, password);
        result.status ? onSuccess(result) : onFailure(result);
    }
    
    function onSuccess(result) {
        // Refactor note: store the uid in the context api (in the future)
        // if (remember) {
        //     console.log("Login.jsx preparing to save...", result.payload);
        //     saveUID(result.payload);
        //   }
        const profile = profileData.find((item) => item.uid === result.payload);
        
        if (profile.isTeacher){
            console.log("You're a teacher!")
        }

        setUid(result.payload);
        navigate("/contentpage");

    }

    function onFailure(result) {
        alert(`Cannot create an account, ${result.message}`);
    }
    return (
        <div id="login">
            <div className="login-hero-img"><img src={LoginImage} alt="Login screen" /> </div>
            <div className="login-form">
                <h1>Sign-In</h1>
                <span>to continue to Newbie</span>
                <form className="input-form" ref={formRef} onSubmit={(event) => onSubmit(event)}>
                    <InputField settings={form.Email} />
                    <InputField settings={form.Password} />
                    <button className="login-btn">LogIn</button>
                </form>
                <div className="links">
                    <Link to="/recoverpassword"> Forgot Password? </Link>
                    <Link to="/signup"> Create an account </Link>
                </div>
            </div>
        </div>
    );
}