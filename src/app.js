import './app.css';

import { Client } from 'boardgame.io/react';
import { Game } from 'boardgame.io/core';
import setup from './model/setup';
import moves from './update/moves';
import board from './view/board';

const game = Game({
  setup,
  moves,
});

export default Client({ game, board });
