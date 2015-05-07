import DS from 'ember-data';

var Book = DS.Model.extend({
	title: DS.attr(),
    author: DS.attr(),
    review: DS.attr(),
    rating: DS.attr('number'),
    amazon_id: DS.attr(),
    genre: DS.belongsTo('genre', {async: true}),
    url: function() {
    	return "http://www.amazon.com/gp/product/"+this.get('amazon_id');
    }.property('amazon_id'),
    image: function() {
    	return "http://images.amazon.com/images/P/"+this.get('amazon_id')+".01.ZTZZZZZZ.jpg";
    }.property('amazon_id')  
});

Book.reopenClass({
	FIXTURES: [
		{
		    id: 1,
		    title: 'Mindstorms',
		    author: 'Seymour A. Papert',
		    review: 'Although this book focuses on the cognitive advantages to having children use technology from an early age, it is also an in depth look at how people can learn for themseves. As someone who was often distracted and bored at times during school, Mindstorms highlights some of the reasoning behind that feeling and what we can do as teachers to help minimize it.',
		    rating: 5,
		    amazon_id: '0465046746',
		    genre: 3
		},
		{
		    id: 2,
		    title: 'Hyperion',
		    author: 'Dan Simmons',
		    review: "Probably my favorite science fiction book (and series) I've ever read. Hyperion is written in a style similar to The Canterbury Tales, in which a series of stories are told by the main characters. Each story is a gem in itself, but alude to the larger storyline. The scope of the story is ambitious - spanning time, planets religion and love.",
		    rating: 5,
		    amazon_id: '0553283685',
		    genre: 1
		},
		{
		    id: 3,
		    title: "Jony Ive: The Genius Behind Apple's Greatest Products",
		    author: 'Leander Kahney',
		    review: "Even though I respect Ive, I felt this biography only hit skin deep. It went over all the major events in his life, his passion for design, awards he achieved -- but that's really it. I dont't feel I know him anymore than before reading this.",
		    rating: 2,
		    amazon_id: '159184617X',
		    genre: 3
		}
	]
});

export default Book;