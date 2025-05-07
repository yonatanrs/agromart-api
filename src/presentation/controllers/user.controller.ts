
import { Body, Controller, Post } from '@nestjs/common';
import { CreateUserDto } from '../../application/dto/create-user.dto';
import { UserService } from '../../application/services/user.service';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  async createUser(@Body() dto: CreateUserDto) {
    return this.userService.createUser(dto);
  }
}
