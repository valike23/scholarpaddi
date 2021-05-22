import {v2, UploadApiErrorResponse, UploadApiResponse} from 'cloudinary';

export class UPLOAD_FILE {
    constructor(cloudName: string, apiKey: string, apiSecret: string) {
        v2.config({
            cloud_name: cloudName,
            api_key: apiKey,
            api_secret: apiSecret
        })
    }

    uploadImage(file: any):Promise<UploadApiResponse> {
        return new Promise((resolve, reject)=>{
            v2.uploader.upload(file.path, (err: UploadApiErrorResponse,result: UploadApiResponse)=>{
                if(err) {
                    reject(err);
                }
                else {
                    resolve(result)
                }
            })
        })
        
    }

}