export function calcularFrete(cep, subtotal) {
  const taxaRegional = 20; //Teste Marcos
  const taxaNacional = 35;

  const frete = String(cep).trim().startsWith('35')
    ? taxaRegional
    : taxaNacional;

  return {
    frete,
    total: Number((subtotal + frete).toFixed(2)),
    regiao: String(cep).trim().startsWith('35') ? 'Regional (DDD 35)' : 'Nacional'
  };
}
