
import { Controller, Post, Body, Get } from '@nestjs/common';
import { CreateProductDto } from '../../application/dto/create-product.dto';
import { ProductService } from '../../application/services/product.service';

@Controller('products')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Post()
  async create(@Body() dto: CreateProductDto) {
    return this.productService.createProduct(dto);
  }

  @Get()
  async findAll() {
    return this.productService.listProducts();
  }
}
