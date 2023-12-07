'use client';

import BooksCards from '@/components/books';
import BooksForm from '@/components/booksForm';
import Storage from '@/services/supabase';

async function getData() {
  return Storage.read('books');
}

export default async function Home() {
  const books = await getData();

  console.log(JSON.stringify(books, null, 2))

  return (
    <>
      <main>
        <div className="lg:max-w-screen-lg mx-auto books grid grid-cols-3 gap-6 pt-3 pb-3">
          {books.map((book) => (<BooksCards {...book} key={book.id} />))}
        </div>
      </main>
      <BooksForm />
    </>
  );
}


