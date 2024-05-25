import {Request, Response} from 'express';
import * as newsService from './newsService';

export const getAllNews = async (req: Request, res: Response): Promise<void> => {
    const page = parseInt(req.query.page as string) || 1;
    const pageSize = parseInt(req.query.pageSize as string) || 10;
    const news = await newsService.getAllNews(page, pageSize);
    res.json(news);
};

export const getNewsById = async (req: Request, res: Response): Promise<void> => {
    const id = parseInt(req.params.id);
    const news = await newsService.getNewsById(id);
    if (news) {
        res.json(news);
    } else {
        res.status(404).json({message: 'News not found'});
    }
};

export const createNews = async (req: Request, res: Response): Promise<void> => {
    const newsData = req.body;
    const news = await newsService.createNews(newsData);
    res.status(201).json(news);
};

export const updateNews = async (req: Request, res: Response): Promise<void> => {
    const id = parseInt(req.params.id);
    const newsData = req.body;
    try {
        const news = await newsService.updateNews(id, newsData);
        res.json(news);
    } catch (error) {
        res.status(404).json({message: 'News not found'});
    }
};

export const deleteNews = async (req: Request, res: Response): Promise<void> => {
    const id = parseInt(req.params.id);
    try {
        const news = await newsService.deleteNews(id);
        res.json(news);
    } catch (error) {
        res.status(404).json({message: 'News not found'});
    }
};
