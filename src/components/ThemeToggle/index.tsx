import React, { useState, useContext, useEffect } from 'react';
import Toggle from 'react-toggle';
import { ThemeContext } from 'theme';
import { ToggleWrapper } from './style';
import './Toggle.css';
import Sun from 'assets/images/sun.png';
import Moon from 'assets/images/moon.png';

const ThemeToggle: React.FC = () => {
  const [on, setOn] = useState(false);
  const { updateTheme } = useContext(ThemeContext);
  useEffect(() => (on ? updateTheme('light') : updateTheme('dark')));
  return (
    <ToggleWrapper>
    <Toggle
      icons={{
        checked: (
          <img
            width="16"
            height="16"
            alt="light"
            style={{ pointerEvents: 'none' }}
            src={Sun}
          />
        ),
        unchecked: (
          <img
            width="16"
            height="16"
            alt="dark"
            style={{ pointerEvents: 'none' }}
            src={Moon}
          />
        ),
      }}
      onChange={() => setOn(!on)}
    /></ToggleWrapper>
  );
};

export default ThemeToggle;
