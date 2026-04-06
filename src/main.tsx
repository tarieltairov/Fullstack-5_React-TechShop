import { createRoot } from 'react-dom/client';

import App from './App.tsx';

// App - корневой компонент, c чего начинается все приложение

createRoot(document.getElementById('root')!).render(<App />);
