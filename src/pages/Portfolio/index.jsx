import React, { useState, useEffect } from 'react';
import Aos from 'aos';
import './style.css';
import produtos from '../../data/produtos';

function Portfolio() {
  const itemsPerPage = 20;
  const [currentPage, setCurrentPage] = useState(1);
  const [displayedProducts, setDisplayedProducts] = useState([]);

  useEffect(() => {
    Aos.init();
  }, []);

  useEffect(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentItems = produtos.slice(startIndex, endIndex);

    setDisplayedProducts(currentItems);
  }, [currentPage]);

  const totalPages = Math.ceil(produtos.length / itemsPerPage);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <div className="container">
      <div className="pagination">
        <button className='btn-pagination' onClick={handlePreviousPage}><i className="fa fa-arrow-left" aria-hidden="false"></i></button>
        <div className='text-box'>
          <span>Página {currentPage} de {totalPages}</span>
        </div>
        <button className='btn-pagination' onClick={handleNextPage}><i className="fa fa-arrow-right" aria-hidden="false"></i></button>
      </div>
      <div className="produtos">
        <ul className="lista-produtos">
          {displayedProducts.map((p, index) => (
            <li key={index} className="lista-item" data-aos="zoom-in" data-aos-duration="600" data-aos-anchor-placement="top-bottom">
              <h2>{p.nome}</h2>
              <img src={p.thumb} alt="thumb" />
            </li>
          ))}
        </ul>
      </div>
      <div className="pagination">
        <button className='btn-pagination' onClick={handlePreviousPage}><i className="fa fa-arrow-left" aria-hidden="false"></i></button>
        <div className='text-box'>
          <span>Página {currentPage} de {totalPages}</span>
        </div>
        <button className='btn-pagination' onClick={handleNextPage}><i className="fa fa-arrow-right" aria-hidden="false"></i></button>
      </div>
    </div>
  );
}

export default Portfolio;