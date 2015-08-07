Backbone.CompositeView = Backbone.View.extend({
  subviews: function (selector) {
    this._subviews = this._subviews || {};

    if (selector) {
      this._subviews[selector] = this._subviews[selector] || [];
      return this._subviews[selector];
    } else {
      return this._subviews;
    }
  },

  addSubview: function (selector, view) {
    this.subviews(selector).push(view);
    this.attachSubview(selector, view.render());
  },

  attachSubview: function (selector, subview) {
    this.$(selector).append(subview.$el);
    subview.delegateEvents();

    subview.attachSubviews && subview.attachSubviews();
  },

  attachSubviews: function () {
    var view = this;
    _(this.subviews()).each(function (selectorSubviews, selector) {
      view.$(selector).empty();
      _(selectorSubviews).each(function (subview) {
        view.attachSubview(selector, subview);
      });
    });
  },

  removeSubview: function (selector, subview) {
    subview.remove();

    var subviews = this.subviews(selector);
    subviews.splice(subviews.indexOf(subview), 1);
  },

  removeModelSubview: function (selector, model) {
    var target = _(this.subviews(selector)).find(function (subview) {
      return subview.model === model;
    });
    if (target) {
      this.removeSubview(selector, target);
    }
  },

  remove: function () {
    Backbone.View.prototype.remove.call(this);
    _(this.subviews()).each(function (subviews) {
      _(subviews).each(function (subview) {
        subview.remove();
      });
    });
  },
});
