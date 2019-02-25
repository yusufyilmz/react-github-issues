import React from 'react';
import { IssueLabelAnchorWrapper, IssueBodyAnchorWrapper } from './style';

export const IssueLabel = ({ label }) => {
    return (
        <IssueLabelAnchorWrapper
            color= {label.color}
            href= {label.url}>
            {label.name}
        </IssueLabelAnchorWrapper>
    );
}