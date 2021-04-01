import Form from "./common/form";
import Joi from "joi";
import { getMovie, saveMovie } from "../services/fakeMovieService";
import { getGenres } from "../services/fakeGenreService";

class MovieForm extends Form {
  state = {
    data: { title: "", genreId: "", numberInStock: "", dailyRentalRate: "" },
    error: {},
    movie: {},
    genres: [],
  };

  componentDidMount() {
    const genres = getGenres();
    this.setState({ genres });
    if (!this.props.match.params.id) return;
    const movie = getMovie(this.props.match.params.id);

    this.setState({ movie });
    console.log(movie.genre._id);
    const data = {
      title: movie.title,
      genreId: movie.genre._id,
      numberInStock: movie.numberInStock,
      dailyRentalRate: movie.dailyRentalRate,
    };

    this.setState({ data });
  }

  doSubmit() {
    const movie = { ...this.state.movie };
    const { title, numberInStock, genreId, dailyRentalRate } = this.state.data;
    movie.title = title;
    movie.numberInStock = numberInStock;
    movie.dailyRentalRate = dailyRentalRate;
    movie.genre = { _id: genreId };
    console.log(genreId);
    console.log(movie);
    const result = saveMovie(movie);
    console.log(result);
    this.props.history.replace("/movies");
  }

  schema = Joi.object({
    title: Joi.string().required(),
    genreId: Joi.string().required(),
    numberInStock: Joi.number().required().min(0),
    dailyRentalRate: Joi.number().required().min(1).max(10),
  });

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        {this.renderInput("Title", "title")}
        {this.renderSelect("genreId", "Genre", this.state.genres)}
        {this.renderInput("NumberInStock", "numberInStock")}
        {this.renderInput("DailyRentalRate", "dailyRentalRate")}
        {this.renderButton("Save")}
      </form>
    );
  }
}

export default MovieForm;
