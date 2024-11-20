import { Evento } from "@/core";

export default function validarEvento(evento: Partial<Evento>): string[] {
  const erros: string[] = [];

  if (!evento.alias) {
    erros.push("O preenchimento deste campo é obrigatório!");
  }

  if (!evento.nome) {
    erros.push("O preenchimento deste campo é obrigatório!");
  }

  if (!evento.data) {
    erros.push("O preenchimento deste campo é obrigatório!");
  }

  return erros;
}
