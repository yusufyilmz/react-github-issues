import React from 'react';
import { PaginationWrapper } from './style';
import { Pagination } from 'react-bootstrap';

export default ({ currentPage, pageCount, handlePageChange }) => {

    function calculateItems() {
        let items = [];
        items.push(<Pagination.First
            key={`paginationFirst`}
            onClick={() => handlePageChange(1)} />)
        items.push(<Pagination.Prev
            key={`paginationPrev`}
            onClick={() => handlePageChange(currentPage - 1)} />)

        for (let number = 1; number <= pageCount; number++) {
            if (number === 1 ||
                (number <= currentPage + 2 && number >= currentPage - 2) ||
                number === pageCount) {
                items.push(
                    <Pagination.Item
                        onClick={() => handlePageChange(number)}
                        key={`pagination${number}`}
                        active={number === currentPage}>
                        {number}
                    </Pagination.Item>
                );
            } else if (number === 2 || number === pageCount - 1) {

                items.push(<Pagination.Ellipsis
                    key={`pagination${number}`} />)
            }
        }
        items.push(<Pagination.Next
            key={`paginationNext`}
            onClick={() => handlePageChange(currentPage + 1)} />)
        items.push(<Pagination.Last
            key={`paginationLast`}
            onClick={() => handlePageChange(pageCount)} />)

        return items;
    }
    return (
        <PaginationWrapper >{calculateItems()}</PaginationWrapper>
    );
}



