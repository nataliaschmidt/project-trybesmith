import { Product } from './Product';

export type Order = {
  id: number;
  userId: number;
  productIds?: Product[];
};

export type OrderResultGetAll = {
  id: number;
  userId: number;
  productIds?: number[];
};