import type { Http2ServerResponse } from "http2";
import { CourseController } from "../../../controllers/course"
import type { Ivideo } from "../../../Models/auxilary";

const Course = new CourseController();

export function get (req, res:Http2ServerResponse) {
    Course.getVideo(req.query.id as unknown as number).then((resd: Ivideo)=>{
        res.statusCode = 200;
        res.end(JSON.stringify(resd))

    },(err)=>{
        res.statusCode = 503;
        res.end(JSON.stringify(err));
    })
}