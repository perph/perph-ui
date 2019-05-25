import React, { useContext } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider, ThemeContext } from 'theme';
import Navigation from 'views/navigation';
import './App.css';
import { AppWrapper } from './style';

const AppManager: React.FC = props => {
  const { theme } = useContext(ThemeContext);
  return <AppWrapper theme={theme}>{props.children}</AppWrapper>;
};
const App: React.FC = () => {
  return (
    <Router>
      <ThemeProvider>
        <AppManager>
          <Navigation />
        </AppManager>
      </ThemeProvider>
    </Router>
  );
};

export default App;
