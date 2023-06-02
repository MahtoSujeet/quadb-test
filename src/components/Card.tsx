import React from "react"
import { Link } from "react-router-dom"

interface IProps {
  name: string
  image: string
  rating: number | null
  id: number
}

const Card: React.FC<IProps> = ({ name, image, rating, id }) => {
  if (!id) return <></>
  return (
    <section className="m-4 inline-block rounded-lg bg-gray-800 pb-4 text-white transition-transform hover:scale-105">
      <div className="">
        <img src={image} className="rounded-t-lg" />
      </div>
      <h2 className="mb-4 text-center text-2xl">{name}</h2>
      {rating &&
        <p className="mb-4 text-sm">Rating: <span dangerouslySetInnerHTML={{ __html: rating.toString() }}></span><span>⭐</span> </p>
      }
      <div className="mx-4 transform rounded-md bg-indigo-700 px-4 py-2 tracking-wide text-white transition-colors duration-200 hover:bg-indigo-600 focus:bg-indigo-600 focus:outline-none">

        <Link to={`summary/${id}`}>View Summary</Link>
      </div>
    </section>
  )
}

export default Card
