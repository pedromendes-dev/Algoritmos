const request = require('supertest');
const fs = require('fs');
const path = require('path');
const app = require('../app');

const dataPath = path.join(__dirname, '..', 'data', 'tarefas.json');

describe('Gerenciador de Tarefas API', () => {
  beforeEach(() => {
    fs.writeFileSync(dataPath, '[]');
  });

  it('deve listar tarefas (vazio)', async () => {
    const res = await request(app).get('/api/tarefas');
    expect(res.status).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
    expect(res.body.length).toBe(0);
  });

  it('deve criar, concluir e deletar uma tarefa', async () => {
    const create = await request(app)
      .post('/api/tarefas')
      .send({ nome: 'Estudar', prioridade: 2 });
    expect(create.status).toBe(201);
    const { id } = create.body;

    const done = await request(app).patch(`/api/tarefas/${id}/concluir`);
    expect(done.status).toBe(200);
    expect(done.body.concluida).toBe(true);

    const del = await request(app).delete(`/api/tarefas/${id}`);
    expect(del.status).toBe(204);
  });
});
