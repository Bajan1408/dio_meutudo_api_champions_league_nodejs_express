import { ClubModel } from "../models/club-model";
import fs from 'fs/promises';

// const clubs: ClubModel[] = [
//     {
//         id: 1,
//         name: 'Flamengo'
//     }
// ]

export const findAllClubs = async (): Promise<ClubModel[]> => {
    const data = await fs.readFile('src/data/clubs.json', 'utf-8');
    const clubs = JSON.parse(data);
    return clubs;
}