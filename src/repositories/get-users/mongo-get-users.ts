import { IGetUsersRepository } from "../../controllers/get-users/protocols";
import { MongoClient } from "../../database/mongo";
import { User } from "../../models/users";

export class MongoGetUsersRepository implements IGetUsersRepository {
  async getUsers(): Promise<User[]> {
    const users = await MongoClient.db
      .collection<User>("users")
      .find({})
      .toArray();

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
