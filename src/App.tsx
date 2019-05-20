import React from 'react';
import { ThemeProvider } from 'theme';
import Navigation from 'views/navigation';
import './App.css';

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <Navigation />
    </ThemeProvider>
  );
};

export default App;
