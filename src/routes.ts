import { Router } from "express";
import * as playerController from "./controllers/players-controller";

const router = Router();

router.get('/listPlayers', playerController.getPlayerControler);

router.get('/listPlayerById/:id', playerController.getPlayerControllerById);

router.post('/addPlayer', playerController.postPlayerController);

router.delete('/deletePlayer/:id', playerController.deletePlayerController);

export default router;