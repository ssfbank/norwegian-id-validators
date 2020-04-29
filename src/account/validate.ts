import { kontrollsiffferMod11 } from '../tools';

const PERIOD_COMMA_SPACE_REGEX = /[,.\s]/g;

export const validateAccount = (kontonummer) => {
  if (!kontonummer) {
    return false;
  }

  const kontonummerString = kontonummer.toString().replace(PERIOD_COMMA_SPACE_REGEX, '');

  if (kontonummerString.length !== 11) {
    return false;
  }

  return (
    parseInt(kontonummerString.charAt(kontonummerString.length - 1), 10)
    === kontrollsiffferMod11(kontonummerString)
  );
};

