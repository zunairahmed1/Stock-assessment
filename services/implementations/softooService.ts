import { injectable } from "inversify";
import { stockModal } from "../../models/repoModels/stockModal";
import { ResponseModel } from "../../utils/responsemodel";
import IsoftooService from "../interfaces/IsoftooService";
import stockJson from "./stock.json";
import transactionsJson from "./transactions.json";
@injectable()
export class SoftooService implements IsoftooService {
    constructor(
    ) { }


    async find(sku: string): Promise<ResponseModel<stockModal>> {
        let response = new ResponseModel<stockModal>();
        try {
            let level: stockModal = { sku, qty: 0 }
            if (!sku || sku == undefined || sku == "") {
                response.setError("sku is missing in the request");
            }
            else {
                const getStock = stockJson.find(i => i.sku === sku)
                const stockTransactions: any = transactionsJson.filter(i => i.sku === sku);
                if (!getStock) {

                    if (stockTransactions.length === 0 ){
                        response.setError("SKU not found in JSONs files");
                    }
                } 
                else {
                    level = { sku, qty: getStock.stock }                                           
                    console.log(level, "test")
                    stockTransactions.forEach(transaction => {
                        switch (transaction.type) {
                            case "order":
                                level.qty += transaction.qty;
                                break;
                            case "refund":
                                level.qty -= transaction.qty;
                                break;
                            default:
                                response.setError("Invalid type of transaction in data file");
                        }
                    });
                    response.setSuccessAndData(level, "softoo data");
                }
            }

        } catch (err) {
            response.setServerError(err)
        }

        return response
    }









}

