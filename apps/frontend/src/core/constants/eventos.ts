import { Evento } from "../evento";
import { Id } from "../shared";

const eventos: Evento[] = [
  {
    id: Id.novo(),
    alias: "",
    senha: "",
    nome: "",
    data: new Date(),
    local: "",
    descricao: "",
    imagem: "",
    imagemBackground: "",
    publicoEsperado: 0,
  },
];
