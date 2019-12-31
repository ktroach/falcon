import { createContext } from 'react';

const AppContext = createContext({
  isFluid: false,
  isRTL: false,
  isDark: false,
  showBurgerMenu: false, // controls showing vertical nav on mobile
  currency: '$'
});

export const EmailContext = createContext({ emails: [] });

export const ProductContext = createContext({ products: [] });

export const FeedContext = createContext({ feeds: [] });

export default AppContext;
