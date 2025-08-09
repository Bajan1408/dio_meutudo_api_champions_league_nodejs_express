import { findAllClubs } from "../repositories/clubs-repository"
import * as httpResponse from  "../utils/http-helpers";

let serverResponse = null;

export const getClubsListService = async () => {
    const data = await findAllClubs();

    if(data.length > 0) {
        serverResponse = await httpResponse.ok(data);
    } else {
        serverResponse = await httpResponse.noContent();
    }

    return serverResponse;
    
}