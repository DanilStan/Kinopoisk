import React from 'react';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { fetchTrendingFilms } from 'helpers/api';
import { createImg } from 'helpers/createImg';
import css from './Home.module.css';

export default function Home() {
  const [trendingFilms, setTrendingFilms] = useState([]);

  useEffect(() => {
    async function getTrendingFilms() {
      const films = await fetchTrendingFilms();
      setTrendingFilms(films);
    }
    getTrendingFilms();
  }, []);

  return (
    <div className={css.homepage}>
      <h2 className={css.homepage__title}>Trending movies of the day</h2>
      <ul className={css.homepage__list}>
        {trendingFilms.map(film => {
          return (
            <li key={film.id} className={css.homepage__listItem}>
              <Link
                to={`/movies/${film.id}`}
                className={css.homepage__link__primary}
              >
                <img
                  src={createImg(film.poster_path)}
                  alt="avatar"
                  width="250px"
                />
                <p className={css.homepage__link}>{film.original_title}</p>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
