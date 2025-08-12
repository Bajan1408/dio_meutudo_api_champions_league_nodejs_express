import { Router } from "express";
import * as playerController from "./controllers/players-controller";
import * as clubController from "./controllers/clubs-controller";

const router = Router();

router.get('/players', playerController.getPlayerController);

router.get('/players/:id', playerController.getPlayerControllerById);

router.post('/players', playerController.postPlayerController);

router.delete('/players/:id', playerController.deletePlayerController);

router.patch('/players/:id', playerController.updatePlayerController);


router.get('/clubs', clubController.getClubsController);


export default router;