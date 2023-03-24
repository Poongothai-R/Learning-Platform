

export function progressBar(event,fileButton){
        let fileSize = 0;
        let fileMb = 0;

    if (event.target.files.length > 0) {
        for (let i = 0; i < event.target.files.length; i++) {
            fileSize = event.target.files[i].size + fileSize;
            fileMb = fileSize / 1024 ** 2;
        }

        if (fileMb > 50) {
            fileButton.style.border = "2px solid red";
            alert('Please select overall file size should be less than 50MB')
        }
        else {
            fileButton.style.border = "none";

        }
    }
}