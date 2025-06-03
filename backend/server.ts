import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import stopRoutes from './route/stoproute';
import userRoutes from './route/userroute';
import messageRoutes from './route/messageroute';
import { collectDefaultMetrics, Registry } from 'prom-client';
dotenv.config();

const app = express();



// Create a metrics registry
const register = new Registry();

// Collect default metrics with the registry
collectDefaultMetrics({ register });


// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/api/user', stopRoutes);
app.use('/api/user', userRoutes);
app.use('/api/messages', messageRoutes);

app.get('/metrics', async (req:express.Request, res: express.Response) => {
  res.set('Content-Type', register.contentType);
  res.send(await register.metrics());
});

// Error handling middleware
app.use((err: Error, req: express.Request, res: express.Response, next: express.NextFunction) => {
  console.error('Error:', err);
  res.status(500).json({
    success: false,
    message: 'Internal server error'
  });
});

mongoose.connect('mongodb+srv://ss9043296:MPy8fD8bCghR3Bw2@busroute.yjqvlyx.mongodb.net/')
  .then(() => {
    console.log('Connected to MongoDB');
    const PORT = process.env.PORT || 5000;
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error('MongoDB connection error:', err);
    process.exit(1);
  });

export default app;