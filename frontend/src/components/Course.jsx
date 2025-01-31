import React from 'react';
import BookData from "../Data/JSON";  
import BookCard from './BookCard';

const Course = () => {
  return (
    <>
      <div className='mx-10 my-10 text-center'>
        <h3 className='font-bold text-4xl my-10'>
          We Delighted to have you <span className='text-pink-400'>Here! :)</span>
        </h3>
        <p className='font-bold  mx-auto max-w-3xl'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem laborum unde optio nisi hic distinctio sit. Neque dolor consequuntur, minus excepturi repellendus asperiores, voluptatum fugiat corrupti ab doloremque aperiam iste.
        </p>
      </div>

      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mx-10'>
        {BookData.sort(() => Math.random() - 0.5).map((book) => (
          <BookCard book={book} key={book.id} />
        ))}
      </div>
    </>
  );
}

export default Course;
