const cloak = player => ({
  ...player,
  hand: new Array(player.hand.length),
});

export default (G, ctx, playerID) => {
  const players = Object.entries(G.players).reduce(
    (a, [k, v]) => ({
      ...a,
      [k]: playerID === k ? v : cloak(v),
    }),
    {},
  );
  return {
    ...G,
    singlesDeck: new Array(G.singlesDeck.length).fill(undefined),
    doublesDeck: new Array(G.doublesDeck.length).fill(undefined),
    players,
  };
};
