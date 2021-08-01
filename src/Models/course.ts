
import { IcolumnValue, SqlHelper } from "../helper/sqlHelpers"
import { localSql } from "./common"

export interface Icourse {
    id?: number;
    title?: string;
    created_date?: Date| string;
    description?: string;
    course_image?: string;
    public_id?: string;
    sub_category_id?: number;
    level_id?: number;
    is_free?: boolean;
    price?: number;
    language_id?: number;
    language?: string;
    level?: string;
    sub_category?: string;
    category?: string;
    discount?: number;
    specification_id?: number;
    is_active?: boolean;
    what_to_learn?: string| Array<string>;
    weeks?: Array<Iweek>;
    author?: string;
    author_career?: string;
    author_bio?: string;
    author_pics?: string;
    
}

export interface Ispecification {
    id?: number;
    name?: string;
    description?: string;
    certificate?: string
}
 export interface Iweek {
    id?: number;
    courseId?: number;
    name?: string;
    week_order?: string;
    items?: Array<Iitem>;
    objectives?: string;
    isActive?: boolean;
    isDone?: boolean;
}
 export interface Iitem {
     id?: number;
     name?: string;
     type?: string;
     content?: string;
     week_id?: number;
     preview?: boolean;
     item_order?: number;
     active?: boolean;
     done?: boolean;
     isActive?: boolean;
     isDone?: boolean;
 }
 export interface IstudentFeedBack {
     full_name?: string;
     ratings?: string;
     comment?: string;
     profile_pics?: string;
     created_date?: Date | string;
     ratingList?: Array<number>
 }
 export interface IcourseTaken {
     id?: number;
     course_id?: number;
     student_id?: number;
     rating?: number;
     comment?: number;
     created_date?: number;
     course?: Icourse;
     student?: any;
     current_week?: number;
     current_item?: number;
 }

 const sql = new  SqlHelper(localSql);
 export const  CONFIRM_COURSE  =(courseId: number, studentId: number): Promise<any> =>{
    
    return sql.query(`select * from course_taken where student_id=${studentId} and course_id=${courseId} `)
 }

 export const UPDATE_COURSE_PROGRESS = (courseTaken: IcourseTaken):Promise<any> => {
     const column: Array<IcolumnValue> = [{},{}];
     const query: Array<IcolumnValue> = [{},{}];
     column[0].column = "current_week";
     column[0].value = courseTaken.current_week;
     column[1].column = "current_item";
     column[1].value = courseTaken.current_item;

     query[0].column = "student_id";
     query[0].value = courseTaken.student_id;
     query[1].column = "course_id";
     query[1].value = courseTaken.course_id;

    return sql.updateQuery('course_taken',query,column)
 }
 