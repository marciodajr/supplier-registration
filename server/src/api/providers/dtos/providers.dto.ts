import { Optional } from 'sequelize/types';

export interface ProviderDTO {
  id: string;
  nome: string;
  razaoSocial: string;
  cnpj: string;
  segmento: string;
  logradouro?: string;
  numero?: string;
  bairro?: string;
  cep?: string;
  cidade?: string;
  uf?: string;
  telefone?: string;
  email?: string;
}

export interface ProviderInputDTO extends Optional<ProviderDTO, 'id'> {}

export interface ProviderOutputDTO extends Required<ProviderDTO> {}
