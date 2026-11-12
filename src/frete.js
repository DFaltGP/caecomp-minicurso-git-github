
export function calcularFrete(cep, subtotal) {
  const taxaRegional = 20;
  const taxaNacional = 35;
  const limiteFreteGratis = 200;

  const frete = subtotal >= limiteFreteGratis
    ? 0
    : String(cep).trim().startsWith('35')
      ? taxaRegional
      : taxaNacional;

  return {
    frete,
    total: Number((subtotal + frete).toFixed(2)),
    regiao: frete === 0
      ? 'Frete grátis'
      : String(cep).trim().startsWith('35')
        ? 'Regional (DDD 35)'
        : 'Nacional'
  };
}
