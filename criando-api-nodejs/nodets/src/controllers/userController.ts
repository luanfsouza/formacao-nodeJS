import { Request, Response } from "express";

import { UserService } from "../services/userService";

export class UserController {
  userService: UserService;
  
  constructor(userService = new UserService()) {
    this.userService = userService;
  }
  
  getUsers = async (req: Request, res: Response) => {
    const httpResponse = await this.userService.getAllUsersService();
    res.status(200).json(httpResponse);
  };

  createUser = async (req: Request, res: Response) => {
    const body = req.body;
    const httpResponse = await this.userService.createUser(body);
    res.status(201).json(httpResponse);
  };
} 
 