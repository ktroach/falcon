import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import AppContext from './context/Context';
import toggleRTL from './helpers/toggleRTL';

const Main = props => {
  const parse = key => JSON.parse(localStorage.getItem(key));

  const setFluid = isFluid => {
    localStorage.setItem('isFluid', isFluid);
    window.location.reload();
  };
  const setRTL = isRTL => {
    setIsRTL(isRTL);
    localStorage.setItem('isRTL', isRTL);
    toggleRTL(isRTL);
  };
  const setDark = isDark => {
    setIsDark(isDark);
    localStorage.setItem('isDark', isDark);
  };

  const [isFluid] = useState(parse('isFluid') || false);
  const [isRTL, setIsRTL] = useState(parse('isRTL') || false);
  const [isDark, setIsDark] = useState(parse('isDark') || false);
  const [showBurgerMenu, setShowBurgerMenu] = useState(false);
  const [currency, setCurrency] = useState('$');

  useEffect(() => {
    isRTL && toggleRTL(isRTL);
  }, [isRTL]);

  return (
    <AppContext.Provider
      value={{
        isFluid,
        setFluid,
        isRTL,
        setRTL,
        isDark,
        setDark,
        showBurgerMenu,
        setShowBurgerMenu,
        currency,
        setCurrency
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};

Main.propTypes = { children: PropTypes.node };

export default Main;
