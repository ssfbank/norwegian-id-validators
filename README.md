# Norwegian Id number validators

* Validates statically norwegian ssn, kid, account and organization numbers.
* Provides a convenient shortcut to norwegian Org number API.
* Generates statically a random norwegian SSN from a birth date.
* Should be usable in most environments.

TS+Babel+bugfixes fork of npm pkg norsk-validator.
Credit to original author https://github.com/storbukas/norsk-validator

# Usage

```
npm install @ssfbank/norwegian-id-validators
```

```
import { validateSsn } from '@ssfbank/norwegian-id-validators';

const valid = validateSsn('12345678999');
```
