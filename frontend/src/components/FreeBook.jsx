import BookData from "../Data/JSON";
import BookCard from "./BookCard";

const FreeBook = () => {
  const freeBooks = BookData.filter((book) => book.category === "Free");

  return (
    <div className="mx-10 my-5 mb-40 min-h-screen flex flex-col justify-center">
      <h2 className="text-2xl font-bold mb-4">Free Books</h2>
      {freeBooks.length === 0 ? (
        <p className="text-gray-500">No free books available at the moment.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {freeBooks.map((book) => (
            <BookCard book={book} key={book.id} />
          ))}
        </div>
      )}
    </div>
  );
};

export default FreeBook;
