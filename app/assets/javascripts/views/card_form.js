TrelloClone.Views.CardForm = Backbone.View.extend({
  template: JST['card_form'],
  className: 'card-form card',
  tagName: 'form',

  events: {
    'submit': 'addCard',
  },

  initialize: function (options) {
    this.listenTo(this.model, "sync", this.render);
  },

  addCard: function (e) {
    e.preventDefault();
    var cardData = $(e.currentTarget).serializeJSON();
    this.model.save(cardData, {
      success: function () {
        this.collection.add(this.model);
        this.$(':input').val('');
      }.bind(this)
    });
  },

  render: function () {
    this.$el.html(this.template());
    return this;
  }
});
