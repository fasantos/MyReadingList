import DS from 'ember-data';

var Genre = DS.Model.extend({
	name: DS.attr(),
    books: DS.hasMany('index', {async: true}) 
});

Genre.reopenClass({
	FIXTURES: [
		{
			id: 1,
			name: 'Science Fiction',
			books: [2]
		},
		{
			id: 2,
			name: 'Fiction'
		},
		{
			id: 3,
			name: 'Non-Fiction',
			books: [1,3]
		}
	]
});

export default Genre;
