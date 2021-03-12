import React from 'react';
import styled from 'styled-components';
import styles from '../index.module.css';

function Header1() {
  return <h1 className={styles.header}>Gustavo Albuquerque</h1>;
}

const Header2 = styled.h2`
  color: red;
  margin-bottom: 0.5rem;
  font-family: monospace;
`;

const HeaderBase = styled.header`
  margin-bottom: 1rem;
`;

export default function Header() {
  return (
    <HeaderBase>
      <Header1 />
      <Header2>full-stack web developer</Header2>
    </HeaderBase>
  );
}
