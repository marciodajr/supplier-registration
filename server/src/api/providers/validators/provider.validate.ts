import { body } from 'express-validator';

export class ProviderValidate {
  static onCreate() {
    return [
      body('cnpj').notEmpty().withMessage('is required'),
      body('nome').notEmpty().withMessage('is required'),
      body('razaoSocial').notEmpty().withMessage('is required'),
      body('segmento').notEmpty().withMessage('is required')
    ];
  }

  static onUpdate() {
    return [
      body('cnpj').notEmpty().optional().withMessage('is required'),
      body('nome').notEmpty().optional().withMessage('is required'),
      body('razaoSocial').optional().notEmpty().withMessage('is required'),
      body('segmento').optional().notEmpty().withMessage('is required')
    ];
  }
}
