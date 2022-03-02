import styled from 'styled-components';

export const Content = styled.div`
  background: rgb(255, 255, 255);
  background: linear-gradient(circle, rgba(255, 255, 255, 1) 0%, rgba(244, 244, 244, 1) 100%);
  border-radius: 12px;
  box-shadow: 2px 2px 6px #999999;
  margin: 40px;
  flex: 1;
  padding: 24px;
`;
export const Title = styled.div`
  background: #ffffff;
  box-shadow: 2px 2px 6px #ccc;
  border-radius: 12px;
  padding: 6px 12px;
  margin-top: -48px;
  width: fit-content;
  h1 {
    font-size: 18px;
    font-weight: 400;
    color: #333;
    text-align: center;
  }
`;
