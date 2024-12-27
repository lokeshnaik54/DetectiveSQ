import express from 'express';
import { config } from './config/server.js';
import { corsMiddleware } from './middleware/cors.js';
import analyzeRoutes from './routes/analyze.js';
import { logger } from './utils/logger.js';

const app = express();

// Middleware
app.use(express.json());
app.use(express.static(config.publicDir));
app.use(corsMiddleware);

// Routes
app.use(analyzeRoutes);

// Start server
app.listen(config.port, () => {
  logger.info(`DetectiveSQ V2 running on port ${config.port}`);
  logger.info(`Open http://localhost:${config.port} in your browser to access the interface`);
});