import axios from "axios";

import IShow from "../interfaces/IShow";
import IShowReceivedFromApi from "../interfaces/IShowReceivedFromApi";
import ISingleShowReceivedFromApi from "../interfaces/ISingleShowReceivedFromApi";
import ISingleShow from "../interfaces/ISingleShow";

export default class TvMaze {
  baseUrl: string;

  constructor() {
    this.baseUrl = "https://api.tvmaze.com"
  }

  async getMovies(query: string = "all"): Promise<IShow[]> {
    let data = await axios.get(`${this.baseUrl}/search/shows`, { params: { q: query } })
    let movies: IShowReceivedFromApi[] = data.data

    let rv: IShow[] = []
    for (const movie of movies) {
      let requiredData = {
        show: {
          id: movie.show.id,
          name: movie.show.name,
          rating: {
            average: movie.show.rating.average,
          },
          image: {
            medium: movie.show.image.medium,
            original: movie.show.image.original,
          },
          summary: movie.show.summary,
        },
      }
      rv.push(requiredData)
    }

    return rv
  }

  async getMovieById(id: string): Promise<ISingleShow> {
    let data = await axios.get(`${this.baseUrl}/shows/${id}`)
    const movie: ISingleShowReceivedFromApi = data.data
    let requiredData: ISingleShow = {
      id: movie.id,
      name: movie.name,
      rating: {
        average: movie.rating.average,
      },
      image: {
        medium: movie.image.medium,
        original: movie.image.original,
      },
      summary: movie.summary,
    }

    return requiredData
  }

}

