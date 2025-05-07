
import { Controller, Post, Body } from '@nestjs/common';
import { CreatePaymentDto } from '../../application/dto/create-payment.dto';
import { PaymentService } from '../../application/services/payment.service';

@Controller('payments')
export class PaymentController {
  constructor(private readonly paymentService: PaymentService) {}

  @Post()
  async pay(@Body() dto: CreatePaymentDto) {
    return this.paymentService.processPayment(dto);
  }
}
