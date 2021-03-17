import { DefaultTheme } from 'styled-components';

export const size = {
  pc: '75em', // 1200px
  tab: '56.25em', // 900px
  mobile: '31.25em', // 500px
  mobileS: '23.125em', // 370px
};

const theme: DefaultTheme = {
  /* 공통 적용 색 */
  color: {
    PRIMARY_COLOR: '#272343',
    BACKGROUND_COLOR: '#f0f2f5',
    WHITE_COLOR: '#ffffff',
    INPUT_FOCUS_COLOR: '#1089ff',
    DARK_GREY: '#888888',
    LIGHT_GREY: '#cccccc',

    WARNING_NULL: '#eeeeee',
    WARNING_RED: '#ff4b47',
    WARNING_YELLOW: '#f9ae35',
    POSITIVE_GREEN: '#2daf7d',
  },

  /* 반응형 size */
  window: {
    pc: `@media screen and (max-width: ${size.pc}px)`,
    tab: `@media screen and (max-width: ${size.tab}px)`,
    mobile: `@media screen and (max-width: ${size.mobile}px)`,
    mobileS: `@media screen and (max-width: ${size.mobileS}px)`,
  },
};

export default theme;
