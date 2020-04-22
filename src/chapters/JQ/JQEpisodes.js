import React, { useState, useEffect } from 'react';
import Pagination from 'react-hooks-paginator';

export default () => {
  useEffect(() => {
    fetchItems();
  }, []);
  const pageLimit = 20;
  const [offset, setOffset] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [currentItem, setCurrentItem] = useState([]);
  const [items, setItems] = useState([
    {
      image: {},
    },
  ]);

  const fetchItems = async () => {
    const data = await fetch('https://api.tvmaze.com/shows/5951/episodes');
    const items = await data.json();
    console.log(items);
    setItems(items);
  };
  useEffect(() => {
    setCurrentItem(items.slice(offset, offset + pageLimit));
  }, [offset, items]);

  return (
    <div className="App">
      <h1>
        New Batman Adventures Episodes List:
      </h1>
      <hr/>
      {currentItem.map((item) => (
        <div key={item.airdate}>
          <div>
            <h1>{item.name}</h1>
            <p>Episode Number: {item.number}</p>
            <p>Season: {item.season}</p>
            <p>Airdate Order: {item.airdate}</p>
          </div>
        </div>
      ))}
      <Pagination
        totalRecords={items.length}
        pageLimit={pageLimit}
        pageNeighbours={2}
        setOffset={setOffset}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
};
