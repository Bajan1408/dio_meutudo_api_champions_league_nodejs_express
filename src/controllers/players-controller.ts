import { Request, Response } from "express"
import * as playerService from "../services/players-service"
import { database } from "../repositories/players-repository";
import { StatsModel } from "../models/stats-model";

export const getPlayerController = async (req: Request, res: Response) => {
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

export const updatePlayerController = async (req: Request, res: Response) => {
    const id = Number(req.params.id);
    const bodyValue: StatsModel = req.body;

    const playerUpdated = await playerService.updatePlayerService(id, bodyValue);

    res.status(playerUpdated.statusCode).json(playerUpdated.body);
}