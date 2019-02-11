import React from 'react';
import PropTypes from 'prop-types';

const Board = ({ G, ctx, isActive, isConnected, playerID }) => {
  return (
    <pre>
      {JSON.stringify(
        {
          G,
          ctx,
          isActive,
          isConnected,
          playerID,
        },
        null,
        2,
      )}
    </pre>
  );
};

Board.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  G: PropTypes.any.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  ctx: PropTypes.any.isRequired,
  isActive: PropTypes.bool.isRequired,
  isConnected: PropTypes.bool.isRequired,
  playerID: PropTypes.number.isRequired,
};

export default Board;
