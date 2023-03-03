export const logar = (req, res) => {
  res.status(200).send({ message: "requisição de login feita com sucesso!" });
};

export const registrarNoBanco = (req, res) => {
  res
    .status(200)
    .send({ message: "requisição de registro feito com sucesso!" });
};
