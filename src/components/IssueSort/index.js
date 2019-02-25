import React from 'react';
import {  Dropdown } from 'react-bootstrap';
import { DropdownToggleWrapper } from './style';


export const IssueSort = ({sortIssues, fetchIssues}) => {
    return (
        <Dropdown>
            <DropdownToggleWrapper variant="success" id="dropdown-basic">
                Sort
          </DropdownToggleWrapper>
            <Dropdown.Menu>
                <Dropdown.Item onClick={() => sortIssues('created', 'asc')} eventKey="1">Sort by Created Time Ascending </Dropdown.Item>
                <Dropdown.Item onClick={() => sortIssues('created', 'desc')} eventKey="1">Sort by Created Time Descending </Dropdown.Item>
                <Dropdown.Item onClick={() => sortIssues('updated', 'asc')} eventKey="1">Sort by Updated Time Ascending </Dropdown.Item>
                <Dropdown.Item onClick={() => sortIssues('updated', 'desc')} eventKey="1">Sort by Updated Time Descending </Dropdown.Item>
                <Dropdown.Item onClick={() => sortIssues('comments', 'asc')} eventKey="3">Sort by Comments Count Ascending </Dropdown.Item>
                <Dropdown.Item onClick={() => sortIssues('comments', 'desc')} eventKey="3">Sort by Comments Count Descending </Dropdown.Item>
                <Dropdown.Item onClick={fetchIssues} eventKey="3">None </Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    );
}