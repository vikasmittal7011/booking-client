import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/20/solid";

const Classes = {
    h1_size:
        "2xl:text-6xl lg:text-3xl md:text-2xl sm:text-xl l:text-xl s:text-xl",
    commonClass: "cursor-pointer relative items-center py-2",

    commonBTNClass:
        "bg-white px-4 text-sm font-medium text-gray-700 hover:bg-gray-50 inline-flex  rounded-md border border-gray-300",

    commonSreenBTNClass:
        "inline-flex px-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0",

    hoverClass:
        "hidden px-4 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 md:inline-flex",

    activeClass:
        "z-10 inline-flex bg-indigo-600 px-4 text-sm font-semibold text-white focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600",

    flexDirectionClass:
        "lg:flex-row md:flex-row sm:flex-row l:flex-col s:flex-col xs:flex-col",
};

const ITEM_PAGE_PER = 5

const Pagination = ({ handlePage, page, totalProduct = 55 }) => {
    const handleNext = () => {
        handlePage(
            Math.round(totalProduct / ITEM_PAGE_PER) >= page ? page + 1 : page
        );
    };

    const handlePrevious = () => {
        handlePage(page > 1 ? page - 1 : 1);
    };

    return (
        <>
            {totalProduct > ITEM_PAGE_PER && (
                <div className="flex items-center justify-between border-t border-gray-200 px-4 py-3 sm:px-6 mt-6">
                    <div className="flex flex-1 justify-between sm:hidden">
                        <p
                            onClick={handlePrevious}
                            className={`${Classes.commonClass} ${Classes.commonBTNClass}`}
                        >
                            Previous
                        </p>
                        <p
                            onClick={handleNext}
                            className={`${Classes.commonClass} ${Classes.commonBTNClass} ml-3`}
                        >
                            Next
                        </p>
                    </div>
                    <div className="hidden sm:flex sm:flex-1 sm:items-start sm:justify-between sm:flex-col sm:space-y-3">
                        <div className="mr-2">
                            <p className="text-sm text-gray-700">
                                Showing{" "}
                                <span className="font-medium">
                                    {(page - 1) * ITEM_PAGE_PER + 1}
                                </span>{" "}
                                to{" "}
                                <span className="font-medium">
                                    {page * ITEM_PAGE_PER > totalProduct
                                        ? totalProduct
                                        : page * ITEM_PAGE_PER}
                                </span>{" "}
                                of <span className="font-medium">{totalProduct}</span> results
                            </p>
                        </div>
                        <div>
                            <nav
                                className="isolate inline-flex -space-x-px rounded-md shadow-sm"
                                aria-label="Pagination"
                            >
                                <p
                                    onClick={handlePrevious}
                                    className={`${Classes.commonClass}  ${Classes.commonSreenBTNClass} rounded-l-md `}
                                >
                                    <span className="sr-only">Previous</span>
                                    <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
                                </p>
                                {Array.from({
                                    length: Math.ceil(totalProduct / ITEM_PAGE_PER),
                                }).map((item, index) => (
                                    <p
                                        key={index}
                                        onClick={() => {
                                            handlePage(index + 1);
                                        }}
                                        aria-current="page"
                                        className={`${page === index + 1
                                            ? `${Classes.activeClass} ${Classes.commonClass}`
                                            : `${Classes.hoverClass} ${Classes.commonClass}`
                                            } cursor-pointer`}
                                    >
                                        {index + 1}
                                    </p>
                                ))}
                                <p
                                    onClick={handleNext}
                                    className={`${Classes.commonClass}  ${Classes.commonSreenBTNClass} rounded-r-md`}
                                >
                                    <span className="sr-only">Next</span>
                                    <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
                                </p>
                            </nav>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default Pagination;
