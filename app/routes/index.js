import Ember from 'ember';

export default Ember.Route.extend({
	model: function() {
		return Ember.RSVP.hash({
			books: this.store.find('index'),
			genres: this.store.find('genre')
		}); 
	},
	setupController: function(controller, model) {
		controller.set('books', model.books);
		controller.set('genres', model.genres);		
	}
});
