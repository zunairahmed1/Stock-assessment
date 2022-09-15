import { ResponseModel } from "../../utils/responsemodel";


 export default interface IsoftooService {
    find(sku : string):Promise<ResponseModel<any>>

    
}