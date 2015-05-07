import Ember from 'ember';

export default Ember.Route.extend({
	model: function() {
		return Ember.RSVP.hash({
			book: this.store.createRecord('index'),
			genres: this.store.find('genre')
		}); 
	},
	setupController: function(controller, model) {
		controller.set('model', model.book);
		controller.set('genres', model.genres);		
	},
	actions: {
		willTransition: function(transition) {
			if (this.currentModel.book.get('isNew')) {
				if (confirm('Are you sure you want to abandon this review')) {
					this.currentModel.book.destroyRecord();
				}else{
					transition.abort();
				}
			}
		}
	}
});
