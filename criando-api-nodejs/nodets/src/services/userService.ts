const users = [
  { id: 1, name: "joao" },
  { id: 2, name: "maria" },
];
export interface UserModel {
  id: number;
  name: string;
}
export class UserService {
  users: UserModel[];

  constructor(database = users) {
    this.users = database;
  }
  getAllUsersService = async () => {
    const data = this.users;
    return data;
  };

  createUser = async (user: UserModel) => {
    const data = user;
    if (!user.name) {
      return { message: "error: bad request" };
    } else {
      this.users.push(user);
      console.log("database atualizado", this.users);
      return null;
    }
  };
}
