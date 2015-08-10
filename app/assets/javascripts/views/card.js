TrelloClone.Views.Card = Backbone.CompositeView.extend({
  template: JST['card'],
  className: 'card',
  tagName: 'li',

  events: {
    'click .delete': 'deleteCard',
  },

  deleteCard: function () {
    this.model.destroy();
    this.remove();
  },

  render: function () {
    this.$el.html(this.template({ card: this.model }));
    return this;
  },

  initialize: function () {
    this.listenTo(this.model, 'sync', this.render);
  },
});
