import { ref, getDownloadURL, deleteObject, uploadBytesResumable } from "firebase/storage";
import { cloudStorage, } from "./firebaseSetup";

export async function uploadFile(file, filePath) {
    const reference = ref(cloudStorage, filePath);
    await uploadBytesResumable(reference, file)

}

export async function downloadFile(filePath) {

    const reference = ref(cloudStorage, filePath);
    const result = await getDownloadURL(reference);
    return result;
}

export async function deleteFile(imageURL) {

    const splitImageData = imageURL.split(/%2F(.*?)\?alt/);
    const folderName = splitImageData[0].split('/')[7];
    const imageName = (splitImageData[1].replace("%20", " "));
    const filePath = folderName + '/' + imageName;
    const reference = ref(cloudStorage, filePath);

    deleteObject(reference).then(() => {
        console.log('Image deleted from cloud storage!');
        return 1;
    })
        .catch((err) => {
            console.log(err);
            return 0;
        });
}

