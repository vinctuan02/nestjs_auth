import { IsEnum, IsNotEmpty } from "class-validator";
import { RoleUser } from "../enum/role-user.enum";

export class CreateUserDto {
    @IsNotEmpty()
    name: string;

    // @IsNotEmpty()
    // @IsEnum(RoleUser)
    // role: RoleUser

    @IsNotEmpty()
    email: string;

    @IsNotEmpty()
    password: string;
}
