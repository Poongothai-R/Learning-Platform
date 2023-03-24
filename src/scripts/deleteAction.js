import {deleteFile} from "./cloudStorage";
import {deleteDocument} from "./fireStore";


export async function deleteAction(data,id){
    if (data.courseImage !== null) { await deleteFile(data.courseImage); }
    if (data.docFiles !== null) {
        for (let i = 0; i < data.docFiles.length; i++) {
            await deleteFile(data.docFiles[i]);
        }
    }
    if (data.videoFiles !== null) {
        for (let i = 0; i < data.videoFiles.length; i++) {
            await deleteFile(data.videoFiles[i]);
        }
    }
    await deleteDocument('course', id);
}