import { EventController } from "../../../controllers/event";

const EVENT_CONTROLLER = new EventController();
export function get(req, res) {
    console.log(req.query.page);
    let page = req.query.page as unknown as number | 1;
    console.log(page);
    EVENT_CONTROLLER.getTopEvent(page).then((data)=>{
        res.status(200).json(data);
    },(err)=>{
        res.status(503).json(err);
    })
}