import React from 'react';
import PropTypes from 'prop-types';

const Greeny = ({ greeny }) => (
  <div className="greeny">
    <img
      className="greeny-image"
      src={require(greeny)}
      alt="greeny the radioactive domestic monster"
    />
  </div>
);

Greeny.propTypes = {
  greeny: PropTypes.string.isRequired,
};
export default Greeny;
