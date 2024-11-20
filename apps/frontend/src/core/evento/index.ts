import Evento from "./model/Evento";
import Convidado from "./model/Convidado";
import criarEventoVazio from "./functions/criarEventoVazio";
import processarEvento from "./functions/processarEvento";
import validarEvento from "./functions/validarEvento";
import criarConvidadoVazio from "./functions/criarConvidadoVazio";
import processarConvidado from "./functions/processarConvidado";
import validarConvidado from "./functions/validarConvidado";

export type { Evento, Convidado };

export {
  criarEventoVazio,
  processarEvento,
  validarEvento,
  criarConvidadoVazio,
  processarConvidado,
  validarConvidado,
};
