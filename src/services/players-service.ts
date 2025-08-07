import { PlayerModel } from "../models/player-model";
import { deletePlayer, findAllPlayers, findPlayerById, insertPlayer } from "../repositories/players-repository";
import * as httpResponse from "../utils/http-helpers";

let serverResponse = null;

export const getPlayersListService = async () => {
    const data = await findAllPlayers();
    
    if(data) {
        serverResponse = await httpResponse.ok(data); 
    } else {
        serverResponse = await httpResponse.noContent();
    }
    return serverResponse;
}

export const getPlayerByIdService = async (id: number) => {
    const data = await findPlayerById(id);

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

    await insertPlayer(player);
    return await httpResponse.created();
}

export const deletePlayerService = async (players: PlayerModel[], id: number) => {
    const indexPlayer = players.findIndex((el) => {
        return el.id === id;
    })

    if(indexPlayer === -1) return httpResponse.noContent();

    await deletePlayer(indexPlayer);

    return await httpResponse.deleted();

}