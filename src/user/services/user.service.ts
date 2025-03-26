import { Injectable, NotFoundException } from '@nestjs/common';
import { User } from '../entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { DataPagination } from 'src/common/dto/pagination.dto';
import { plainToInstance } from 'class-transformer';
import { hashPassword } from 'src/common/helper/functions';
import { CreateUserDto } from '../dto/req/create-user.dto';
import { GetListUserDto } from '../dto/req/get-list-user.dto';
import { UpdateUserDto } from '../dto/req/update-user.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) { }

  async create(payload: CreateUserDto): Promise<User> {
    payload.password = await hashPassword(payload.password)
    const newUser = this.userRepository.create(payload)
    const savedUser = await this.userRepository.save(newUser)
    return plainToInstance(User, savedUser);
  }

  async getListUsers(payload: GetListUserDto): Promise<DataPagination<User>> {
    const { keyword, order, orderBy, page, pageSize } = payload

    const queryBuilder = this.userRepository.createQueryBuilder('user')
      .select()
      .orderBy(`user.${orderBy}`, order)
      .skip(payload.skip)
      .take(pageSize);

    if (keyword) {
      queryBuilder.andWhere('user.name LIKE :keyword', {
        keyword: `%${keyword}%`,
      })
    }

    const result = await queryBuilder.getMany();
    return new DataPagination(plainToInstance(User, result), page, pageSize)
  }

  async findOne(id: string): Promise<User | null> {
    const user = await this.userRepository.findOne({ where: { id } })
    if (!user) throw new NotFoundException('User not found')
    return plainToInstance(User, user)
  }

  async findByEmail(email: string): Promise<User | null> {
    const user = await this.userRepository.findOne({ where: { email } })
    if (!user) throw new NotFoundException('User not found')
    return plainToInstance(User, user)
  }



  async update(id: string, updateUserDto: UpdateUserDto) {
    const user = await this.findOne(id)

    Object.assign(user, updateUserDto)

    const savedUser = await this.userRepository.save(user)
    return plainToInstance(User, savedUser)
  }

  async remove(id: string) {
    await this.findOne(id)
    await this.userRepository.delete(id)
  }
}
