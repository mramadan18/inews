import Image from "next/image";
import ReactPaginate from "react-paginate";

const PaginationComponent = () => {
  const handlePageClick = (e) => {
    handlePagination(e.selected + 1);
  };
  return (
    <ReactPaginate
      breakLabel="..."
      nextLabel={
        <Image
          src="/images/icons/arrow_left.svg"
          alt="nexg"
          width={15}
          height={15}
        />
      }
      onPageChange={handlePageClick}
      marginPagesDisplayed={1}
      pageRangeDisplayed={2}
      pageCount={12}
      previousLabel={
        <Image
          src="/images/icons/arrow_right.svg"
          alt="nexg"
          width={15}
          height={15}
        />
      }
      containerClassName={"pagination justify-content-center p-3"}
      pageClassName={"page-item"}
      pageLinkClassName={"page-link"}
      previousClassName={"page-item"}
      nextClassName={"page-item"}
      previousLinkClassName={"page-link"}
      nextLinkClassName={"page-link"}
      breakClassName={"page-item"}
      breakLinkClassName={"page-link"}
      activeClassName={"bg-blue-light active"}
    />
  );
};

export default PaginationComponent;
