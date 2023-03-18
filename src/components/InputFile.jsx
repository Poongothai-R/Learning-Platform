
export default function InputFile({ item, state }) {
    const [form, setForm] = state;

    // Properties
    const formKey = [item.key];

    function validateFileSize(event) {
        let fileSize=0, fileMb = 0;

        if (event.target.files.length > 0) {
            for (let i = 0; i < event.target.files.length; i++) {
                fileSize = event.target.files[i].size + fileSize;
                fileMb = fileSize / 1024 ** 2;
            }
            console.log(fileMb);
            let formSubmit = document.getElementById("addCourse-submit");
            if (fileMb > 15) {
                formSubmit.disabled = true;
                alert('Please select overall file size should be less than 50MB')
            }
            else {
                formSubmit.disabled = false;
                setForm({ ...form, [formKey]: event.target.files });
            }
        }
    }

    return (
        <label className="input-text">
            {item.label}
            {item.multiple ?
                <input
                    onChange={(event) => validateFileSize(event)}
                    // setForm({...form, [formKey]: event.target.files}) }
                    // Common properties
                    type={item.type}
                    required={item.required}
                    disabled={item.disabled}
                    placeholder={item.placeholder}
                    accept={item.accept}
                    multiple
                /> :
                <input
                    onChange={(event) => validateFileSize(event)}
                    // setForm({...form, [formKey]: event.target.files[0]})}
                    // Common properties
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