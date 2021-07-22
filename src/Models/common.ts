import type { ConfigOptions } from 'cloudinary';
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
export const url = "https://scholarpaddi.com/"
export const mongoConnection: string = "mongodb+srv://user:Ka1PzKmwhVhjiYhv@cluster0.mpekq.mongodb.net/schoolpaddi?retryWrites=true&w=majority";