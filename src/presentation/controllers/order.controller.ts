
import { Controller, Post, Body, Get, Query } from '@nestjs/common';
import { CreateOrderDto } from '../../application/dto/create-order.dto';
import { OrderService } from '../../application/services/order.service';

@Controller('orders')
export class OrderController {
  constructor(private readonly orderService: OrderService) {}

  @Post()
  async create(@Body() dto: CreateOrderDto) {
    return this.orderService.createOrder(dto);
  }

  @Get()
  async getByUser(@Query('userId') userId: number) {
    return this.orderService.getOrdersByUser(userId);
  }
}
