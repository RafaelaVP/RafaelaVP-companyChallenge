const request = require('supertest');
const app = require('../../../src/app');

describe('create employee', () => {
  it('returns status 201', async () => {
    const employeeMock = {
      name: 'Porto Alegre',
      cpf: '41303056038',
      office: 'gerente',
      birthday: '20/10/1990'
    };
    const response = await request(app).post('/api/v1/employee').send(employeeMock);
    expect(response.statusCode).toEqual(201);
  });
});
//   it('returns bad request status 400 ', async () => {
//     const errorMock = {};

//     const res = await request(app).post('/api/clients/').send(errorMock);

//     expect(res.statusCode).toEqual(400);
//   });
//   it('returns bad request', async () => {
//     const cityMock = {
//       city: 'Porto Alegre',
//       state: 'RS'
//     };
//     const resCity = await request(app).post('/api/cities/').send(cityMock);

//     const clientMock = {
//       name: 'Rafaela',
//       gender: 'F',
//       city_home: `${resCity.body.id}`,
//       birthdate: '11/10/1995'
//     };
//     await request(app).post('/api/clients/').send(clientMock);
//     const resp = await request(app).post('/api/clients/').send(clientMock);
//     expect(resp.body).toEqual({
//       description: 'Bad request',
//       message: ' Already Exists'
//     });
//   });
// });
