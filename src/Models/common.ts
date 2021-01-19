import type {ConnectionConfig} from 'mysql';


export const localSql: ConnectionConfig= {
    host: "127.0.0.1",
    password: "",
    user: "root",
    database: "schoolpaddi"
}

export const mongoConnection: string = "mongodb+srv://user:Ka1PzKmwhVhjiYhv@cluster0.mpekq.mongodb.net/schoolpaddi?retryWrites=true&w=majority";