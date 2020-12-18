export default interface Occupations {
  cargo?: string,
  ativa?: boolean,
  link?: string,
  localizacao: {
    bairro: string,
    cidade: string,
    pais: string
  }
}
