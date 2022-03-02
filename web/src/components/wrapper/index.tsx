import React, { ReactNode } from 'react';
import { Content } from './styles';

interface IWrapper {
  children: ReactNode;
}

export const Wrapper = (props: IWrapper) => {
  const { children } = props;
  return <Content>{children}</Content>;
};
