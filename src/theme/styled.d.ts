import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    color: {
      PRIMARY_COLOR: string;
      BACKGROUND_COLOR: string;
      WHITE_COLOR: string;
      INPUT_FOCUS_COLOR: string;
      DARK_GREY: string;
      LIGHT_GREY: string;
      WARNING_NULL: string;
      WARNING_RED: string;
      WARNING_YELLOW: string;
      POSITIVE_GREEN: string;
    };
    window: {
      pc: string;
      tab: string;
      mobile: string;
      mobileS: string;
    };
  }
}
