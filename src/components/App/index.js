import React, { Fragment } from 'react';
import { Container } from './style';
import { Header } from '../Header';
// import { Content } from '../Content';
import { Spinner } from '../Spinner';
import { IssueList } from '../IssueList';

export const App = () => {
    return (
        <Container>
                <Fragment>
                    <Header />
                    <IssueList />
                    <Spinner/>
                    {/* <Content />
                    <Error /> */}
                </Fragment>
        </Container>
    );
}

export default App;
