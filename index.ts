import {
  BLOCK_MODEL,
  CASCAD, CSS_VARIABLES, FLEX_BOX, FLOATING_ELEMENTS, RELATIVE_VALUES, RELATIVE_VALUES_PART2,
} from './src/constants/pagesName';
import blockModel from './src/pages/block-model';
import cascad from './src/pages/cascad';
import cssVariables from './src/pages/css-variables';
import flexBox from './src/pages/flex-box';
import floatingElements from './src/pages/floating-elements';
import relativeValues from './src/pages/relative-values';
import relativeValue2 from './src/pages/relative-values-part2';

/**
 * Глава 6 стр 182
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
  case FLOATING_ELEMENTS:
    floatingElements();
    break;
  case FLEX_BOX:
    flexBox();
    break;
  default:
}
