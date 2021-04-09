import http from "./httpService";
import { apiUrl } from "../config.json";

function getMovies() {
  return http.get(apiUrl + "/movies");
}

function getMovie(id) {
  return http.get(apiUrl + "/movies/" + id);
}

function saveMovie(movie) {
  if (movie._id === "new") {
    const apiEndpoint = `${apiUrl}/movies`;
    return http.post(apiEndpoint, movie);
  }
  const apiEndpoint = `${apiUrl}/movies/${movie._id}`;
  console.log(apiEndpoint);
  return http.put(apiEndpoint, movie);
}

function deleteMovie(movie) {
  const apiEndpoint = `${apiUrl}/movies/${movie._id}`;
  return http.delete(apiEndpoint);
}

export default {
  getMovies,
  getMovie,
  saveMovie,
  deleteMovie,
};
