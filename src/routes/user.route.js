import express from "express";
import * as userCtrl from "../controllers/user.controller.js";

const router = express.Router();

router.route("/").get(userCtrl.findAll);
router.route("/:id").get(userCtrl.findUser);
router.route("/").post(userCtrl.createUser);
router.route("/:id").delete(userCtrl.deleteUser);
router.route("/").put(userCtrl.editUser);

export default router;
