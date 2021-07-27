import type { ConfigOptions } from 'cloudinary';
import type { ConnectionConfig } from 'mysql';

export const cpanelSql: ConnectionConfig = {
    password: "va&cKFic(ALq",
    host: "localhost",
    user: "schoczkj_admin",
    database: "schoczkj_schoolpaddi"
}
export const db4freeSql: ConnectionConfig = {
    host: "db4free.net",
    password: "schoolpaddi",
    user: "schoolpaddi",
    database: "schoolpaddi"
}
export const localBasedSql: ConnectionConfig = {
    host: "127.0.0.1",
    password: "",
    user: "root",
    database: "schoolpaddi"
}

export const localSql: ConnectionConfig = db4freeSql;
export interface Iuser {
    id?: number;
    first_name?: string;
    last_name?: string;
    user_name?: string;
    email?: string;
    is_instructor?: number;
    instructor_summary?: string;
    profile_pics?: string;
}
export const cloudinaryConfig: ConfigOptions = {
    api_key: '556459332373436',
    cloud_name: 'tjconnect',
    api_secret: '-vfzmuQdlkLrB1rdqR5hTAf5wJg'
}




export const db = "schoolpaddi";
export const url = "https://schoolpaddi.herokuapp.com/";
export const mongoConnection: string = "mongodb+srv://user:Ka1PzKmwhVhjiYhv@cluster0.mpekq.mongodb.net/schoolpaddi?retryWrites=true&w=majority";