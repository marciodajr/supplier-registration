interface IResponseData {
  id: string;
  nome: string;
  razaoSocial: string;
  bairro: string;
  cep: string;
  cidade: string;
  cnpj: string;
  logradouro: string;
  numero: string;
  segmento: string;
  uf: string;
  createdAt?: string;
  updatedAt?: string;
}

export interface IResponseGetAll {
  status: string;
  message: string;
  data: IResponseData[];
  errors: null;
}

export interface IResponseGetById {
  status: string;
  message: string;
  data: IResponseData;
  errors: null;
}
