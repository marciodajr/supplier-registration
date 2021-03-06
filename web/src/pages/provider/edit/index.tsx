import React, { FormEvent, useEffect, useState } from 'react';
import { paths, useApi } from '../../../services/api';
import { Close, Content, Row } from './styles';

interface ICreate {
  onEdit: () => void;
  onCloseEdit: () => void;
  data: { [key: string]: string };
}

export const Edit = (props: ICreate) => {
  const { onEdit, onCloseEdit, data } = props;
  const [nome, setNome] = useState('');
  const [cnpj, setCnpj] = useState('');
  const [razaoSocial, setRazaoSocial] = useState('');
  const [segmento, setSegmento] = useState('');
  const [logradouro, setLogradouro] = useState('');
  const [numero, setNumero] = useState('');
  const [bairro, setBairro] = useState('');
  const [cep, setCep] = useState('');
  const [cidade, setCidade] = useState('');
  const [uf, setUf] = useState('');
  const [telefone, setTelefone] = useState('');
  const [email, setEmail] = useState('');

  const clearStates = () => {
    setNome('');
    setCnpj('');
    setRazaoSocial('');
    setSegmento('');
    setLogradouro('');
    setNumero('');
    setBairro('');
    setCep('');
    setCidade('');
    setUf('');
    setTelefone('');
    setEmail('');
  };

  const loadStates = () => {
    setNome(data?.nome || '');
    setCnpj(data?.cnpj || '');
    setRazaoSocial(data?.razaoSocial || '');
    setSegmento(data?.segmento || '');
    setLogradouro(data?.logradouro || '');
    setNumero(data?.numero || '');
    setBairro(data?.bairro || '');
    setCep(data?.cep || '');
    setCidade(data?.cidade || '');
    setUf(data?.uf || '');
    setTelefone(data?.telefone || '');
    setEmail(data?.email || '');
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const payload = {
      nome,
      cnpj,
      razaoSocial,
      segmento,
      logradouro,
      numero,
      bairro,
      cep,
      cidade,
      uf,
      telefone,
      email
    };

    useApi.patch(`${paths.provider.update}${data.id}`, payload);
    onEdit();
    clearStates();
  };

  useEffect(() => {
    loadStates();
  }, [data]);

  return (
    <Content>
      <Close>
        <button onClick={() => onCloseEdit()}>Fechar</button>
      </Close>
      <form onSubmit={handleSubmit}>
        <Row>
          <label htmlFor="cnpj">CNPJ</label>
          <input
            id="cnpj"
            name="cnpj"
            type="text"
            value={cnpj}
            onChange={(event) => setCnpj(event.target.value)}
            placeholder="CNPJ"
            required
          />
        </Row>

        <Row>
          <label htmlFor="razaoSocial">Raz??o Social</label>
          <input
            name="razaoSocial"
            id="razaoSocial"
            type="text"
            value={razaoSocial}
            onChange={(event) => setRazaoSocial(event.target.value)}
            placeholder="Raz??o Social"
            required
          />
        </Row>

        <Row>
          <label htmlFor="nome">Nome Fantasia</label>
          <input
            name="nome"
            id="nome"
            type="text"
            value={nome}
            onChange={(event) => setNome(event.target.value)}
            placeholder="Nome Fantasia"
            required
          />
        </Row>

        <Row>
          <label htmlFor="segmento">Segmento</label>
          <select
            name="segmento"
            id="segmento"
            value={segmento}
            onChange={(event) => setSegmento(event.target.value)}
            required
          >
            <option value="">Selecione</option>
            <option value="Supermercados">Supermercados, Hipermercados</option>
            <option value="Farm??cias">Farm??cias</option>
            <option value="Lojas de vestu??rio">Lojas de vestu??rio</option>
            <option value="Lojas de materiais de constru????o">Lojas de materiais de constru????o</option>
            <option value="Lojas de m??veis e decora????o">Lojas de m??veis e decora????o</option>
            <option value="Concession??rias de ve??culos">Concession??rias de ve??culos</option>
            <option value="Lojas de eletroeletr??nicos">Lojas de eletroeletr??nicos</option>
            <option value="Lojas de itens esportivos">Lojas de itens esportivos</option>
            <option value="Lojas de materiais de escrit??rio">Lojas de materiais de escrit??rio</option>
            <option value="Lojas de produtos pet">Lojas de produtos pet</option>
            <option value="Livrarias">Livrarias</option>
          </select>
        </Row>

        <Row>
          <label htmlFor="logradouro">Logradouro</label>
          <input
            name="logradouro"
            id="logradouro"
            type="text"
            value={logradouro}
            onChange={(event) => setLogradouro(event.target.value)}
            placeholder="Logradouro"
          />
        </Row>

        <Row>
          <label htmlFor="numero">Numero</label>
          <input
            name="numero"
            id="numero"
            type="text"
            value={numero}
            onChange={(event) => setNumero(event.target.value)}
            placeholder="Numero"
          />
        </Row>

        <Row>
          <label htmlFor="bairro">Bairro</label>
          <input
            name="bairro"
            id="bairro"
            type="text"
            value={bairro}
            onChange={(event) => setBairro(event.target.value)}
            placeholder="Bairro"
          />
        </Row>

        <Row>
          <label htmlFor="cep">CEP</label>
          <input
            name="cep"
            id="cep"
            type="text"
            value={cep}
            onChange={(event) => setCep(event.target.value)}
            placeholder="CEP"
          />
        </Row>

        <Row>
          <label htmlFor="cidade">Cidade</label>
          <input
            name="cidade"
            id="cidade"
            type="text"
            value={cidade}
            onChange={(event) => setCidade(event.target.value)}
            placeholder="Cidade"
          />
        </Row>

        <Row>
          <label htmlFor="uf">UF</label>
          <select name="uf" id="uf" value={uf} onChange={(event) => setUf(event.target.value)}>
            <option value="">Selecione</option>
            <option value="AC">Acre</option>
            <option value="AL">Alagoas</option>
            <option value="AP">Amap??</option>
            <option value="AM">Amazonas</option>
            <option value="BA">Bahia</option>
            <option value="CE">Cear??</option>
            <option value="DF">Distrito Federal</option>
            <option value="ES">Espirito Santo</option>
            <option value="GO">Goi??s</option>
            <option value="MA">Maranh??o</option>
            <option value="MS">Mato Grosso do Sul</option>
            <option value="MT">Mato Grosso</option>
            <option value="MG">Minas Gerais</option>
            <option value="PA">Par??</option>
            <option value="PB">Para??ba</option>
            <option value="PR">Paran??</option>
            <option value="PE">Pernambuco</option>
            <option value="PI">Piau??</option>
            <option value="RJ">Rio de Janeiro</option>
            <option value="RN">Rio Grande do Norte</option>
            <option value="RS">Rio Grande do Sul</option>
            <option value="RO">Rond??nia</option>
            <option value="RR">Roraima</option>
            <option value="SC">Santa Catarina</option>
            <option value="SP">S??o Paulo</option>
            <option value="SE">Sergipe</option>
            <option value="TO">Tocantins</option>
          </select>
        </Row>

        <Row>
          <label htmlFor="telefone">Telefone</label>
          <input
            name="telefone"
            id="telefone"
            type="text"
            value={telefone}
            onChange={(event) => setTelefone(event.target.value)}
            placeholder="Telefone"
          />
        </Row>

        <Row>
          <label htmlFor="email">E-mail</label>
          <input
            name="email"
            id="email"
            type="text"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            placeholder="E-mail"
          />
        </Row>

        <Row style={{ textAlign: 'center' }}>
          <button type="submit">Salvar altera????es no fornecedor</button>
        </Row>
      </form>
    </Content>
  );
};
