
import { useState } from "react";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai"
export default function InputField({ settings, }) {
    // safeguard
    if (settings === undefined) throw new Error("The setting prop is missing");
    const { label, type, placeholder, required, autoFocus, accept, id } = settings;;
    const [showPassword, setShowPassword] = useState(false);
    function handlePasswordView() {
        var x = document.getElementById("passwordField");
        if (x.type === "password") {
            x.type = "text";
            setShowPassword(true);
        } else {
            x.type = "password";
            setShowPassword(false);
        }
    }
    return (
        <label className="input_field">
            {label}
            {type !== 'file' &&
                <input
                    type={type}
                    placeholder={placeholder}
                    required={required}
                    autoFocus={autoFocus}
                    id={id}
                />
            }
            {(type === 'password') &&
                <div className="eye-btn" onClick={() => handlePasswordView()}>
                    {(!showPassword) ? <AiFillEyeInvisible /> : <AiFillEye />}
                </div>
            }
            {type === 'file' &&
                <input
                    type={type}
                    placeholder={placeholder}
                    required={required}
                    autoFocus={autoFocus}
                    accept={accept}
                />
            }
        </label>
    );
}