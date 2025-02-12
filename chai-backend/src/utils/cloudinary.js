import { v2 as cloudinary } from 'cloudinary';
import fs from 'fs'

(async function (localFilePath) {

    // Configuration
    cloudinary.config(process.env.CLOUDINARY_URL);

    // Upload an image
    const uploadResult = await cloudinary.uploader
        .upload(
            localFilePath, {
            resource_type: 'auto',
        })
        fs.unlinkSync(localFilePath)
    
        .catch((error) => {
            fs.unlinkSync(localFilePath) // remove the locally saved temporary file as the upload operation got failed
            console.log(error);
        });

    console.log(uploadResult);


})();