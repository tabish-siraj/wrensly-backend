// src/controllers/users/controller.ts
import { Request, Response, NextFunction } from 'express';
// import { createUser, getUserByEmail, getUserById, updateUser, getProfileByUserId, updateProfile } from './service';
import { createUser, getUserByEmail, getUserById, updateUser } from './service';
import { successResponse } from '../utils/response';

export const registerUserController = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const user = await createUser(req.body);
        res.status(201).json(successResponse('User created successfully', user));
    } catch (err: any) {
        next(err);
    }
};

export const updateUserController = async (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params;
    try {
        const user = await updateUser(id, req.body);
        res.status(200).json(successResponse('User updated successfully', user));
    } catch (err: any) {
        next(err);
    }
};

export const getMyUserController = async (req: Request, res: Response, next: NextFunction) => {
    const id = (req as any).user.id; // Assuming user ID is stored in req.user
    try {
        const user = await getUserById(id);
        res.status(200).json(successResponse('User retrieved successfully', user));
    } catch (err: any) {
        next(err);

    }
}

export const getUserByIDController = async (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params;
    try {
        const user = await getUserById(id);
        res.status(200).json(successResponse('User retrieved successfully', user));
    } catch (err: any) {
        next(err);

    }
}

export const getUserByEmailController = async (req: Request, res: Response, next: NextFunction) => {
    const { email } = req.params;
    try {
        const user = await getUserByEmail(email);
        res.status(200).json(successResponse('User retrieved successfully', user));
    } catch (err: any) {
        next(err);
    }
}

// export const updateProfileController = async (req: Request, res: Response, next: NextFunction) => {
//     const { id } = req.params;
//     try {
//         const profile = await updateProfile(id, req.body);
//         res.status(200).json(successResponse('Profile updated successfully', profile));
//     } catch (err: any) {
//         next(err);
//     }
// }

// export const getProfileController = async (req: Request, res: Response, next: NextFunction) => {
//     const { id } = req.params;
//     try {
//         const profile = await getProfileByUserId(id);
//         res.status(200).json(successResponse('Profile retrieved successfully', profile));
//     } catch (err: any) {
//         next(err);
//     }
// }