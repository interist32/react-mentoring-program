const allMovies = [
  {
    title: 'The Big Lebowski',
    genre: 'Comedy',
    releaseDate: 1998,
    image:
        'https://www.gstatic.com/tv/thumb/v22vodart/20484/p20484_v_v8_am.jpg',
  },
  {
    title: 'The Matrix',
    genre: 'Sci-fi',
    releaseDate: 1999,
    image:
        'https://www.gstatic.com/tv/thumb/v22vodart/22804/p22804_v_v8_as.jpg',
  },
  {
    title: 'The Butterfly Effect',
    genre: 'Thriller',
    releaseDate: 2004,
    image:
        'https://www.gstatic.com/tv/thumb/v22vodart/31722/p31722_v_v8_aa.jpg',
  },
  {
    title: 'Donnie Darko',
    genre: 'Sci-fi',
    releaseDate: 2001,
    image:
        'https://www.gstatic.com/tv/thumb/v22vodart/27378/p27378_v_v8_av.jpg',
  },
  {
    title: 'Twin Peaks: Fire Walk with Me',
    genre: 'Mystery',
    releaseDate: 1992,
    image:
        'https://www.gstatic.com/tv/thumb/v22vodart/13997/p13997_v_v8_aa.jpg',
  },
];

export const getMoviesData = (numberOfMovies) => new Promise((resolve) => {
  setTimeout(() => {
    resolve({
      movies: allMovies.slice(0, numberOfMovies),
      genres: [...new Set(allMovies.map(movie => movie.genre))],
    });
  }, 2000);
});