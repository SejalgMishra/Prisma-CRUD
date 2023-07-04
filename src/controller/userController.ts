import { PrismaClient } from "@prisma/client";
import e, { Request, Response } from "express";

const prisma = new PrismaClient();

class userController {
  static getUsers = async (req: Request, res: Response) => {
    try {
      const user = await prisma.user.findMany();
      res.json(user);
    } catch (error) {
      console.log(error);
    }
  };

  static addUser = async (req: Request, res: Response) => {
    const { username, email, password } = req.body;
    try {
      const user = await prisma.user.create({
        data: {
          username,
          email,
          password,
        },
      });
      res.json(user);
    } catch (error) {
      console.log(error);
    }
  };

  static updateUser = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
      const user = await prisma.user.update({
        where: { id: Number(id) },
        data: { ...req.body }, // spread operator to merge the two objects together and override any
      });
      res.json(user);
    } catch (error) {
      console.log(error);
    }
  };

  static deleteUser = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
      await prisma.user.delete({
        where: { id: Number(id) },
      });
      res.json({ msg: `user deleted with id of ${id}` });
    } catch (error) {
      console.log(error);
    }
  };
}

export default userController;
