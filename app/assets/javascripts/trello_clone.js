window.TrelloClone = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    var boards = new TrelloClone.Collections.Boards();
    boards.fetch();
    new TrelloClone.Routers.Router({ boards: boards, $rootEl: $('.trello')});
    Backbone.history.start();
  }
};

$(document).ready(function(){
  TrelloClone.initialize();
});
