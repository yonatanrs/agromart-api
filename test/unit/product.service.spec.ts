
import { ProductService } from '../../src/application/services/product.service';
import { CreateProductDto } from '../../src/application/dto/create-product.dto';

describe('ProductService', () => {
  let service: ProductService;

  beforeEach(() => {
    service = new ProductService();
  });

  it('should create product', async () => {
    const dto: CreateProductDto = {
      name: 'Fertilizer',
      price: 150000,
      category: 'Agriculture'
    };
    const product = await service.createProduct(dto);
    expect(product.name).toEqual(dto.name);
  });
});
