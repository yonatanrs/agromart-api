
import { Injectable } from '@nestjs/common';
import { Product } from '../../domain/entities/product.entity';
import { CreateProductDto } from '../dto/create-product.dto';

@Injectable()
export class ProductService {
  private products: Product[] = [];

  async createProduct(dto: CreateProductDto): Promise<Product> {
    const product = new Product(this.products.length + 1, dto.name, dto.price, dto.category);
    this.products.push(product);
    return product;
  }

  async listProducts(): Promise<Product[]> {
    return this.products;
  }
}
