import styled from 'styled-components';

export const Content = styled.div`
  form {
  }

  form label {
    font-size: 1em;
    color: #888888;
    width: 135px;
    display: inline-block;
    text-align: right;
  }

  form input {
    padding: 6px;
    font-size: 1em;
    margin-left: 12px;
    border-radius: 6px;
    border: 1px solid #cccccc;
    color: #333333;
  }

  form input:focus {
    outline: none;
  }

  form button {
    margin-left: 10px;
    background-color: #32cd32;
    color: #ffffff;
    border: 0;
    padding: 12px;
    border-radius: 6px;
    font-weight: bold;
  }

  form select {
    padding: 6px;
    margin-left: 12px;
    font-size: 1em;
    background-color: #ffffff;
    border-radius: 6px;
    border: 1px solid #cccccc;
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

export const Row = styled.div`
  margin-bottom: 10px;
`;
