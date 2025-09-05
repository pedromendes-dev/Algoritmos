## Algoritmos — APIs de Estudos com Node.js/Express

Repositório com três APIs REST criadas para estudos de Node.js, Express e organização de projetos. Cada API é independente, simples e ideal para conectar a frontends (React, Vue, mobile) ou testar com ferramentas como Postman/cURL.

- **Gerenciador de Tarefas**: CRUD simples usando arquivo JSON como armazenamento local.
- **Jogo da Forca**: lógica de jogo em memória com endpoints para iniciar, jogar, ver status e reiniciar.
- **Simulador de Votação**: registra votos, retorna resultados e histórico, persistindo em arquivo JSON.

> Repositório: [pedromendes-dev/Algoritmos](https://github.com/pedromendes-dev/Algoritmos)

### Requisitos
- Node.js 18+ e npm
- Git (para clonar/atualizar)

### Estrutura de Diretórios
`	ext
Algoritmos/
├── gerenciador-api/
│   ├── controllers/
│   │   └── tarefasController.js
│   ├── routes/
│   │   └── tarefasRoutes.js
│   ├── data/
│   │   └── tarefas.json
│   ├── app.js
│   └── package.json
├── jogo-forca-api/
│   ├── controllers/
│   │   └── forcaController.js
│   ├── routes/
│   │   └── forcaRoutes.js
│   ├── data/
│   │   └── palavras.json
│   ├── app.js
│   └── package.json
└── simulador-votacao-api/
    ├── controllers/
    │   └── votacaoController.js
    ├── routes/
    │   └── votacaoRoutes.js
    ├── data/
    │   └── votos.json
    ├── app.js
    └── package.json
`

## Instalação e Execução
Cada API é independente. Entre na pasta da API desejada, instale as dependências e execute.

### Gerenciador de Tarefas (porta 3000)
`ash
cd gerenciador-api
npm install
node app.js
`
Endpoints:
- GET /api/tarefas — lista tarefas
- POST /api/tarefas — cria tarefa { "nome": "Estudar", "prioridade": 3 }
- PATCH /api/tarefas/:id/concluir — marca como concluída
- DELETE /api/tarefas/:id — remove tarefa

Exemplos cURL:
`ash
curl http://localhost:3000/api/tarefas
curl -X POST http://localhost:3000/api/tarefas -H "Content-Type: application/json" -d '{"nome":"Estudar","prioridade":3}'
curl -X PATCH http://localhost:3000/api/tarefas/ID/concluir
curl -X DELETE http://localhost:3000/api/tarefas/ID
`

### Jogo da Forca (porta 3001)
`ash
cd jogo-forca-api
npm install
node app.js
`
Endpoints:
- GET /api/forca/iniciar — inicia novo jogo
- POST /api/forca/tentar — tenta letra { "letra": "a" }
- GET /api/forca/status — status atual
- POST /api/forca/reiniciar — reinicia

Exemplos cURL:
`ash
curl http://localhost:3001/api/forca/iniciar
curl -X POST http://localhost:3001/api/forca/tentar -H "Content-Type: application/json" -d '{"letra":"a"}'
curl http://localhost:3001/api/forca/status
curl -X POST http://localhost:3001/api/forca/reiniciar
`

### Simulador de Votação (porta 3002)
`ash
cd simulador-votacao-api
npm install
node app.js
`
Endpoints:
- POST /api/votacao/votar — { "voto": "candidato1|candidato2|branco|nulo" }
- GET /api/votacao/resultados — estatísticas
- GET /api/votacao/historico — votos com data

Exemplos cURL:
`ash
curl -X POST http://localhost:3002/api/votacao/votar -H "Content-Type: application/json" -d '{"voto":"candidato1"}'
curl http://localhost:3002/api/votacao/resultados
curl http://localhost:3002/api/votacao/historico
`

## Decisões de Projeto
- **Persistência simples com JSON**: facilita testes sem banco de dados.
- **Controllers + Routes**: separação de responsabilidades e organização.
- **CORS habilitado**: pronto para integrar com frontends.
- **Portas distintas**: executar múltiplas APIs em paralelo.

## Estudos e Próximos Passos
- Adicionar validações com xpress-validator.
- Substituir JSON por um banco leve (SQLite/Prisma).
- Versionar APIs e adicionar Swagger (swagger-ui-express).
- Cobertura de testes (Jest/Supertest).
- Dockerizar cada API.

## Contribuição
Sinta-se à vontade para abrir issues e PRs. Sugestões são bem-vindas.

## Licença
Livre para uso educacional e pessoal.
