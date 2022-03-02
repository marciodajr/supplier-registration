import styled from 'styled-components';

export const Content = styled.div`
  color: #333;

  table,
  th,
  td {
    border: 0;
  }

  table th {
    white-space: nowrap;
    text-align: left;
    width: 25%;
    padding: 6px 0;
  }

  table {
    border-collapse: collapse;
  }

  table tr {
    border-bottom: #cccccc solid thin;
  }

  table tbody tr:hover {
    background-color: #f4f4f4;
  }

  table tr td {
    padding: 6px 0;
  }

  table tr td:last-child {
    white-space: nowrap;
    text-align: right;
  }

  table tr td:last-child button {
    margin-left: 10px;
    background-color: #4d42fc;
    color: #ffffff;
    border: 0;
    padding: 6px 12px;
    border-radius: 6px;
    font-weight: bold;
  }
`;

export const Add = styled.div`
  text-align: right;

  button {
    margin-left: 10px;
    background-color: #32cd32;
    color: #ffffff;
    border: 0;
    padding: 12px;
    border-radius: 6px;
    font-weight: bold;
  }
`;
