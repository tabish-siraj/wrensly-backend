import { Request, Response, NextFunction } from 'express';
import {
    searchAll,
    searchPosts,
    searchUsers,
    searchHashtags,
    getSearchSuggestions,
    SearchFilters,
} from './service';
import { successResponse } from '../utils/response';
import { UnauthorizedError, BadRequestError } from '../utils/errors';
import { parsePaginationParams } from '../utils/pagination';

export const searchAllController = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    if (!req.user) {
        throw new UnauthorizedError('You must be logged in to search');
    }

    try {
        const { q, type, dateRange, sortBy } = req.query;

        if (!q || typeof q !== 'string') {
            throw new BadRequestError('Search query is required');
        }

        if (q.trim().length < 1) {
            throw new BadRequestError('Search query must be at least 1 character');
        }

        const filters: SearchFilters = {
            type: (type as any) || 'all',
            dateRange: (dateRange as any) || 'all',
            sortBy: (sortBy as any) || 'relevance',
        };

        // Validate filter values
        if (!['all', 'posts', 'users', 'hashtags'].includes(filters.type!)) {
            throw new BadRequestError('Invalid search type');
        }

        if (!['all', 'today', 'week', 'month', 'year'].includes(filters.dateRange!)) {
            throw new BadRequestError('Invalid date range');
        }

        if (!['relevance', 'recent', 'popular'].includes(filters.sortBy!)) {
            throw new BadRequestError('Invalid sort option');
        }

        const paginationParams = parsePaginationParams(req.query);
        const results = await searchAll(req.user, q, filters, paginationParams);

        res.status(200).json(successResponse('Search completed successfully', results));
    } catch (err) {
        next(err);
    }
};

export const searchPostsController = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    if (!req.user) {
        throw new UnauthorizedError('You must be logged in to search posts');
    }

    try {
        const { q, dateRange, sortBy } = req.query;

        if (!q || typeof q !== 'string') {
            throw new BadRequestError('Search query is required');
        }

        if (q.trim().length < 1) {
            throw new BadRequestError('Search query must be at least 1 character');
        }

        const filters: SearchFilters = {
            dateRange: (dateRange as any) || 'all',
            sortBy: (sortBy as any) || 'relevance',
        };

        const paginationParams = parsePaginationParams(req.query);
        const result = await searchPosts(req.user, q, filters, paginationParams);

        res.status(200).json(successResponse('Posts search completed', result.data, result.meta));
    } catch (err) {
        next(err);
    }
};

export const searchUsersController = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    if (!req.user) {
        throw new UnauthorizedError('You must be logged in to search users');
    }

    try {
        const { q } = req.query;

        if (!q || typeof q !== 'string') {
            throw new BadRequestError('Search query is required');
        }

        if (q.trim().length < 1) {
            throw new BadRequestError('Search query must be at least 1 character');
        }

        const paginationParams = parsePaginationParams(req.query);
        const result = await searchUsers(req.user, q, {}, paginationParams);

        res.status(200).json(successResponse('Users search completed', result.data, result.meta));
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

        if (q.trim().length < 1) {
            throw new BadRequestError('Search query must be at least 1 character');
        }

        const limit = parseInt(req.query.limit as string) || 10;

        if (limit > 50) {
            throw new BadRequestError('Limit cannot exceed 50');
        }

        const hashtags = await searchHashtags(q, limit);

        res.status(200).json(successResponse('Hashtags search completed', hashtags));
    } catch (err) {
        next(err);
    }
};

export const getSearchSuggestionsController = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    if (!req.user) {
        throw new UnauthorizedError('You must be logged in to get search suggestions');
    }

    try {
        const { q } = req.query;

        if (!q || typeof q !== 'string') {
            throw new BadRequestError('Search query is required');
        }

        if (q.trim().length < 2) {
            return res.status(200).json(successResponse('Search suggestions', {
                users: [],
                hashtags: [],
                recent_searches: [],
            }));
        }

        const suggestions = await getSearchSuggestions(req.user, q);

        res.status(200).json(successResponse('Search suggestions retrieved', suggestions));
    } catch (err) {
        next(err);
    }
};