import React from 'react';
import { IssueDetailCardWrapper, IssueDetailCardRowWrapper, IssueDetailButtonWrapper } from './style';
import IssueState from '../IssueState';
import { IssueComments } from '../IssueComments';
import { IssueBody } from '../IssueBody';
import { IssueUser } from '../IssueUser';


export function shortText(text = "", maxLength = 140) {
    let cleanText = text.replace(/\\r\\n/g, "\n");
    if (cleanText.length <= maxLength) {
        return cleanText;
    }
    return cleanText.substr(0, maxLength) + " ...";
}

export const IssueDetailCard = ({ item, onClick }) => {
    return (
        <IssueDetailCardWrapper>
            <IssueDetailButtonWrapper
                onClick={onClick}>
                Back
            </IssueDetailButtonWrapper>
            <IssueDetailCardRowWrapper>
                <IssueUser user={item.user} />
            </IssueDetailCardRowWrapper>
            <IssueDetailCardRowWrapper>
                <IssueBody
                    number={item.number}
                    user={item.user}
                    state={item.state}
                    time={item.state === 'open' ? item.created_at : item.closed_at}
                    title={item.title}
                    labels={item.labels}
                    url={item.html_url}
                />
            </IssueDetailCardRowWrapper>
            <IssueDetailCardRowWrapper>
                <h4> Body:</h4>
                <p>{shortText(item.body)}</p>
            </IssueDetailCardRowWrapper>
            <IssueDetailCardRowWrapper>
                <h4> Comments:</h4>
                <IssueComments
                    url={item.html_url}
                    comments={item.comments}
                />
            </IssueDetailCardRowWrapper>
            <IssueDetailCardRowWrapper>
                <h4> State:</h4>
                <IssueState
                    state={item.state} />
            </IssueDetailCardRowWrapper>
        </IssueDetailCardWrapper>

    );
}