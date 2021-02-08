import type { Request, Next} from 'polka';
import { CourseController} from '../../../controllers/course';
const course = new CourseController();

export function get (req: Request, res, next: Next) {
    let page: any = req.query.id;
    console.log(page);
    page = parseInt(page);
    course.getAllCourses(page).then((result: any)=>{
        res.statusCode= 200;
        res.end(JSON.stringify(result))
    }).catch((err: any)=> {
        res.statusCode = 401;
        res.end(JSON.stringify(err));
    })
}