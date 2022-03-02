import express, { Request, Response } from 'express';
import { ProviderController } from '../api/providers/controllers/provider.controller';
import { ProviderValidate } from '../api/providers/validators/provider.validate';

const router = express.Router();

router.post('/provider', ProviderValidate.onCreate(), (req: Request, res: Response) =>
  ProviderController.create(req, res)
);

router.get('/provider', (req: Request, res: Response) => ProviderController.getAll(req, res));

router.get('/provider/:id', (req: Request, res: Response) => ProviderController.getById(req, res));

router.patch('/provider/:id', ProviderValidate.onUpdate(), (req: Request, res: Response) =>
  ProviderController.update(req, res)
);

router.delete('/provider/:id', (req: Request, res: Response) => ProviderController.remove(req, res));

export default router;
