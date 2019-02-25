import React, { Fragment } from 'react';
import { ContainerWrapper } from './style';
import { Error } from '../Error';
import { Spinner } from '../Spinner';
import { IssuePage } from '../IssuePage';
import { IssueDetailPage } from '../IssueDetailPage';

export const App = () => {
    return (
        <ContainerWrapper>
            <Spinner />
            <IssuePage />
            <IssueDetailPage/>
            <Error />
        </ContainerWrapper>
    );
}

export default App;
