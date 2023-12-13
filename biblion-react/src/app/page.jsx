'use client';

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import BooksCards from '@/components/BooksCards';
import { useBook } from '@/context/BooksContext';


export default function Home() {
  const {
    books,
    loadBooks,
  } = useBook();

useEffect(() => {
  loadBooks();
}, []);


const router = useRouter();

const goToItem = (event) => {
  event.preventDefault();
  router.push('/item');
}


  return (
    <>
      <main>
        <div className="grid grid-cols-3 max-sm:grid-cols-1 gap-3 pt-3 pb-3 pl-4 pr-4">
          {books.map((book) => (<BooksCards {...book} key={book.id} />))}
        </div>
        <div>
          <button onClick={goToItem}
            className="py-3 px-4 inline-flex w-full justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-[#debcbe] text-black hover:bg-pink-500 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 transition-all text-sm dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-offset-gray-800">
          </button>
        </div>
      </main>
    </>
  );
}
