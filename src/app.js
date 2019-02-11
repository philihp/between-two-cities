import React from 'react';
import { Client } from 'boardgame.io/react';
import { Game } from 'boardgame.io/core';
import setup from './model/setup';
import moves from './update/moves';
import board from './view/board';
import './app.css';

const GameClient = Client({
  game: Game({
    setup,
    moves,
  }),
  numPlayers: 4,
  board,
  multiplayer: {
    local: true,
  },
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
