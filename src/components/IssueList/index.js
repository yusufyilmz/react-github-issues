import React from 'react';
// import { BookCard } from './BookCard';
import { Container, Row, ListGroup } from 'react-bootstrap';
import { IssueCard } from '../IssueCard';
import IssueListContainer from '../../containers/issueListContainer';

export const IssueList = () => {
    return (
        <IssueListContainer>
            {
                (props) => (
                    (!props.loading && !props.error) &&
                    <Container>
                        <ListGroup>
                            {props.issues.map(issue =>
                                <IssueCard
                                    key={`issue${issue.id}`}
                                    organization={props.organization}
                                    repository={props.repository}
                                    item={issue} />
                            )}
                        </ListGroup>
                    </Container>
                )
            }
        </IssueListContainer>
    );
}