import "reflect-metadata";
import { Container } from "inversify";
import SERVICE_IDENTIFIER from "./identifiers";


import {SoftooService} from "./services/implementations/softooService";

import IsoftooService from "./services/interfaces/IsoftooService";



let container = new Container();



container
    .bind<IsoftooService>(SERVICE_IDENTIFIER.SoftooService)
    .to(SoftooService);


export function resolve<T>(type: symbol): T {
    return container.get<T>(type)
}