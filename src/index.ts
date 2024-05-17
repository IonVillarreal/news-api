import express from 'express';
import newsRoutes from './newsRoutes';
import { logger } from './logger';
import cors from 'cors';

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());
app.use(logger);
app.use('/news', newsRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
