import { CommonEntity } from "src/common/entities/base-entity";
import { Column, Entity } from "typeorm";
import { RoleUser } from "../enum/role-user.enum";

@Entity({ name: 'user' })
export class User extends CommonEntity {
    @Column()
    name: string;

    @Column({ type: 'enum', enum: RoleUser, default: RoleUser.EMPLOYEE })
    role: RoleUser;

    @Column()
    email: string;

    @Column()
    password: string;
}
