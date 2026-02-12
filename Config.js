// ================================================
// 🩺 CONFIGURAÇÃO GERAL – DR. ANTÔNIO COBUCCI
// ================================================
//
// 🔎 LOCALIZE RÁPIDO:
// [MEDICO]   → Dados profissionais
// [CONTATO]  → WhatsApp, e-mail  
// [ENDERECO] → Localização completa
// [HORARIO]  → Dias e horários
// [HOSP]     → Hospitais da trajetória
// [SERV]     → Lista de serviços
//
// ================================================

const config = {
  //-----------------------------------------------------------------
  // 👨‍⚕️ [MEDICO] DADOS DO MÉDICO
  //-----------------------------------------------------------------
  nome: "Dr. Antônio Cobucci",
  crm: "34.720/4",
  rqe: "37564",
  especialidade: "Cardiologia",
  experiencia: "38 anos",
  legado: "Hospital Cardoso Fontes • Hospital Miguel Couto",
  
  //-----------------------------------------------------------------
  // 📍 [ENDERECO] LOCALIZAÇÃO DA CLÍNICA
  //-----------------------------------------------------------------
  endereco: "Estrada do Itanhagá, 483, sala 206",
  complemento: "Shopping Itanhagui Plaza",
  cep: "22753-319",
  cidade: "Rio de Janeiro - RJ",
  maps_link: "https://www.google.com/maps?q=Estrada+do+Itanhagá,+483,+Rio+de+Janeiro",
  
  //-----------------------------------------------------------------
  // 🕒 [HORARIO] ATENDIMENTO
  //-----------------------------------------------------------------
  horario: "Segundas e Quartas, 13h às 19h",
  
  //-----------------------------------------------------------------
  // 📞 [CONTATO] TELEFONE E E-MAIL
  //-----------------------------------------------------------------
  whatsapp: "(21) 98041-2032",
  whatsapp_link: "5521980412032",
  email: "contato@drantoniocobucci.med.br",
  
  //-----------------------------------------------------------------
  // 🏥 [HOSP] TRAJETÓRIA HOSPITALAR
  //-----------------------------------------------------------------
  hospitais: [
    "Hospital Cardoso Fontes",
    "Hospital Miguel Couto"
  ],
  
  //-----------------------------------------------------------------
  // 📋 [SERV] SERVIÇOS OFERECIDOS
  //-----------------------------------------------------------------
  servicos: [
    { nome: "Consulta", descricao: "Atendimento humanizado e detalhado" },
    { nome: "Consulta com exames", descricao: "Avaliação completa no mesmo dia" },
    { nome: "Risco cirúrgico", descricao: "Laudo de aptidão para cirurgias" },
    { nome: "Laudos para isenção de IR", descricao: "Isenção de imposto de renda" },
    { nome: "Laudos para seguradoras e INSS", descricao: "Perícias e planos de saúde" },
    { nome: "Eletrocardiograma", descricao: "Realizado no consultório" },
    { nome: "Ecocardiograma uni/bidimensional", descricao: "Com Color Doppler" },
    { nome: "Holter 24h", descricao: "Monitorização do ritmo cardíaco" },
    { nome: "MAPA", descricao: "Monitorização da pressão arterial 24h" },
    { nome: "Teste ergométrico", descricao: "Em clínica associada" }
  ],
  
  //-----------------------------------------------------------------
  // 🎨 CORES INSTITUCIONAIS
  //-----------------------------------------------------------------
  cor_azul: "#003f88",
  cor_vermelho: "#d62828",
  cor_branco: "#ffffff"
}