import {
  BLOCK_MODEL,
  CASCAD, CSS_VARIABLES, RELATIVE_VALUES, RELATIVE_VALUES_PART2,
} from './src/constants/pagesName';
import blockModel from './src/pages/block-model';
import cascad from './src/pages/cascad';
import cssVariables from './src/pages/css-variables';
import relativeValues from './src/pages/relative-values';
import relativeValue2 from './src/pages/relative-values-part2';

/**
 * Глава 3.5.1 стр 111
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
  case CSS_VARIABLES:
    cssVariables();
    break;
  case BLOCK_MODEL:
    blockModel();
    break;
  default:
}
