import { useEffect, useState } from "react"

import IShow from "../interfaces/IShow"
import TvMaze from "../utils/tvmazeAPI"
import Card from "./Card"

export default function MoviesCards() {
  const [loading, setLoading] = useState(true)
  const [movies, setMovies] = useState<IShow[]>([])

  const getMovies = async () => {
    const tvmaza = new TvMaze()
    try {
      const data = await tvmaza.getMovies()
      setLoading(false)
      setMovies(data)

      console.log(data)
    } catch (err) {
      console.log("ERROR occured while getting movies: ", (err as Error))
    }

  }

  useEffect(() => {
    getMovies()
  }, [])

  if (loading) {
    return <p className="text-center text-4xl">Loading...</p>
  }

  return (
    <section className="text-center">
      {movies.map(movie =>
        <Card key={movie.show.id} name={movie.show.name} image={movie.show.image.medium} rating={movie.show.rating.average} id={movie.show.id} />
      )}
    </section>
  )
}
