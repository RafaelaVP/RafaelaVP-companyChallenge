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
    const resEmployee = await request(app).post('/api/v1/employee').send(employeeMock);

    const productMock = {
      name: 'monitor dell',
      category: 'eletronico',
      price: '100',
      employee_id: `${resEmployee.body.employee_id}`
    };
    const response = await request(app).post('/api/v1/product').send(productMock);
    expect(response.statusCode).toEqual(201);
  });
  it('returns status 400 badrequest', async () => {
    const employeeMock = {
      name: 'Rafaela Maria',
      cpf: '41303056038',
      office: 'caixa',
      birthday: '20/10/1990'
    };
    const resEmployee = await request(app).post('/api/v1/employee').send(employeeMock);

    const productMock = {
      name: 'monitor dell',
      category: 'eletronico',
      price: '100',
      employee_id: `${resEmployee.body.employee_id}`
    };
    const response = await request(app).post('/api/v1/product').send(productMock);
    expect(response.body).toEqual({
      message: 'Bad Request',
      details: {
        description: 'error required active manager to create the product'
      }
    });
  });
  it('returns status 400 badrequest JOI', async () => {
    const employeeMock = {
      name: 'Rafaela Maria',
      cpf: '41303056038',
      office: 'caixa',
      birthday: '20/10/1990'
    };
    const resEmployee = await request(app).post('/api/v1/employee').send(employeeMock);

    const productMock = {
      name: 12,
      category: 'eletronico',
      price: '100',
      employee_id: `${resEmployee.body.employee_id}`
    };
    const response = await request(app).post('/api/v1/product').send(productMock);
    expect(response.body).toEqual({
      message: 'Bad Request',
      details: {
        message: '"name" must be a string'
      }
    });
  });
});
