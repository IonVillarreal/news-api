import express from 'express';
import newsRoutes from './news/newsRoutes';
import authRoutes from './authorization/authRoutes';
import {logger} from './logger';
import cors from 'cors';
import userRoutes from "./users/userRoutes";
import 'dotenv/config'

const app = express();
const PORT = process.env.PORT;

app.use(cors({origin: true, credentials: true}));
app.use(express.json());
app.use(logger);
app.use('/news', newsRoutes);
app.use('/auth', authRoutes);
app.use('/user', userRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
