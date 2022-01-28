const request = require('supertest');
const app = require('../../../src/app');

describe('Search all employees return status 200', () => {
  it('return status 200 ', async () => {
    const employeeMock = {
      name: 'Rafaela Maria',
      cpf: '41303056038',
      office: 'gerente',
      birthday: '20/10/1990'
    };

    await request(app).post('/api/v1/employee').send(employeeMock);

    const response = await request(app).get('/api/v1/employee');
    const { body } = response;
    const { employees } = body;
    expect(employees[0].name).toBe(employeeMock.name);
    expect(employees[0].office).toBe(employeeMock.office);
    expect(employees[0].birthday).toBe(employeeMock.birthday);
    const { status } = response;
    expect(status).toBe(200);
  });
  it('return bad request 400 validate Joi ', async () => {
    const employeeMock = {
      name: 'Rafaela Maria',
      cpf: '41303056038',
      office: 'gerente',
      birthday: '20/10/1990'
    };

    await request(app).post('/api/v1/employee').send(employeeMock);

    const response = await request(app).get('/api/v1/employee?name=Ra');
    const { status } = response;
    expect(status).toBe(400);
    expect(response.body).toEqual({
      message: 'Bad Request',
      details: {
        message: '"name" length must be at least 4 characters long'
      }
    });
  });
  it('return bad request 400 ', async () => {
    const employeeMock = {
      name: 'Rafaela Maria',
      cpf: '41303056038',
      office: 'gerente',
      birthday: '20/10/1990'
    };

    await request(app).post('/api/v1/employee').send(employeeMock);

    const response = await request(app).get('/api/v1/employee?name=luciana');
    const { status } = response;
    expect(status).toBe(400);
    expect(response.body).toEqual({
      message: 'Not Found',
      details: {
        description: 'Results not found'
      }
    });
  });
});
