import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { UserService } from './services/user.service';

import { SuccessRes } from 'src/common/dto/success.dto';
import { DataPagination } from 'src/common/dto/pagination.dto';
import { User } from './entities/user.entity';
import { CreateUserDto } from './dto/req/create-user.dto';
import { GetListUserDto } from './dto/req/get-list-user.dto';
import { UpdateUserDto } from './dto/req/update-user.dto';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) { }

  @Post()
  async create(@Body() createUserDto: CreateUserDto) {
    const result = await this.userService.create(createUserDto);
    return new SuccessRes('Create new user successfully', result)
  }

  @Get()
  async getListUsers(@Query() query: GetListUserDto): Promise<SuccessRes<DataPagination<User>>> {
    const result = await this.userService.getListUsers(query);
    return new SuccessRes("Get list user oke", result)
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const result = await this.userService.findOne(id);
    return new SuccessRes('Get detail user oke', result)
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    const result = await this.userService.update(id, updateUserDto);
    return new SuccessRes('Get detail user oke', result)
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    await this.userService.remove(id);
    return new SuccessRes('Delete a user oke')
  }
}
