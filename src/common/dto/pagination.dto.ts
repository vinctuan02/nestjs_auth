import { Expose } from 'class-transformer';

export class DataPagination<T> {
    items?: T[];

    metadata: MetadataDto;

    constructor(items: T[], page: number, pageSize: number) {
        this.items = items;
        this.metadata = new MetadataDto(page, pageSize, items.length)
    }
}


class MetadataDto {
    page: number;
    pageSize: number;
    totalItems: number;
    totalPages: number;

    constructor(
        page: number,
        pageSize: number,
        totalItems: number,
    ) {
        this.page = page;
        this.pageSize = pageSize;
        this.totalItems = totalItems;
        this.totalPages = Math.ceil(totalItems / pageSize);
    }
}

