var app = app || {};

app.AppView = Backbone.View.extend({
  el: '#yearbookapp',
  events: {
    this.listenTo(app.Students, 'student', this.showStudent)
    // add a click event for each student in the view
  },
  initialize: function () {
    this.template = _.template($('#appView').html());
  },
  render: function () {
    // get this template and stick it into the el: element on page
    this.$el.html(this.template());

    // now send all of this to the view for each item int he collections
    this.collection.each(function(student){
      var view = new StudentListView({model: student});
      view.render();
      $('#student').append(view.el);
    });
  }
});