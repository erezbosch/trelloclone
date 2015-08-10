TrelloClone.Views.ListForm = Backbone.View.extend({
  template: JST['list_form'],

  events: {
    'submit form': 'addList',
  },

  initialize: function (options) {
    this.board = options.board;
    this.listenTo(this.model, "sync", this.render);
  },

  addList: function (e) {
    e.preventDefault();
    var listData = $(e.currentTarget).serializeJSON();
    this.model.save(listData, {
      success: function () {
        this.board.lists().add(this.model);
        debugger;
        this.$('input').val('');
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
    this.$el.html(this.template({ list: this.model }));
    return this;
  }
});
