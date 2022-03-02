import request from 'supertest';
import { faker } from '@faker-js/faker';
import { Express } from 'express-serve-static-core';
import { app } from '../../../server';

let server: Express;
let id = '';

beforeAll(() => {
  server = app;
});

describe('POST api/v1/provider/', () => {
  it('should create a new provider', async () => {
    const cnpj = faker.datatype.number({ min: 10000000000, max: 99999999999 }).toString();
    const razaoSocial = faker.company.companyName();
    const nome = faker.name.firstName();
    const segmento = faker.commerce.department();
    const payload = { cnpj, razaoSocial, nome, segmento };
    const res = await request(server).post('/api/v1/provider/').send(payload);
    expect(res.statusCode).toEqual(201);
    expect(res.body.data).toHaveProperty('id');
  });
});

describe('GET api/v1/provider/', () => {
  it('should get all providers', async () => {
    const res = await request(server).get('/api/v1/provider/').send();
    id = res.body.data[0].id;
    expect(res.statusCode).toEqual(201);
    res.body.data.map((item) => {
      expect(item).toHaveProperty('id');
      expect(item).toHaveProperty('nome');
      expect(item).toHaveProperty('razaoSocial');
      expect(item).toHaveProperty('cnpj');
      expect(item).toHaveProperty('segmento');
      expect(item).toHaveProperty('logradouro');
      expect(item).toHaveProperty('numero');
      expect(item).toHaveProperty('bairro');
      expect(item).toHaveProperty('cep');
      expect(item).toHaveProperty('cidade');
      expect(item).toHaveProperty('uf');
      expect(item).toHaveProperty('createdAt');
      expect(item).toHaveProperty('updatedAt');
    });
  });
});

describe('GET api/v1/provider/:id', () => {
  it('should get a provider by ID', async () => {
    const res = await request(server).get(`/api/v1/provider/${id}`).send();
    expect(res.statusCode).toEqual(201);
    expect(res.body.data).toHaveProperty('id');
    expect(res.body.data).toHaveProperty('nome');
    expect(res.body.data).toHaveProperty('razaoSocial');
    expect(res.body.data).toHaveProperty('cnpj');
    expect(res.body.data).toHaveProperty('segmento');
    expect(res.body.data).toHaveProperty('logradouro');
    expect(res.body.data).toHaveProperty('numero');
    expect(res.body.data).toHaveProperty('bairro');
    expect(res.body.data).toHaveProperty('cep');
    expect(res.body.data).toHaveProperty('cidade');
    expect(res.body.data).toHaveProperty('uf');
    expect(res.body.data).toHaveProperty('createdAt');
    expect(res.body.data).toHaveProperty('updatedAt');
  });
});

describe('PATCH api/v1/provider/:id', () => {
  it('should update a provider by ID', async () => {
    const razaoSocial = faker.company.companyName();
    const segmento = faker.commerce.department();
    const payload = { razaoSocial, segmento };
    const res = await request(server).patch(`/api/v1/provider/${id}`).send(payload);
    expect(res.statusCode).toEqual(200);
    expect(res.body.message).toEqual('Successfully updated');
  });
});

describe('DELETE api/v1/provider/:id', () => {
  it('should delete a provider by ID', async () => {
    const res = await request(server).delete(`/api/v1/provider/${id}`).send();
    expect(res.statusCode).toEqual(204);
  });
});
