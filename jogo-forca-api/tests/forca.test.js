const request = require('supertest');
const app = require('../app');

describe('Jogo da Forca API', () => {
  it('fluxo: iniciar -> tentar -> status', async () => {
    const ini = await request(app).get('/api/forca/iniciar');
    expect(ini.status).toBe(200);
    const tentativa = await request(app).post('/api/forca/tentar').send({ letra: 'a' });
    expect(tentativa.status).toBe(200);
    const status = await request(app).get('/api/forca/status');
    expect(status.status).toBe(200);
  });
});
