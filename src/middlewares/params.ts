import { Request, Response, NextFunction } from 'express';
import { GlobalParams } from '../types/express';

export async function globalParamsHandler(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const params: GlobalParams = {
      id: req.query.id as string,
      search: req.query.search as string,
      username: req.query.username as string,
      type: req.query.type as string,
      limit: Number(req.query.limit) || 20,
      offset: Number(req.query.offset) || 0,
      sortBy: (req.query.sortBy as string) || 'createdAt',
      sortOrder: (req.query.sortOrder as 'asc' | 'desc') || 'desc',
    };
    req.gParams = params;
    next();
  } catch (error) {
    next(error);
  }
}
