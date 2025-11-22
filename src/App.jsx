import React from 'react';
import ReactDOM from 'react-dom/client';
import VersionInfo from './components/VersionInfo';
import Calculator from './components/Calculator';

function App() {
  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1>Electron + React! 🚀</h1>
      <VersionInfo />
      <Calculator />
    </div>
  );
}

// Render the app
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
