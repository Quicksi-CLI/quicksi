/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are prefixed by /api.
| https://yourdomain.com/api/endpoint
|
*/


import { Router } from 'express';

import { router as authRoutes } from './auth';

export const router: Router = Router();

router.use('/auth', authRoutes);
