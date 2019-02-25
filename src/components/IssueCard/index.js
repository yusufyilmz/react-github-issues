import React from 'react';
import { IssueCardWrapper } from './style';
import { Row, Col } from 'react-bootstrap';
import IssueState from '../IssueState';
import { IssueComments } from '../IssueComments';
import { IssueBody } from '../IssueBody';


export const IssueCard = ({ item, onClick }) => {
    return (
        <IssueCardWrapper onClick={() => onClick(item.number)} >
            <Row>
                <Col md={1} xs={1}>
                    <IssueState
                        state={item.state}
                    />
                </Col>
                <Col md={9} xs={9}>
                    <IssueBody
                        number={item.number}
                        user={item.user}
                        state={item.state}
                        time={item.state === 'open' ? item.created_at : item.closed_at}
                        title={item.title}
                        labels={item.labels}
                    />
                </Col>
                <Col md={2} xs={2}>
                    <IssueComments
                        url={item.html_url}
                        comments={item.comments} />
                </Col>
            </Row>
        </IssueCardWrapper>

    );
}