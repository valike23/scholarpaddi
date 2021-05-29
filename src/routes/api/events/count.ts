import { EventController } from "../../../controllers/event";

const EVENT = new EventController();
export function get (req, res) {
    EVENT.getTotalPageCount().then((data)=>{
        res.status(200).json(data);
    },(err)=>{
        res.status(500).json(err);
    })
}