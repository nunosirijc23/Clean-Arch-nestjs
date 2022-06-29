import { LatLng, Route, RouteProps } from "./route.entity"

describe("Route Tests", () => {
    test("Constructor", () => {
        let routesProps: RouteProps = {
            title: "Minha rota",
            startPosition: { lat: 0, lng: 1 },
            endPosition: { lat: 2, lng: 3 },
        };
        let route = Route.create(routesProps);
        expect(route.props).toStrictEqual({
            ...routesProps, 
            points: []
        });

        routesProps = {
            title: "Minha rota",
            startPosition: { lat: 0, lng: 1 },
            endPosition: { lat: 2, lng: 3 },
            points: [
                { lat: 10, lng: 11 }
            ],
        };
        route = Route.create(routesProps);
        expect(route.id).toBeDefined();
        expect(route.props).toStrictEqual({
            ...routesProps, points: [
                { lat: 10, lng: 11 }
            ]
        });
    });

    test("updateTitle method", () => {
        let routesProps: RouteProps = {
            title: "Minha rota",
            startPosition: { lat: 0, lng: 1 },
            endPosition: { lat: 2, lng: 3 },
        };
        let route = Route.create(routesProps);
        route.updateTitle("title updated");
        expect(route.title).toBe("title updated");
    })

    test("updatePosition method", () => {
        let routesProps: RouteProps = {
            title: "Minha rota",
            startPosition: { lat: 0, lng: 1 },
            endPosition: { lat: 2, lng: 3 },
        };
        let route = Route.create(routesProps);
        const startPositiion: LatLng = { lat: 10, lng: 20 }
        const endPosition: LatLng = { lat: 30, lng: 40 }
        route.updatePosition(startPositiion, endPosition);
        expect(route.startPosition).toBe(startPositiion);
        expect(route.endPosition).toBe(endPosition);
    })

    test("updatePoints method", () => {
        let routesProps: RouteProps = {
            title: "Minha rota",
            startPosition: { lat: 0, lng: 1 },
            endPosition: { lat: 2, lng: 3 },
        };
        let route = Route.create(routesProps);
        const points: LatLng[] = [
            { lat: 10, lng: 20 }
        ];
        route.updatePoints(points);
        expect(route.points).toHaveLength(1);
        expect(route.points).toEqual(points);
    })
})