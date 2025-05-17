export interface Empresas {
  cep: string;
  cnae_principal: string;
  cnae_secundarios: string;
  cnpj: string;
  cnpj_basico: string;
  data_inicio_atividade: string; // formato "yyyymmdd"
  email: string | null;
  endereco: string;
  municipio: string;
  nome_fantasia: string | null;
  razao: string;
  situacao_cadastral: string;
  telefone: string;
  uf: string;
}
