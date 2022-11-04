<<<<<<< Updated upstream
import { Component } from 'react';
import { FeedbackOptions } from './FeedbackOptions';
import { Section } from './Section';
export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  render() {
    return (
      <Section title={'Please leave feedback'}>
        <FeedbackOptions options={this.state} />
        <h2>Statistics</h2>

        <ul>
          <li>
            <p>Good</p>
          </li>
          <li>
            <p>Neutral</p>
          </li>
          <li>
            <p>Bad</p>
          </li>
        </ul>
      </Section>
    );
  }
}
=======
import { Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';

const Home = lazy(() => import('pages/Home/Home'));
const MoviesPage = lazy(() => import('pages/MoviesPage/MoviesPage'));
const Layout = lazy(() => import('./Layout/Layout'));
const MovieDetails = lazy(() => import('pages/MovieDetails/MovieDetails'));
const Cast = lazy(() => import('./Cast/Cast'));
const Reviews = lazy(() => import('./Reviews/Reviews'));

export const App = () => {
  return (
    <>
      <Layout>
        <Suspense fallback={<p>Loading...</p>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/movies" element={<MoviesPage />} />
            <Route path="/movies/:movieId" element={<MovieDetails />}>
              <Route path="cast" element={<Cast />} />
              <Route path="reviews" element={<Reviews />} />
            </Route>
            <Route path="*" element={<Home />} />
          </Routes>
        </Suspense>
      </Layout>
    </>
  );
};
>>>>>>> Stashed changes
