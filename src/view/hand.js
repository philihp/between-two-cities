import React from 'react';
import PropTypes from 'prop-types';
import Tile from './tile';

const Hand = ({ tiles }) => (
  <div>
    {tiles.map(tile => (
      <Tile key={tile} type={tile} />
    ))}
  </div>
);

Hand.propTypes = {
  tiles: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Hand;
