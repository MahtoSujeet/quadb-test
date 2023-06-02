import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons"

export default function NavBar() {

  return (
    <nav className="flex justify-between bg-gray-800 p-4 text-white">
      <a href="/" className="">QuadB</a>
      <button>
        <FontAwesomeIcon icon={faMagnifyingGlass} />
      </button>
    </nav>
  )
}
