
import { Injectable } from '@nestjs/common';
import { CreatePaymentDto } from '../dto/create-payment.dto';
import { Payment } from '../../domain/entities/payment.entity';

@Injectable()
export class PaymentService {
  private payments: Payment[] = [];

  async processPayment(dto: CreatePaymentDto): Promise<Payment> {
    const payment = new Payment(
      this.payments.length + 1,
      dto.orderId,
      dto.amount,
      'PAID',
      dto.paymentMethod
    );
    this.payments.push(payment);
    return payment;
  }
}
