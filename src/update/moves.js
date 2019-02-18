export default {
  selectTile(G, ctx, index) {
    return {
      ...G,
      players: {
        ...G.players,
        [ctx.currentPlayer]: {
          ...G.players[ctx.currentPlayer],
          selected: index,
        },
      },
    };
  },
};
