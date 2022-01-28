const request = require('supertest');
const app = require('../../../src/app');

describe('update client', () => {
  it('returns status 200 update', async () => {
    const employeeMock = {
      name: 'Rafaela Maria',
      cpf: '41303056038',
      office: 'gerente',
      birthday: '20/10/1990'
    };
    let response = await request(app).post('/api/v1/employee').send(employeeMock);

    const employeeUpMock = {
      name: 'Maria da roberta',
      office: 'gerente',
      situation: 'deactivate'
    };

    response = await request(app).put(`/api/v1/employee/${response.body.employee_id}`).send(employeeUpMock);
    const { body } = response;

    expect(response.statusCode).toEqual(200);
    expect(body.employee_id).toBeDefined();
    expect(body.name).toBe('Maria da roberta');
    expect(body.cpf).toBe('413.030.560-38');
    expect(body.office).toBe('gerente');
    expect(body.birthday).toBe('20/10/1990');
    expect(body.situation).toBe('deactivate');
  });
  it('returns badrequest Joi', async () => {
    const employeeMock = {
      name: 'Rafaela Maria',
      cpf: '41303056038',
      office: 'gerente',
      birthday: '20/10/1990'
    };
    const response = await request(app).post('/api/v1/employee').send(employeeMock);

    const employeeUpMock = {
      name: 'Maria da roberta',
      office: 'gerente',
      situation: 'ativado'
    };

    const resp = await request(app).put(`/api/v1/employee/${response.body.employee_id}`).send(employeeUpMock);
    expect(resp.statusCode).toEqual(400);
    expect(resp.body).toEqual({
      message: 'Bad Request',
      details: {
        message: '"situation" must be one of [activate, deactivate]'
      }
    });
  });
  it('returns NotFound 404', async () => {
    const employeeMock = {
      name: 'Rafaela Maria',
      cpf: '41303056038',
      office: 'gerente',
      birthday: '20/10/1990'
    };
    await request(app).post('/api/v1/employee').send(employeeMock);

    const employeeUpMock = {
      name: 'Maria da roberta',
      office: 'gerente',
      situation: 'deactivate'
    };

    const resp = await request(app).put(`/api/v1/employee/61f3ed9230705e7c2dda36ff`).send(employeeUpMock);
    expect(resp.body).toEqual({
      message: 'Not Found',
      details: {
        description: 'Results not found'
      }
    });
  });
});
