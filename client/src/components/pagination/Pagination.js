import React from 'react';

const Pagination = ({ imagePerPage, totalimage, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalimage / imagePerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className='pagination'>
        {pageNumbers.map(number => (
          <li key={number} className='page-item'>
            <a onClick={() => paginate(number)} href='for%20him#' className='page-link'>
              {number}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;