'use client';

import { useState } from 'react';

export default function Pagination({ 
  currentPage = 1, 
  totalPages = 50, 
  totalItems = 1200, 
  itemsPerPage = 50,
  onPageChange 
}) {
  // Calculate the range of items being displayed
  const start = (currentPage - 1) * itemsPerPage + 1;
  const end = Math.min(currentPage * itemsPerPage, totalItems);

  // Generate page numbers to display
  const getPageNumbers = () => {
    const visiblePages = [];
    
    // Always show first page
    visiblePages.push(1);
    
    // Logic for which pages to show based on current page
    if (currentPage > 3) {
      visiblePages.push('...');
    }
    
    // Show pages around current page
    for (let i = Math.max(2, currentPage - 1); i <= Math.min(currentPage + 1, totalPages - 1); i++) {
      if (!visiblePages.includes(i)) {
        visiblePages.push(i);
      }
    }
    
    // Show ellipsis before last page if needed
    if (currentPage < totalPages - 2) {
      visiblePages.push('...' + totalPages);
    } 
    // Show last page if not already included
    else if (currentPage < totalPages) {
      visiblePages.push(totalPages);
    }
    
    return visiblePages;
  };

  const pageNumbers = getPageNumbers();

  return (
    <div className="flex justify-between items-center mt-6">
      <div className="text-sm text-gray-600">
        Showing {start}-{end} of {totalItems} items
      </div>
      <div className="flex items-center">
        <button 
          className="h-8 w-8 border flex items-center justify-center rounded-l bg-white hover:bg-gray-50 disabled:opacity-50"
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
            <path fillRule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
          </svg>
        </button>
        
        {pageNumbers.map((page, index) => {
          // Handle ellipsis
          if (typeof page === 'string') {
            return (
              <button key={index} className="h-8 min-w-8 px-3 border-t border-b border-r bg-white text-gray-600">
                {page}
              </button>
            );
          }
          
          // Handle page numbers
          return (
            <button 
              key={index}
              className={`h-8 min-w-8 px-3 border-t border-b border-r ${
                page === currentPage 
                  ? 'bg-blue-500 text-white border-blue-500' 
                  : 'bg-white hover:bg-gray-50'
              }`}
              onClick={() => onPageChange(page)}
            >
              {page}
            </button>
          );
        })}
        
        <button 
          className="h-8 w-8 border flex items-center justify-center rounded-r bg-white hover:bg-gray-50 disabled:opacity-50"
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
            <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
          </svg>
        </button>
      </div>
    </div>
  );
}