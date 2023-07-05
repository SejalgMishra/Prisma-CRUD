"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
class userController {
}
_a = userController;
userController.getUsers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = yield prisma.user.findMany();
        res.json(user);
    }
    catch (error) {
        console.log(error);
    }
});
userController.addUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _b, _c;
    const { username, email, password, image } = req.body;
    console.log((_b = req.files) === null || _b === void 0 ? void 0 : _b.location);
    console.log((_c = req.file) === null || _c === void 0 ? void 0 : _c.location);
    try {
        const user = yield prisma.user.create({
            data: {
                username,
                email,
                password,
                image,
            },
        });
        res.json(user);
    }
    catch (error) {
        console.log(error);
    }
});
userController.updateUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const user = yield prisma.user.update({
            where: { id: Number(id) },
            data: Object.assign({}, req.body), // spread operator to merge the two objects together and override any
        });
        res.json(user);
    }
    catch (error) {
        console.log(error);
    }
});
userController.deleteUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        yield prisma.user.delete({
            where: { id: Number(id) },
        });
        res.json({ msg: `user deleted with id of ${id}` });
    }
    catch (error) {
        console.log(error);
    }
});
exports.default = userController;
