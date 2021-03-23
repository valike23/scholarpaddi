import type { Request, Next} from 'polka';
import { CourseController} from '../../../controllers/course';
import type { Http2ServerResponse } from 'http2';
const course = new CourseController();

export function get (req: Request, res: Http2ServerResponse, next: Next) {
    let page: any = req.query.id;
    console.log(page);
    
    course.getSingleCourse(page).then((result: any)=>{
        res.statusCode= 200;
        let str = result[0].what_to_learn as unknown as string;
        let ary  = str.split("#");
        result[0].what_to_learn = ary;
        course.getCourseWeek(result[0].id).then((weekResult: any)=>{
            result[0].weeks = weekResult;
            let promiseAry: Array<any> = [];
            result[0].weeks.forEach(element => {
                promiseAry.push(course.getWeekItem(element.id));
            });
            Promise.all(promiseAry).then((values: any)=>{
                values.forEach((e, i) => {
                    e.forEach((element, j) => {
                        if(!element.preview){
                            delete(element.content);
                            e[j] = element;
                        }
                    });
                    result[0].weeks[i].items = e;
                });
                res.end(JSON.stringify(result));
            })
           
        })
    }).catch((err: any)=> {
        res.statusCode = 401;
        res.end(JSON.stringify(err));
    })
}