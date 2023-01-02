import { useRouter } from "next/router";
import authStore from "../store/auth";
import { MagnifyingGlassIcon } from "@heroicons/react/20/solid";
import { useState } from "react";
import Search from "../components/Layout/Search/index";

export default function Example() {
  const router = useRouter();
  const isLogged = authStore((state) => state.isLogged);
  const [search, setSearch] = useState("");

  return (
    <header className="header-1">
      <div className="header-2">
        <button
          type="button"
          onClick={() => router.push("/")}
          className="nav-button"
        >
          <img src="http://www.ranklogos.com/wp-content/uploads/2015/06/Stack-Overflow-Logo.png"></img>
        </button>

        <form
          className="w-full sm:max-w-3xl"
          style={{ "padding-top": "10px", width: "30%" }}
        >
          <div className="relative">
            {/* <div className="relative-1">
              <MagnifyingGlassIcon className="relative-2" aria-hidden="true" />
            </div> */}
            <Search></Search>
            {/* <input
              id="search"
              name="search"
              className="search-input"
              placeholder="Search..."
              type="search"
              onChange={(e) => setSearch(e.target.value)}
              
            /> */}
          </div>
          <button
            className="hidden"
            style={{ display: "none" }}
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
            className="button-2"
          >
            Mypage
          </button>
        ) : (
          <button
            onClick={() => router.push("/signIn")}
            type="button"
            className="button-3"
          >
            Sign In
          </button>
        )}
      </div>
    </header>
  );
}
