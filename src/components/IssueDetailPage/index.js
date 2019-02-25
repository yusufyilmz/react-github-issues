import React, { Fragment } from 'react';
import { Container } from 'react-bootstrap';
import { IssueDetailCard } from '../IssueDetailCard';
import IssueDetailPageContainer from '../../containers/issueDetailPageContainer';

export const IssueDetailPage = () => {
    return (
        <IssueDetailPageContainer>
            {
                (props) => (
                    <Fragment>
                        {!props.loading && !props.error && props.issue &&
                            <Container>
                                <IssueDetailCard
                                    onClick={props.backToIssuePage}
                                    item={props.issue} />
                            </Container>
                        }
                    </Fragment>
                )
            }
        </IssueDetailPageContainer>
    );
}