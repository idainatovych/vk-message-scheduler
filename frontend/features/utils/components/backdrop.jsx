import React from 'react';

const Backdrop = (props) => {
  let el = null;
  if (props.open) {
    el = <div className="backdrop" onClick={props.onClick} />;
  }
  return el;
};

export default Backdrop;
