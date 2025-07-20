import { Router } from "express";
import { followUnfollowController, getFollowsByUsernameController, getFollowersByUsernameController } from "./controller";

const router = Router();

router.post("/", followUnfollowController);
router.get("/following/:username", getFollowsByUsernameController);
router.get("/followers/:username", getFollowersByUsernameController);

export default router;