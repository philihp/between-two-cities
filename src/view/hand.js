import React from 'react';
import PropTypes from 'prop-types';
import Tile from './tile';

const Hand = ({ tiles, moves }) => {
  return (
    <div>
      {tiles.map((tile, i) => {
        return (
          <Tile key={`${tile}${i}`} select={moves.selectTile} index={i} type={tile} />
        );
      })}
    </div>
  );
};

Hand.propTypes = {
  tiles: PropTypes.arrayOf(PropTypes.string).isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  moves: PropTypes.any.isRequired,
};

export default Hand;
