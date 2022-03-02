import styled from 'styled-components';

export const Content = styled.div`
  table {
  }

  table tbody tr td {
    padding: 6px 0;
  }

  table tbody tr td:first-child {
    text-align: right;
    padding-right: 12px;
    color: #999999;
  }

  table tbody tr td:last-child {
    font-weight: bold;
    color: #333333;
  }
`;

export const Close = styled.div`
  text-align: right;
  button {
    margin-left: 10px;
    background-color: #cccccc;
    color: #555;
    border: 0;
    padding: 12px;
    border-radius: 6px;
    font-weight: bold;
  }
`;
