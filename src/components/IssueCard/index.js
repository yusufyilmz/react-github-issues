import React from 'react';
import { IssueCardWrapper } from './style';
import { Row } from 'react-bootstrap';
import IssueState from '../IssueState';
import { IssueComments } from '../IssueComments';
import { IssueBody } from '../IssueBody';


export const IssueCard = ({ item }) => {
    return (
        <IssueCardWrapper>
            <Row>
                <IssueState
                    state={item.state}
                />
                <IssueBody
                    number={item.number}
                    user={item.user}
                    state={item.state}
                    time={item.state === 'open' ? item.created_at : item.closed_at}
                    title={item.title}
                    labels={item.labels}
                    url={item.html_url}
                />
                <IssueComments
                    url={item.html_url}
                    comments={item.comments}
                />
            </Row>
        </IssueCardWrapper>

    );
}