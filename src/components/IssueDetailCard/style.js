
import styled from 'styled-components';
import { Button, ListGroup, Row } from 'react-bootstrap'

export const IssueDetailCardWrapper = styled(ListGroup.Item)`
    border-top: 1px solid #e1e4e8;
    text-align: center;
    font-size: larger;
    padding: 20px;
    &:hover  {
        background-color: #f6f8fa
    }
`

export const IssueDetailButtonWrapper = styled(Button)`
    float: right;
`

export const IssueDetailCardRowWrapper = styled(Row)`
    padding: 15px 0;
`

