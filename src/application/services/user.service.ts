
import { Injectable } from '@nestjs/common';
import { CreateUserDto } from '../dto/create-user.dto';
import { User } from '../../domain/entities/user.entity';

@Injectable()
export class UserService {
  private users: User[] = [];

  async createUser(dto: CreateUserDto): Promise<User> {
    const user = new User(this.users.length + 1, dto.email, dto.password, dto.role);
    this.users.push(user);
    return user;
  }

  async findUserByEmail(email: string): Promise<User | null> {
    return this.users.find(user => user.email === email) || null;
  }
}
