export interface CursorPaginationParams {
    cursor?: string;
    limit?: number;
}

export interface PaginationMeta {
    cursor?: string;
    hasNextPage: boolean;
    hasPreviousPage: boolean;
    totalCount?: number;
}

export interface PaginatedResult<T> {
    data: T[];
    meta: {
        pagination: PaginationMeta;
        timestamp: string;
    };
}

export const createPaginatedResponse = <T extends { id: string }>(
    items: T[],
    limit: number,
    cursor?: string
): PaginatedResult<T> => {
    const hasNextPage = items.length > limit;
    const data = hasNextPage ? items.slice(0, -1) : items;
    const nextCursor = hasNextPage ? data[data.length - 1]?.id : null;

    return {
        data,
        meta: {
            pagination: {
                cursor: nextCursor || undefined,
                hasNextPage,
                hasPreviousPage: !!cursor,
            },
            timestamp: new Date().toISOString(),
        },
    };
};

export const parsePaginationParams = (query: any): CursorPaginationParams => {
    return {
        cursor: query.cursor || undefined,
        limit: query.limit ? Math.min(parseInt(query.limit), 50) : 10, // Max 50 items per page
    };
};