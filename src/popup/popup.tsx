import React from 'react';
import { createRoot } from 'react-dom/client';
import { CircularProgressbar } from 'react-circular-progressbar';

import 'react-circular-progressbar/dist/styles.css';

import '../assets/tailwind.css';

const percentage = 55;

const test = (
  <div className='progress_container'>
    <CircularProgressbar value={percentage} text={`${percentage}`} />
    <button>connect</button>
  </div>
);

const app = document.createElement('div');
document.body.appendChild(app);

const root = createRoot(app);
root.render(test);
