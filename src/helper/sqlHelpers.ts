import { createConnection, MysqlError } from 'mysql';
import type { ConnectionConfig, Connection } from 'mysql';
export interface Iquery {
    where?: any
}
export interface IcolumnValue {
    column?: string;
    value?: any;
}
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

private generateGT (col, value): string {
    return ` ${col} > '${value}'`;
}

private generateLT (col, value): string {
    return ` ${col} < '${value}'`;
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

    getAll(table: string) {
        return new Promise((resolve, reject)=> {
            this.connection.query(`SELECT * FROM ${table}`, (err: MysqlError
                , result: any) =>{
                    if(err) {
                        reject(err);
                        return;
                    }
                    resolve(result);

            });
        })
    }
    defaultQuery(query: string) {
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
    findOne(table: string, query:any) {
        return new Promise((resolve, reject) => {
            let sql = `select `;
            var keys = Object.keys(query);
            if(keys.length == 0) {

            }
            else {
                keys.forEach((e, i)=>{
                    if(e == '$where'){
    
                    }
                })
            }
            
            this.connection.query(sql, (err: MysqlError, result: any)=> {

            })
        })
    }
    updateQuery(tableName: string, query:Array<IcolumnValue>, columns: Array<IcolumnValue>){
        console.log(query);
        let columnInput = '';
        columns.forEach((e,i)=>{
            columnInput += `${e.column} = ${e.value} `;
            if(i < columns.length - 1){
                columnInput += ','
            }

        });
        let queryText = '';
        if(query.length == 1){
            queryText = `${query[0].column} = ${query[0].value}`;
        }
        else{
            query.forEach((e,i)=>{
                queryText += `${e.column} = ${e.value} `;
                if(i < columns.length - 1){
                    queryText += ' and '
                }
    
            });
        }
        let sql = `update ${tableName} set ${columnInput} where ${queryText} `;
        console.log('query', sql);
        return this.defaultQuery(sql);
    }
    
}