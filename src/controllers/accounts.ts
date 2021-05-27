import  {SqlHelper} from '../helper/sqlHelpers';
import { Iuser, localSql } from '../Models/common';
import {compare, hash } from 'bcrypt';

const sqlHelpers = new SqlHelper(localSql);
export interface Iregister {
    first_name?: string;
    last_name?: string;
    user_name?: string;
    password?: string;
    email?: string;
}

export  const  REGISTER = (register: Iregister): Promise<any> => {
     return new Promise((resolve, reject) => {
        hash(register.password, 10, (err, hash) => {
            if(err) {
                reject(err);
                return;
            }
            register.password = hash;
            sqlHelpers.insertQuery('users', register).then((success: any)=> {
                resolve(success);
            }, (failed: any) => {
                reject(failed);
            })
        })
     })
}

export const LOGIN = (login: Iregister): Promise<any> => {
    return new Promise((resolve, reject) => {
       sqlHelpers.defaultQuery(`select * from users where email='${login.email}' or user_name='${login.user_name}'`).then((result: any)=>{
            if(result.length < 1) {
                console.log("user not found");
                reject("user doesnt exist");
                return;
            }
            console.log(result);
            result = result[0];
            compare(login.password, result.password, (err, hash)=>{
                if(err) {
                    reject('something with wrong....');
                    return;
                }
                if(hash) {
                    delete result.password;
                    resolve(result);
                }
                else {
                    reject('password incorrect')
                }

            })
       },(err)=> {
            reject(err);
            
       })
    })
}
