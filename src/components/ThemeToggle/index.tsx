import React, { useState } from 'react';
import Toggle from 'react-toggle';
import { ThemeContext, theme_dark, theme_light } from 'theme';
import './Toggle.css';
import Sun from 'assets/images/sun.png';
import Moon from 'assets/images/moon.png';

const ThemeToggle: React.FC = () => {
  const [on, setOn] = useState(true);
  return (
    <ThemeContext.Provider value={on ? theme_dark : theme_light}>
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
    </ThemeContext.Provider>
  );
};

export default ThemeToggle;
