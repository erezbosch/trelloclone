TrelloClone.Views.BoardsIndex = Backbone.View.extend({
  template: JST['boards_index'],

  initialize: function () {
    this.listenTo(this.collection, "sync", this.render);
  },

  render: function () {
    this.$el.html(this.template({ boards: this.collection }));
    return this;
  }
});
