
import * as request from 'supertest';
import { Test } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import { AppModule } from '../../src/app.module';

describe('PaymentController (e2e)', () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleFixture = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/payments (POST)', () => {
    return request(app.getHttpServer())
      .post('/payments')
      .send({ orderId: 1, amount: 30000, paymentMethod: 'Stripe' })
      .expect(201);
  });
});
