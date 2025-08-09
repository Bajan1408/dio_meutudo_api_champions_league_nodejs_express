import { Router } from "express";
import * as playerController from "./controllers/players-controller";
import * as clubController from "./controllers/clubs-controller";

const router = Router();

router.get('/listPlayers', playerController.getPlayerController);

router.get('/listPlayerById/:id', playerController.getPlayerControllerById);

router.post('/addPlayer', playerController.postPlayerController);

router.delete('/deletePlayer/:id', playerController.deletePlayerController);

router.patch('/updatePlayer/:id', playerController.updatePlayerController);


router.get('/listClubs', clubController.getClubsController);


export default router;