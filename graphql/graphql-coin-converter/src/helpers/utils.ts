export function sanitizeTariff(str: string){
  str = str.replace(/\D/g,"").trim();
  return Number(str);
}

export function exchangeTariff(tariff: string, coin: number) {
  const tariffNumber = sanitizeTariff(tariff) / 100.0;

  const exchangedValue = (tariffNumber * coin).toFixed(2); 
  return exchangedValue;
}