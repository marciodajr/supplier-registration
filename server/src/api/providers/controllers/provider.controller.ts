import { Response, Request } from 'express';
import { validationResult } from 'express-validator';
import ProviderService from '../services/provider.service';

export class ProviderController {
  constructor() {}

  static async create(req: Request, res: Response) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      res.status(400).json({
        status: 400,
        message: 'Errors encountered before creating',
        data: null,
        errors: errors.array()
      });
    } else {
      const payload = await ProviderService.create(req.body);
      if (payload) {
        res.status(201).json({
          status: 201,
          message: 'successfully created',
          data: payload,
          errors: null
        });
      } else {
        res.status(500).json({
          status: 500,
          message: 'Internal server error contact support',
          data: null,
          errors: null
        });
      }
    }
  }

  static async getAll(req: Request, res: Response) {
    const payload = await ProviderService.getAll();
    if (payload) {
      res.status(201).json({
        status: 201,
        message: 'Successfully consulted',
        data: payload,
        errors: null
      });
    } else {
      res.status(500).json({
        status: 500,
        message: 'Internal server error contact support',
        data: null,
        errors: null
      });
    }
  }

  static async getById(req: Request, res: Response) {
    const payload = await ProviderService.getById(req.params.id);
    if (payload) {
      res.status(201).json({
        status: 201,
        message: 'Successfully consulted',
        data: payload,
        errors: null
      });
    } else {
      res.status(400).json({
        status: 400,
        message: 'Register not found',
        data: null,
        errors: null
      });
    }
  }

  static async update(req: Request, res: Response) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      res.status(400).json({
        status: 400,
        message: 'Errors encountered before updating',
        data: null,
        errors: errors.array()
      });
    } else {
      const update = await ProviderService.update(req.params.id, req.body);
      if (update) {
        res.status(200).json({
          status: 200,
          message: 'Successfully updated',
          errors: null
        });
      } else {
        res.status(400).json({
          status: 400,
          message: 'Register not found',
          errors: null
        });
      }
    }
  }

  static async remove(req: Request, res: Response) {
    const deleted = await ProviderService.remove(req.params.id);
    if (deleted) {
      res.status(204).send();
    } else {
      res.status(400).json({
        status: 400,
        message: 'Register not found',
        errors: null
      });
    }
  }
}
