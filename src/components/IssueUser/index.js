import React from 'react';
import  {IssueUserLink, IssueUserAvatar, IssueUserName} from './style';

export const IssueUser = ({ user }) => {

  return (
    <IssueUserLink href={user.avatar_url}>
      <IssueUserAvatar src={user.avatar_url} alt=""/>
      <IssueUserName >{user.login}</IssueUserName>
    </IssueUserLink>
  );
};
