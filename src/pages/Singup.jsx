import { useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import form from "../data/form-fields.json";
import InputField from "../components/InputField";
import { createAccount } from "../scripts/auth";
import { createDocument } from "../scripts/fireStore";

export default function Signup() {
    const formRef = useRef(null);
    const Navigate = useNavigate();
    async function onSubmit(event) {
        event.preventDefault();
        const email = formRef.current[3].value;
        const password = formRef.current[4].value;
        const result = await createAccount(email, password);
        // result.status ? await createDocument('profile',data):onFailure(result);
        
        result.status ? onSuccess(result,event) : onFailure(result);
    }
    async function onSuccess(result,event) {
        // Refactor note: store the uid in the context api (in the future)
        const data ={
            "firstName":formRef.current[0].value,
            "lastName":formRef.current[1].value,
            "gender":formRef.current[2].value,
            "email":formRef.current[3].value,
            "isTeacher":false,
            "uid":result.payload
        };
        let document = await createDocument('profile',data);
        console.log(document);
        event.target.reset();
        Navigate("/login");
        alert('Account created!');
    }

    function onFailure(result,event) {
        alert(`Cannot create an account, ${result.message}`);
    }


    return (
        <div id="signup">
            <div className="signup-page">
                <h1>Newbie</h1>
                <span>Create your account here!</span>
                <form className="signup-form" ref={formRef} onSubmit={(event) => onSubmit(event)}>
                    <InputField settings={form.FirstName} />
                    <InputField settings={form.LastName} />
                    <label htmlFor="gender">Gender: <select name="gender">
                            <option value="Male">Male</option> <option value="Female">Female</option> <option value="Transgender">Other</option>
                        </select></label>
                    <InputField settings={form.Email} />
                    <InputField settings={form.Password} />
                    <button className="signup-btn">SignUp</button>
                </form>
                <Link to="/login" className="login-link">Already have an account?</Link>
            </div>
        </div>
    )
}