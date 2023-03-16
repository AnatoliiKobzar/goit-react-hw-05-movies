import axios from 'axios';

const agent = axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
  params: { api_key: '80c3b79aa997143da0fce24113ded47b' },
});

export async function getTrendingMovies() {
  try {
    const movies = await agent.get('trending/movie/day');

    return movies.data.results;
  } catch (error) {
    console.error(error);
  }
}

export async function getMoviesByQuery(query) {
  try {
    const movies = await agent.get('search/movie', {
      params: {
        query,
      },
    });

    return movies.data.results;
  } catch (error) {
    console.error(error);
  }
}

export async function getMoviesDetails(id) {
  try {
    const movie = await agent.get(`movie/${id}`);

    return movie.data;
  } catch (error) {
    console.error(error);
  }
}

export async function getMoviesCredits(id) {
  try {
    const credits = await agent.get(`movie/${id}/credits`);

    return credits.data.cast;
  } catch (error) {
    console.error(error);
  }
}

export async function getMoviesReviews(id) {
  try {
    const reviews = await agent.get(`movie/${id}/reviews`);

    return reviews.data.results;
  } catch (error) {
    console.error(error);
  }
}
