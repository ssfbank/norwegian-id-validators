import { weightedSum, vekttallKontrollsiffer1, vekttallKontrollsiffer2 } from './summing';
import { validateSsn } from './validate';
import { PERIOD_COMMA_SPACE_REGEX, MOD11 } from '../tools';

/**
 * Uses 6 digits(DDMMYY) to generate a valid SSN. Will give a random one each time
 */
export const generateDigitsSsn = (birthDate: string): string => {
    // const fodselsdato = process.argv[0];
    const cleanedBdate = birthDate.toString()
      .replace(PERIOD_COMMA_SPACE_REGEX, '')
      .substr(0, 6);
  
    let foundSsn = '';
    let iterations = 0;
    while (!foundSsn && iterations < 999) {
        const candidatePnumber = Math.floor(Math.random() * Math.floor(999)).toString().padStart(3, '0');

        let concattedBdate = `${cleanedBdate}${candidatePnumber}`;
        let control1 = MOD11 - (weightedSum(concattedBdate, vekttallKontrollsiffer1) % MOD11)
        if (control1 === MOD11) {
            control1 = 0;
        } else if (control1 === 10) {
            continue;
        }
        concattedBdate = `${concattedBdate}${control1}`;
        let control2 = MOD11 - (weightedSum(concattedBdate, vekttallKontrollsiffer2) % MOD11)
        if (control2 === MOD11) {
            control2 = 0;
        } else if (control2 === 10) {
            continue;
        }
        concattedBdate = `${concattedBdate}${control2}`;
        // final check
        if (validateSsn(concattedBdate)) {
            foundSsn = concattedBdate;
        }
        iterations++;
    }
    if (!foundSsn) {
        throw Error('Could not find a valid SSN in max iterations');
    }
    
    return foundSsn;
  };

  