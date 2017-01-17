import React from 'react';
import { render } from 'react-dom';
import App from './App';
import './index.css';

import './css/style.css';

// Routes
import routes from './router';

// Render
render(
  routes,
  document.getElementById('root')
);
