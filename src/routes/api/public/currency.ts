import { mongoConnection, db} from '../../../Models/common';
import { MongoClient, MongoError } from 'mongodb';
import type {Response} from 'express'
const converterAPI =(currency: string, amount: number, res: Response): void =>{
    MongoClient.connect(mongoConnection).then((client: MongoClient)=> {
        client.db(db).collection('currency').findOne({currency: currency}).then((result)=>{
            if(result) {
                res.statusCode = 200;
                res.end((result.rates * amount).toString());
            }
            else {
                res.statusCode = 400;
                res.end("currency doesnt exist")
            }
        })
    },(err: MongoError)=>{
                res.statusCode = 503;
                res.end(err.errmsg)
    })
    
}
export function get(req, res: Response) {
    converterAPI(req.query.currency, req.query.amount,res);
}