import { Request, Response } from "express"
import { getPlayersList } from "../services/players-service"

export const playerControler = async (req: Request, res: Response) => {
    const data = await getPlayersList();

    res.status(data.statusCode).json(data.body);
}