import { SqlHelper } from '../helper/sqlHelpers';
import { localSql, mongoConnection } from '../Models/common';
import { MongoClient, MongoError, ObjectID } from 'mongodb';
import type { Iads, Ivideo } from '../Models/auxilary';

const sqlHelper = new SqlHelper(localSql);

export class CourseController {
    name: string;
    collection: string;
    client: MongoClient;
    constructor() {
        this.name = 'schoolpaddi';
        this.collection = 'blog';
        this.connect().then((res) => {
            this.client = res;

        }, (err) => {
            console.log(err);
        })
    }
    private connect(): Promise<MongoClient> {

        return new Promise((resolve, reject) => {
            MongoClient.connect(mongoConnection).then((client: MongoClient) => {
                resolve(client);
            }, (error: MongoError) => {
                reject(error);
            })
        })
    }
    getVideo(videoId: number) {
        function isUnique(time: number, ads: Array<Iads>) {
            let answer = true;
            ads.forEach((e, i) => {
                if (e.time as unknown as number == time) {
                    answer = false;
                }
            })
            return answer;
        }
        function generateRandomTime(duration, ads: Array<Iads>) {
            const dur = Math.floor(Math.random() * duration);
            if (isUnique(dur, ads)) return dur;
            generateRandomTime(duration, ads);

        }
        return new Promise((resolve, reject) => {
            this.connect().then((client: MongoClient) => {
                console.log(videoId);
                client.db('schoolpaddi').collection('videos').findOne({ id: Number(videoId) }).then((result: Ivideo) => {
                    console.log(result);
                    const duration = result.duration;
                    console.log(duration);
                    result.ads = [];
                    const length = Math.floor(duration / 100);
                    for (let index = 0; index < length; index++) {
                        result.ads[index] = {};
                        result.ads[index].time = generateRandomTime(duration, result.ads) as unknown as string;
                    }
                    client.db('schoolpaddi').collection('ads').aggregate([{ $sample: { size: length } }]).toArray().then((resd) => {
                        resd.forEach((e, i) => {
                            result.ads[i].img = e.src;
                        })
                        resolve(result);
                    })
                }, (err) => {
                    console.log(err);
                    reject(err);
                })
            })

        })
    }

     getAllCourses(page: number) {
        return new Promise(async (reject, resolve) => {
            try {
                console.log(page);
                page = (page - 1) * 9;
                let sql = `CALL retrieveCourses(${page});`
                console.log(sql);
                let result: any = await sqlHelper.defaultQuery(sql);
                resolve(result)
            } catch (error) {
                reject(error)
            }
        })






    }
    getSingleCourse(id: string) {
        let sql = "select c.id, title, created_date, c.description,  c.what_to_learn," +
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
    getCoursesCount(): Promise<any> {
        return sqlHelper.defaultQuery('SELECT COUNT(id)as count FROM courses');
    }

}
