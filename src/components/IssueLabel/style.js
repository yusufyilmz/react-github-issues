

import styled from 'styled-components';


export const IssueLabelAnchorWrapper = styled.span`
    border-radius: 2px;
    box-shadow: inset 0 -1px 0 rgba(27,31,35,.12);
    font-size: 12px;
    font-weight: 600;
    height: 20px;
    line-height: 15px;
    padding: .15em 4px;
    background-color: #${props =>   props.color};
    color: #000000;
    margin: 0 2px;
    text-decoration: none!important; 
    &:hover {
      text-decoration: none!important; 
      color: #000000;

    }
`
