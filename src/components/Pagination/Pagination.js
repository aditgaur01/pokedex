import "./Pagination.css";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

const Pagination = ({ goToNextPage, goToPreviousPage }) => {
  return (
    <div className="pagination">
      {goToPreviousPage && (
        <button
          onClick={goToPreviousPage}
          className="pagination__previousButton"
          // style={{ display: goToPreviousPage ? "flex" : "none" }}
        >
          <FaAngleLeft size="25px" style={{ marginRight: "20px" }} />
          <h4>Previous</h4>
        </button>
      )}
      {goToNextPage && (
        <button onClick={goToNextPage} className="pagination__nextButton">
          <h4>Next</h4>
          <FaAngleRight size="25px" style={{ marginLeft: "20px" }} />
        </button>
      )}
    </div>
  );
};

export default Pagination;
