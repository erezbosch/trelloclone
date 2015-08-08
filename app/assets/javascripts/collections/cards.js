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
      card = new TrelloClone.Models.Card({ id: id, list: this });
      card.fetch({ success: function () { this.add(card); }.bind(this) });
    } else {
      card.fetch();
    }
    return card;
  },
});
