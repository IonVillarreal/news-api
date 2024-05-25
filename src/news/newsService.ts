import {PrismaClient} from '@prisma/client';
import {News} from '@prisma/client';

import prisma from '../prismaClient';

prisma.$on('query', (e) => {
    console.log(`Query: ${e.query}`);
    console.log(`Params: ${e.params}`);
    console.log(`Duration: ${e.duration}ms`);
});

export const getAllNews = (page: number, pageSize: number): Promise<News[]> => {
    const skip = (page - 1) * pageSize;
    return prisma.news.findMany({
        skip,
        take: pageSize,
    });
};

export const getNewsById = (id: number): Promise<News | null> => {
    return prisma.news.findUnique({
        where: {id},
    });
};

export const createNews = (newsData: Omit<News, 'id'>): Promise<News> => {
    return prisma.news.create({
        data: {...newsData, date: new Date()},
    });
};

export const updateNews = (id: number, newsData: Partial<News>): Promise<News> => {
    return prisma.news.update({
        where: {id},
        data: newsData,
    });
};

export const deleteNews = (id: number): Promise<News> => {
    return prisma.news.delete({
        where: {id},
    });
};
