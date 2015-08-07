TrelloClone.Models.List = Backbone.Model.extend({
  urlRoot: function () {
    return 'api/boards/' + this.board.id + '/lists';
  },

  initialize: function (options) {
    this.board = options.board;
  },
});
