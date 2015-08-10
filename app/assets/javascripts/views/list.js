TrelloClone.Views.List = Backbone.CompositeView.extend({
  template: JST['list'],
  className: 'list',

  initialize: function () {
    this.listenTo(this.model, 'sync', this.render);

    this.model.cards().each(this.addCardView.bind(this));
    this.addCardForm();

    this.listenTo(this.model.cards(), 'add', this.addCardView);
    this.listenTo(
      this.model.cards(),
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

  addCardForm: function () {
    var cardFormView = new TrelloClone.Views.CardForm({
      collection: this.model.cards(),
      model: new TrelloClone.Models.Card({ list: this.model }),
    });
    this.addSubview('.card-form-holder', cardFormView);
  },
});
