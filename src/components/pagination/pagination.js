import React from 'react';
import './pagination.css'; // Make sure to create this CSS file

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  return (
    <div className="pagination">
      {Array.from({ length: totalPages }).map((_, index) => (
        <button
          key={index}
          className={currentPage === index + 1 ? 'active' : ''}
          onClick={() => onPageChange(index + 1)}
        >
          {index + 1}
        </button>
      ))}
    </div>
  );
};

export default Pagination;
