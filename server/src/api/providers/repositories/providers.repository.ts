import { v4 as uuidV4 } from 'uuid';
import ProvidersModel from '../../../database/sequelize/models/providers.model';
import { ProviderDTO, ProviderInputDTO, ProviderOutputDTO } from '../dtos/providers.dto';

class ProviderRepository {
  constructor() {}

  async create(payload: ProviderInputDTO): Promise<ProviderOutputDTO> {
    return await ProvidersModel.create({ ...payload, id: uuidV4() });
  }

  async update(id: string, payload: Partial<ProviderInputDTO>): Promise<boolean> {
    const provider = await ProvidersModel.findByPk(id);
    if (provider) {
      await ProvidersModel.update(payload, { where: { id } });
    }
    return !!provider;
  }

  async getById(id: ProviderDTO['id']): Promise<ProviderOutputDTO> {
    return await ProvidersModel.findByPk(id);
  }

  async remove(id: string): Promise<boolean> {
    const provider = await ProvidersModel.findByPk(id);
    if (provider) {
      await ProvidersModel.destroy({ where: { id } });
    }
    return !!provider;
  }

  async getAll(): Promise<ProviderOutputDTO[]> {
    return await ProvidersModel.findAll();
  }
}

export default new ProviderRepository();
