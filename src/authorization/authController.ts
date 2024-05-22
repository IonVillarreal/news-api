import {Request, Response} from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import prisma from '../prismaClient';

const SECRET_KEY = 'your_secret_key';

export const register = async (req: Request, res: Response): Promise<void> => {
    const {username, password} = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);

    try {
        const user = await prisma.user.create({
            data: {
                username,
                password: hashedPassword,
            },
        });
        res.status(201).json({message: 'Usuario registrado correctamente'});
    } catch (error) {
        res.status(400).json({message: 'Usuario existente'});
    }
};

export const login = async (req: Request, res: Response): Promise<void> => {
    const {username, password} = req.body;
    const user = await prisma.user.findUnique({where: {username}});

    if (user && (await bcrypt.compare(password, user.password))) {
        const token = jwt.sign({userId: user.id}, SECRET_KEY, {expiresIn: '1h'});
        res.json({token});
    } else {
        res.status(401).json({message: 'Credenciales inválidas'});
    }
};
