import { useRouter } from 'next/router';
import  authStore  from '../store/auth'
import { MagnifyingGlassIcon } from '@heroicons/react/20/solid';
import { useState } from 'react';



export default function Example() {
  const router = useRouter();
  const isLogged = authStore((state) => state.isLogged);
  const [search, setSearch] = useState('');

  return (
    
    <header className="bg-gray-800 h-15 w-full">
    <div className="divide-gray-700 flex w-full justify-between p-3">
      <button
        type="button"
        onClick={() => router.push('/')}
        className="border-white text-xl rounded-xl border p-2"
      >
        🎆
      </button>

      <form className="w-full sm:max-w-3xl">
        <label htmlFor="search" className="sr-only">
          Search
        </label>
        <div className="relative">
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
            <MagnifyingGlassIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
          </div>
          <input
            id="search"
            name="search"
            className="bg-gray-700 text-sm focus:border-white focus:bg-white focus:text-gray-900 focus:ring-white sm:text-sm block w-full rounded-md border border-transparent py-2 pl-10 pr-3 placeholder-gray-400 focus:placeholder-gray-500 focus:outline-none"
            placeholder="Search"
            type="search"
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <button
          className="hidden"
          onClick={(e) => {
            e.preventDefault();
            router.push(`/post?search=${search}`);
          }}
        ></button>
      </form>
      {isLogged ? (
        <button
          onClick={() => router.push('/profile')}
          type="button"
          className="border-white text-white rounded-xl border-2 p-2"
        >
           Mypage
        </button>
      ) : (
        <button
          onClick={() => router.push('/signIn')}
          type="button"
          className="border-white text-white rounded-xl border-2 p-2"
        >
           Sign In
        </button>
      )}
    </div>
  </header>)}