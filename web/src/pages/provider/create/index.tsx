import React, { FormEvent, useState } from 'react';
import { paths, useApi } from '../../../services/api';
import { Close, Content, Row } from './styles';

interface ICreate {
  onSubmit: () => void;
  onCloseSubmit: () => void;
}

export const Create = (props: ICreate) => {
  const { onSubmit, onCloseSubmit } = props;
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
    useApi.post(paths.provider.create, payload);
    onSubmit();
    clearStates();
  };

  return (
    <Content>
      <Close>
        <button onClick={() => onCloseSubmit()}>Fechar</button>
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
          <label htmlFor="razaoSocial">Razão Social</label>
          <input
            name="razaoSocial"
            id="razaoSocial"
            type="text"
            value={razaoSocial}
            onChange={(event) => setRazaoSocial(event.target.value)}
            placeholder="Razão Social"
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
            <option value="Farmácias">Farmácias</option>
            <option value="Lojas de vestuário">Lojas de vestuário</option>
            <option value="Lojas de materiais de construção">Lojas de materiais de construção</option>
            <option value="Lojas de móveis e decoração">Lojas de móveis e decoração</option>
            <option value="Concessionárias de veículos">Concessionárias de veículos</option>
            <option value="Lojas de eletroeletrônicos">Lojas de eletroeletrônicos</option>
            <option value="Lojas de itens esportivos">Lojas de itens esportivos</option>
            <option value="Lojas de materiais de escritório">Lojas de materiais de escritório</option>
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
            <option value="AP">Amapá</option>
            <option value="AM">Amazonas</option>
            <option value="BA">Bahia</option>
            <option value="CE">Ceará</option>
            <option value="DF">Distrito Federal</option>
            <option value="ES">Espirito Santo</option>
            <option value="GO">Goiás</option>
            <option value="MA">Maranhão</option>
            <option value="MS">Mato Grosso do Sul</option>
            <option value="MT">Mato Grosso</option>
            <option value="MG">Minas Gerais</option>
            <option value="PA">Pará</option>
            <option value="PB">Paraíba</option>
            <option value="PR">Paraná</option>
            <option value="PE">Pernambuco</option>
            <option value="PI">Piauí</option>
            <option value="RJ">Rio de Janeiro</option>
            <option value="RN">Rio Grande do Norte</option>
            <option value="RS">Rio Grande do Sul</option>
            <option value="RO">Rondônia</option>
            <option value="RR">Roraima</option>
            <option value="SC">Santa Catarina</option>
            <option value="SP">São Paulo</option>
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
          <button type="submit">Salvar novo fornecedor</button>
        </Row>
      </form>
    </Content>
  );
};
