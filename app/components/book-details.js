import Ember from 'ember';

export default Ember.Component.extend({
	classNameBindings: ['ratingClass'],
	ratingClass: function() {
		return "rating-" + this.get('book.rating');
	}.property('book.rating')
});
