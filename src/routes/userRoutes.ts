import userController from "../controller/userController";

import express from "express"

const router = express.Router()

router.get("/" , userController.getUsers)

router.post("/" , userController.addUser)

router.patch("/:id" , userController.updateUser)

router.delete("/:id" , userController.deleteUser)


export default router