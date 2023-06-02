import { Link, useParams } from "react-router-dom"
import TvMaze from "../utils/tvmazeAPI"
import { useEffect, useState } from "react"
import ISingleShow from "../interfaces/ISingleShow"
export default function Summary() {
  const [movie, setMovie] = useState<ISingleShow>()
  const [loading, setLoading] = useState<boolean>(true)


  const tvmaze = new TvMaze()
  const { id } = useParams()
  console.log("id: ", id)
  if (!id) {
    window.location.href = "/"
    return <></>
  }

  const getMovie = async () => {
    const showData = await tvmaze.getMovieById(id)
    setLoading(false)
    setMovie(showData)
  }

  useEffect(() => {
    getMovie()
  }, [])

  if (loading || !movie) {
    return <p className="text-center text-4xl">Loading...</p>
  }

  return (
    <section className="m-8 flex flex-col gap-8 rounded-xl bg-gray-800 p-8 text-white md:flex-row">
      <div className="m-auto">
        <img src={movie?.image.medium} alt="movie image" className="rounded-lg" />
      </div>
      <div className="flex-1">
        <h1 className="mb-4 text-4xl"> {movie?.name} </h1>
        {movie.rating.average &&
          <p className="mb-2">Rating: <span dangerouslySetInnerHTML={{ __html: movie.rating.average?.toString() }}></span><span>⭐</span> </p>
        }
        <p dangerouslySetInnerHTML={{ __html: movie.summary }} />
        <div className="mt-8">

          <Link className="rounded-xl bg-indigo-600 p-2" to={`/book/${movie.name}`}>Book Now</Link>
        </div>
      </div>
    </section>
  )
}
