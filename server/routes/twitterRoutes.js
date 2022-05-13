import express from 'express';

import { getTweet, createTweet } from '../controllers/tweets.js';

const router = express.Router();

router.get('/', getTweet);
router.post('/', createTweet);

export default router;