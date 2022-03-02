import styled from 'styled-components';

interface IContent {
  hide: boolean;
}

export const DisplayGrid = styled.div`
  display: ${(props: IContent) => props.hide && 'none'};
`;

export const DisplayCreate = styled.div`
  display: ${(props: IContent) => props.hide && 'none'};
`;

export const DisplayUpdate = styled.div`
  display: ${(props: IContent) => props.hide && 'none'};
`;

export const DisplayRead = styled.div`
  display: ${(props: IContent) => props.hide && 'none'};
`;

export const DisplayEdit = styled.div`
  display: ${(props: IContent) => props.hide && 'none'};
`;
