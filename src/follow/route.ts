import { Router } from "express";
import { followUnfollowController, getFollowController } from "./controller";

const router = Router();

router.post("/", followUnfollowController);
router.get("/list", getFollowController);

export default router;