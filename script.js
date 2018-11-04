'use scrict';
var element =
  React.createElement('div', {},
    React.createElement('h1', {}, 'Lista filmów'),
  );
var movies = [
  {
    id: 1,
    title: 'Harry Potter',
    desc: 'film o czarodzieju',
    image: 'https://1.fwcdn.pl/po/05/71/30571/7529392.6.jpg'
  },
  {
    id: 2,
    title: 'Król Lew',
    desc: 'Film o królu sawanny',
    image: 'http://s3.viva.pl/newsy/krol-lew-plakat-filmu-427851-movie_cover.jpg'
  },
  {
  	id: 3,
  	title: 'Świnka Pepa',
  	desc: 'bajka o śwince',
  	image: 'https://eplakaty.pl/img/towary/2/2016_11/43997.jpg'
  },

];
var moviesElements = movies.map(function(movie) {
  return React.createElement('li', {key: movie.id},
      React.createElement('h2', {}, movie.title),
      React.createElement('p', {}, movie.desc),
      React.createElement('img',{src: movie.image})
    );
});
var element =
  React.createElement('div', {},
    React.createElement('h1', {}, 'Lista filmów'),
    React.createElement('ul', {}, moviesElements),
  );

  ReactDOM.render(element, document.getElementById('app'));


  