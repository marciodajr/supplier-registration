import React, { ReactNode } from 'react';
import { Content, Title } from './styles';

interface IContent {
  children: ReactNode;
  title: string;
}

export const Paper = (props: IContent) => {
  const { children, title } = props;
  return (
    <Content>
      <Title>
        <h1>{title}</h1>
      </Title>
      {children}
    </Content>
  );
};
