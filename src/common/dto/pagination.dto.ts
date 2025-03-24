import { Expose } from 'class-transformer';

export class DataPagination<T> {
    @Expose()
    items?: T[];

    @Expose()
    metadata: MetadataDto;

    constructor(items: T[], metadata: MetadataDto) {
        this.items = items;
        this.metadata = metadata;
    }
}


export class MetadataDto {
    currentPage: number;
    pageSize: number;
    totalItems: number;
    totalPages: number;

    constructor(
        currentPage: number,
        pageSize: number,
        totalItems: number,
        totalPages: number,
    ) {
        this.currentPage = currentPage;
        this.pageSize = pageSize;
        this.totalItems = totalItems;
        this.totalPages = totalPages;
    }
}

