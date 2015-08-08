TrelloClone.Collections.Lists = Backbone.Collection.extend({
  url: function () {
    return this.board.url() + '/lists';
  },

  model: TrelloClone.Models.List,
  comparator: 'ord',

  initialize: function (array, options) {
    this.board = options.board;
  },

  getOrFetch: function (id) {
    var list = this.get(id);
    if (!list) {
      list = new TrelloClone.Models.List({ id: id, board: this.board });
      list.fetch({ success: function () { this.add(list); }.bind(this) });
    } else {
      list.fetch();
    }
    return list;
  },
});
