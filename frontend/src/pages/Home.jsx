import React from 'react';
import Navbar from '../components/Navbar';
import Timeline from '../components/Timeline';
import styled from 'styled-components';


const MainContainer = styled.div`
  display: flex;
  height: 100vh;  
`;

const Sidebar = styled.div`
  
  background-color: #f5f8fa;
  border-right: 1px solid #e1e8ed;
`;

const TweetsWrapper = styled.div`  
  overflow-y: auto;
  padding: 10px;
  border-right: 1px solid #e1e8ed;
`;

const Home = () => {
  return (
    <>
    
    <MainContainer>

      <Sidebar>
        <Navbar />
      </Sidebar>

      <TweetsWrapper>
        <Timeline/>
      </TweetsWrapper>
      
    </MainContainer>
    </>
  );
};

export default Home;
