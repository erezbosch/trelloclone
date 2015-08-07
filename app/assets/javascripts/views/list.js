TrelloClone.Views.List = Backbone.CompositeView.extend({
  template: JST['list'],
  
  render: function () {
    this.$el.html(this.template({ list: this.model }));
    return this;
  }
});
