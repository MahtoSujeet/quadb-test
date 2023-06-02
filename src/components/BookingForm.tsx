import { useParams } from "react-router-dom";


export default function BookingForm() {
  const { name } = useParams()

  return (
    <div className="relative flex min-h-screen flex-col justify-center overflow-hidden">
      <div className="m-auto w-full rounded-md bg-white p-6 shadow-xl shadow-rose-600/40 ring-2 ring-indigo-600 lg:max-w-xl">
        <h1 className="text-center text-3xl font-semibold uppercase text-indigo-700 underline decoration-wavy">
          {name}
        </h1>
        <form className="mt-6">
          <div className="mb-2">
            <label
              className="block text-sm font-semibold text-gray-800"
            >
              Firstname
            </label>
            <input
              type="text"
              className="mt-2 block w-full rounded-md border bg-white px-4 py-2 text-indigo-700 focus:border-indigo-400 focus:outline-none focus:ring focus:ring-indigo-300 focus:ring-opacity-40"
            />
          </div>
          <div className="mb-2">
            <label
              className="block text-sm font-semibold text-gray-800"
            >
              Lastname
            </label>
            <input
              type="text"
              className="mt-2 block w-full rounded-md border bg-white px-4 py-2 text-indigo-700 focus:border-indigo-400 focus:outline-none focus:ring focus:ring-indigo-300 focus:ring-opacity-40"
            />
          </div>
          <div className="mb-2">
            <label
              htmlFor="email"
              className="block text-sm font-semibold text-gray-800"
            >
              Email
            </label>
            <input
              type="email"
              className="mt-2 block w-full rounded-md border bg-white px-4 py-2 text-indigo-700 focus:border-indigo-400 focus:outline-none focus:ring focus:ring-indigo-300 focus:ring-opacity-40"
            />
          </div>
          <div className="mb-2">
            <label
              htmlFor="password"
              className="block text-sm font-semibold text-gray-800"
            >
              Password
            </label>
            <input
              type="password"
              className="mt-2 block w-full rounded-md border bg-white px-4 py-2 text-indigo-700 focus:border-indigo-400 focus:outline-none focus:ring focus:ring-indigo-300 focus:ring-opacity-40"
            />
          </div>
          <div className="mt-6">
            <button className="w-full transform rounded-md bg-indigo-700 px-4 py-2 tracking-wide text-white transition-colors duration-200 hover:bg-indigo-600 focus:bg-indigo-600 focus:outline-none">
              Proceed to Pay
            </button>
          </div>
        </form>

        <p className="mt-8 text-center text-xs font-light text-gray-700">
          {" "}
          Already have an account?{" "}
          <a
            href="#"
            className="font-medium text-indigo-600 hover:underline"
          >
            Sign in
          </a>
        </p>
      </div>
    </div>
  );
}
