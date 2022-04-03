import User from '../interfaces/user.interface';
import connection from '../models/connection';
import UserModel from '../models/user.model';

export default class LoginService {
  public model: UserModel;

  constructor() {
    this.model = new UserModel(connection);
  }

  public async create(login: User): Promise<User[]> {
    const newLogin = await this.model.findByName(login.username);

    return newLogin;
  }
}
