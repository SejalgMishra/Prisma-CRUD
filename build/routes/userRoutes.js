"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const userController_1 = __importDefault(require("../controller/userController"));
const express_1 = __importDefault(require("express"));
const upload_helper_1 = __importDefault(require("../helper/upload.helper"));
const router = express_1.default.Router();
router.get("/", userController_1.default.getUsers);
router.post("/", upload_helper_1.default.single('image'), userController_1.default.addUser);
router.patch("/:id", userController_1.default.updateUser);
router.delete("/:id", userController_1.default.deleteUser);
exports.default = router;
