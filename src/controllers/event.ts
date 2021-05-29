import { MongoClient, MongoError, ObjectId } from "mongodb";
import { mongoConnection } from "../Models/common";
import type { Ievent } from "../Models/event";
import moment, { Moment, FromTo } from 'moment';

export class EventController {
    name: string;
    collection: string;
    client: MongoClient;
    difference: number;
    constructor() {
        this.name = 'schoolpaddi';
        this.collection = 'events';
        this.difference = 3;
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

    addEvent(event: Ievent): Promise<any> {
        return new Promise((resolve, reject) => {
            this.client.db(this.name).collection(this.collection).insertOne(event).then((done: any) => {
                console.log(done);
                resolve(done);
            }, (err: MongoError) => {
                console.log(err);
                reject(err);
            })
        })

    }
    getTopEvent(page: number): Promise<Array<Ievent>> {

        return new Promise((resolve, reject) => {
            console.log(page);
            let skip = (page - 1) * this.difference;
            console.log(skip);
            try {
                this.client.db(this.name).collection(this.collection).find({},
                    { projection: { "content": 0 } })
                    .sort({ rate: -1, _id: 1 }).skip(skip)
                    .limit(this.difference).toArray((err: MongoError, result: Array<Ievent>) => {
                        if (err) {

                            reject(err);
                            return;
                        }
                        result.forEach((e, i) => {

                            let date: any = e.date;
                            let MomentTime = moment(date);
                            date = MomentTime.fromNow();

                            result[i].date = date;
                        });

                        resolve(result);

                    })
            } catch (error) {
                this.connect();
                console.log(error);
                reject('cannot connect to mongo server');
            }

        })
    }
    getEvent(title: string): Promise<Ievent> {
        return new Promise((resolve, reject) => {
            try {
                
                this.client.db(this.name).collection(this.collection).findOne({ _id: new ObjectId(title) }).then((result: Ievent) => {
                    resolve(result);
                }, (err) => {
                    this.connect();
                    reject(err);
                })
            } catch (error) {
                this.connect();
                reject(error);
            }
        })
    }
    getTotalPageCount(): Promise<number> {
        return new Promise((resolve, reject)=>{
           try{
            this.client.db(this.name).collection(this.collection).count().then((res)=>{
               res = Math.ceil(res/this.difference);
                resolve(res);
            },(err)=>{
                reject(err)
            })
           }
           catch(error) {
            this.connect();
            console.log(error);
            reject('cannot connect to mongo server');
           }
        })
    }
}