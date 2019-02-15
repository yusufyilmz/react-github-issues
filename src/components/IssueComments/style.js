
import styled from 'styled-components';
import { Col, InputGroup, ListGroup } from 'react-bootstrap'


export const IssueCommentsColWrapper = styled(Col)`
    text-align: right;
    padding-right:10px;
    padding-left: 0px;
`

export const IssueCommentsAnchorWrapper = styled.a`
    text-decoration: none!important;
    font-weight: 600!important;
    font-size: 16px!important;
    color: #24292e!important;
    vertical-align: middle!important;
    &:hover {
        color: #0366d6!important;
    }
`
