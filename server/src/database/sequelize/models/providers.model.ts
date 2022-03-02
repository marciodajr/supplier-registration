import { DataTypes, Model } from 'sequelize';
import { db } from '../config';
import { ProviderDTO, ProviderInputDTO } from '../../../api/providers/dtos/providers.dto';

class ProvidersModel extends Model<ProviderDTO, ProviderInputDTO> implements ProviderDTO {
  public id!: string;
  public nome!: string;
  public razaoSocial!: string;
  public cnpj!: string;
  public segmento!: string;
  public logradouro!: string;
  public numero!: string;
  public bairro!: string;
  public cep!: string;
  public cidade!: string;
  public uf!: string;
  public telefone!: string;
  public email!: string;
  public readonly create_at!: Date;
  public readonly update_at!: Date;
  // public readonly delete_at!: Date;
}

export default ProvidersModel.init(
  {
    id: {
      type: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true
    },
    nome: {
      type: DataTypes.STRING,
      allowNull: false
    },
    razaoSocial: {
      type: DataTypes.STRING,
      allowNull: false
    },
    cnpj: {
      type: DataTypes.STRING,
      allowNull: false
    },
    segmento: {
      type: DataTypes.STRING,
      allowNull: false
    },
    logradouro: DataTypes.STRING,
    numero: DataTypes.STRING,
    bairro: DataTypes.STRING,
    cep: DataTypes.STRING,
    cidade: DataTypes.STRING,
    uf: DataTypes.STRING,
    telefone: DataTypes.STRING,
    email: DataTypes.STRING
  },
  {
    timestamps: true,
    sequelize: db,
    // paranoid: true, == soft delete
    tableName: 'provider',
    underscored: true
  }
);
