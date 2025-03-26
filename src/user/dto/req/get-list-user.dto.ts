import { IsOptional, IsString } from "class-validator";
import { BaseQuery } from "src/common/dto/base-query.dto";

export class GetListUserDto extends BaseQuery {
    @IsOptional()
    @IsString()
    keyword: string;
}