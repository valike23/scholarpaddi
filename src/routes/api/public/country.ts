import * as CSC from 'country-state-city';
import type {Response, Request} from "express";
const csc = CSC.default;

export function get(req, res: Response){
    res.status(200).json(csc.getAllCountries());
}

export function put (req: Request, res: Response){
    let query = req.query;
    console.log(query);
    if(query.get == 'states') {
        res.status(200).json(csc.getStatesOfCountry(query.country as unknown as string));
        
    }
    if(query.get == 'cities') {
        res.status(200).json(csc.getCitiesOfState(query.country as unknown as string,query.state as unknown as string));
        
    }
}