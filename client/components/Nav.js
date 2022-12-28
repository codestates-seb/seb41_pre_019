import { useRouter } from "next/router";
import authStore from "../store/auth";
import { MagnifyingGlassIcon } from "@heroicons/react/20/solid";
import { useState } from "react";

export default function Example() {
  const router = useRouter();
  const isLogged = authStore((state) => state.isLogged);
  const [search, setSearch] = useState("");

  return (
    <header className="h-15 w-full bg-gray-800">
      <div className="flex w-full justify-between divide-gray-700 p-3">
        <button
          type="button"
          onClick={() => router.push("/")}
          className="rounded-xl border border-white p-2 text-xl"
        >
          🎆
        </button>

        <form className="w-full sm:max-w-3xl">
          <label htmlFor="search" className="sr-only">
            Search
          </label>
          <div className="relative">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
              <MagnifyingGlassIcon
                className="h-5 w-5 text-gray-400"
                aria-hidden="true"
              />
            </div>
            <input
              id="search"
              name="search"
              className="block w-full rounded-md border border-transparent bg-gray-700 py-2 pl-10 pr-3 text-sm placeholder-gray-400 focus:border-white focus:bg-white focus:text-gray-900 focus:placeholder-gray-500 focus:outline-none focus:ring-white sm:text-sm"
              placeholder="Search"
              type="search"
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          <button
            className="hidden"
            onClick={(e) => {
              e.preventDefault();
              router.push(`/AllQuestions?search=${search}`);
            }}
          ></button>
        </form>
        {isLogged ? (
          <button
            onClick={() => router.push("/profile")}
            type="button"
            className="rounded-xl border-2 border-white p-2 text-white"
          >
            Mypage
          </button>
        ) : (
          <button
            onClick={() => router.push("/signIn")}
            type="button"
            className="rounded-xl border-2 border-white p-2 text-white"
          >
            Sign In
          </button>
        )}
      </div>
    </header>
  );
}
