import type { Http2ServerResponse } from "http2";
import { CourseController } from "../../../controllers/course";
import type {Request} from 'polka';
import type { IstudentFeedBack } from "../../../Models/course";


const course = new CourseController();

export function get (req: Request, res: Http2ServerResponse, next) {
   let id: any = req.query.id;
   course.getStudentFeedBack(id).then((feedback: Array<IstudentFeedBack>)=> {
    res.end(JSON.stringify(feedback));
   })
    
}