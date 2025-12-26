// Utility function to convert camelCase to snake_case
const toSnakeCase = (str: string): string => {
  return str.replace(/[A-Z]/g, letter => `_${letter.toLowerCase()}`);
};

// Utility function to convert snake_case to camelCase
const toCamelCase = (str: string): string => {
  return str.replace(/_([a-z])/g, (_, letter) => letter.toUpperCase());
};

// Transform object keys to snake_case recursively
export const transformToSnakeCase = (obj: any): any => {
  if (obj === null || obj === undefined) {
    return obj;
  }

  if (Array.isArray(obj)) {
    return obj.map(transformToSnakeCase);
  }

  if (typeof obj === 'object' && obj.constructor === Object) {
    const transformed: any = {};
    for (const [key, value] of Object.entries(obj)) {
      const snakeKey = toSnakeCase(key);
      transformed[snakeKey] = transformToSnakeCase(value);
    }
    return transformed;
  }

  return obj;
};

// Transform object keys to camelCase recursively (for incoming payloads)
export const transformToCamelCase = (obj: any): any => {
  if (obj === null || obj === undefined) {
    return obj;
  }

  if (Array.isArray(obj)) {
    return obj.map(transformToCamelCase);
  }

  if (typeof obj === 'object' && obj.constructor === Object) {
    const transformed: any = {};
    for (const [key, value] of Object.entries(obj)) {
      const camelKey = toCamelCase(key);
      transformed[camelKey] = transformToCamelCase(value);
    }
    return transformed;
  }

  return obj;
};

interface PaginationMeta {
  cursor?: string;
  has_next_page: boolean;
  has_previous_page: boolean;
  total_count?: number; // Optional for performance
}

interface ApiResponse<T> {
  success: true;
  message: string;
  data: T;
  meta?: {
    pagination?: PaginationMeta;
    timestamp: string;
  };
}

interface ApiErrorResponse {
  success: false;
  message: string;
  data: null;
  meta: {
    timestamp: string;
  };
}

export const successResponse = <T>(
  message: string,
  data: T,
  meta?: {
    pagination?: any;
    timestamp?: string;
  }
): ApiResponse<T> => {
  // Transform data to snake_case
  const transformedData = transformToSnakeCase(data);

  // Transform pagination meta to snake_case if present
  const transformedPagination = meta?.pagination ? {
    cursor: meta.pagination.cursor,
    has_next_page: meta.pagination.hasNextPage,
    has_previous_page: meta.pagination.hasPreviousPage,
    total_count: meta.pagination.totalCount,
  } : undefined;

  return {
    success: true,
    message,
    data: transformedData,
    meta: {
      ...(transformedPagination && { pagination: transformedPagination }),
      timestamp: meta?.timestamp || new Date().toISOString(),
    },
  };
};

export const errorResponse = (
  message: string,
  error: unknown = null,
  status = 500
): ApiErrorResponse => ({
  success: false,
  message,
  data: null,
  meta: {
    timestamp: new Date().toISOString(),
  },
});
