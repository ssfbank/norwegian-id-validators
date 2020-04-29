import { kontrollsiffferMod11 } from '../tools';

export const validateOrg = (organisasjonsnummer) => {
  const organisasjonsnummerString = organisasjonsnummer.toString();

  if (!organisasjonsnummerString || organisasjonsnummerString.length !== 9) {
    return false;
  }

  return parseInt(organisasjonsnummerString.charAt(organisasjonsnummerString.length - 1), 10)
    === kontrollsiffferMod11(organisasjonsnummerString);
};

