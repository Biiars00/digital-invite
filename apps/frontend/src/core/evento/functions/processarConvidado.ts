import { Convidado } from "@/core";
import validarConvidado from "./validarConvidado";

export default function processarConvidado(
  convidado: Partial<Convidado>
): Convidado {
  const erros = validarConvidado(convidado);

  if (erros.length) {
    throw new Error(erros.join("\n"));
  }

  const temAcompanhantes =
    convidado.possuiAcompanhante &&
    convidado.confirmado &&
    convidado.quantidadeAcompanhantes! > 0;

  const convidadoAtualizado = {
    ...convidado,
    quantidadeAcompanhantes: temAcompanhantes
      ? convidado.quantidadeAcompanhantes
      : 0,

    possuiAcompanhantes: temAcompanhantes,
  };

  return convidadoAtualizado as Convidado;
}
