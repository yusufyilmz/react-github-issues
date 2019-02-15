import React from 'react';
import { IssueCommentsColWrapper, IssueCommentsAnchorWrapper } from './style';


export const IssueComments = ({ comments, url }) => {
    return (
        <IssueCommentsColWrapper md={2} xs={2}>
            <IssueCommentsAnchorWrapper
                href={url} >
                <svg
                    viewBox="0 0 16 16"
                    version="1.1"
                    width="16"
                    height="16"
                    aria-hidden="true">
                    <path fillRule="evenodd"
                        d="M14 1H2c-.55 0-1 .45-1 1v8c0 .55.45 1 1 1h2v3.5L7.5 11H14c.55 0 1-.45 1-1V2c0-.55-.45-1-1-1zm0 9H7l-2 2v-2H2V2h12v8z">
                    </path>
                </svg>
                <span>
                    {comments}
                </span>
            </IssueCommentsAnchorWrapper>
        </IssueCommentsColWrapper>
    );
}