import { PrismaClient } from '@prisma/client';
import { News } from '@prisma/client';

const prisma = new PrismaClient({
  log: [
    {
      emit: 'event',
      level: 'query',
    },
  ],
});

prisma.$on('query', (e) => {
  console.log(`Query: ${e.query}`);
  console.log(`Params: ${e.params}`);
  console.log(`Duration: ${e.duration}ms`);
});

export const getAllNews = async (page: number, pageSize: number): Promise<News[]> => {
  const skip = (page - 1) * pageSize;
  return await prisma.news.findMany({
    skip,
    take: pageSize,
  });
};

export const getNewsById = async (id: number): Promise<News | null> => {
  return await prisma.news.findUnique({
    where: { id },
  });
};

export const createNews = async (newsData: Omit<News, 'id'>): Promise<News> => {
  return await prisma.news.create({
    data: newsData,
  });
};

export const updateNews = async (id: number, newsData: Partial<News>): Promise<News> => {
  return await prisma.news.update({
    where: { id },
    data: newsData,
  });
};
