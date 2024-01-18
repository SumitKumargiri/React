import { faArrowLeftLong, faArrowRightLong } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import useRepositories from "../../Hooks/useRepositories";

const Pagination = ({ username, setRepositories }) => {
    const { page, setPage, pageNumber, setNewer, newer } = useRepositories(username, setRepositories);

    return (
        <div className="table mx-auto my-10">
            <div className="btn-group py-5">
                <button onClick={() => setPage(page - 1)} className={`btn btn-info btn-outline btn-sm ${page === 1 ? "btn-disabled" : undefined}`}>
                    «
                </button>

                {pageNumber &&
                    [...Array(pageNumber).keys()].map((number) => (
                        <button key={number} onClick={() => setPage(number + 1)} className={`${page === number + 1 ? "btn btn-sm btn-info" : "btn btn-sm btn-outline btn-info"}`}>
                            {number + 1}
                        </button>
                    ))}

                <button onClick={() => setPage(page + 1)} className={`btn btn-info btn-outline btn-sm ${page === pageNumber ? "btn-disabled" : undefined}`}>
                    »
                </button>
            </div>

            <div className="flex justify-between items-center">
                <button onClick={() => setNewer(false)} className={`capitalize btn btn-outline ${!newer ? "btn-disabled" : "btn-info"}`}>
                    {<FontAwesomeIcon className="mr-2" icon={faArrowLeftLong} />} Older
                </button>
                <button onClick={() => setNewer(true)} className={`capitalize btn btn-outline ${newer ? "btn-disabled" : "btn-info"}`}>
                    Newer {<FontAwesomeIcon className="ml-2" icon={faArrowRightLong} />}
                </button>
            </div>
        </div>
    );
};

export default Pagination;
