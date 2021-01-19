import  {SqlHelper} from '../helper/sqlHelpers';
import { localSql } from '../Models/common';
import {hash } from 'bcrypt';

const sqlHelpers = new SqlHelper(localSql);
export interface Iregister {
    firstName: string;
    lastName: string;
    username: string;
    password: string;
    email: string;
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