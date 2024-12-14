import React, { useState } from 'react';
import { Pagination } from 'flowbite-react';
import './Pages.css'

const Pages = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = 6;

  // Fake data
  const fakeData = Array.from({ length: 100 }, (_, index) => ({
    images: 'https://via.placeholder.com/150',
    header: `Item ${index + 1}`,
    description: `This is the description for item ${index + 1}.`,
  }));

  const totalPages = Math.ceil(fakeData.length / itemsPerPage);

  // Get items for the current page
  const currentItems = fakeData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const onPageChange = (page) => setCurrentPage(page);

  return (
    <div className="flex flex-col items-center">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-4">
        {currentItems.map((item, index) => (
          <div key={index} className="cards">
            <img  src={item.images}/>
            <h3 >{item.header}</h3>
            <p >{item.description}</p>
          </div>
        ))}
      </div>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={onPageChange}
      />
    </div>
  );
};

export default Pages;

