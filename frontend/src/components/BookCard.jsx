const BookCard = ({ book }) => {
  if (!book) {
    return (
      <div className="alert alert-error mt-4">No book data available!</div>
    );
  }

  const priceFormatter = (price) => {
    return price === 0 ? "FREE" : `$${price.toFixed(2)}`;
  };

  return (
    <div className="card w-[350px]  font-bold text-lg  shadow-xl hover:shadow-2xl  hover:scale-105 transition-transform duration-200">
      <figure className="px-4 pt-4">
        <img
          src={book.image}
          alt={book.name}
          className=" rounded-lg h-64 object-cover  w-full"
          onError={(e) => {
            e.target.src =
              "https://via.placeholder.com/200x300?text=Book+Cover";
          }}
        />
      </figure>
      <div className="card-body p-4">
        <div className="flex items-center justify-between mb-2">
          <h2 className="">{book.name}</h2>
          <div
            className={`badge ${
              book.category === "Free" ? "badge-accent" : "badge-primary"
            }`}
          >
            {book.category}
          </div>
        </div>
        <p className="text-sm text-gray-600 mb-4 line-clamp-3">{book.title}</p>
        <div className="card-actions justify-between items-center">
          <div className="font-bold text-lg">{priceFormatter(book.price)}</div>
          <button className="btn btn-primary btn-sm">
            {book.price === 0 ? "Download" : "Purchase"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookCard;
