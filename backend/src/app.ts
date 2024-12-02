import express from 'express';
import bodyParser from 'body-parser';
import gptRoutes from './routes/gptRoutes';
import userRoutes from './routes/userRoutes';

const app = express();
app.use(bodyParser.json());
app.use('/api/gpt', gptRoutes);
app.use('/api/users', userRoutes);

app.listen(3000, () => console.log('Server running on port 3000'));
export default app;
