import { createConnection, MysqlError } from 'mysql';
import type { ConnectionConfig, Connection } from 'mysql';

export class SqlHelper {
    
    connection: Connection;
    constructor( config: ConnectionConfig) {
       
        this.connection =  createConnection(config);
    }

    query(query: string) {
        return new Promise((resolve, reject)=> {
            this.connection.query(query, (err: MysqlError
                , result: any) =>{
                    if(err) {
                        reject(err);
                        return;
                    }
                    resolve(result);

            });
        })
    }


    insertQuery(table: string, data: any) {
        return new Promise((resolve, reject)=> {
            this.connection.query(`INSERT INTO ${table} set ?`, data,(err: MysqlError
                , result: any) =>{
                    if(err) {
                        reject(err);
                        return;
                    }
                    resolve(result);

            });
        })
    }

    
}