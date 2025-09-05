const fs = require("fs");
const path = require("path");
const filePath = path.join(__dirname, "../data/tarefas.json");

function carregarTarefas() {
  if (!fs.existsSync(filePath)) return [];
  return JSON.parse(fs.readFileSync(filePath));
}

function salvarTarefas(tarefas) {
  fs.writeFileSync(filePath, JSON.stringify(tarefas, null, 2));
}

exports.listarTarefas = (req, res) => {
  const tarefas = carregarTarefas();
  res.json(tarefas);
};

exports.adicionarTarefa = (req, res) => {
  const { nome, prioridade } = req.body;
  const tarefas = carregarTarefas();
  const nova = {
    id: Date.now(),
    nome,
    prioridade: Number(prioridade),
    concluida: false,
  };
  tarefas.push(nova);
  salvarTarefas(tarefas);
  res.status(201).json(nova);
};

exports.concluirTarefa = (req, res) => {
  const tarefas = carregarTarefas();
  const tarefa = tarefas.find((t) => t.id == req.params.id);
  if (tarefa) {
    tarefa.concluida = true;
    salvarTarefas(tarefas);
    res.json(tarefa);
  } else {
    res.status(404).json({ erro: "Tarefa não encontrada" });
  }
};

exports.deletarTarefa = (req, res) => {
  let tarefas = carregarTarefas();
  tarefas = tarefas.filter((t) => t.id != req.params.id);
  salvarTarefas(tarefas);
  res.status(204).end();
};
