import {progressBar} from "../scripts/progressBar";

export default function InputFile({ item, state }) {
    const [form, setForm] = state;
    const formKey = [item.key];

    async function validateFileSize(event) {

        let fileButton = document.getElementById(item.key);
        await progressBar(event, fileButton);
        setForm({ ...form, [formKey]: event.target.files });
    }


    return (
        <label className="input-field">
            {item.label}
            {item.multiple ?
                <input
                    onChange={(event) => validateFileSize(event)}
                    id={item.key}
                    type={item.type}
                    required={item.required}
                    disabled={item.disabled}
                    placeholder={item.placeholder}
                    accept={item.accept}
                    multiple
                /> :
                <input
                    onChange={(event) => validateFileSize(event)}
                    id={item.key}
                    type={item.type}
                    required={item.required}
                    disabled={item.disabled}
                    placeholder={item.placeholder}
                    accept={item.accept}
                />
            }
        </label>

    );
}