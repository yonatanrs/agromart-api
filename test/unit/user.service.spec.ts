
import { UserService } from '../../src/application/services/user.service';
import { CreateUserDto } from '../../src/application/dto/create-user.dto';

describe('UserService', () => {
  let service: UserService;

  beforeEach(() => {
    service = new UserService();
  });

  it('should create user', async () => {
    const dto: CreateUserDto = {
      email: 'test@example.com',
      password: '123456',
      role: 'buyer'
    };
    const user = await service.createUser(dto);
    expect(user.email).toEqual(dto.email);
  });
});
