import React from "react";

const ProgressBar = (props) => {
  return (
    <div className="w-100 position-relative mt-3">
      <div className="track2"></div>
      <div className="value-track3">
        <div className="wrap-bulet-text3">
          <div className="bullet-track3"></div>
          <span className="unit-4 text-dark-blue">{props.unitFirst} units</span>
        </div>
      </div>
      <span className="unit-3 text-dark-blue">{props.unitLast} units</span>
    </div>
  );
};

export default ProgressBar;
