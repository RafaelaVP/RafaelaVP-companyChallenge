const request = require('supertest');
const app = require('../../../src/app');

describe('delete employee by id', () => {
  it('return status 204  ', async () => {
    const employeeMock = {
      name: 'Rafaela Maria',
      cpf: '41303056038',
      office: 'gerente',
      birthday: '20/10/1990'
    };

    const response = await request(app).post('/api/v1/employee').send(employeeMock);

    const res = await request(app).delete(`/api/v1/employee/${response.body.employee_id}`);
    const { status } = res;
    expect(status).toBe(204);
  });
  it('returns not found', async () => {
    const resp = await request(app).delete('/api/v1/employee/61f40433dc136fa98b0d34c5');
    expect(resp.body).toEqual({
      message: 'Not Found',
      details: {
        description: 'Results not found'
      }
    });
  });
  it('returns bad request', async () => {
    const resp = await request(app).delete('/api/v1/employee/61f40433dc136fa98b0d34c5fgfgfhgf');
    expect(resp.body).toEqual({
      message: 'Bad Request',
      details: {
        message: '"employee_id" length must be less than or equal to 24 characters long'
      }
    });
  });
});
