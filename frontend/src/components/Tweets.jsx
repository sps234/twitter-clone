import React from 'react';
import styled from 'styled-components';
import Tweet from './Tweet';
// import { useSelector } from 'react-redux';

const TweetsContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 10px;
`;


const dummyTweets = [
  {
    id: 1,
    firstName: 'Aman',
    lastName: 'Kumar',
    username: 'aman',
    createdAt: '2024-06-10T12:00:00.000Z',
 
    content: 'This is a sample tweet! #coding #javascript #reactjs',
    likes: 5,
    retweets: 2
  },
  {
    id: 2,
    firstName: 'Jay',
    lastName: 'Gupta',
    username: 'jay',
    createdAt: '2024-06-05T12:00:00.000Z',
    content: 'Another tweet here! #coding #javascript #reactjs #webdev',
    likes: 3,
    retweets: 1
  },
  
];

const Tweets = () => {
  const getTimeSinceTweet = (createdAt) => {
    const currentTime = new Date();
    const tweetTime = new Date(createdAt);
    const differenceInSeconds = Math.floor((currentTime - tweetTime) / 1000);

    if (differenceInSeconds < 60) {
      return `${differenceInSeconds} seconds ago`;
    } else if (differenceInSeconds < 3600) {
      const minutes = Math.floor(differenceInSeconds / 60);
      return `${minutes} minutes ago`;
    } else if (differenceInSeconds < 86400) {
      const hours = Math.floor(differenceInSeconds / 3600);
      return `${hours} hours ago`;
    } else {
      const days = Math.floor(differenceInSeconds / 86400);
      return `${days} days ago`;
    }
  };

  return (
    <TweetsContainer>
      {dummyTweets.map((tweet, index) => (
        <Tweet key={index} tweet={{ ...tweet, createdAt: getTimeSinceTweet(tweet.createdAt) }} />
      ))}
    </TweetsContainer>
  );
};


export default Tweets;