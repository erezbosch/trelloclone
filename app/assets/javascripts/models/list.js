TrelloClone.Models.List = Backbone.Model.extend({
  urlRoot: function () {
    return 'api/boards/1/lists';
  },
});
