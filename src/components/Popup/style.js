

import styled from 'styled-components';

export const PopupWrapper = styled.div`
    font-size: 10px;
    position: relative;
    display: inline-block;
    cursor: pointer;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
`;

export const PopupTextWrapper = styled.span`
    visibility: hidden;
    width: 60px;
    background-color: #555;
    color: #fff;
    text-align: center;
    border-radius: 6px;
    position: absolute;
    z-index: 1;
    margin-top: -35px;
    margin-left: -35px;
    visibility: ${props => props.show ? 'visible' : 'hidden'};
    &:after {
        content: "";
        position: absolute;
        top: 100%;
        left: 50%;
        margin-left: -5px;
        border-width: 5px;
        border-style: solid;
        border-color: #555 transparent transparent transparent;
      }
`;
