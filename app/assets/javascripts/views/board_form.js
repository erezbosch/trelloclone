TrelloClone.Views.BoardForm = Backbone.View.extend({
  template: JST['board_form'],

  events: {
    'submit form': 'addBoard',
  },

  initialize: function () {
    this.listenTo(this.model, "sync", this.render);
  },

  addBoard: function (e) {
    e.preventDefault();
    var boardData = $(e.currentTarget).serializeJSON().board;
    this.model.save(boardData, {
      success: function () {
        this.collection.add(this.model);
        Backbone.history.navigate('api/boards/' + this.model.id, { trigger: true });
      }.bind(this),

      error: function (model, response) {
        this.$('.form-errors').empty();
        JSON.parse(response.responseText).forEach(function (errorText) {
          this.$('.form-errors').append('<li>' + errorText + '</li>');
        });
      }.bind(this),
    });
  },

  render: function () {
    this.$el.html(this.template({ board: this.model }));
    return this;
  }
});
