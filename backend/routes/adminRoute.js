import express from "express";
import adminController from "../controllers/adminController.js";
import upload from "../middleware/multer.js";
import authAdmin from "../middleware/authAdmin.js";
import doctorController from "../controllers/doctorController.js";

const { addDoctor, loginAdmin, allDoctors } = adminController;
const { changeAvailablity } = doctorController;

const adminRouter = express.Router();

adminRouter.post("/add-doctor", authAdmin, upload.single("image"), addDoctor);
adminRouter.post("/login", loginAdmin);
adminRouter.post("/all-doctors", authAdmin, allDoctors);
adminRouter.post("/change-availability", authAdmin, changeAvailablity);
export default adminRouter;
