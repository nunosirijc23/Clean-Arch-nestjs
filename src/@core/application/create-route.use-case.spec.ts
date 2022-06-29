
import { DataSource } from "typeorm";
import { Route } from "../domain/route.entity";
import { RouteTypeOrmRepository } from "../infra/db/typeorm/route-typeorm.repository";
import { RouteSchema } from "../infra/db/typeorm/route.schema";
import { CreateRouteUseCase } from "./create-route.use-case";

describe("Create route use case test", () => {
    it("should be able to create route", async () => {
        const dataSource = new DataSource({
            type: "sqlite",
            database: ":memory:",
            synchronize: true,
            logging: false,
            entities: [RouteSchema],
        });
        await dataSource.initialize();

        const ormRepo = dataSource.getRepository(Route);
        const repository = new RouteTypeOrmRepository(ormRepo);
        const createUseCase = new CreateRouteUseCase(repository);
        const output = await createUseCase.execute({
            title: "my title",
            startPosition: { lat: 1, lng: 2},
            endPosition: { lat: 3, lng: 4 },
        });
        expect(output).toHaveProperty("id");
    })
})