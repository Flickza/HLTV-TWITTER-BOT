import express from 'express';

import { getTweet, createTweet, testTweet } from '../controllers/tweets.js';

const router = express.Router();

router.get('/', getTweet);
router.get('/test', testTweet);
router.post('/', createTweet);

export default router;