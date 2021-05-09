
import { mongoConnection } from '../Models/common';
import { MongoClient, MongoError, ObjectID } from 'mongodb';
import type { Iblog } from '../Models/blog';


export class BlogController {
    name: string;
    collection: string;
    client: MongoClient;
    constructor() {
        this.name = 'schoolpaddi';
        this.collection = 'blog';
        this.connect().then((res)=> {
            this.client = res;

        },(err)=> {
            console.log(err);
        })
    }
    private connect(): Promise<MongoClient> {
        
        return new Promise((resolve, reject)=> {
            MongoClient.connect(mongoConnection).then((client:MongoClient) =>{
                resolve(client);
            },(error: MongoError)=>{
                reject(error);
            })
        })
    }
    create(blog: Iblog): any {
       return new Promise((resolve, reject) => {
           console.log('test');
           resolve(JSON.stringify(blog));
       })
    }
}