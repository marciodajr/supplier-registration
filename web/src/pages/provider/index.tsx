import React, { useEffect, useState } from 'react';
import { Paper } from '../../components/paper';
import { Grid } from '../../components/grid';
import { paths, useApi } from '../../services/api';
import { Create } from './create';
import { IResponseGetAll } from './IProvider';
import { Read } from './read';
import { DisplayCreate, DisplayEdit, DisplayGrid, DisplayRead, DisplayUpdate } from './styles';
import { Edit } from './edit';

type IHandleHide = 'GRID' | 'CREATE' | 'EDIT' | 'READ';

export const Provider = () => {
  const [getAll, setGetAll] = useState([{}]);
  const [read, setRead] = useState({});
  const [reload, setReload] = useState(false);
  const [hideGrid, setHideGrid] = useState(false);
  const [hideCreate, setHideCreate] = useState(true);
  const [hideRead, setHideRead] = useState(true);
  const [hideEdit, setHideEdit] = useState(true);
  const [dataEdit, setDataEdit] = useState({});

  const handleGetAll = async () => {
    const responseGetAll = await useApi.get<IResponseGetAll>(paths.provider.getAll);
    const data = responseGetAll.data.data;
    data.forEach((v) => {
      delete v.createdAt;
    });
    data.forEach((v) => {
      delete v.updatedAt;
    });
    setGetAll(data);
  };

  const handleRemove = async (id: string) => {
    await useApi.delete(`${paths.provider.delete}${id}`);
    setReload(!reload);
  };

  const handleHide = (props: IHandleHide) => {
    switch (props) {
      case 'GRID':
        setHideCreate(true);
        setHideGrid(false);
        setHideRead(true);
        setHideEdit(true);
        break;
      case 'CREATE':
        setHideCreate(false);
        setHideGrid(true);
        setHideRead(true);
        setHideEdit(true);
        break;
      case 'READ':
        setHideCreate(true);
        setHideGrid(true);
        setHideRead(false);
        setHideEdit(true);
        break;
      case 'EDIT':
        setHideCreate(true);
        setHideGrid(true);
        setHideRead(true);
        setHideEdit(false);
        break;
    }
  };

  const handleEdit = async (key: number) => {
    setDataEdit(getAll[key]);
    handleHide('EDIT');
  };

  const handleRead = (key: number) => {
    setRead(getAll[key]);
    handleHide('READ');
  };

  const handleReadClose = () => {
    handleHide('GRID');
  };

  const handleAdd = () => {
    handleHide('CREATE');
  };

  const handleCloseAdd = () => {
    handleHide('GRID');
  };

  const handleOnSubmit = () => {
    handleHide('GRID');
  };

  const handleCloseEdit = () => {
    handleHide('GRID');
  };

  const handleOnEdit = () => {
    handleHide('GRID');
  };

  useEffect(() => {
    (async () => handleGetAll())();
  }, []);

  useEffect(() => {
    (async () => handleGetAll())();
  }, [reload, hideGrid]);

  return (
    <Paper title="Gestão de fornecedores">
      <DisplayGrid hide={hideGrid}>
        <Grid
          items={getAll}
          itemsKeys={['cnpj', 'razaoSocial', 'nome', 'segmento']}
          columID="id"
          columTitle={['CNPJ', 'Razão Social', 'Nome Fantasia', 'Segmento']}
          onAdd={handleAdd}
          onRemove={handleRemove}
          onEdit={(key) => handleEdit(key)}
          onRead={(key) => handleRead(key)}
        ></Grid>
      </DisplayGrid>
      <DisplayCreate hide={hideCreate}>
        {dataEdit !== {} && <Create onSubmit={handleOnSubmit} onCloseSubmit={handleCloseAdd} />}
      </DisplayCreate>
      <DisplayEdit hide={hideEdit}>
        <Edit data={dataEdit} onEdit={handleOnEdit} onCloseEdit={handleCloseEdit} />
      </DisplayEdit>
      <DisplayRead hide={hideRead}>
        <Read
          items={read}
          itemsKeys={[
            'id',
            'cnpj',
            'nome',
            'razaoSocial',
            'segmento',
            'logradouro',
            'numero',
            'bairro',
            'cep',
            'cidade',
            'uf',
            'telefone',
            'email'
          ]}
          rowTitle={[
            'Identificador Interno',
            'CNPJ',
            'Nome Fantasia',
            'Razão Social',
            'Segmento',
            'Logradouro',
            'Numero',
            'Bairro',
            'CEP',
            'Cidade',
            'UF',
            'Telefone',
            'E-mail'
          ]}
          onCloseRead={handleReadClose}
        />
      </DisplayRead>
    </Paper>
  );
};
