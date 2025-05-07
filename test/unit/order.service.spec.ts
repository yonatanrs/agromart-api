
import { OrderService } from '../../src/application/services/order.service';
import { CreateOrderDto } from '../../src/application/dto/create-order.dto';

describe('OrderService', () => {
  let service: OrderService;

  beforeEach(() => {
    service = new OrderService();
  });

  it('should create order', async () => {
    const dto: CreateOrderDto = { userId: 1, productId: 1, quantity: 2 };
    const order = await service.createOrder(dto);
    expect(order.status).toBe('PENDING');
  });
});
