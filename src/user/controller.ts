// src/controllers/users/controller.ts
import { Request, Response } from 'express';
import { createUser, getUserByEmail, getUserById, updateUser } from './service';
import { successResponse, errorResponse } from '../utils/response';
import logger from '../utils/logger';

export const registerUserController = async (req: Request, res: Response) => {
    try {
        const user = await createUser(req.body);
        res.status(201).json(successResponse('User created successfully', user));
    } catch (err: any) {
        logger.error(`registerUser failed: ${err.message}`);
        const errorDetails = err.details || err.message;
        res.status(400).json(errorResponse('User creation failed', errorDetails));
    }
};

export const updateUserController = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        const user = await updateUser(id, req.body);
        res.status(200).json(successResponse('User updated successfully', user));
    } catch (err: any) {
        logger.error(`updateUser failed: ${err.message}`);
        const errorDetails = err.details || err.message;
        res.status(400).json(errorResponse('User update failed', errorDetails));
    }
};

export const getUserByIDController = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        const user = await getUserById(id);
        if (!user) {
            res.status(404).json(errorResponse('User not found'));
        }
        res.status(200).json(successResponse('User retrieved successfully', user));
    } catch (err: any) {
        logger.error(`getUser failed: ${err.message}`);
        const errorDetails = err.details || err.message;
        res.status(400).json(errorResponse('User retrieval failed', errorDetails));

    }
}


export const getUserByEmailController = async (req: Request, res: Response) => {
    const { email } = req.params;
    try {
        const user = await getUserByEmail(email);
        if (!user) {
            res.status(404).json(errorResponse('User not found'));
        }
        res.status(200).json(successResponse('User retrieved successfully', user));
    } catch (err: any) {
        logger.error(`getUser failed: ${err.message}`);
        const errorDetails = err.details || err.message;
        res.status(400).json(errorResponse('User retrieval failed', errorDetails));
    }
}