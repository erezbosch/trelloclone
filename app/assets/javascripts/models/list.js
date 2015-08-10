TrelloClone.Models.List = Backbone.Model.extend({
  urlRoot: function () {
    return 'api/boards/' + this.board.id + '/lists';
  },

  initialize: function (options) {
    this.board = options.board;
  },

  cards: function () {
    this._cards = this._cards ||
      new TrelloClone.Collections.Cards([], { list: this });
    return this._cards;
  },

  parse: function (payload) {
    debugger;
    if (payload.cards) {
      this.cards().set(payload.cards);
      delete payload.cards;
    }
    return payload;
  }
});
