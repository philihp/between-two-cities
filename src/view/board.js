import React from 'react';
import PropTypes from 'prop-types';
import playerView from '../model/player-view';

const Board = ({ G, ctx, isActive, isConnected, playerID }) => {
  return (
    <pre>
      {JSON.stringify(
        {
          G: playerView(G, ctx, playerID),
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
  playerID: PropTypes.string.isRequired,
};

export default Board;
