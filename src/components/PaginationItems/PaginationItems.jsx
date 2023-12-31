import { useEffect } from 'react';
import { Pagination } from '@mui/material';

function PaginationItems({ totalItems, pageSize, currentPage, onSetPage }) {
  const totalPages = Math.ceil(totalItems / pageSize);

  const handlePageChange = (e, page) => {
    onSetPage(page);
  };

  useEffect(() => {
    if (currentPage > totalPages) {
      onSetPage(totalPages);
    }
  }, [currentPage, totalPages, onSetPage]);

  return (
    <Pagination
      count={totalPages}
      page={currentPage}
      shape="rounded"
      color="error"
      onChange={handlePageChange}
      sx={{ color: 'white' }}
    />
  );
}

export default PaginationItems;
