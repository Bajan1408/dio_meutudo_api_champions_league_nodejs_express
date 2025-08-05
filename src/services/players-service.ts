import { findAllPlayers } from "../repositories/players-repository";
import { noContent, responseHttp } from "../utils/http-helpers";

export const getPlayersList = async () => {
    const data = await findAllPlayers();
    
    let serverResponse = null;

    if(data) {
        serverResponse = await responseHttp(data); 
    } else {
        serverResponse = await noContent();
    }
    return serverResponse;
}