const palavras = require("../data/palavras.json");
let jogo = {};

exports.iniciarJogo = (req, res) => {
  const aleatoria = palavras[Math.floor(Math.random() * palavras.length)];
  jogo = {
    palavra: aleatoria.palavra,
    dica: aleatoria.dica,
    letrasCorretas: [],
    erros: 0,
    maxErros: 6,
    status: "em andamento"
  };
  res.json({ dica: jogo.dica, progresso: gerarProgresso() });
};

exports.tentarLetra = (req, res) => {
  const letra = req.body.letra?.toLowerCase();
  if (!letra || jogo.status !== "em andamento") return res.status(400).json({ erro: "Letra inválida ou jogo encerrado" });

  if (jogo.palavra.includes(letra)) {
    if (!jogo.letrasCorretas.includes(letra)) jogo.letrasCorretas.push(letra);
  } else {
    jogo.erros++;
  }

  if (jogo.erros >= jogo.maxErros) jogo.status = "derrota";
  else if (jogo.palavra.split("").every(l => jogo.letrasCorretas.includes(l))) jogo.status = "vitória";

  res.json({ progresso: gerarProgresso(), status: jogo.status, erros: jogo.erros });
};

exports.statusAtual = (req, res) => {
  res.json({ progresso: gerarProgresso(), status: jogo.status, erros: jogo.erros });
};

exports.reiniciarJogo = (req, res) => {
  jogo = {};
  res.json({ mensagem: "Jogo reiniciado" });
};

function gerarProgresso() {
  return jogo.palavra
    .split("")
    .map(l => (jogo.letrasCorretas.includes(l) ? l : "_"))
    .join(" ");
}
