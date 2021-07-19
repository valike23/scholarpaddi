import type { Request, Next} from 'polka';
import { CourseController} from '../../../controllers/course';
import type { Http2ServerResponse } from 'http2';
const course = new CourseController();

export async function get (req: Request, res: Http2ServerResponse, next: Next) {
    let page: any = req.query.id;
    page = parseInt(page);
    console.log(page);
    try {
        let result: any = await course.getAllCourses(page);
        result = result[0];
        let data: any = await course.getCoursesCount();
        res.statusCode= 200;
            let mart = {
                count: data[0].count/ 9,
                data: result
            }
            console.log('super super super',mart);
            res.end(JSON.stringify(mart))
    } catch (error) {
        console.log(error);
        res.statusCode = 401;
        res.end(JSON.stringify(error));
    }
   
}
