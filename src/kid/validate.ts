import { kontrollsiffferMod10, kontrollsiffferMod11, SPACE_REGEX } from '../tools';

export const validateKid = (kidnummer, mod11 = true, mod10 = true) => {
  if (!kidnummer || kidnummer.length === 0) {
    return false;
  }

  const kidnummerString = kidnummer.toString().replace(SPACE_REGEX, '');

  const controlDigit = kidnummerString.charAt(kidnummer.length - 1);
  const erMod11 = parseInt(controlDigit, 10)
    === kontrollsiffferMod11(kidnummerString);
  const erMod10 = parseInt(controlDigit, 10)
    === kontrollsiffferMod10(kidnummerString);

  return (mod11 && erMod11) || (mod10 && erMod10);
};
