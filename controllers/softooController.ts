import SERVICE_IDENTIFIER from "../identifiers";
import ISoftooService from "../services/interfaces/IsoftooService";
import { resolve } from "../dependencymanagement"
import * as express from "express"


const router = express.Router();

function getSoftooService(): ISoftooService {
    return resolve<ISoftooService>(SERVICE_IDENTIFIER.SoftooService);
}
let softooService = getSoftooService()





router.get("/getstocklevel", async (req: any, res: any) => {
    let data  = req.query.sku;
    let result = await softooService.find(data)
    res.send(result);
});






module.exports = router;

