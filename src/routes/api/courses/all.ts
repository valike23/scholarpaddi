import type { Request, Next } from 'polka';
import { CourseController } from '../../../controllers/course';
import type { Http2ServerResponse } from 'http2';
const course = new CourseController();

export async function get(req: Request, res: Http2ServerResponse) {
    let page: any = req.query.id;
    page = parseInt(page);
    try {
        let result: any = await course.getAllCourses(page);
        result = result[0];
        res.statusCode = 200;
        console.log('super super super', result);
        res.end(JSON.stringify(result))
    } catch (error) {
        console.log(error);
        res.statusCode = 401;
        res.end(JSON.stringify(error));
    }

}
export async function put(req:Request, res: Http2ServerResponse) {
    try {
        let result = await course.getCoursesCount();
        res.statusCode = 200;
        res.end(JSON.stringify(result))
    } catch (error) {
        res.statusCode = 503;
        res.end(JSON.stringify(error))
    }
}
