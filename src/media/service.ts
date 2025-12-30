// Media upload service - Backend validation and signed URL generation
import { randomBytes } from 'crypto';
import logger from '../utils/logger';
import { BadRequestError, InternalServerError } from '../utils/errors';
import { UserPayload } from '../types/express';

export interface MediaUploadRequest {
    fileName: string;
    fileType: string;
    fileSize: number;
    uploadType: 'avatar' | 'cover';
}

export interface SignedUploadResponse {
    uploadUrl: string;
    fileUrl: string;
    uploadId: string;
    expiresIn: number;
}

class MediaService {
    private readonly MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB
    private readonly ALLOWED_TYPES = [
        'image/jpeg',
        'image/jpg',
        'image/png',
        'image/gif',
        'image/webp'
    ];
    private readonly UPLOAD_EXPIRY = 15 * 60; // 15 minutes

    /**
     * Generate signed upload URL for direct frontend upload
     * This is the recommended approach for better performance
     */
    async generateSignedUploadUrl(
        user: UserPayload,
        request: MediaUploadRequest
    ): Promise<SignedUploadResponse> {
        try {
            // Validate request
            this.validateUploadRequest(request);

            // Generate unique file name
            const fileExtension = this.getFileExtension(request.fileName);
            const uniqueFileName = this.generateUniqueFileName(
                user.id,
                request.uploadType,
                fileExtension
            );

            // Generate upload ID for tracking
            const uploadId = randomBytes(16).toString('hex');

            // TODO: Replace with your storage provider's signed URL generation
            // This is where you'd integrate with:
            // - AWS S3 presigned URLs
            // - Google Cloud signed URLs  
            // - Cloudinary signed uploads
            // - Supabase signed URLs

            const signedUrl = await this.generateProviderSignedUrl(
                uniqueFileName,
                request.fileType,
                request.fileSize
            );

            const fileUrl = this.getPublicFileUrl(uniqueFileName);

            logger.info(`Generated signed upload URL for user ${user.id}, file: ${uniqueFileName}`);

            return {
                uploadUrl: signedUrl,
                fileUrl: fileUrl,
                uploadId: uploadId,
                expiresIn: this.UPLOAD_EXPIRY
            };

        } catch (error) {
            logger.error('Error generating signed upload URL:', error);
            throw error;
        }
    }

    /**
     * Validate upload completion and update user profile
     */
    async confirmUpload(
        user: UserPayload,
        uploadId: string,
        fileUrl: string,
        uploadType: 'avatar' | 'cover'
    ): Promise<void> {
        try {
            // Verify the file was actually uploaded
            const isUploaded = await this.verifyFileExists(fileUrl);
            if (!isUploaded) {
                throw new BadRequestError('File upload verification failed');
            }

            // Update user profile with new media URL
            // This will be handled by the existing updateUser service
            logger.info(`Upload confirmed for user ${user.id}, type: ${uploadType}, URL: ${fileUrl}`);

        } catch (error) {
            logger.error('Error confirming upload:', error);
            throw error;
        }
    }

    /**
     * Delete media file (for cleanup)
     */
    async deleteMedia(user: UserPayload, fileUrl: string): Promise<void> {
        try {
            // TODO: Implement provider-specific deletion
            // Extract file key from URL and delete from storage

            logger.info(`Media deleted for user ${user.id}, URL: ${fileUrl}`);
        } catch (error) {
            logger.error('Error deleting media:', error);
            throw error;
        }
    }

    // Private helper methods
    private validateUploadRequest(request: MediaUploadRequest): void {
        if (!request.fileName || !request.fileType || !request.fileSize) {
            throw new BadRequestError('Missing required upload parameters');
        }

        if (request.fileSize > this.MAX_FILE_SIZE) {
            throw new BadRequestError(`File size exceeds maximum limit of ${this.MAX_FILE_SIZE / (1024 * 1024)}MB`);
        }

        if (!this.ALLOWED_TYPES.includes(request.fileType.toLowerCase())) {
            throw new BadRequestError(`File type ${request.fileType} is not allowed`);
        }

        if (!['avatar', 'cover'].includes(request.uploadType)) {
            throw new BadRequestError('Invalid upload type');
        }
    }

    private getFileExtension(fileName: string): string {
        const parts = fileName.split('.');
        return parts.length > 1 ? `.${parts.pop()?.toLowerCase()}` : '';
    }

    private generateUniqueFileName(userId: string, type: string, extension: string): string {
        const timestamp = Date.now();
        const random = randomBytes(8).toString('hex');
        return `${type}/${userId}/${timestamp}-${random}${extension}`;
    }

    private async generateProviderSignedUrl(
        fileName: string,
        contentType: string,
        contentLength: number
    ): Promise<string> {
        // TODO: Implement based on your storage provider

        // AWS S3 Example:
        /*
        const s3 = new S3Client({ region: process.env.AWS_REGION });
        const command = new PutObjectCommand({
            Bucket: process.env.S3_BUCKET_NAME,
            Key: fileName,
            ContentType: contentType,
            ContentLength: contentLength,
        });
        return await getSignedUrl(s3, command, { expiresIn: this.UPLOAD_EXPIRY });
        */

        // Cloudinary Example:
        /*
        const timestamp = Math.round(new Date().getTime() / 1000);
        const signature = cloudinary.utils.api_sign_request({
            timestamp: timestamp,
            folder: 'uploads',
            public_id: fileName
        }, process.env.CLOUDINARY_API_SECRET);
        
        return `https://api.cloudinary.com/v1_1/${process.env.CLOUDINARY_CLOUD_NAME}/image/upload`;
        */

        // For now, return a mock URL (replace with actual implementation)
        return `https://mock-upload-url.com/upload/${fileName}`;
    }

    private getPublicFileUrl(fileName: string): string {
        // TODO: Return the public URL where the file will be accessible
        const baseUrl = process.env.MEDIA_BASE_URL || 'https://your-cdn.com';
        return `${baseUrl}/${fileName}`;
    }

    private async verifyFileExists(fileUrl: string): Promise<boolean> {
        try {
            // TODO: Implement file existence check
            // This could be a HEAD request to the file URL
            // or a check with your storage provider's API
            return true; // Mock implementation
        } catch (error) {
            return false;
        }
    }
}

export const mediaService = new MediaService();