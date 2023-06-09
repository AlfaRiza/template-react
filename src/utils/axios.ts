import axios, { type AxiosInstance } from 'axios';
import { VITE_API_URL } from '@/env';

const url: string = VITE_API_URL;

export const useAxios = async (): Promise<AxiosInstance> => {
  const instance = axios.create({
    baseURL: url,
    headers: {
      'Content-Type': 'application/json',
    },
  });

  return instance;
};
