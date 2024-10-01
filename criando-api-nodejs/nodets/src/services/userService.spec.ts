import { UserModel } from "./userService";
import { UserService } from "./userService";

describe("UserService", () => {
  const mockDb: UserModel[] = [];
  const userService = new UserService(mockDb);

  it("Deve adicionar um novo usuario", () => {
    const mockConsole = jest.spyOn(global.console, "log");
    userService.createUser({ id: 3, name: "Jose" });

    expect(mockConsole).toHaveBeenCalledWith("database atualizado", mockDb);
  });
});
