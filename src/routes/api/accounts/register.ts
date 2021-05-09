import {  LOGIN, REGISTER } from '../../../controllers/accounts';
import type {  Iregister } from '../../../controllers/accounts';

export function post (req, res) {
    console.log(req.fields);
    const register: Iregister = req.fields;

    REGISTER(register).then((success: any)=> {
        res.end(JSON.stringify(success));
    },(failed: any)=> {
        res.statusCode == 502;
        res.end(JSON.stringify(failed))
    })

}
export function put (req, res) {
    console.dir(req.fields);
    const login: Iregister = JSON.parse(req.fields.data);
    LOGIN(login).then((resd)=>{
        console.log(req.session);
       // req.session.user = resd;
        res.end(JSON.stringify(resd));
    },(err)=>{
        if(err == 'user doesnt exist') {
            res.statusCode == 402;
            res.end(err);
        }
        else if(err == 'password incorrect'){
            res.statusCode == 402;
            res.end(err);
        }
        else{
            res.statusCode == 503;
            console.log(err);
            res.end(JSON.stringify(err));
        }
    })
}