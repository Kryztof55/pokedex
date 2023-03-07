import axios, { AxiosInstance, AxiosResponse } from "axios";

export const axiosGetGeneration: AxiosInstance = axios.create({
  baseURL: "https://pokeapi.co/api/v2/generation/",
});

export const axiosGetPoker: AxiosInstance = axios.create({
  baseURL: "https://pokeapi.co/api/v2/pokemon/",
});

export const getPokeDetail = async (name: string): Promise<any> => {
  const response: AxiosResponse = await axiosGetPoker.get(name);
  return response.data;
};

export const getGenerationPage = async (generation: string): Promise<any> => {
  const response: AxiosResponse = await axiosGetGeneration.get(generation);
  return response.data;
};
