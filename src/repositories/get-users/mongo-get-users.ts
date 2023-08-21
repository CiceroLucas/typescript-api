import { IGetUsersRepository } from "../../controllers/get-users/protocols";
import { User } from "../../models/users";

export class MongoGetUsersRepository implements IGetUsersRepository {
  async getUsers(): Promise<User[]> {
    return [
      {
        firstName: "Lucas",
        lastName: "Sousa",
        email: "lucas@gmail.com",
        password: "123",
      },
    ];
  }
}
