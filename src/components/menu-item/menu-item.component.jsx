import React from 'react';
import './menu-item.styles.scss';
import { withRouter } from 'react-router-dom';

const MenuItem = ({
  section: { title, imageUrl, size, linkUrl },
  history,
  match,
}) => (
  <div
    className={`menu-item ${size}`}
    onClick={() => {
      console.log(match)
      return history.push(`${linkUrl}`);
    }}
  >
    <div
      className="background-image"
      style={{ backgroundImage: `url(${imageUrl})` }}
    ></div>
    <div className="content">
      <div className="title">{title.toUpperCase()}</div>
      <span className="subtitle">SHOP NOW</span>
    </div>
  </div>
);

export default withRouter(MenuItem);
