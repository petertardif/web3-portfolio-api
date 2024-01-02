import express, { Router } from 'express';
import { Request, Response } from 'express';
import { getNfts } from '../controllers/nfts/nftsController';

const router: Router = express.Router();

router.get('/nfts', (req: Request, res: Response) => {
	getNfts(req, res);
});

export default router;
