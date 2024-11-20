import { Convidado } from "@/core";

export default function validarConvidado(
  convidado: Partial<Convidado>
): string[] {
  const erros: string[] = [];

  if (!convidado.nome || !convidado.email) {
    erros.push("O preenchimento deste campo é obrigatório!");
  }

  return erros;
}
