const fs = require("fs");
const path = require("path");
const filePath = path.join(__dirname, "../data/votos.json");

function carregarVotos() {
  if (!fs.existsSync(filePath)) return [];
  return JSON.parse(fs.readFileSync(filePath));
}

function salvarVotos(votos) {
  fs.writeFileSync(filePath, JSON.stringify(votos, null, 2));
}

exports.votar = (req, res) => {
  const { voto } = req.body;
  const valido = ["candidato1", "candidato2", "branco", "nulo"];
  const votos = carregarVotos();
  votos.push({
    voto: valido.includes(voto) ? voto : "nulo",
    data: new Date().toISOString()
  });
  salvarVotos(votos);
  res.status(201).json({ mensagem: "Voto registrado" });
};

exports.resultados = (req, res) => {
  const votos = carregarVotos();
  const total = votos.length;
  const contagem = votos.reduce((acc, v) => {
    acc[v.voto] = (acc[v.voto] || 0) + 1;
    return acc;
  }, {});
  const estatisticas = Object.entries(contagem).map(([key, value]) => ({
    tipo: key,
    votos: value,
    porcentagem: ((value / total) * 100).toFixed(2)
  }));
  res.json({ total, estatisticas });
};

exports.historico = (req, res) => {
  const votos = carregarVotos();
  res.json(votos);
};
