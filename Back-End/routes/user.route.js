import express from "express"
import { register, login, logout, updateProfile } from '../controllers/user.controller.js';

import isAuthenticcated from "../middlewares/isAuthenticated.js";

const router = express.Router();

router.route("/register").post(register)
router.route("/login").post(login)
router.route("/logout").get(logout)
router.route("/profile/update").post(isAuthenticcated, updateProfile)

export default router;