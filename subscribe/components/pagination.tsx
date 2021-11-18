interface PagingationProp {
  blockSize: number;
  totalPages: number;
  currentPage: number;
  onPageChange?: (pageNo: number) => void;
}

const Pagination = ({
  blockSize,
  totalPages,
  currentPage,
  onPageChange,
}: PagingationProp) => {
  return <div></div>;
};

export default Pagination;
