TrelloClone.Views.Card = Backbone.CompositeView.extend({
  template: JST['card'],
  className: 'card',
  tagName: 'li',

  render: function () {
    this.$el.html(this.template({ card: this.model }));
    return this;
  },

  initialize: function () {
    this.listenTo(this.model, 'sync', this.render);
  },
});
