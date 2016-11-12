import React from 'react';

const Backdrop = (props) => {
  let el = null;
  if (props.open) {
    el = <div className="backdrop" onClick={props.onClick}></div>;
  }
  return el;
};

export default Backdrop;
