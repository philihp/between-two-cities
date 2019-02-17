import React from 'react';
import PropTypes from 'prop-types';
import playerView from '../model/player-view';
import Hand from './hand';

const Board = ({ G, ctx, isActive, isConnected, playerID }) => {
  const g = playerView(G, ctx, playerID);
  return (
    <div>
      playerID: {playerID}
      <br />
      isActive: {isActive && 'YES'}
      <br />
      isConnected: {isConnected && 'YES'}
      <br />
      Singles: {g.singlesDeck.join(',')}
      <br />
      Doubles: {g.doublesDeck.join(',')}
      <br />
      Hand:
      <Hand tiles={g.players[playerID].hand} />
    </div>
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
