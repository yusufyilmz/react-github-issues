import React from 'react';
import { Card, Col, ListGroup, Row } from 'react-bootstrap';
import { LinkButton, } from '../Elements/linkButton';
import { IssueState } from '../IssueState';
import { IssueComments } from '../IssueComments';
import { IssueLabelAnchorWrapper, IssueBodyAnchorWrapper } from './style';

// https://github.com/facebook/react/issues?q=is:issue is:open label:"Type: Bug"

// IssueLabel

export const IssueLabel = ({ label }) => {
    return (
        <IssueLabelAnchorWrapper
            color= {label.color}
            href= {label.url}>
            {label.name}
        </IssueLabelAnchorWrapper>
    );
}