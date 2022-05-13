import express from 'express';

import { getMatch } from '../controllers/hltv.js';

const router = express.Router();

router.get('/', getMatch);

export default router;