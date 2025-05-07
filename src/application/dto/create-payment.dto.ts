
import { IsNumber, IsNotEmpty } from 'class-validator';

export class CreatePaymentDto {
  @IsNumber()
  orderId: number;

  @IsNumber()
  amount: number;

  @IsNotEmpty()
  paymentMethod: string;
}
