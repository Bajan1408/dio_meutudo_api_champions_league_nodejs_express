import { PlayerModel } from "../models/player-model";

const database: PlayerModel[] = [
    {id: 1, name: 'Ronaldinho'}, {id: 2, name: 'Messi'}
] 

export const findAllPlayers = async (): Promise<PlayerModel[]> => {
    return database;
}

export const findPlayerById = async (id: number): Promise<PlayerModel | undefined> => {
    const player = database.find((el) => {
        return el.id === id;
    })

    return player;
}