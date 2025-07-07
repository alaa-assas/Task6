import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../../redux/store";
import { getPostsByPage } from "../../redux/slice";
import { getPageNumbers } from "../../commons/getPageNumber";
import PaginationButton from "./PaginationButton";


const Pagination = () => {
    const dispatch = useDispatch();
    const currentPage = useSelector((state: RootState) => state.posts.currentPage);
    const totalPages = useSelector((state: RootState) => state.posts.totalPages);

    if (totalPages <= 1) return <></>;

    const goToPage = (page: number) => {
        if (page >= 1 && page <= totalPages && page !== currentPage) {
            dispatch(getPostsByPage({ page, itemsPerPage: 6 }));
        }
    };

    return (
        <div className= "flex flex-col gap-5 md:flex-row justify-between items-center md:gap-0 mt-6 border-t border-grey03 pt-5" >
            <PaginationButton
                direction="prev"
                onClick={() => goToPage(currentPage - 1)}
                disabled={currentPage === 1}
            />
            <div>
                {getPageNumbers(totalPages,currentPage).map((page, index) =>
                    page === "..." ? (
                        <span key={index} className="text-grey01">
                            ...
                        </span>
                    ) : (
                        <button
                            key={index}
                            onClick={() => goToPage(page)}
                            className={`p-3 border-0 rounded-lg text-sm font-medium w-10 h-10 ${currentPage === page ? "bg-purple03 text-purple02": " text-grey01"}`}>
                            {page}
                        </button>
                    )
                )}
            </div>
            <PaginationButton
                direction="next"
                onClick={() => goToPage(currentPage + 1)}
                disabled={currentPage === totalPages}
            />
        </div>
    );
};

export default Pagination;
