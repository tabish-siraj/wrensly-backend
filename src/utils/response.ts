interface ApiResponse<T> {
  success: true;
  message: string;
  data: T;
  status: number;
}

interface ApiErrorResponse {
  success: false;
  message: string;
  error: unknown;
  status: number;
}

export const successResponse = <T>(
  message: string,
  data: T,
  status = 200
): ApiResponse<T> => ({
  success: true,
  message,
  data,
  status,
});

export const errorResponse = (
  // The return type is inferred from the interface
  message: string,
  error: unknown = null,
  status = 500
): ApiErrorResponse => ({
  success: false,
  message,
  error,
  status,
});
