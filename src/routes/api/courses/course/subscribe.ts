import type * as express from 'express';
import type { MysqlError } from 'mysql';
import { SqlHelper } from '../../../../helper/sqlHelpers';
import { localSql } from '../../../../Models/common';
import { CONFIRM_COURSE, IcourseTaken, UPDATE_COURSE_PROGRESS } from '../../../../Models/course';

export function post (req, res:express.Response) {
    let courseTaken: IcourseTaken = {};
    courseTaken = JSON.parse(req.fields.body);
    let sqlHelper = new SqlHelper(localSql);
    sqlHelper.insertQuery('course_taken', courseTaken).then((resd)=>{
        res.status(200).json({msg: "success"})
    },(err: MysqlError)=>{
        res.status(400).json({msg: "err", data: err.message})
    })
}
export function get(req, res: express.Response) {
    let query = req.query;
    CONFIRM_COURSE(query.courseId, query.studentId).then((result)=>{
        if(result.length > 0){
            res.status(200).json({status: true, data: result[0]})
        }
        else {
            res.status(200).json({status: false})
        }
        
    }, (err: MysqlError) => {
        res.status(400).json({msg: "err", data: err.message, status: false})
    })
    
}
export function put(req, res: express.Response) {
    let courseTaken: IcourseTaken = {};
    
    courseTaken = JSON.parse(req.fields.data);
    console.log(courseTaken);
    UPDATE_COURSE_PROGRESS(courseTaken).then((resd)=>{
        res.status(200).json({msg: "success"})
    },(err: MysqlError)=>{
        res.status(400).json({msg: "err", data: err.message})
    });
}