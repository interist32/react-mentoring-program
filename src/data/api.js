const allMovies = [
  {
    id: '1',
    title: 'The Big Lebowski',
    genre: 'Comedy',
    releaseDate: 1998,
    image:
        'https://www.gstatic.com/tv/thumb/v22vodart/20484/p20484_v_v8_am.jpg',
    description: getFakeDescription(),
  },
  {
    id: '2',
    title: 'The Matrix',
    genre: 'Sci-fi',
    releaseDate: 1999,
    image:
        'https://www.gstatic.com/tv/thumb/v22vodart/22804/p22804_v_v8_as.jpg',
    description: getFakeDescription(),
  },
  {
    id: '3',
    title: 'The Butterfly Effect',
    genre: 'Thriller',
    releaseDate: 2004,
    image:
        'https://www.gstatic.com/tv/thumb/v22vodart/31722/p31722_v_v8_aa.jpg',
    description: getFakeDescription(),
  },
  {
    id: '4',
    title: 'Donnie Darko',
    genre: 'Sci-fi',
    releaseDate: 2001,
    image:
        'https://www.gstatic.com/tv/thumb/v22vodart/27378/p27378_v_v8_av.jpg',
    description: getFakeDescription(),
  },
  {
    id: '5',
    title: 'Twin Peaks: Fire Walk with Me',
    genre: 'Mystery',
    releaseDate: 1992,
    image:
        'https://www.gstatic.com/tv/thumb/v22vodart/13997/p13997_v_v8_aa.jpg',
    description: getFakeDescription(),
  },
];

function getFakeDescription() {
  return 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';
}

export const getMoviesData = (numberOfMovies) => new Promise((resolve) => {
  setTimeout(() => {
    resolve({
      movies: allMovies.slice(0, numberOfMovies),
      genres: [...new Set(allMovies.map(movie => movie.genre))],
    });
  }, 2000);
});