import { UserController } from "./userController";
import { UserService } from "../services/userService";

describe("UserController", () => {
  const mockUserService: Partial<UserService> = {};
  const userControler = new UserController(mockUserService as UserService);
  it("deve adicionar um novo usuario", () => {
    console.log(userControler);
    // const mockConsole = jest.spyOn(global.console, "log")
    // expect(mockConsole).toHaveBeenCalled();
  });
});
