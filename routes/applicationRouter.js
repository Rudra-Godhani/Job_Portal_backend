import express from "express";
import { isAuthenticated, isAuthorized } from "../middlewares/auth.js";
import { deleteApplication, employerGetAllApplication, jobSeekerGetAllApplicaiton, postApplication } from "../controller/applicationController.js";

const router = express.Router();

router.post("/post/:id", isAuthenticated, isAuthorized("Job Seeker"), postApplication);
router.get("/employer/getAll", isAuthenticated, isAuthorized("Employer"), employerGetAllApplication);
router.get("/jobseeker/getAll", isAuthenticated, isAuthorized("Job Seeker"), jobSeekerGetAllApplicaiton);
router.delete("/delete/:id", isAuthenticated, deleteApplication);

export default router;