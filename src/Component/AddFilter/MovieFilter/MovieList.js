import React, { useState } from "react";
import { Row, Col, Select, Flex } from "antd";
import List from "./List";

export default function MovieList({ movies }) {
  const [selectedGenre, setSelectedGenre] = useState(null);
  const [selectedYear, setSelectedYear] = useState(null);
  const [moviesToDisplay, setMoviesToDisplay] = useState(movies || []); // Add a check here

  const handleGenreChange = (value) => {
    setSelectedGenre(value);
    filterMovies(value, selectedYear);
  };

  const handleYearChange = (value) => {
    setSelectedYear(value);
    filterMovies(selectedGenre, value);
  };

  const filterMovies = (genre, year) => {
    let filteredMovies = movies || []; // Add a check here

    if (genre) {
      filteredMovies = filteredMovies.filter((movie) =>
        movie.genres.includes(genre)
      );
    }

    if (year) {
      filteredMovies = filteredMovies.filter((movie) => movie.year === year);
    }

    setMoviesToDisplay(filteredMovies);
  };

  return (
    <>
      <Row className="w-100" gutter={[30, 30]}>
        <Col xs={24} md={12}>
          <Flex vertical gap={8}>
            <label>Choose Genre</label>
            <Select
              onChange={handleGenreChange}
              value={selectedGenre}
              options={[
                ...(movies
                  ? new Set(movies.map((movie) => movie.genres).flat())
                  : [])
              ].map((movie) => {
                return { value: movie, label: movie };
              })}
            />
          </Flex>
        </Col>
        <Col xs={24} md={12}>
          <Flex vertical gap={8}>
            <label>Choose Year</label>
            <Select
              onChange={handleYearChange}
              value={selectedYear}
              options={[
                ...(movies
                  ? new Set(movies.map((movie) => movie.year))
                  : [])
              ]
                .sort()
                .map((movie) => {
                  return { value: movie, label: movie };
                })}
            />
          </Flex>
        </Col>
      </Row>
      <List movies={moviesToDisplay} />
    </>
  );
}
