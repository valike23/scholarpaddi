import type { Http2ServerResponse } from "http2";
import type express from 'express';
import { CourseController } from "../../../../controllers/course";
import type { IweeklyQuiz } from "../../../../Models/auxilary";

const Course = new CourseController();

export async function get (req, res:express.Response) {

    try {
       let quiz: IweeklyQuiz =  await Course.getWeeklyQuiz(req.query.id);
       res.json(quiz)
        console.log(quiz);
    } catch (error) {
        res.statusCode = 503;
        res.end(JSON.stringify(error));
    }
}