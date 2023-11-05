import { createSelector, createFeatureSelector } from '@ngrx/store';
import { User } from '../models/user.model';
import { UserState } from './user.reducer';
import * as fromProduct from './user.reducer'


export const selectProductState = createFeatureSelector<fromProduct.ProductState>('product');

export const selectProducts = createSelector(selectProductState, (state) => state.products);

export const selectProductById = (productId: number) =>
  createSelector(selectProducts, (products) => products.find((product) => product.id === productId));
;
export const selectUserState = createFeatureSelector<UserState>('user');
export const selectUser = createSelector(
  selectUserState,
  (state) => state.user
);