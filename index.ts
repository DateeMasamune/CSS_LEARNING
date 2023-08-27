import {
  BLOCK_MODEL,
  CASCAD,
  CSS_VARIABLES,
  FLEX_BOX,
  FLOATING_ELEMENTS,
  GRIDS_PAGE, GRIDS_PAGE_PORTFOLIO, GRIDS_SIMPLE, RELATIVE_VALUES, RELATIVE_VALUES_PART2,
} from './src/constants/pagesName';
import blockModel from './src/pages/block-model';
import cascad from './src/pages/cascad';
import cssVariables from './src/pages/css-variables';
import flexBox from './src/pages/flex-box';
import floatingElements from './src/pages/floating-elements';
import gridsPage from './src/pages/grids-page';
import gridsPagePortfolio from './src/pages/grids-page-portfolio';
import gridsSimple from './src/pages/grids-simple';
import relativeValues from './src/pages/relative-values';
import relativeValue2 from './src/pages/relative-values-part2';

/**
 * Глава 6.4.2 стр 207
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
  case GRIDS_SIMPLE:
    gridsSimple();
    break;
  case GRIDS_PAGE:
    gridsPage();
    break;
  case GRIDS_PAGE_PORTFOLIO:
    gridsPagePortfolio();
    break;
  default:
}
