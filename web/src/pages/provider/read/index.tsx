import React from 'react';
import { Close, Content } from './styles';

interface IRead {
  items: { [key: string]: string | number | Date | boolean };
  rowTitle: string[];
  itemsKeys: string[];
  onCloseRead: () => void;
}

export const Read = (props: IRead) => {
  const { items, rowTitle, itemsKeys, onCloseRead } = props;
  return (
    <Content>
      <Close>
        <button onClick={() => onCloseRead()}>Fechar</button>
      </Close>
      <table>
        <tbody>
          {rowTitle.map((item, i) => (
            <tr key={i}>
              <td>{item}</td>
              <td>{items[itemsKeys[i]]}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </Content>
  );
};
