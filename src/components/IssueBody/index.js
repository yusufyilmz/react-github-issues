import React from 'react';
import {  IssueBodyWrapper, IssueBodyAnchorWrapper, IssueBodyTextWrapper, IssueBodyTextAnchorWrapper } from './style';
import { IssueLabel } from '../IssueLabel';

const calculateTimeDifference = (time) => {
    var dateTime = new Date(time);
    return Math.round(Math.abs(dateTime - new Date()) / 36e5)
}

export const IssueBody = ({ title, url, labels, time, number, state, user }) => {
    return (
        <IssueBodyWrapper>
            <IssueBodyAnchorWrapper
                href={url} >
                {title}
            </IssueBodyAnchorWrapper>
            <span>
                {labels.map(label =>
                    <IssueLabel
                        key={`label${label.id}`}
                        label={label}
                        url={url} />)}
            </span>
            <IssueBodyTextWrapper>
                #{number} {state}ed {calculateTimeDifference(time)} hours ago by
                <IssueBodyTextAnchorWrapper
                    href={user.html_url} >
                    {user.login}
                </IssueBodyTextAnchorWrapper>
            </IssueBodyTextWrapper>
        </IssueBodyWrapper>
    );
}