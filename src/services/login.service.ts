import Login from '../interfaces/login.interface';
import User from '../interfaces/user.interface';
import connection from '../models/connection';
import UserModel from '../models/user.model';

export default class LoginService {
  public model: UserModel;

  constructor() {
    this.model = new UserModel(connection);
  }

  public async createLogin(login: Login): Promise<User[]> {
    const newLogin = this.model.findByName(login.username);

    return newLogin;
  }
}
