import { createReducer, on } from '@ngrx/store';
import { login } from './user.actions';
import { User } from '../models/user.model';
import { loadProducts,setProducts } from './user.actions'; 


export interface UserState {
  user: User | null;
}

export const initialState: UserState = {
  user: null,
};

const _userReducer = createReducer(
  initialState,
  on(login, (state, { user }) => ({
    ...state,
    user,
  }))
);

export function userReducer(state: UserState | undefined, action: any) {
  return _userReducer(state, action);
}

export interface ProductState {
  products: any[];
}

const initialStateProduct: ProductState = {
  products: [],
};

export const productReducer = createReducer(
  initialState,
  on(setProducts, (state, { products }) => ({ ...state, products }))
);
