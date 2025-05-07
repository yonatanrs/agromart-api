
export class Payment {
  constructor(
    public readonly id: number,
    public readonly orderId: number,
    public readonly amount: number,
    public readonly status: string,
    public readonly paymentMethod: string
  ) {}
}
