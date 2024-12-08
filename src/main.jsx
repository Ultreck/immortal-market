import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import ResizeScreenHeight from './components/ResizeScreenHeight.jsx';
import Providers from '@/Providers.jsx';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Providers>
      <App />
      <ResizeScreenHeight />
    </Providers>
  </BrowserRouter>
);
