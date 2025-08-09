import { Request, Response } from "express";
import { getClubsListService } from "../services/clubs-service";

export const getClubsController = async (req: Request, res: Response) => {
    const data = await getClubsListService();

    res.status(data.statusCode).json(data.body);
}