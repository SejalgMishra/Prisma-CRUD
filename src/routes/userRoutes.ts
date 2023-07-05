import userController from "../controller/userController";

import express from "express"
import upload from "../helper/upload.helper";

const router = express.Router()

router.get("/" , userController.getUsers)

router.post("/" ,upload.single('image'), userController.addUser)

router.patch("/:id" , userController.updateUser)

router.delete("/:id" , userController.deleteUser)


export default router