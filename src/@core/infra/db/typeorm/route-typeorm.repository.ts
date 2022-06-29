import { Repository } from "typeorm";
import { Route } from "../../../domain/route.entity";
import { RouteRepositoryInterface } from "../../../domain/route.repository";


export class RouteTypeOrmRepository implements RouteRepositoryInterface {
    constructor(private ormRepo: Repository<Route>) {}

    async insert(route: Route): Promise<void> {
        await this.ormRepo.save(route);
    }
    
    async findAll(): Promise<Route[]> {
        return await this.ormRepo.find();
    }
}