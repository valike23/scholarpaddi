import type { Request, Next} from 'polka';
import { CourseController} from '../../../controllers/course';
import type { Http2ServerResponse } from 'http2';
const course = new CourseController();

export function get (req: Request, res: Http2ServerResponse, next: Next) {
    let page: any = req.query.id;
    page = parseInt(page);
    console.log(page);
    course.getAllCourses(page).then((result: any)=>{
        result = result[0];
        course.getCoursesCount().then((data)=>{
            res.statusCode= 200;
            let mart = {
                count: data[0].count/ 9,
                data: result
            }
        
            res.end(JSON.stringify(mart))
        })
        
    }).catch((err: any)=> {
        console.log(err);
        res.statusCode = 401;
        res.end(JSON.stringify(err));
    })
}
