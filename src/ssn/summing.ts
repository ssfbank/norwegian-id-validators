export const vekttallKontrollsiffer1 = [3, 7, 6, 1, 8, 9, 4, 5, 2];
export const vekttallKontrollsiffer2 = [5, 4, 3, 2, 7, 6, 5, 4, 3, 2];


export const weightedSum = (fodselsnummer, factors) => {
  let sum = 0;
  const l = factors.length;

  for (let i = 0; i < l; i += 1) {
    sum += parseInt(fodselsnummer.charAt(i), 10) * factors[i];
  }

  return sum;
};
