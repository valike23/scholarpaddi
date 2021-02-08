import {  REGISTER } from '../../../controllers/accounts';
import type {  Iregister } from '../../../controllers/accounts';

export function post (req, res) {
    console.log(req.fields);
    const register: Iregister = req.fields;

    REGISTER(register).then((success: any)=> {
        res.end(JSON.stringify(success));
    },(failed: any)=> {
        res.end(JSON.stringify(failed))
    })

}