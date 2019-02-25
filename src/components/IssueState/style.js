
import styled from 'styled-components';


export const IssueStateWrapper = styled.div`
    text-align: center;
    padding-right:0px;
    padding-left: 5px;
`

export const IssueStateSvgWrapper = styled.svg`
    fill: currentColor;
    color: ${props => props.state === 'open' ? '#28a745' : '#cb2431'};
`

