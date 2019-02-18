import React from 'react';
import { Client } from 'boardgame.io/react';
import { Game } from 'boardgame.io/core';
import setup from './model/setup';
import playerView from './model/player-view';
import flow from './model/flow';
import moves from './update/moves';
import board from './view/board';
import './app.css';

const GameClient = Client({
  game: Game({
    setup,
    moves,
    flow,
  }),
  numPlayers: 4,
  board,
  multiplayer: {
    local: true,
  },
  playerView,
});

export default () => (
  <div>
    <GameClient playerID="0" />
    <hr />
    <GameClient playerID="1" />
    <hr />
    <GameClient playerID="2" />
    <hr />
    <GameClient playerID="3" />
  </div>
);
