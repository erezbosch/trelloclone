TrelloClone.Views.ListForm = Backbone.View.extend({
  template: JST['list_form'],
  className: 'list-form list',
  tagName: 'form',

  events: {
    'submit': 'addList',
  },

  initialize: function (options) {
    this.listenTo(this.model, "sync", this.render);
  },

  addList: function (e) {
    e.preventDefault();
    var listData = $(e.currentTarget).serializeJSON();
    this.model.save(listData, {
      success: function () {
        this.collection.add(this.model);
        this.$(':input').val('');
      }.bind(this)
    });
  },

  render: function () {
    this.$el.html(this.template({ list: this.model }));
    return this;
  }
});
