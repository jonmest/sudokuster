import express from "express";
import { getBoard, getAnswer, isValid } from "../controllers/index.js";

const router = express.Router();

router.get("/get-board", getBoard);
router.post("/is-valid", isValid);
router.post("/get-answer", getAnswer);

export default router;
