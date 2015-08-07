TrelloClone.Views.BoardShow = Backbone.CompositeView.extend({
  template: JST['board_show'],

  render: function () {
    this.$el.html(this.template({ board: this.model }));
    return this;
  },
});
