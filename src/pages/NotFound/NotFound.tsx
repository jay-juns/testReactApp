import React from 'react';
import styled from 'styled-components';

const NotFound = () => {
  const TextStyle = styled.p`
    text-align: center
  `;
  return (
    <div>
      <TextStyle>없는 페이지 입니다.</TextStyle>
    </div>
  )
}

export default NotFound;