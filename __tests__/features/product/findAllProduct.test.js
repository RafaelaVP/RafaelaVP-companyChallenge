const request = require('supertest');
const app = require('../../../src/app');

describe('create employee', () => {
  it('returns status 200', async () => {
    const employeeMock = {
      name: 'Rafaela Maria',
      cpf: '41303056038',
      office: 'gerente',
      birthday: '20/10/1990'
    };
    let response = await request(app).post('/api/v1/employee').send(employeeMock);
    const { employee_id } = await response.body;
    const productMock = {
      name: 'monitor dell',
      category: 'eletronico',
      price: '100',
      employee_id
    };
    await request(app).post('/api/v1/product').send(productMock);
    response = await request(app).get('/api/v1/product?max_price=100');
    expect(response.statusCode).toEqual(200);
  });
  it('returns status 200', async () => {
    const employeeMock = {
      name: 'Rafaela Maria',
      cpf: '41303056038',
      office: 'gerente',
      birthday: '20/10/1990'
    };
    let response = await request(app).post('/api/v1/employee').send(employeeMock);
    const { employee_id } = await response.body;
    const productMock = {
      name: 'monitor dell',
      category: 'eletronico',
      price: '100',
      employee_id
    };
    const res = await request(app).post('/api/v1/product').send(productMock);
    await request(app).delete(`/api/v1/employee/${res.body.employee_id}`);
    response = await request(app).get('/api/v1/product');
    expect(response.body).toEqual('Not Found');
  });
  it('returns notfound', async () => {
    const employeeMock = {
      name: 'Rafaela Maria',
      cpf: '41303056038',
      office: 'gerente',
      birthday: '20/10/1990'
    };
    let response = await request(app).post('/api/v1/employee').send(employeeMock);
    const { employee_id } = await response.body;
    const productMock = {
      name: 'monitor dell',
      category: 'eletronico',
      price: '100',
      employee_id
    };
    await request(app).post('/api/v1/product').send(productMock);
    response = await request(app).get(
      '/api/v1/product?name=monitor dellghghghghghghghghgghhghghghghghghghghghghghghghghghghghgggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggg'
    );

    expect(response.statusCode).toEqual(400);
    expect(response.body).toEqual({
      message: 'Bad Request',
      details: {
        message: '"name" length must be less than or equal to 50 characters long'
      }
    });
  });
});
