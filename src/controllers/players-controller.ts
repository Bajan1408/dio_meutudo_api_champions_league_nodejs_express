import { Request, Response } from "express"
import * as playerService from "../services/players-service"
import { database } from "../repositories/players-repository";

export const getPlayerControler = async (req: Request, res: Response) => {
    const data = await playerService.getPlayersListService();

    res.status(data.statusCode).json(data.body);
}

export const getPlayerControllerById = async (req: Request, res: Response) => {
    const id = Number(req.params.id);
    const data = await playerService.getPlayerByIdService(id);

    res.status(data.statusCode).json(data.body);
}

export const postPlayerController = async (req: Request, res: Response) => {
    const data = req.body;

    const playerCreated = await playerService.postPlayerService(data);

    res.status(playerCreated.statusCode).json(playerCreated.body);
}

export const deletePlayerController = async (req: Request, res: Response) => {
    const id = Number(req.params.id);

    const playerDeleted = await playerService.deletePlayerService(database, id);

    res.status(playerDeleted.statusCode).json(playerDeleted.body);
}