
import styled from 'styled-components';
import { Card, InputGroup, ListGroup } from 'react-bootstrap'


export const IssueHeaderWrapper = styled(Card.Title)`
    font-size: 1.5em!important;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: clip;
`

export const IssueCardWrapper = styled(ListGroup.Item)`
    border-top: 1px solid #e1e4e8;
    text-align: center;
    font-size: larger;
    padding: 20px;
    &:hover  {
        background-color: #f6f8fa
    }
`
