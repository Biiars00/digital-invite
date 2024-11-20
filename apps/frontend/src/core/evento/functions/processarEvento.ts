import { Evento, Id, Senha } from "@/core";
import validarEvento from "./validarEvento";

export default function processarEvento(
  eventoParcial: Partial<Evento>
): Evento {
  const erros = validarEvento(eventoParcial);

  if (erros.length) {
    throw new Error(erros.join("\n"));
  }

  const evento: Evento = {
    ...eventoParcial,
    id: eventoParcial.id ?? Id.novo(),
    publicoEsperado: +(eventoParcial.publicoEsperado ?? 1),
    senha: eventoParcial.senha ?? Senha.nova(20),
  } as Evento;

  return evento;
}
