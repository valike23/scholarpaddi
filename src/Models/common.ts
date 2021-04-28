import type { ConnectionConfig } from 'mysql';


export const localSql: ConnectionConfig = {
    /*host: "127.0.0.1",
    password: "",
    user: "root",
    database: "schoolpaddi",*/
    host: "db4free.net",
    password: "schoolpaddi",
    user: "schoolpaddi",
    database: "schoolpaddi"
}


export const mongoConnection: string = "mongodb+srv://user:Ka1PzKmwhVhjiYhv@cluster0.mpekq.mongodb.net/schoolpaddi?retryWrites=true&w=majority";