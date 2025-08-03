import { Router } from "express";
import { playerControler } from "./controllers/players-controller";

const router = Router();

router.get('/api', playerControler);

export default router;