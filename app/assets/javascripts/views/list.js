TrelloClone.Views.List = Backbone.CompositeView.extend({
  template: JST['list'],
  className: 'list',

  initialize: function () {
    this.listenTo(this.model, 'sync', this.render);

    this.collection = this.model.cards();

    this.collection.each(this.addCardView.bind(this));

    this.listenTo(this.collection, 'add', this.addCardView);
    this.listenTo(
      this.collection,
      'remove',
      this.removeModelSubview.bind(this, '.cards')
    );
  },

  render: function () {
    this.$el.html(this.template({ list: this.model }));
    this.attachSubviews();
    return this;
  },

  addCardView: function (card) {
    var cardView = new TrelloClone.Views.Card({ model: card });
    this.addSubview('.cards', cardView);
  },
});
