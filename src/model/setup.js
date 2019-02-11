const initSinglesDeck = shuffle =>
  shuffle([
    ...new Array(16).fill('S'),
    ...new Array(20).fill('O'),
    ...new Array(20).fill('H'),
    ...new Array(16).fill('P'),
    ...new Array(16).fill('F'),
    ...new Array(5).fill('Ta'),
    ...new Array(5).fill('Tb'),
    ...new Array(5).fill('Tc'),
    ...new Array(5).fill('Td'),
  ]);

const initDoublesDeck = shuffle =>
  shuffle([
    [['S'], ['Td']],
    [['S'], ['F']],
    [['O'], ['S']],
    [['F'], ['O']],
    [['H'], ['O']],
    [['Tb'], ['H']],
    [['O'], ['P']],
    [['Tc'], ['P']],
    [['H'], ['S']],
    [['F'], ['Ta']],
    [['P'], ['F']],
    [['P'], ['H']],
    [['Ta', 'P']],
    [['H', 'Td']],
    [['S', 'H']],
    [['F', 'O']],
    [['F', 'S']],
    [['Tb', 'F']],
    [['O', 'H']],
    [['S', 'Tc']],
    [['H', 'P']],
    [['P', 'F']],
    [['O', 'S']],
    [['P', 'O']],
  ]);

const initCities = numPlayers => {
  return [...new Array(numPlayers)]
    .map((_, i) => i)
    .reduce(
      (accum, player) => ({
        ...accum,
        [[player, (player + 1) % numPlayers].join('')]: [[]],
      }),
      {},
    );
};

export default ctx => {
  const singlesDeck = initSinglesDeck(ctx.random.Shuffle);
  const doublesDeck = initDoublesDeck(ctx.random.Shuffle);

  const cities = initCities(ctx.numPlayers);

  return {
    singlesDeck: singlesDeck.slice(7 * ctx.numPlayers),
    doublesDeck,
    players: [...new Array(ctx.numPlayers).keys()].reduce(
      (accum, playerID) => ({
        ...accum,
        [playerID]: {
          hand: singlesDeck.slice(7 * playerID, 7 * playerID + 7).sort(),
        },
      }),
      {},
    ),
    cities,
  };
};
