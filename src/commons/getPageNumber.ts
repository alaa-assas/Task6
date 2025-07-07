export const getPageNumbers = (totalPages : number,currentPage: number) => {
    const pageNumbers: (number | "...")[] = [];

    const start = Math.max(2, currentPage - 1);
    const end = Math.min(totalPages - 1, currentPage + 1);

    pageNumbers.push(1);

    if (start > 2) pageNumbers.push("...");

    for (let i = start; i <= end; i++) {
        pageNumbers.push(i);
    }

    if (end < totalPages - 1) pageNumbers.push("...");

    if (totalPages > 1) pageNumbers.push(totalPages); 
    return pageNumbers;
  };