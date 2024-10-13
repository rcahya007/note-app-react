import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import NoteApp from './components/NoteApp.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <NoteApp />
  </StrictMode>
);
