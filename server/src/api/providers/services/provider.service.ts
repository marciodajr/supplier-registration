import { ProviderDTO, ProviderInputDTO, ProviderOutputDTO } from '../dtos/providers.dto';
import ProvidersRepository from '../repositories/providers.repository';

class ProviderService {
  constructor() {}

  async create(payload: ProviderInputDTO): Promise<Record<'id', ProviderInputDTO['id']>> {
    const { id } = await ProvidersRepository.create(payload);
    return { id };
  }

  async getAll(): Promise<ProviderOutputDTO[]> {
    return await ProvidersRepository.getAll();
  }

  async getById(id: ProviderDTO['id']): Promise<ProviderOutputDTO> {
    return await ProvidersRepository.getById(id);
  }

  async update(id: ProviderDTO['id'], payload: ProviderInputDTO): Promise<Boolean> {
    return await ProvidersRepository.update(id, payload);
  }

  async remove(id: ProviderDTO['id']): Promise<Boolean> {
    return await ProvidersRepository.remove(id);
  }
}

export default new ProviderService();
