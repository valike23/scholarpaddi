import type { UploadApiErrorResponse } from "cloudinary";
import { EventController } from "../../../controllers/event";
import { UPLOAD_FILE } from "../../../helper/uploadFile";
import { cloudinaryConfig } from "../../../Models/common";
import type { Ievent } from "../../../Models/event";
const upload = new UPLOAD_FILE(cloudinaryConfig.cloud_name, cloudinaryConfig.api_key, cloudinaryConfig.api_secret);
const EVENT_CONTROLLER = new EventController();


export function post(req, res) {
    let event: Ievent = {};
    event = JSON.parse(req.fields.data);
    event.createdDate = new Date() as unknown as string;
    upload.uploadImage(req.files.file).then((response)=>{
        event.imageHttpUrl = response.url;
        event.publicId = response.public_id;
        event.imageHttpsUrl = response.secure_url;
        event.views = 1;
        EVENT_CONTROLLER.addEvent(event).then((data: any)=>{
            res.status(200).json(data);
        },(err)=>{
            res.status(503).json(err);
        })

    },(err: UploadApiErrorResponse)=>{
        console.log(err);
        res.status(503).json(err);
    })

}
export function get(req, res) {
    let title = req.query.title;
    EVENT_CONTROLLER.getEvent(title).then((data)=>{
        res.status(200).json(data);
    },(err)=>{
        res.status(503).json(err);
    })
}