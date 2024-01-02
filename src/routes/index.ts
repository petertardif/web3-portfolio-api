import express from 'express';
import { getNfts } from '../controllers/nfts/nftsController';

const router = express.Router();

router.get('/nfts', getNfts);

export default router;
