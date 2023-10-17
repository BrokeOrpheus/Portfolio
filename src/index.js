import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.css';
import './sass/index.sass';

import Home from './jsx/Home';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Home />);