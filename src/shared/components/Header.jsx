import React from 'react';

import styled from '@emotion/styled';

import { useNavigate } from 'react-router-dom';

function Header({ children }) {
  const navigate = useNavigate();

  const handleClick = (event) => {
    event.preventDefault();
    navigate('/');
  };

  return (
    <Wrapper>
      <h1>
        <a href="/" onClick={handleClick}>{children}</a>
      </h1>
    </Wrapper>
  );
}

export default React.memo(Header);

const Wrapper = styled.header`
    position: sticky;
    top: 0;
    left: 0;
    right: 0;
    margin: 0;
    padding: 1.2rem 1rem;
    background: #fff;
    box-shadow: 0 0 12px 4px rgba(0,0,0,0.05);
`;
