import { Pool } from 'mysql2/promise';
import Order from '../interfaces/order.interface';

export default class OrderModel {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public async getAll(): Promise<Order[]> {
    const [orders] = await this.connection.execute(
      `SELECT Orders.id, Orders.userId,
      Products.id AS products
      FROM Trybesmith.Orders INNER JOIN
      Trybesmith.Products ON Products.orderId = Orders.id
      GROUP BY Products.id`,
    );

    return orders as Order[];
  }
}
