import { Router } from "express";
import {
    createCommentController,
    getCommentByIdController,
    getCommentsByPostIdController,
    deleteCommentController
} from "./controller";

const router = Router();
router.post("/", createCommentController);
router.get("/:id", getCommentByIdController);
router.get("/post/:id", getCommentsByPostIdController);
router.delete("/:id", deleteCommentController);

export default router;