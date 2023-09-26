import { ApiException } from "./ApiException";
import { Api } from "./ApiConfig";

export interface ICarro {
  id: number;
  isAntigo: boolean;
  nome: string;
  imgLink: string;
  km: string;
  marca: string;
  valor: string;
  
}

export const  carroBase = {
    id: 0,
  isAntigo: true,
  nome: "baseline",
  imgLink: "baseline",
  km: "baseline",
  marca: "baseline",
  valor: "baseline"
}

const getAll = async (): Promise<ICarro[] | ApiException> => {
  try {
    const { data } = await Api().get('/carros');
    return data;
  } catch (error: any) {
    return new ApiException(error.message || 'Erro ao buscar os registros.');
  }
};

const getById = async (id: number): Promise<ICarro | ApiException> => {
  try {
    const { data } = await Api().get(`/carros/${id}`);
    return data;
  } catch (error: any) {
    return new ApiException(error.message || 'Erro ao consultar o registro.');
  }
};

const create = async (dataToCreate: Omit<ICarro, 'id'>): Promise<ICarro | ApiException> => {
  try {
    const { data } = await Api().post<any>('/carros', dataToCreate);
    return data;
  } catch (error: any) {
    return new ApiException(error.message || 'Erro ao criar o registro.');
  }
};

const updateById = async (id: number, dataToUpdate: ICarro): Promise<ICarro | ApiException> => {
  try {
    const { data } = await Api().put(`/carros/${id}`, dataToUpdate);
    return data;
  } catch (error: any) {
    return new ApiException(error.message || 'Erro ao atualizar o registro.');
  }
};

const deleteById = async (id: number): Promise<undefined | ApiException> => {
  try {
    await Api().delete(`/carros/${id}`);
    return undefined;
  } catch (error: any) {
    return new ApiException(error.message || 'Erro ao apagar o registro.');
  }
};

export const CarrosService = {
  getAll,
  create,
  getById,
  updateById,
  deleteById,
};