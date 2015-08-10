TrelloClone.Views.BoardShow = Backbone.CompositeView.extend({
  template: JST['board_show'],

  initialize: function () {
    this.listenTo(this.model, 'sync', this.render);

    this.model.lists().each(this.addListView.bind(this));
    this.addListForm();

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
    this.onRender();
  },

  onRender: function () {
    this.$('.lists').sortable({
      start: function (e, ui) {
        ui.item.data('start-idx', ui.item.index());
      },

      stop: function (e, ui) {
        var startIdx = ui.item.data('start-idx');
        var endIdx = ui.item.index();
        var change = endIdx > startIdx ? 1 : (endIdx === startIdx ? 0 : -1);
        var compareDiv = this.$('.lists').find('.list').eq(endIdx - change);
        var compareList = this.model.lists().get(compareDiv.attr('data-id'));
        var newOrd = compareList.get('ord') + change;
        var target = this.model.lists().get(ui.item.attr('data-id'));
        debugger;
        target.save({ ord: newOrd }, {
          success: function () {
            console.log("OMG");
          }
        });
      }.bind(this)
    });
    Backbone.CompositeView.prototype.onRender.call(this);
  },

  addListView: function (list) {
    var listView = new TrelloClone.Views.List({ model: list });
    this.addSubview('.lists', listView);
  },

  addListForm: function () {
    var listFormView = new TrelloClone.Views.ListForm({
      collection: this.model.lists(),
      model: new TrelloClone.Models.List({ board: this.model }),
    });
    this.addSubview('.list-form', listFormView);
  }
});
