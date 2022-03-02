import React, { useEffect, useState } from 'react';
import { IGrid } from './IGrid';
import { Add, Content } from './styles';

export const Grid = (props: IGrid) => {
  const { items, itemsKeys, columTitle, columID, onAdd, onRemove, onEdit, onRead } = props;
  const columns = [];

  if (items.length > 0 && columTitle.length > 0) {
    const itemsKeysTotal = Object.keys(items[0]).length;
    for (let i = 0; i < itemsKeysTotal; i++) {
      columns.push(columTitle[i] ? <th key={i}>{columTitle[i]}</th> : <th key={i}></th>);
    }
  }

  return (
    <Content>
      <Add>
        <button onClick={() => onAdd()}>Novo fornecedor</button>
      </Add>
      <table>
        {columns.length > 0 && (
          <thead>
            <tr>
              {columns}
              <th></th>
            </tr>
          </thead>
        )}
        <tbody>
          {items.map((item, i) => (
            <tr key={i}>
              {itemsKeys.map((key, i) => (
                <td key={i}>{item[key]}</td>
              ))}
              <td>
                <button onClick={() => onRead(i)}>Visualizar</button>
                <button onClick={() => onEdit(i)}>Editar</button>
                <button onClick={() => onRemove(item[columID])}>Remover</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Content>
  );
};
