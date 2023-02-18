import { CASCAD, RELATIVE_VALUES, RELATIVE_VALUES_PART2 } from './src/constants/pagesName';
import cascad from './src/pages/cascad';
import relativeValues from './src/pages/relative-values';
import relativeValue2 from './src/pages/relative-values-part2';

/**
 * Глава 2.4 стр 72
 */

const { pathname } = window.location;

switch (pathname) {
  case CASCAD:
    cascad();
    break;
  case RELATIVE_VALUES:
    relativeValues();
    break;
  case RELATIVE_VALUES_PART2:
    relativeValue2();
    break;
  default:
}
