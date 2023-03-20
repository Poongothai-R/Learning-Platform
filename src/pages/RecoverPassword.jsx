import { Link, useNavigate} from "react-router-dom";
import { useRef } from "react";
import form from "../data/form-fields.json";
import RecoverImage from "../assets/login-hero.png";
import InputField from "../components/InputField";


// Project files
import { recoverAccount } from "../scripts/auth";

export default function RecoverPassword() {
    const formRef = useRef();
    const Navigate = useNavigate();
    // Methods
    async function onSubmit(event) {
        event.preventDefault();
        const email = formRef.current[0].value;
        const result = await recoverAccount(email);
        result.status ? onSuccess() : onFailure(result);
    }

    function onSuccess() {
        const text = "Email with a reset link sent. Please check your SPAM/Junk folder as well.";
        alert(text);
        Navigate("/login");
    }

    function onFailure(result) {
        alert(result.message);
    }


    return (
        <div id="recover">
            <div className="recover-img"><img src={RecoverImage} alt="Recover email screen" /> </div>
            <div className="recover-page">
                <h1>Newbie</h1>
                <span>Find your account</span>
                <form className="recover-form" ref={formRef} onSubmit={(event) => onSubmit(event)}>
                    <InputField settings={form.Email} />
                    <button className="recover-btn">Submit</button>
                </form>
                <Link to="/" className="cancel-btn" >Cancel</Link>
            </div>
        </div>
    );
}
