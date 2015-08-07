TrelloClone.Routers.Router = Backbone.Router.extend({
  routes: {
    "": "boardsIndex",
  },

  initialize: function (options) {
    this.boards = options.boards,
    this.$rootEl = options.$rootEl;
  },

  boardsIndex: function () {
    this.boards.fetch();
    var view = new TrelloClone.Views.BoardsIndex({ collection: this.boards });
    this._swapView(view);
  },

  _swapView: function (view) {
    this._currentView && this._currentView.remove();
    this._currentView = view;
    this.$rootEl.html(view.render().$el);
  },
});
