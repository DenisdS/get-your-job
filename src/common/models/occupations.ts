export default interface Occupations {
  id?: number,
  cargo?: string,
  ativa?: boolean,
  link?: string,
  localizacao: {
    bairro: string,
    cidade: string,
    pais: string
  }
}
