TrelloClone.Collections.Cards = Backbone.Collection.extend({
  url: function () {
    return this.list.url() + '/cards';
  },

  model: TrelloClone.Models.Card,
  comparator: 'ord',

  initialize: function (array, options) {
    this.list = options.list;
  },

  getOrFetch: function (id) {
    var card = this.get(id);
    if (!card) {
      card = new TrelloClone.Models.Card({ id: id });
      this.add(card);
    }
    card.fetch();
    return card;
  },
});
