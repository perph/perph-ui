import React, { useState, useContext, useEffect } from 'react';
import Toggle from 'react-toggle';
import { ThemeContext } from 'theme';
import './Toggle.css';
import Sun from 'assets/images/sun.png';
import Moon from 'assets/images/moon.png';

const ThemeToggle: React.FC = () => {
  const [on, setOn] = useState(true);
  const { updateTheme } = useContext(ThemeContext);
  useEffect(() => updateTheme(on ? updateTheme('light') : updateTheme('dark')));
  return (
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
    />
  );
};

export default ThemeToggle;
