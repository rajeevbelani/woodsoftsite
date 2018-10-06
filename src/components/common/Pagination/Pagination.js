import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';

const Pagination = ({ currentPage, numberOfPages }) => {
    let nextPreviousBlocks = [];
    if (numberOfPages > 1) {
        if (currentPage > 1) {
            const prevPageNo = currentPage - 1;
            if (prevPageNo == 1)
                nextPreviousBlocks.push(<Link to={'/blog'} class="pagination-previous">Previous</Link>);
            else
                nextPreviousBlocks.push(<Link to={`/blog/${prevPageNo}`} class="pagination-previous">Previous</Link>);
        }
        if (currentPage < numberOfPages) {
            const nextPageNo = currentPage + 1;
            nextPreviousBlocks.push(<Link to={`/blog/${nextPageNo}`} class="pagination-next">Next page</Link>);
        }
            
    }
    let pagnitionBlocks = [];
    for (let pageNo = 1; pageNo <= numberOfPages; pageNo++) {
        if (pageNo == 1) {
            pagnitionBlocks.push(<li>
                <Link to="/blog" class="pagination-link" aria-label="Page 1" aria-current="page">1</Link>
            </li>);    
        } else {
            pagnitionBlocks.push(<li>
                <Link to={`/blog/${pageNo}`} class="pagination-link" aria-label={`Page ${pageNo}`} aria-current="page">{pageNo}</Link>
            </li>);
        }
    }
    console.log(`PaginationBlocks :: ${pagnitionBlocks}`);
    return (
        <nav class="pagination is-centered" role="navigation" aria-label="pagination">
            { nextPreviousBlocks }
            <ul class="pagination-list">
                { pagnitionBlocks }
            </ul>
        </nav>
    )
}

Pagination.propTypes = {
  currentPage: PropTypes.number.isRequired,
  numberOfPages: PropTypes.number.isRequired,
};

export default Pagination;



