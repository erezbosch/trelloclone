TrelloClone.Routers.Router = Backbone.Router.extend({
  routes: {
    "": "boardsIndex",
    "api/boards/new": "newBoard",
    "api/boards/:id/edit": "editBoard",
    "api/boards/:id": "showBoard",
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

  newBoard: function () {
    var view = new TrelloClone.Views.BoardForm({
      collection: this.boards,
      model: new TrelloClone.Models.Board(),
    });
    view.model.fetch();
    this._swapView(view);
  },

  showBoard: function (id) {
    var view = new TrelloClone.Views.BoardShow({
      model: this.boards.getOrFetch(id),
    });
    this._swapView(view);
  },

  editBoard: function (id) {
    var view = new TrelloClone.Views.BoardForm({
      collection: this.boards,
      model: this.boards.getOrFetch(id),
    });
    this._swapView(view);
  },

  _swapView: function (view) {
    this._currentView && this._currentView.remove();
    this._currentView = view;
    this.$rootEl.html(view.render().$el);
  },
});
