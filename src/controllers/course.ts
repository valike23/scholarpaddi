import  {SqlHelper} from '../helper/sqlHelpers';
import { localSql } from '../Models/common';

const sqlHelper = new SqlHelper(localSql);

export class CourseController {
    constructor() {
        
    }

    getAllCourses(page: number) {
        let sql ="select c.id, title, created_date, c.description, " + 
        "course_image, s.name sub_category, lev.name level, is_free, price," + 
        " l.name as language, discount, sp.name specification, is_active" + 
        " FROM courses c left join sub_category s ON s.id = c.subCategory_id" + 
        " left JOIN languages l ON l.id = c.language_id LEFT JOIN specification" + 
        " sp ON c.specification_id = sp.id LEFT JOIN level lev ON lev.id = " + 
        "c.level_id limit " + (page -1) * 9  + " ,9";
        return sqlHelper.defaultQuery(sql)

    }
}