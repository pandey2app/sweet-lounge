import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { useState } from "react";
import { storage } from "../firebaseConfig";

export const useFormData = (initialState, flag) => {

    const [formData, setFormData] = useState(initialState)
    const [uploadStatus, setUploadStatus] = useState(false)

    const inputChange = (e) => {
        setFormData((prevValue) => ({
            ...prevValue,
            [e.target.name]: e.target.value,
        }))
    };

    const uploadFiles = (event) => {
        setUploadStatus(true)
        const storageRef = ref(storage, flag + '/' + event.target.files[0].name);

        const uploadTask = uploadBytesResumable(storageRef, event.target.files[0]);

        // Register three observers:
        // 1. 'state_changed' observer, called any time the state changes
        // 2. Error observer, called on failure
        // 3. Completion observer, called on successful completion
        uploadTask.on('state_changed',
            () =>{},
            (error) =>{},
            () => {
                // Handle successful uploads on complete
                // For instance, get the download URL: https://firebasestorage.googleapis.com/...
                getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                    setFormData((prevData) => ({
                        ...prevData,
                        image : downloadURL
                    }))
                    setUploadStatus(false)
                });
            }
        );

    }
    return [formData, uploadStatus, setFormData, inputChange, uploadFiles]
}