import './app.css';

import { Client } from 'boardgame.io/react';
import { Game } from 'boardgame.io/core';

const BetweenTwoCities = Game({
  setup: () => ({ game: [] }),

  moves: {
    clickCell: (G, ctx, id) => ({ ...G }),
  },
});

const App = Client({ game: BetweenTwoCities });

export default App;
