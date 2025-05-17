export const successResponse = (message: string, data: any = {}, status = 200) => ({
  success: true,
  message,
  data,
  status,
});

export const errorResponse = (message: string, error: any = {}, status = 500) => ({
  success: false,
  message,
  error,
  status,
});
