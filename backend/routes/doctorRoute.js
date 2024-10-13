import express from "express";
import doctorController from "../controllers/doctorController.js";

const { doctorList } = doctorController;
const doctorRouter = express.Router();

doctorRouter.get("/list", doctorList);

export default doctorRouter;
