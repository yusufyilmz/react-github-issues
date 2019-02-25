
import styled from 'styled-components';

export const IssueBodyWrapper = styled.div`
    text-align: left;
    overflow: hidden;
    text-overflow: clip;
    padding-right:0px;
    padding-left: 0px;
`

export const IssueBodyAnchorWrapper = styled.a`
    text-decoration: none!important;
    font-weight: 600!important;
    font-size: 16px!important;
    color: #24292e!important;
    vertical-align: middle!important;
    &:hover {
        color: #0366d6!important;
    }
`

export const IssueBodyTextAnchorWrapper = styled.a`
    color: #586069!important;
    text-decoration: none;
    vertical-align: middle!important;
    padding: 5px;    
    &:hover {
        color: #0366d6!important;
        text-decoration: none;
    }
`

export const IssueBodyTextWrapper = styled.div`
    font-size: 12px!important;
    color: #586069!important;
    margin-top:5px
`




