import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import * as dotenv from 'dotenv';
import { User } from 'src/user/entities/user.entity';

dotenv.config();

export const typeOrmConfig: TypeOrmModuleOptions = {
    type: 'mysql',
    host: process.env.DATABASE_HOST || 'localhost',
    port: parseInt(process.env.DATABASE_PORT, 10) || 3306,
    username: process.env.DATABASE_USER || 'root',
    password: process.env.DATABASE_PASS || 'secret',
    database: process.env.DATABASE_NAME || 'mydb',
    // entities: [__dirname + '/../**/*.entity.{ts,js}'], // Load tất cả entity
    entities: [User],
    synchronize: process.env.DATABASE_SYNCHRONIZE === 'true', // Chỉ dùng true cho dev, prod thì false
    logging: process.env.DATABASE_LOGGING === 'true',
};
