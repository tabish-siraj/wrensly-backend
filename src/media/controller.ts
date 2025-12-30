// Media upload controller
import { Request, Response, NextFunction } from 'express';
import { mediaService } from './service';
import { successResponse } from '../utils/response';
import { UnauthorizedError, BadRequestError } from '../utils/errors';

export const generateUploadUrlController = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    if (!req.user) {
        throw new UnauthorizedError('You must be logged in to upload media');
    }

    try {
        const { fileName, fileType, fileSize, uploadType } = req.body;

        if (!fileName || !fileType || !fileSize || !uploadType) {
            throw new BadRequestError('Missing required parameters: fileName, fileType, fileSize, uploadType');
        }

        const result = await mediaService.generateSignedUploadUrl(req.user, {
            fileName,
            fileType,
            fileSize,
            uploadType
        });

        res.status(200).json(successResponse('Upload URL generated successfully', result));
    } catch (err) {
        next(err);
    }
};

export const confirmUploadController = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    if (!req.user) {
        throw new UnauthorizedError('You must be logged in to confirm upload');
    }

    try {
        const { uploadId, fileUrl, uploadType } = req.body;

        if (!uploadId || !fileUrl || !uploadType) {
            throw new BadRequestError('Missing required parameters: uploadId, fileUrl, uploadType');
        }

        await mediaService.confirmUpload(req.user, uploadId, fileUrl, uploadType);

        res.status(200).json(successResponse('Upload confirmed successfully', null));
    } catch (err) {
        next(err);
    }
};

export const deleteMediaController = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    if (!req.user) {
        throw new UnauthorizedError('You must be logged in to delete media');
    }

    try {
        const { fileUrl } = req.body;

        if (!fileUrl) {
            throw new BadRequestError('Missing required parameter: fileUrl');
        }

        await mediaService.deleteMedia(req.user, fileUrl);

        res.status(200).json(successResponse('Media deleted successfully', null));
    } catch (err) {
        next(err);
    }
};