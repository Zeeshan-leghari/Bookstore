import React, { useEffect, useState } from "react";
import BookCard from "./BookCard";
import axios from "axios";

const PaidBook = () => {
  const [freeBook, setFreeBook] = useState([]);

  useEffect(() => {
    const fetchFreeBooks = async () => {
      try {
        const response = await axios.get("http://localhost:5000/book");
        const data = response.data;
        setFreeBook(data);
      } catch (error) {
        console.error("Error fetching free books:", error);
      }
    };
    fetchFreeBooks();
  }, []);

  return (
    <>
      <div className="mx-10 my-10 text-center">
        <h3 className="font-bold text-4xl my-10">
          We Delighted to have you{" "}
          <span className="text-pink-400">Here! :)</span>
        </h3>
        <p className="font-bold  mx-auto max-w-3xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
          laborum unde optio nisi hic distinctio sit. Neque dolor consequuntur,
          minus excepturi repellendus asperiores, voluptatum fugiat corrupti ab
          doloremque aperiam iste.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mx-10">
        {freeBook
          .sort(() => Math.random() - 0.5)
          .map((book) => (
            <BookCard book={book} key={book._id} />
          ))}
      </div>
    </>
  );
};

export default PaidBook;
