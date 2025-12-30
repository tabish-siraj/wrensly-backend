import { Request, Response, NextFunction } from 'express';
import {
    getTrendingHashtags,
    getPostsByHashtag,
    searchHashtags,
    getHashtagDetails,
} from './service';
import { successResponse } from '../utils/response';
import { UnauthorizedError, BadRequestError } from '../utils/errors';
import { parsePaginationParams } from '../utils/pagination';

export const getTrendingHashtagsController = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        const limit = parseInt(req.query.limit as string) || 10;

        if (limit > 50) {
            throw new BadRequestError('Limit cannot exceed 50');
        }

        const hashtags = await getTrendingHashtags(limit);

        res.status(200).json(successResponse('Trending hashtags retrieved successfully', hashtags));
    } catch (err) {
        next(err);
    }
};

export const getPostsByHashtagController = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    if (!req.user) {
        throw new UnauthorizedError('You must be logged in to view hashtag posts');
    }

    try {
        const { hashtag } = req.params;

        if (!hashtag) {
            throw new BadRequestError('Hashtag name is required');
        }

        const paginationParams = parsePaginationParams(req.query);
        const result = await getPostsByHashtag(req.user, hashtag, paginationParams);

        res.status(200).json(successResponse('Hashtag posts retrieved successfully', result.data, result.meta));
    } catch (err) {
        next(err);
    }
};

export const searchHashtagsController = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        const { q } = req.query;

        if (!q || typeof q !== 'string') {
            throw new BadRequestError('Search query is required');
        }

        if (q.length < 1) {
            throw new BadRequestError('Search query must be at least 1 character');
        }

        const limit = parseInt(req.query.limit as string) || 10;

        if (limit > 20) {
            throw new BadRequestError('Limit cannot exceed 20 for search');
        }

        const hashtags = await searchHashtags(q, limit);

        res.status(200).json(successResponse('Hashtags search completed', hashtags));
    } catch (err) {
        next(err);
    }
};

export const getHashtagDetailsController = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        const { hashtag } = req.params;

        if (!hashtag) {
            throw new BadRequestError('Hashtag name is required');
        }

        const details = await getHashtagDetails(hashtag);

        res.status(200).json(successResponse('Hashtag details retrieved successfully', details));
    } catch (err) {
        next(err);
    }
};