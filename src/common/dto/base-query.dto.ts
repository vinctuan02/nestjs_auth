import { IsEnum, IsInt, IsOptional, IsString, Min } from "class-validator";
import { DEFAULT_ORDER_BY, DEFAULT_PAGE, DEFAULT_PAGE_SIZE } from "../constants/common.constant";
import { TypeOrder } from "../enum/type-order.enum";
import { Type } from "class-transformer";

export class BaseQuery {
    @IsOptional()
    @Type(() => Number)
    @IsInt()
    @Min(1)
    page: number = DEFAULT_PAGE;

    @IsOptional()
    @Type(() => Number)
    @IsInt()
    @Min(1)
    pageSize: number = DEFAULT_PAGE_SIZE;

    @IsOptional()
    @IsEnum(TypeOrder)
    order: TypeOrder = TypeOrder.ASC;

    @IsOptional()
    @IsString()
    orderBy: string = DEFAULT_ORDER_BY;

    get skip(): number {
        return (this.page - 1) * this.pageSize;
    }
}