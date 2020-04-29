import { weightedSum, vekttallKontrollsiffer1, vekttallKontrollsiffer2 } from './summing';
import { PERIOD_COMMA_SPACE_REGEX, MOD11 } from '../tools';

export const validateSsn = (ssn: string): boolean => {
  const fodselsnummerString = ssn.toString()
    .replace(PERIOD_COMMA_SPACE_REGEX, '');

  if (!fodselsnummerString || fodselsnummerString.length !== 11) {
    return false;
  }

  let kontrollsiffer1 = MOD11 - (weightedSum(fodselsnummerString, vekttallKontrollsiffer1) % MOD11);
  if (kontrollsiffer1 === MOD11) {
    kontrollsiffer1 = 0;
  }

  let kontrollsiffer2 = MOD11 - (weightedSum(fodselsnummerString, vekttallKontrollsiffer2) % MOD11);
  if (kontrollsiffer2 === MOD11) {
    kontrollsiffer2 = 0;
  }

  return kontrollsiffer1 === parseInt(fodselsnummerString.charAt(9), 10)
    && kontrollsiffer2 === parseInt(fodselsnummerString.charAt(10), 10);
};

