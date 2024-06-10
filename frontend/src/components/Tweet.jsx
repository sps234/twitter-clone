import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faRetweet } from '@fortawesome/free-solid-svg-icons'; // Import icons from the correct category
import styled from 'styled-components';

const TweetContainer = styled.div`
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 10px;
  margin-bottom: 10px;
  width: 700px;
`;

const Author = styled.span`
  font-weight: bold;
  margin-right: 5px;
`;

const Time = styled.span`
  color: #888;
  font-size: 0.8rem;
`;

const Content = styled.div`
  margin: 10px 0;
`;

const Stats = styled.div`
  display: flex;
  justify-content: space-between;
  color: #888;
  font-size: 0.8rem;
`;

const Tweet = ({ tweet }) => {
  const { firstName, lastName, username, createdAt, content, likes, retweets } = tweet;

  return (
    <TweetContainer>
      <div>
        <Author>{firstName} {lastName} (@{username})</Author>
        <Time>{createdAt}</Time>
      </div>
      <Content>
        <p>{content}</p>
      </Content>
      <Stats>
        <span><FontAwesomeIcon icon={faHeart} /> {likes}</span> {/* Use FontAwesomeIcon component to render the heart icon */}
        <span><FontAwesomeIcon icon={faRetweet} /> {retweets}</span> {/* Use FontAwesomeIcon component to render the retweet icon */}
      </Stats>
    </TweetContainer>
  );
};

export default Tweet;
