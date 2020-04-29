# Norwegian Id number validators

* Validates statically norwegian ssn, kid, account and organization numbers.
* Generates statically a random norwegian SSN from a birth date.
* Should be usable in most js/ts environments.

TS+Babel fork of npm pkg norsk-validator.
Credit goes to original author https://github.com/storbukas/norsk-validator

# Usage

```
npm install @ssfbank/norwegian-id-validators
```

```
import { validateSsn, 
generateDigitsSsn, 
validateKid, 
validateAccount, 
validateOrg
} from '@ssfbank/norwegian-id-validators';

const valid = validateSsn('26068848740');
const valid = validateSsn('260688 48740');
const valid = validateKid('100001928231');
const valid = validateOrg('998 447 356');
const valid = validateAccount('7694.05.12057');

const ssn = generateDigitsSsn('260688');
// random valid ssn, like 26068848740
```
