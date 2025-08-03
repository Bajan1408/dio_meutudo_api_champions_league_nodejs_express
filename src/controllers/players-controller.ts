import { Request, Response, json } from "express"
import { getPlayersList } from "../services/players-service"
import { responseHttp } from "../utils/http-helpers";

export const playerControler = async (req: Request, res: Response) => {
    const data = await getPlayersList();

    const httpResponse = await responseHttp(data);

    res.status(httpResponse.statusCode).json(httpResponse.body);
}