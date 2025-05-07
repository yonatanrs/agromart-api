
import { Injectable } from '@nestjs/common';
import { Order } from '../../domain/entities/order.entity';
import { CreateOrderDto } from '../dto/create-order.dto';

@Injectable()
export class OrderService {
  private orders: Order[] = [];

  async createOrder(dto: CreateOrderDto): Promise<Order> {
    const totalPrice = dto.quantity * 10000; // simulate pricing logic
    const order = new Order(
      this.orders.length + 1,
      dto.userId,
      dto.productId,
      dto.quantity,
      'PENDING',
      totalPrice
    );
    this.orders.push(order);
    return order;
  }

  async getOrdersByUser(userId: number): Promise<Order[]> {
    return this.orders.filter(order => order.userId === userId);
  }
}
