import { PlayerModel } from "../models/player-model";
import { StatsModel } from "../models/stats-model";
import * as repositories from "../repositories/players-repository";
import * as httpResponse from "../utils/http-helpers";

let serverResponse = null;

export const getPlayersListService = async () => {
    const data = await repositories.findAllPlayers();
    
    if(data) {
        serverResponse = await httpResponse.ok(data); 
    } else {
        serverResponse = await httpResponse.noContent();
    }
    return serverResponse;
}

export const getPlayerByIdService = async (id: number) => {
    const data = await repositories.findPlayerById(id);

    if(data) {
        serverResponse = await httpResponse.ok(data); 
    } else {
        serverResponse = await httpResponse.noContent();
    }
    return serverResponse;

}

export const postPlayerService = async (player: PlayerModel) => {
    
    if(Object.keys(player).length == 0) {
        return await httpResponse.badRequest();
    }

    await repositories.insertPlayer(player);
    return await httpResponse.created();
}

export const deletePlayerService = async (players: PlayerModel[], id: number) => {
    const indexPlayer = players.findIndex((el) => {
        return el.id === id;
    })

    if(indexPlayer === -1) return httpResponse.noContent();

    await repositories.deletePlayer(indexPlayer);

    return await httpResponse.deleted();

}

export const updatePlayerService = async (id: number, body: StatsModel) => {
    const indexPlayer = repositories.database.findIndex((el) => {
        return el.id === id;
    })
    
    if(indexPlayer === -1) return httpResponse.noContent();

    await repositories.updatePlayer(id, body);
    return await httpResponse.updated();
}