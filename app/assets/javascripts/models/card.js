TrelloClone.Models.Card = Backbone.Model.extend({
  urlRoot: function () {
    return 'api/lists/' + this.list.id + '/cards';
  },

  initialize: function (options) {
    this.list = options.list;
  },
});
