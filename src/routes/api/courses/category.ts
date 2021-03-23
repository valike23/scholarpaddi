import type { Request, Next} from 'polka';
import { CourseController} from '../../../controllers/course';
import type { Http2ServerResponse } from 'http2';
import type { Icategory } from '../../../Models/category';
const course = new CourseController();

export function get (req: Request, res: Http2ServerResponse, next: Next) {
    let categories: Array<Icategory> = [];
    course.getAllCategory().then((result: any)=>{
        let promises = [];
        result.forEach((element) => {
            categories.push(element);
            promises.push(course.getSubCategory(element.id));
        });
        Promise.all(promises).then((values: any)=>{
            values.forEach((e, i)=> {
                categories[i].subCategory = e;
            });
            res.end(JSON.stringify(categories));
        })
    })  
    
}