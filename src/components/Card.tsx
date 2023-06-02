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
      <Link className="rounded-xl bg-indigo-600 p-2" to={`summary/${id}`}>View Summary</Link>
    </section>
  )
}

export default Card
