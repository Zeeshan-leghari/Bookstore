import { useEffect, useState } from "react";
import BookCard from "./BookCard";
import axios from 'axios';

const FreeBook = () => {
  const [freeBook, setFreeBook] = useState([]);

  useEffect(() => {
    const fetchFreeBooks = async () => {
      try {
        const response = await axios.get("http://localhost:5000/book");
        const bookdata = response.data.filter((book) => book.category === "Free");
        setFreeBook(bookdata);
      } catch (error) {
        console.error("Error fetching free books:", error);
      }
    };
    fetchFreeBooks();
  }, []);

  return (
    <div className="mx-10 my-5 mb-40 min-h-screen flex flex-col justify-center">
      <h2 className="text-2xl font-bold mb-4">Free Books</h2>
      {freeBook.length === 0 ? (
        <p className="text-gray-500">No free books available at the moment.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {freeBook.map((book) => (
            <BookCard book={book} key={book._id} />
          ))}
        </div>
      )}
    </div>
  );
};

export default FreeBook;
