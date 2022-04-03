import { Pool, ResultSetHeader } from 'mysql2/promise';
import User from '../interfaces/user.interface';

export default class UserModel {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public async create(user: User): Promise<User> {
    const { username, classe, level, password } = user;
    const [result] = await this.connection.execute<ResultSetHeader>(
      'INSERT INTO Trybesmith.Users (username, classe, level, password) VALUES (?, ?, ?, ?)',
      [username, classe, level, password],
    );
    const { insertId } = result;
    
    return { id: insertId, ...user };
  }

  public async findByName(username: string): Promise<User[]> {
    const [user] = await this.connection.execute(
      'SELECT * FROM Trybesmith.Users WHERE username = ?',
      [username],
    );

    return user as User[];
  }
}