TrelloClone.Views.BoardShow = Backbone.CompositeView.extend({
  template: JST['board_show'],

  initialize: function () {
    this.listenTo(this.model, 'sync', this.render);

    this.model.lists().each(this.addListView.bind(this));

    this.listenTo(this.model.lists(), 'add', this.addListView);
    this.listenTo(
      this.model.lists(),
      'remove',
      this.removeModelSubview.bind(this, '.lists')
    );
  },

  render: function () {
    this.$el.html(this.template({ board: this.model }));
    this.attachSubviews();
    return this;
  },

  addListView: function (list) {
    var listView = new TrelloClone.Views.List({ model: list });
    this.addSubview('.lists', listView);
  },
});
