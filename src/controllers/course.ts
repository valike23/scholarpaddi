import  {SqlHelper} from '../helper/sqlHelpers';
import { localSql } from '../Models/common';

const sqlHelper = new SqlHelper(localSql);

export class CourseController {
    constructor() {
        
    }

    getAllCourses(page: number) {
        let sql ="select c.id, title, created_date, c.description, " + 
        "course_image, s.name sub_category, lev.name as level, is_free, price," + 
        " l.name as language, discount, sp.name specification, is_active" + 
        " FROM courses c left join sub_category s ON s.id = c.subCategory_id" + 
        " left JOIN languages l ON l.id = c.language_id LEFT JOIN specification" + 
        " sp ON c.specialization_id = sp.id LEFT JOIN level lev ON lev.id = " + 
        "c.level_id limit " + (page -1) * 9  + " ,9";
        return sqlHelper.defaultQuery(sql)

    }
    getSingleCourse(id: string) {
        let sql ="select c.id, title, created_date, c.description,  c.what_to_learn," + 
        "course_image, concat(u.first_name , ' ' , u.last_name) as author,u.profile_pics as author_pics,u.instructor_summary as author_bio,u.instructor_career as author_career, s.name sub_category, lev.name as level, is_free, price," + 
        " l.name as language, discount, sp.name specification, is_active" + 
        " FROM courses c left join sub_category s ON s.id = c.subCategory_id " + 
        "left join users u ON u.id = c.author_id " +
        " left JOIN languages l ON l.id = c.language_id LEFT JOIN specification" + 
        " sp ON c.specialization_id = sp.id LEFT JOIN level lev ON lev.id = " + 
        "c.level_id where c.title = '" + id + "'";
        console.log(sql);
        return sqlHelper.defaultQuery(sql)
    }
    getCourseWeek(courseId: number) {  
        let sql = `SELECT * FROM week WHERE course_id = ${courseId} ORDER BY week.week_order ASC`;
        console.log(sql);
        return sqlHelper.defaultQuery(sql);
    }
    getWeekItem(weekId: number) {
        let sql = `SELECT id, content, type, name, week_id, preview, item_order FROM item WHERE week_id = ${weekId} ORDER BY item.item_order ASC`;
        console.log(sql);
        return sqlHelper.defaultQuery(sql);
    }
    getAllCategory() {
        let sql = `select * from category`;
        return sqlHelper.defaultQuery(sql);
    }
    getSubCategory(id: number) {
        let sql = `select * from sub_category where category_id = ${id}`;
        return sqlHelper.defaultQuery(sql);
    }
    getStudentFeedBack(id: string) {
        let sql = `SELECT c.ratings, c.comment, concat(s.first_name, ' ', s.last_name) as full_name, s.profile_pics FROM course_taken c INNER JOIN users s ON s.id = c.student_id  WHERE c.course_id = ${id}`;
        console.log(sql);
        return sqlHelper.defaultQuery(sql);

    }
    
}
  