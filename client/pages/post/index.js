import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/20/solid';
import { useRouter } from 'next/router';

const tmpIds = Array.from({ length: 10 }).map((_, i) => i);

const List = () => {
  const router = useRouter();

  return (
    <ul className="h-screen w-full overflow-y-scroll pb-20">
      {tmpIds.map((id) => (
        <li
          key={id}
          onClick={() => router.push(`/post/${id}`)}
          className="cursor-pointer border bg-green-300 p-20 text-xl font-bold"
        >
          {id}
        </li>
      ))}

      <div className="my-2 flex items-center justify-center">
        <nav
          className="isolate inline-flex -space-x-px rounded-md shadow-sm"
          aria-label="Pagination"
        >
          <a
            href="#"
            className="relative inline-flex items-center rounded-l-md border border-gray-300 bg-white px-2 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20"
          >
            <span className="sr-only">Previous</span>
            <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
          </a>
          {/* Current: "z-10 bg-indigo-50 border-indigo-500 text-indigo-600", Default: "bg-white border-gray-300 text-gray-500 hover:bg-gray-50" */}
          <a
            href="#"
            aria-current="page"
            className="relative z-10 inline-flex items-center border border-indigo-500 bg-indigo-50 px-4 py-2 text-sm font-medium text-indigo-600 focus:z-20"
          >
            1
          </a>
          <a
            href="#"
            className="relative inline-flex items-center border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20"
          >
            2
          </a>
          <a
            href="#"
            className="relative hidden items-center border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20 md:inline-flex"
          >
            3
          </a>
          <span className="relative inline-flex items-center border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700">
            ...
          </span>
          <a
            href="#"
            className="relative hidden items-center border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20 md:inline-flex"
          >
            8
          </a>
          <a
            href="#"
            className="relative inline-flex items-center border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20"
          >
            9
          </a>
          <a
            href="#"
            className="relative inline-flex items-center border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20"
          >
            10
          </a>
          <a
            href="#"
            className="relative inline-flex items-center rounded-r-md border border-gray-300 bg-white px-2 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20"
          >
            <span className="sr-only">Next</span>
            <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
          </a>
        </nav>
      </div>
    </ul>
  );
};

export default List;