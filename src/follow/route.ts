import { Router } from "express";
import { followUnfollowController } from "./controller";

const router = Router();

router.post("/", followUnfollowController);

export default router;