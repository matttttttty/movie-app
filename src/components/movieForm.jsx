import Form from "./common/form";
import Joi from "joi";
import MovieService from "../services/movieService";
import GenreService from "../services/genreService";

class MovieForm extends Form {
  state = {
    data: {
      _id: "",
      title: "",
      genreId: "",
      numberInStock: "",
      dailyRentalRate: "",
    },
    error: {},
    genres: [],
  };

  schema = Joi.object({
    _id: Joi.string(),
    title: Joi.string().required(),
    genreId: Joi.string().required(),
    numberInStock: Joi.number().required().min(0),
    dailyRentalRate: Joi.number().required().min(1).max(10),
  });

  async componentDidMount() {
    const { data: genres } = await GenreService.getGenres();
    this.setState({ genres });
    console.log(genres);
    if (this.props.match.params.id === "new") {
      const data = { ...this.state.data };
      data._id = "new";
      this.setState({ data });
      return;
    }
    console.log(this.props.match.params.id);
    const { data: movie } = await MovieService.getMovie(
      this.props.match.params.id
    );

    this.setState({ data: this.mapToViewModel(movie) });
    console.log(this.state.data);
  }

  mapToViewModel(movie) {
    return {
      _id: movie._id,
      title: movie.title,
      genreId: movie.genre._id,
      numberInStock: movie.numberInStock,
      dailyRentalRate: movie.dailyRentalRate,
    };
  }

  async doSubmit() {
    const movie = { ...this.state.data };
    const result = await MovieService.saveMovie(movie);
    console.log(result);
    this.props.history.replace("/movies");
  }

  render() {
    const result = this.validate();
    console.log(result);
    console.log(this.state.data);
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
