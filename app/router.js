import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

export default Router.map(function() {
    this.resource('book', {path: '/books/:book_id'});
    this.resource('genre', {path: '/genres/:genre_id'});
    this.resource('reviews', function() {
        this.route('new');
    });
});
