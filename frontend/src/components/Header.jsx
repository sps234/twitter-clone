import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background-color: #4CD9E4;
  color: white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const Logo = styled.h1`
  font-size: 1.5rem;
  font-weight: bold;
  margin: 0;
  cursor: pointer;
`;

const SearchBar = styled.input`
  width: 300px;
  padding: 8px;
  border: none;
  border-radius: 20px;
  outline: none;
  font-size: 1rem;
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 10px;
`;

const SignInButton = styled.button`
  padding: 8px 16px;
  border: none;
  border-radius: 20px;
  background-color: white;
  color: #4CD9E4;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;

  &:hover {
    background-color: #e6e6e6;
  }
`;

const SignOutButton = styled.button`
  padding: 8px 16px;
  border: none;
  border-radius: 20px;
  background-color: white;
  color: #4CD9E4;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;

  &:hover {
    background-color: #e6e6e6;
  }
`;

const RegisterButton = styled.button`
  padding: 8px 16px;
  border: none;
  border-radius: 20px;
  background-color: white;
  color: #4CD9E4;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;

  &:hover {
    background-color: #e6e6e6;
  }
`;

const Header = () => {
  const navigate = useNavigate();
  const [isSignedIn, setIsSignedIn] = useState(false);

  const handleSignInClick = () => {
    navigate('/login');
  };

  const handleSignOutClick = () => {
    setIsSignedIn(false);
    navigate('/');
  };

  const handleRegisterClick = () => {
    navigate('/register');
  };

  const handleLogoClick = () => {
    if (isSignedIn) {
      navigate('/');
    }
  };

  return (
    <HeaderContainer>
      <Logo onClick={handleLogoClick}>Twitter Clone</Logo>
      <SearchBar type="text" placeholder="Search Twitter Clone" />
      <ButtonContainer>
        {isSignedIn ? (
          <SignOutButton onClick={handleSignOutClick}>Sign Out</SignOutButton>
        ) : (
          <>
            <SignInButton onClick={handleSignInClick}>Sign In</SignInButton>
            <RegisterButton onClick={handleRegisterClick}>Register</RegisterButton>
          </>
        )}
      </ButtonContainer>
    </HeaderContainer>
  );
};

export default Header;
