'use client';

import { createContext, useState, useContext } from 'react';
import Storage from '@/services/supabase';

export const BookContext = createContext({});

export function BookProvider({ children }) {
  const initialBookFormData = {
    id: '',
    name: '',
    value: '',
    autor: '',
    editora: '',
    image: '',
  };

  const [books, setBook] = useState([]);

  const [isShowBookForm, setIsShowBookForm] = useState(false);

  const [bookFormData, setBookFormData] = useState(
    initialBookFormData
  );

  const handleCreateBook = async () => {
    setBookFormData(initialBookFormData);

    toggleShowBookForm();
  };


  const toggleShowBookForm = () => {
    setIsShowBookForm(!isShowBookForm);
  };

  const loadBooks = async () => {
    const books = await Storage.read('books');

    setBook(books);
  };

  const createBook = async (book) => {
    const newBook = await Storage.create('books', book);

    setBook([...books, newBook]);
  };

  const removeBook = (id) => {
    const newBooks = books.filter(
      (book) => book.id !== id
    );

    setBook(newBooks);

    Storage.remove('books', id);
  };

  return (
    <BookContext.Provider
      value={{
        books,
        setBook,
        isShowBookForm,
        setIsShowBookForm,
        bookFormData,
        setBookFormData,
        toggleShowBookForm,
        loadBooks,
        createBook,
        removeBook,
        handleCreateBook,
      }}
    >
      {children}
    </BookContext.Provider>
  );
}

export function useBook() {
  return useContext(BookContext);
}
