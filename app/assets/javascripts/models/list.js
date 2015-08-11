TrelloClone.Models.List = Backbone.Model.extend({
  urlRoot: function () {
    return 'api/boards/' + (this.get('board_id') || this.board.id) + '/lists';
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
    if (payload.cards) {
      this.cards().set(payload.cards);
      delete payload.cards;
    }
    return payload;
  },

  differentiateOrdsByIncreasing: function (number) {
    this.cards().each(function (card) {
      if (card.get('ord') === number) {
        number++;
        card.save({ ord: number });
      }
    });
  },

  differentiateOrdsByDecreasing: function (number) {
    for (var i = this.cards().length - 1; i >= 0; i--) {
      if (this.cards().models[i].get('ord') === number) {
        number--;
        card.save({ ord: number });
      }
    }
  }
});
