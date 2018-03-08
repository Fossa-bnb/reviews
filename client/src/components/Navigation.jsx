import React from 'react';
import PropTypes from 'prop-types';
// import { pagination } from 'bootstrap-css';
import Bootstrap from '../../styles/bootstrap.css';

const Navigation = (props) => {
  const buttons = [];
  for (let x = 0; x < props.pages; x += 1) {
    const newBtn = (
      <li className={Bootstrap['page-item']} key={x}>
        <a className={Bootstrap['page-link']} href="#review" onClick={() => { props.clickHandler(x + 1); }} >
          {x + 1}
        </a>
      </li>);
    buttons.push(newBtn);
  }
  return (
    <nav aria-label="reviews navigation">
      <ul className={Bootstrap.pagination} >
        {buttons}
      </ul>
    </nav>
  );
};

Navigation.propTypes = {
  pages: PropTypes.number.isRequired,
  clickHandler: PropTypes.func.isRequired,
};

export default Navigation;
