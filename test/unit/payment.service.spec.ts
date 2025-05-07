
import { PaymentService } from '../../src/application/services/payment.service';
import { CreatePaymentDto } from '../../src/application/dto/create-payment.dto';

describe('PaymentService', () => {
  let service: PaymentService;

  beforeEach(() => {
    service = new PaymentService();
  });

  it('should process payment', async () => {
    const dto: CreatePaymentDto = {
      orderId: 1,
      amount: 20000,
      paymentMethod: 'Midtrans'
    };
    const payment = await service.processPayment(dto);
    expect(payment.status).toBe('PAID');
  });
});
