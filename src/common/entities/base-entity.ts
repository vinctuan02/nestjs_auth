import { CreateDateColumn, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

export class DateEntity {
    @CreateDateColumn({ type: 'timestamp', name: 'date_created' })
    dateCreated: Date;

    @UpdateDateColumn({
        type: 'timestamp',
        name: 'date_updated',
        nullable: true,
    })
    dateUpdated: Date;
}
export class CommonEntity extends DateEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string;
}