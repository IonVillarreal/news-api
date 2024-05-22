import { Request, Response } from 'express';
import prisma from '../prismaClient';

export const getUserInfo = async (req: any, res: Response): Promise<void> => {
    const userId = req['userId'];
    console.log(`userId: `, userId)

    try {
        const user = await prisma.user.findUnique({
            where: { id: userId },
            select: {
                id: true,
                username: true,
            },
        });

        if (user) {
            res.json(user);
        } else {
            res.status(404).json({ message: 'User not found' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Internal server error' });
    }
};
