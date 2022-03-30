import UserModel from '../models/user.model';
import connection from '../models/connection';
import User from '../interfaces/user.interface';

export default class UserService {
  public model: UserModel;

  constructor() {
    this.model = new UserModel(connection);
  }

  public async create(user: User): Promise<User> {
    const newUser = await this.model.create(user);
    return newUser;
  }
}