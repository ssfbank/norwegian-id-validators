import { kontrollsiffferMod11, PERIOD_COMMA_SPACE_REGEX } from '../tools';

export const validateOrg = (organisasjonsnummer) => {
  const organisasjonsnummerString = organisasjonsnummer.toString()
  .replace(PERIOD_COMMA_SPACE_REGEX, '');

  if (!organisasjonsnummerString || organisasjonsnummerString.length !== 9) {
    return false;
  }

  return parseInt(organisasjonsnummerString.charAt(organisasjonsnummerString.length - 1), 10)
    === kontrollsiffferMod11(organisasjonsnummerString);
};

