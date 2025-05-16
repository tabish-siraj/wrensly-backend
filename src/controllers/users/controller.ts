import { Request, Response } from 'express';
import { createUser } from '../../services/users/service';

export const registerUser = async (req: Request, res: Response) => {
  try {
    const user = await createUser(req.body);
    res.status(201).json(user);
  } catch (err) {
    res.status(400).json({ error: 'User creation failed', detail: err });
  }
};
