import React from 'react';
import ReactDOM from 'react-dom';

const title = 'My maximal react webpack babel setup';

ReactDOM.render(
  <div>{title}</div>,
  document.getElementById('app'),
);

module.hot.accept();
