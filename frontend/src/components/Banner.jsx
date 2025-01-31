const Banner = () => {
    return (
      <div className="h-screen grid lg:grid-cols-2   mx-10 gap-6 items-center">
        <div className="flex flex-col space-y-6 lg:order-1 order-2">
          <h1 className="text-4xl font-bold">
            Hello, welcome here to learn something{" "}
            <span className="text-pink-500">new everyday!!!</span>
          </h1>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis
            consequatur facere odit animi illo similique vel inventore eos vitae
            laudantium recusandae totam, iusto enim quia nemo officia delectus
            repudiandae rem.
          </p>
          <div className="flex items-center space-x-3">
          <input
              type="text"
              placeholder="Type here"
              className="hidden lg:block pr-10 pl-3 py-3 rounded-lg bg-transparent border border-gray-300 focus:border-gray-500 focus:outline-none"
            />
            <button className="btn btn-secondary">Subscribe</button>
          </div>
        </div>
  
        <div className="flex justify-center lg:order-2 order-1">
          <img
            src="https://img.freepik.com/free-vector/realistic-book-lover-composition-with-stack-colorful-books-with-eyeglasses-home-plants-tea-cup-vector-illustration_1284-77312.jpg?semt=ais_hybrid"
            alt="Books and Tea"
            className="w-[500px] h-auto rounded-lg shadow-lg"
          />
        </div>
      </div>
    );
  };
  
  export default Banner;
  