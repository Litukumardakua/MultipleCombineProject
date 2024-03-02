import React, { useState } from 'react';

const moviesData = [
  { title: 'Movie 1', genre: 'Action', year: 2020 },
  { title: 'Movie 2', genre: 'Comedy', year: 2019 },
  { title: 'Movie 3', genre: 'Drama', year: 2021 },
  // Add more movies as needed
];

const Demofilter = () => {
  const [genreFilter, setGenreFilter] = useState('All');
  const [yearFilter, setYearFilter] = useState('All');

  const filteredMovies = moviesData.filter(movie => {
    const genreCondition = genreFilter === 'All' || movie.genre === genreFilter;
    const yearCondition = yearFilter === 'All' || movie.year === parseInt(yearFilter);

    return genreCondition && yearCondition;
  });

  const genres = ['All', 'Action', 'Comedy', 'Drama']; // Add more genres as needed
  const years = ['All', 2019, 2020, 2021, 2022]; // Add more years as needed

  return (
    <div>
      <h1>Movie List</h1>

      <label>
        Genre:
        <select value={genreFilter} onChange={(e) => setGenreFilter(e.target.value)}>
          {genres.map((genre, index) => (
            <option key={index} value={genre}>{genre}</option>
          ))}
        </select>
      </label>

      <label>
        Year:
        <select value={yearFilter} onChange={(e) => setYearFilter(e.target.value)}>
          {years.map((year, index) => (
            <option key={index} value={year}>{year}</option>
          ))}
        </select>
      </label>

      <ul>
        {filteredMovies.map((movie, index) => (
          <li key={index}>
            {movie.title} - {movie.genre} ({movie.year})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Demofilter;
