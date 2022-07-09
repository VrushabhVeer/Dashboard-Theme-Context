import { useContext } from 'react';
import './App.css';
import Dashboard from './components/Dashboard';
import { ThemeContext } from './context/ThemeContext';

function App() {
  const {isLight} = useContext(ThemeContext)
  return (
    <div className={`App ${isLight ? "light": "dark"}`}>
      <Dashboard/>
    </div>
  );
}

export default App;
