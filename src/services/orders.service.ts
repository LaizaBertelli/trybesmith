// import Order from '../interfaces/order.interface';
import connection from '../models/connection';
import OrderModel from '../models/order.model';

export default class OrderService {
  public model: OrderModel;

  constructor() {
    this.model = new OrderModel(connection);
  }

  public async getAll() {
    const orders = await this.model.getAll();
    const data = orders.map((order) => ({ ...order, products: [order.products] })); 
    return data;
  }
}
