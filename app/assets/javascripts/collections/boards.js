TrelloClone.Collections.Boards = Backbone.Collection.extend({
  model: TrelloClone.Models.Board,
  url: '/boards',

  getOrFetch: function (id) {
    var board = this.get(id);
    if (!board) {
      board = new NewsReader.Models.Board({ id: id });
      this.add(board);
    }
    board.fetch();
    return board;
  },
});