import { User } from "../../models/users";
import { HttpResponse } from "../protocols";

export interface IGetUsersController {
  handle(): Promise<HttpResponse<User[]>>;
}

export interface IgetUsersRepository {
  getUsers(): Promise<User[]>;
}
