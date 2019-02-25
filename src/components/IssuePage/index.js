import React, { Fragment } from 'react';
import { Container, ListGroup, Row, Col } from 'react-bootstrap';
import { IssueCard } from '../IssueCard';
import IssuePageContainer from '../../containers/issuePageContainer';
import Pagination from '../Pagination';
import { IssueFilter } from '../IssueFilter';
import { IssueSort } from '../IssueSort';

export const IssuePage = () => {
    return (
        <IssuePageContainer>
            {
                (props) => (
                    (!props.loading && !props.error && !props.issue ) &&
                    <Fragment>
                        <Row>
                            <Col md={4}>
                                <IssueSort
                                    sortIssues={props.sortIssues}
                                    fetchIssues={props.fetchIssues} />
                            </Col>
                            <Col>
                                <IssueFilter
                                    text={props.filterText}
                                    handleChange={props.filterHandleChange} />
                            </Col>
                        </Row>
                        <Row>
                            <Container>
                                <ListGroup>
                                    {props.issues.map(issue =>
                                        <IssueCard
                                            onClick={props.showDetail}
                                            key={`issue${issue.id}`}
                                            organization={props.organization}
                                            repository={props.repository}
                                            item={issue} />
                                    )}
                                    <Pagination
                                        currentPage={props.currentPage}
                                        handlePageChange={props.handlePageChange}
                                        pageCount={props.pageCount}
                                    />
                                </ListGroup>
                            </Container>
                        </Row>
                    </Fragment>
                )
            }
        </IssuePageContainer>
    );
}