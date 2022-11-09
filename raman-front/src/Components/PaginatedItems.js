import React, { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";
import Config from "../Config/config";

function PaginatedItems({ items, Type }) {
  const [itemOffset, setItemOffset] = useState(0);

  useEffect(() => {
    setItemOffset(0);
  }, [items]);

  const countperpage = Config.Pagination.ItemsPerPage;
  const endOffset = itemOffset + countperpage;
  const currentItems = items.slice(itemOffset, endOffset);
  let pageCount = Math.ceil(items.length / countperpage);
  pageCount = pageCount !== 1 ? pageCount : 0;

  const handlePageClick = (event) => {
    const newOffset = (event.selected * countperpage) % items.length;
    setItemOffset(newOffset);
  };

  return (
    <>
      <Type items={currentItems} />
      <ReactPaginate
        breakLabel="..."
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="< previous"
        renderOnZeroPageCount={null}
      />
    </>
  );
}

export default PaginatedItems;
