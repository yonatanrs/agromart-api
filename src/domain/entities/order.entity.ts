
export class Order {
  constructor(
    public readonly id: number,
    public readonly userId: number,
    public readonly productId: number,
    public readonly quantity: number,
    public readonly status: string,
    public readonly totalPrice: number
  ) {}
}
