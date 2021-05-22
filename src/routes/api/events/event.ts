import type { UploadApiErrorResponse } from "cloudinary";
import { UPLOAD_FILE } from "../../../helper/uploadFile";
import { cloudinaryConfig } from "../../../Models/common";
import type { Ievent } from "../../../Models/event";
const upload = new UPLOAD_FILE(cloudinaryConfig.cloud_name, cloudinaryConfig.api_key, cloudinaryConfig.api_secret);
export function post(req, res) {
    let event: Ievent = {};
    event = JSON.parse(req.fields.data);
    console.log(req.files.file);
    event.createdDate = new Date() as unknown as string;
    console.log(event);
    upload.uploadImage(req.files.file).then((response)=>{
        event.imageHttpUrl = response.url;
        event.publicId = response.public_id;
        event.imageHttpsUrl = response.secure_url;
        console.log(event);
        console.log(event);
    },(err: UploadApiErrorResponse)=>{
        console.log(err);
    })

}