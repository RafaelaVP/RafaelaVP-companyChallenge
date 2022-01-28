const request = require('supertest');
const app = require('../../../src/app');

describe('create employee', () => {
  it('returns status 201', async () => {
    const employeeMock = {
      name: 'Rafaela Maria',
      cpf: '41303056038',
      office: 'gerente',
      birthday: '20/10/1990'
    };
    const response = await request(app).post('/api/v1/employee').send(employeeMock);
    expect(response.statusCode).toEqual(201);
  });
});
it('returns bad request status 400 cpf long ', async () => {
  const errorMock = {
    name: 'Rafaela Maria',
    cpf: '329483748347832032',
    office: 'gerente',
    birthday: '20/10/1990'
  };

  const res = await request(app).post('/api/v1/employee').send(errorMock);
  expect(res.statusCode).toEqual(400);
  expect(res.body).toEqual({
    message: 'Bad Request',
    details: {
      message: '"cpf" length must be less than or equal to 11 characters long'
    }
  });
});
it('returns bad request cpf invalid', async () => {
  const employeeMock = {
    name: 'Porto Alegre',
    cpf: '11111111111',
    office: 'gerente',
    birthday: '20/10/1990'
  };
  const resp = await request(app).post('/api/v1/employee').send(employeeMock);
  expect(resp.body).toEqual({
    message: 'Bad Request',
    details: {
      description: 'Invalid CPF'
    }
  });
});
